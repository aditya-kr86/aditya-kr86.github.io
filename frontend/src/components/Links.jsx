import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink, Instagram } from 'lucide-react';

const Links = () => {
  const links = [
    { label: 'GitHub Profile', icon: Github, href: 'https://github.com/aditya-kr86' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/aditya-kr86' },
    { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/aditya.kr86' },
    { label: 'Twitter', icon: Twitter, href: 'https://x.com/aditya_kr86' }
  ];

  return (
    <main className="max-w-2xl mx-auto px-8 pt-10 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-6 mb-12">
        <div className="w-24 h-24 rounded-full border-4 border-zinc-50 dark:border-zinc-900 mx-auto overflow-hidden shadow-lg">
          <img src="/profile-pic.jpeg" alt="Aditya Kumar" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Aditya Kumar</h2>
          <p className="text-zinc-500 dark:text-zinc-400">@aditya-kr86</p>
        </div>
      </div>
      <div className="space-y-4">
        {links.map((link, idx) => (
          <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md transition-all group">
            <div className="flex items-center gap-4">
              <link.icon size={20} className="text-zinc-600 dark:text-zinc-400" />
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{link.label}</span>
            </div>
            <ExternalLink size={16} className="text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
          </a>
        ))}
      </div>
    </main>
  );
};

export default Links;