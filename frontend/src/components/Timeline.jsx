import React from 'react';
import { Calendar, ArrowUpRight, Zap } from 'lucide-react';
import { timelineItems } from '../data/timelineData';

const Timeline = ({ setCurrentPage }) => {
  return (
    <main className="max-w-4xl mx-auto px-8 pt-10 pb-32 animate-in fade-in duration-700">
      <div className="space-y-12 ml-4 md:ml-8 border-l border-zinc-100 dark:border-zinc-900">
        {timelineItems.map((item, idx) => (
          <div 
            key={idx} 
            className="relative pl-8 group animate-in fade-in slide-in-from-bottom-4 duration-500" 
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className={`absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full border-2 bg-white dark:bg-zinc-950 transition-all duration-500 group-hover:scale-150 ${item.highlight ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100' : 'border-zinc-300 dark:border-zinc-700'}`}></div>
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                  <Calendar size={12} /> {item.date}
                </span>
                <a href={item.link} className="flex items-center gap-1 text-xs font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Open Details <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="space-y-2">
                <h3 className={`text-xl font-semibold flex items-center gap-2 ${item.highlight ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-800 dark:text-zinc-200'}`}>
                  {item.title}
                  {item.highlight && <Zap size={16} className="text-yellow-500 fill-yellow-500" />}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-24 text-center">
        <button 
          onClick={() => setCurrentPage('contact')} 
          className="px-10 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-zinc-200 dark:shadow-zinc-950"
        >
          Let's Build the Future
        </button>
      </div>
    </main>
  );
};

export default Timeline;