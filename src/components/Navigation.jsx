import React from 'react';
import { Menu, X, ArrowLeft, Sun, Moon } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen, navItems, onNavClick, comingSoonPages = [], isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="relative max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
      <div 
        className="font-bold tracking-tight text-sm md:text-lg cursor-pointer hover:opacity-70 transition-all flex items-center gap-2" 
        onClick={() => currentPage === 'home' ? setCurrentPage('links') : setCurrentPage('home')}
      >
        {currentPage !== 'home' ? (
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium text-sm animate-in fade-in slide-in-from-left-2">
            <ArrowLeft size={16}/> Back Home
          </div>
        ) : (
          <span>Online as <span className="text-zinc-400 dark:text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">@aditya-kr86</span></span>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={20} className="text-zinc-400" /> : <Moon size={20} className="text-zinc-600" />}
        </button>
        
        <button className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {navItems.map((item) => {
          const isComingSoon = comingSoonPages.includes(item.toLowerCase());
          return (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => onNavClick(e, item)} 
              className={`${currentPage === item.toLowerCase() ? 'text-black dark:text-white font-bold' : 'hover:text-black dark:hover:text-white'} transition-all relative group`}
            >
              {item}
              {isComingSoon && (
                <span className="absolute -top-2 -right-3 text-[8px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  soon
                </span>
              )}
            </a>
          );
        })}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-zinc-950 z-40 flex flex-col p-8 pt-24 space-y-6 md:hidden animate-in slide-in-from-right duration-300">
          {navItems.map((item) => {
            const isComingSoon = comingSoonPages.includes(item.toLowerCase());
            return (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-3xl font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-3" 
                onClick={(e) => onNavClick(e, item)}
              >
                {item}
                {isComingSoon && (
                  <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navigation;