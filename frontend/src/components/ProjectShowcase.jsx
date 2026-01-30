import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, TrendingUp, Award } from 'lucide-react';
import { projects, projectCategories } from '../data/projectsData';

const ProjectShowcase = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('aiml');
  const [isHovering, setIsHovering] = useState(false);
  const [isCardHovering, setIsCardHovering] = useState(false);
  const categoryRef = useRef(null);

  // Auto-rotate categories every 5 seconds
  useEffect(() => {
    if (isHovering || isCardHovering) return;

    const categories = Object.keys(projectCategories);
    const intervalId = setInterval(() => {
      setActiveCategory(prev => {
        const currentIndex = categories.indexOf(prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isHovering, isCardHovering]);

  const categoryColors = {
    blue: {
      badge: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900',
      accent: 'text-blue-600 dark:text-blue-400',
      hover: 'hover:border-blue-300 dark:hover:border-blue-800'
    },
    purple: {
      badge: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900',
      accent: 'text-purple-600 dark:text-purple-400',
      hover: 'hover:border-purple-300 dark:hover:border-purple-800'
    },
    green: {
      badge: 'bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-900',
      accent: 'text-green-600 dark:text-green-400',
      hover: 'hover:border-green-300 dark:hover:border-green-800'
    },
    orange: {
      badge: 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900',
      accent: 'text-orange-600 dark:text-orange-400',
      hover: 'hover:border-orange-300 dark:hover:border-orange-800'
    }
  };

  const filteredProjects = projects.filter(
    project => project.category === activeCategory && project.featured
  );

  return (
    <section className="w-full py-16 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '400ms' }}>
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="flex items-center justify-center gap-2">
          <Award className="text-zinc-400 dark:text-zinc-500" size={20} />
          <p className="text-sm font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-500 uppercase">Featured Work</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Projects That <span className="text-zinc-500 dark:text-zinc-400">Make Impact</span>
        </h2>
      </div>

      {/* Category Tabs */}
      <div 
        ref={categoryRef}
        className="flex flex-wrap justify-center gap-3 mb-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setTimeout(() => setIsHovering(false), 3000)}
      >
        {Object.entries(projectCategories).map(([key, category]) => {
          const Icon = category.icon;
          const isActive = activeCategory === key;
          const colors = categoryColors[category.color];
          
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm
                transition-all duration-300 border
                ${isActive 
                  ? `${colors.badge} shadow-sm scale-105` 
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }
              `}
            >
              <Icon size={16} />
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
              style={{ animationDelay: `${idx * 100}ms` }}
              onMouseEnter={() => setIsCardHovering(true)}
              onMouseLeave={() => setIsCardHovering(false)}
              onTouchStart={() => setIsCardHovering(true)}
              onTouchEnd={() => setTimeout(() => setIsCardHovering(false), 3000)}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`
                  inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border
                  ${categoryColor.badge}
                `}>
                  <CategoryIcon size={12} />
                  {projectCategories[project.category].name}
                </span>
                
                {/* Action Links */}
                <div className="flex gap-2 transition-opacity duration-300">
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
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
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
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-md border border-zinc-100 dark:border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2.5 py-1 text-zinc-400 dark:text-zinc-500 text-xs font-medium">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
            </div>
          );
        })}
      </div>

      {/* View All Projects CTA */}
      <div className="text-center mt-12">
        <button
          onClick={() => setCurrentPage('projects')}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
        >
          View All Projects
          <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ProjectShowcase;