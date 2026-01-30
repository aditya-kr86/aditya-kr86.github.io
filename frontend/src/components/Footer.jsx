import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto px-8 py-12 border-t border-zinc-100 dark:border-zinc-900 mt-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-xs text-zinc-400 dark:text-zinc-600 font-medium">© 2026 Aditya Kumar — Think → Build → Fix → Ship</p>
      <div className="flex gap-6 items-center">
          <a href="mailto:hi@ankus.dev" className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2">
            <Mail size={14} /> hi@ankus.dev
          </a>
          <div className="h-4 w-px bg-zinc-100 dark:bg-zinc-900 hidden md:block" />
          <a href="https://linkedin.com/in/aditya-kr86" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} className="text-zinc-300 dark:text-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors" />
          </a>
      </div>
    </footer>
  );
};

export default Footer;