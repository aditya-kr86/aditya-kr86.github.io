import { Github, Linkedin, Mail, ArrowUpRight, GithubIcon, XIcon } from 'lucide-react';
import ProjectShowcase from './ProjectShowcase';

const Hero = ({ setCurrentPage, setComingSoon }) => {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-10 md:pt-20 pb-32">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-16">
      <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 text-center md:text-left">
        <div className="flex gap-4 justify-center md:justify-start">
          {[
            { Icon: GithubIcon, href: "https://github.com/aditya-kr86" },
            { Icon: Linkedin, href: "https://linkedin.com/in/aditya-kr86" },
            { Icon: XIcon, href: "https://x.com/aditya_kr86" }
          ].map(({ Icon, href }, idx) => (
            <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group">
              <Icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-500 uppercase">Think → Build → Fix → Ship</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">Aditya Kumar</h1>
          </div>
          
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            Python & AI Intern <span className="text-zinc-900 dark:text-zinc-100 font-medium">@Infosys Springboard</span> | Data Science & AI | 2× Microsoft & 2× GitHub Certified | CSE '27
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <button onClick={() => setCurrentPage('contact')} className="flex items-center gap-2 px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95 transition-all font-medium">
            <Mail size={18} /> Collaborate
          </button>
          <button onClick={() => setCurrentPage('about')} className="flex items-center gap-2 px-8 py-3 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 active:scale-95 transition-all font-medium text-zinc-600 dark:text-zinc-400">
            About Me <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <div className="relative group animate-in fade-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-1000">
        <div className="absolute -inset-4 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] -z-10 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors duration-500" />
        <div className="w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-zinc-950/50">
          <img 
            src="/profile-pic.jpeg" 
            alt="Aditya Kumar" 
            className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100" 
          />
        </div>
        <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white dark:bg-zinc-950 p-3 md:p-4 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-800 flex items-center gap-2 md:gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Available</span>
        </div>
      </div>
      </div>

      {/* Project Showcase Section */}
      <ProjectShowcase setCurrentPage={setCurrentPage} />
    </main>
  );
};

export default Hero;