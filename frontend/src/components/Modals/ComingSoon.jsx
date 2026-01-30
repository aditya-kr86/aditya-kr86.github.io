import React from 'react';
import { Rocket } from 'lucide-react';

const ComingSoon = ({ title, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-zinc-900/20 dark:bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center space-y-4 animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-2">
          <Rocket className="text-zinc-400 dark:text-zinc-500" size={32} />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
          I'm currently crafting this experience for you. Stay tuned!
        </p>
        <button 
          onClick={onClose} 
          className="w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;