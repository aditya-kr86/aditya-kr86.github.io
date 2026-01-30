import React, { useState } from 'react';
import { Github, ExternalLink, TrendingUp, Award, Filter, Search } from 'lucide-react';
import { projects, projectCategories } from '../data/projectsData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryColors = {
    blue: {
      badge: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900',
      accent: 'text-blue-600 dark:text-blue-400',
      hover: 'hover:border-blue-300 dark:hover:border-blue-800',
      bg: 'from-blue-500/10 to-blue-600/5'
    },
    purple: {
      badge: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900',
      accent: 'text-purple-600 dark:text-purple-400',
      hover: 'hover:border-purple-300 dark:hover:border-purple-800',
      bg: 'from-purple-500/10 to-purple-600/5'
    },
    green: {
      badge: 'bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-900',
      accent: 'text-green-600 dark:text-green-400',
      hover: 'hover:border-green-300 dark:hover:border-green-800',
      bg: 'from-green-500/10 to-green-600/5'
    },
    orange: {
      badge: 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900',
      accent: 'text-orange-600 dark:text-orange-400',
      hover: 'hover:border-orange-300 dark:hover:border-orange-800',
      bg: 'from-orange-500/10 to-orange-600/5'
    }
  };

  // Filter projects by category and search
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-6xl mx-auto px-6 pt-10 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="flex items-center justify-center gap-2">
          <Award className="text-zinc-400 dark:text-zinc-500" size={20} />
          <p className="text-sm font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-500 uppercase">Portfolio</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          My <span className="text-zinc-500 dark:text-zinc-400">Projects</span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
          Explore my work across AI/ML, Cloud Computing, and Full Stack Development
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search projects, technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-800 outline-none transition-all"
          />
        </div>

        {/* Filter Icon (Mobile) */}
        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 md:hidden">
          <Filter size={18} />
          <span className="text-sm font-medium">Filter by category</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {/* All Category */}
        <button
          onClick={() => setActiveCategory('all')}
          className={`
            flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm
            transition-all duration-300 border
            ${activeCategory === 'all'
              ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-sm scale-105'
              : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800'
            }
          `}
        >
          All Projects
          <span className={`px-2 py-0.5 rounded-full text-xs ${activeCategory === 'all' ? 'bg-white/20 dark:bg-zinc-900/20' : 'bg-zinc-100 dark:bg-zinc-800'}`}>
            {projects.length}
          </span>
        </button>

        {Object.entries(projectCategories).map(([key, category]) => {
          const Icon = category.icon;
          const isActive = activeCategory === key;
          const colors = categoryColors[category.color];
          const count = projects.filter(p => p.category === key).length;
          
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm
                transition-all duration-300 border
                ${isActive 
                  ? `${colors.badge} shadow-sm scale-105` 
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                }
              `}
            >
              <Icon size={16} />
              {category.name}
              <span className={`px-2 py-0.5 rounded-full text-xs ${isActive ? 'bg-black/10 dark:bg-white/10' : 'bg-zinc-100 dark:bg-zinc-800'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Showing <span className="font-semibold text-zinc-900 dark:text-zinc-100">{filteredProjects.length}</span> projects
          {searchQuery && <span> for "{searchQuery}"</span>}
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const categoryColor = categoryColors[projectCategories[project.category].color];
            const CategoryIcon = projectCategories[project.category].icon;
            
            return (
              <div
                key={project.id}
                className={`
                  group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6
                  hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-950/50 hover:-translate-y-1
                  transition-all duration-500 ${categoryColor.hover}
                  animate-in fade-in slide-in-from-bottom-4
                `}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative">
                  {/* Category Badge & Links */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`
                      inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border
                      ${categoryColor.badge}
                    `}>
                      <CategoryIcon size={12} />
                      {projectCategories[project.category].name.replace(' Projects', '')}
                    </span>
                    
                    {/* Action Links */}
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={16} className="text-zinc-600 dark:text-zinc-400" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} className="text-zinc-600 dark:text-zinc-400" />
                      </a>
                    </div>
                  </div>

                  {/* Project Title & Description */}
                  <div className="space-y-3 mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-4 mb-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp size={14} className={categoryColor.accent} />
                        <div>
                          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">{metric.label}</p>
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{metric.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-md border border-zinc-100 dark:border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 text-zinc-400 dark:text-zinc-500 text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={32} className="text-zinc-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-zinc-500 dark:text-zinc-400">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="mt-4 px-6 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: 'Total Projects', value: projects.length, icon: Award },
          { label: 'AI/ML', value: projects.filter(p => p.category === 'aiml').length, color: 'blue' },
          { label: 'Cloud', value: projects.filter(p => p.category === 'azure').length, color: 'purple' },
          { label: 'Full Stack', value: projects.filter(p => p.category === 'fullstack').length, color: 'green' },
          { label: 'Tools', value: projects.filter(p => p.category === 'tools').length, color: 'orange' }
        ].map((stat, idx) => (
          <div
            key={idx}
            className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center"
          >
            <p className={`text-3xl font-bold ${stat.color ? `text-${stat.color}-600 dark:text-${stat.color}-400` : 'text-zinc-900 dark:text-zinc-100'}`}>
              {stat.value}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
