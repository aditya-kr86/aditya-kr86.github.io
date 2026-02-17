import React, { useState } from 'react';
import { Github, ExternalLink, Award, Search, Sparkles } from 'lucide-react';
import { showcaseProjects } from '../data/showcaseProjects';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter projects by search
  const filteredProjects = showcaseProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="flex items-center justify-center gap-2">
          <Award className="text-zinc-400 dark:text-zinc-500" size={18} />
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-500 uppercase">Portfolio</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          All <span className="text-zinc-500 dark:text-zinc-400">Projects</span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto text-sm">
          Production-grade ML systems, AI applications, and automation tools
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-800 outline-none transition-all"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-center mb-6">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Showing <span className="font-semibold text-zinc-900 dark:text-zinc-100">{filteredProjects.length}</span> projects
          {searchQuery && <span> for "{searchQuery}"</span>}
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {filteredProjects.map((project, idx) => {
            const colors = colorClasses[project.color];
            
            return (
              <div
                key={project.id}
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
                style={{ animationDelay: `${idx * 80}ms` }}
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
                  {project.highlights.slice(0, 3).map((highlight, hidx) => (
                    <span
                      key={hidx}
                      className={`px-2 py-0.5 text-[10px] font-medium rounded-md ${colors.badge}`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  {project.tech.slice(0, 4).map((tech, tidx) => (
                    <span
                      key={tidx}
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
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-zinc-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No projects found</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Try a different search term</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-4 px-4 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="mt-12 flex justify-center gap-8 text-center">
        <div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{showcaseProjects.length}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{showcaseProjects.filter(p => p.color === 'emerald' || p.color === 'amber').length}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">ML Systems</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">{showcaseProjects.filter(p => p.inDevelopment).length}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">In Development</p>
        </div>
      </div>
    </main>
  );
};

export default Projects;
