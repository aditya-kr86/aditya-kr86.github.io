import { Github, Linkedin, ExternalLink, GithubIcon, XIcon, Mail, Sparkles } from 'lucide-react';
import { showcaseProjects } from '../data/showcaseProjects';

const ProjectCard = ({ project, index }) => {
  const colorClasses = {
    emerald: {
      bg: 'group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/20',
      border: 'group-hover:border-emerald-200 dark:group-hover:border-emerald-800',
      badge: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400',
      emoji: 'group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50'
    },
    amber: {
      bg: 'group-hover:bg-amber-50 dark:group-hover:bg-amber-950/20',
      border: 'group-hover:border-amber-200 dark:group-hover:border-amber-800',
      badge: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400',
      emoji: 'group-hover:bg-amber-100 dark:group-hover:bg-amber-900/50'
    },
    violet: {
      bg: 'group-hover:bg-violet-50 dark:group-hover:bg-violet-950/20',
      border: 'group-hover:border-violet-200 dark:group-hover:border-violet-800',
      badge: 'bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400',
      emoji: 'group-hover:bg-violet-100 dark:group-hover:bg-violet-900/50'
    },
    blue: {
      bg: 'group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20',
      border: 'group-hover:border-blue-200 dark:group-hover:border-blue-800',
      badge: 'bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400',
      emoji: 'group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50'
    },
    rose: {
      bg: 'group-hover:bg-rose-50 dark:group-hover:bg-rose-950/20',
      border: 'group-hover:border-rose-200 dark:group-hover:border-rose-800',
      badge: 'bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400',
      emoji: 'group-hover:bg-rose-100 dark:group-hover:bg-rose-900/50'
    }
  };

  const colors = colorClasses[project.color];

  return (
    <div
      className={`
        group relative bg-white dark:bg-zinc-900/50 
        border border-zinc-200 dark:border-zinc-800 
        rounded-2xl p-5 md:p-6
        hover:shadow-lg dark:hover:shadow-zinc-950/50 
        hover:-translate-y-0.5
        transition-all duration-300 ease-out
        ${colors.bg} ${colors.border}
        animate-in fade-in slide-in-from-bottom-4
      `}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span className={`text-2xl p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 ${colors.emoji} transition-colors`}>
            {project.emoji}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {project.tagline}
            </p>
          </div>
        </div>
        
        {project.inDevelopment && (
          <span className="flex items-center gap-1 px-2 py-1 bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 text-[10px] font-semibold rounded-full whitespace-nowrap">
            <Sparkles size={10} />
            In Dev
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.highlights.slice(0, 3).map((highlight, idx) => (
          <span
            key={idx}
            className={`px-2 py-0.5 text-[10px] font-medium rounded-md ${colors.badge}`}
          >
            {highlight}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5 pb-4 border-b border-zinc-100 dark:border-zinc-800">
        {project.tech.slice(0, 4).map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 text-[10px] font-medium text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 rounded"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-[10px] text-zinc-400 dark:text-zinc-500 px-1">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Action Links */}
      <div className="flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 
            bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 
            text-xs font-medium rounded-lg
            hover:bg-zinc-800 dark:hover:bg-zinc-200 
            active:scale-[0.98] transition-all"
        >
          <Github size={14} />
          GitHub
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 
              border border-zinc-200 dark:border-zinc-700 
              text-zinc-700 dark:text-zinc-300
              text-xs font-medium rounded-lg
              hover:bg-zinc-50 dark:hover:bg-zinc-800 
              active:scale-[0.98] transition-all"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        ) : (
          <span className="flex-1 flex items-center justify-center gap-2 px-3 py-2 
            border border-zinc-100 dark:border-zinc-800 
            text-zinc-400 dark:text-zinc-600
            text-xs font-medium rounded-lg cursor-not-allowed">
            <ExternalLink size={14} />
            Coming Soon
          </span>
        )}
      </div>
    </div>
  );
};

const Hero = ({ setCurrentPage }) => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-20">
      {/* Minimal Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 md:mb-16 animate-in fade-in duration-500">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-sm">
            <img 
              src="/profile-pic.jpeg" 
              alt="Aditya Kumar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Aditya Kumar
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              Python & AI • Data Science • CSE '27
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {[
            { Icon: GithubIcon, href: "https://github.com/aditya-kr86", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com/in/aditya-kr86", label: "LinkedIn" },
            { Icon: XIcon, href: "https://x.com/aditya_kr86", label: "X" }
          ].map(({ Icon, href, label }) => (
            <a 
              key={label}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 border border-zinc-200 dark:border-zinc-800 rounded-lg 
                hover:bg-zinc-50 dark:hover:bg-zinc-900 
                hover:border-zinc-300 dark:hover:border-zinc-700 
                transition-all group"
              title={label}
            >
              <Icon size={16} strokeWidth={1.5} className="text-zinc-600 dark:text-zinc-400 group-hover:scale-110 transition-transform" />
            </a>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="flex items-center gap-1.5 px-4 py-2.5 
              bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 
              text-sm font-medium rounded-lg
              hover:bg-zinc-800 dark:hover:bg-zinc-200 
              active:scale-95 transition-all ml-1"
          >
            <Mail size={14} />
            <span className="hidden sm:inline">Contact</span>
          </button>
        </div>
      </header>

      {/* Section Title */}
      <div className="text-center mb-10 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '100ms' }}>
        <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight mb-3">
          Projects
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto text-sm md:text-base">
          Production-grade ML systems, AI applications, and automation tools built for real-world impact.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {showcaseProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12 md:mt-16 animate-in fade-in duration-500" style={{ animationDelay: '500ms' }}>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3">
          Explore more on GitHub or reach out to collaborate
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="https://github.com/aditya-kr86"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 
              border border-zinc-200 dark:border-zinc-800 
              text-zinc-600 dark:text-zinc-400
              text-sm font-medium rounded-lg
              hover:bg-zinc-50 dark:hover:bg-zinc-900 
              active:scale-95 transition-all"
          >
            <Github size={16} />
            View All Projects
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;