import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Links from './components/Links';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ComingSoon from './components/Modals/ComingSoon';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [comingSoon, setComingSoon] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = ['Home', 'About', 'Blogs', 'Projects', 'Timeline', 'Links', 'Contact'];

  // Pages that are ready vs coming soon
  const readyPages = ['home', 'about', 'projects', 'timeline', 'links', 'contact'];
  const comingSoonPages = [];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const pageName = item.toLowerCase();
    
    // Handle external blog link
    if (pageName === 'blogs') {
      window.open('https://blog.ankus.dev', '_blank');
      return;
    }
    
    if (comingSoonPages.includes(pageName)) {
      setComingSoon(item);
    } else {
      setCurrentPage(pageName);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'timeline':
        return <Timeline setCurrentPage={setCurrentPage} />;
      case 'links':
        return <Links />;
      case 'contact':
        return <Contact formStatus={formStatus} setFormStatus={setFormStatus} />;
      default:
        return <Hero setCurrentPage={setCurrentPage} setComingSoon={setComingSoon} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased transition-colors duration-300">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={navItems}
        onNavClick={handleNavClick}
        comingSoonPages={comingSoonPages}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      {renderPage()}
      
      <Footer />
      
      {comingSoon && (
        <ComingSoon 
          title={comingSoon} 
          onClose={() => setComingSoon(null)} 
        />
      )}
    </div>
  );
}

export default App;