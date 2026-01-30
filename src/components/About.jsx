import React from 'react';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Cloud, 
  Trophy,
  ExternalLink,
  CheckCircle2,
  Zap,
  Target,
  TrendingUp,
  Brain,
  Database,
  Terminal,
  Download
} from 'lucide-react';

const About = () => {
  // Custom brand icons
  const MicrosoftIcon = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 23 23" className={className}>
      <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
      <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
      <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
      <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
    </svg>
  );

  const GitHubIcon = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const McKinseyIcon = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );

  const certifications = [
    { name: 'Microsoft DP-100', title: 'Data Scientist Associate', color: 'blue', valid: 'Jun, 2026', verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/Aditya-kr86/E5D4428B92052AA?sharingId=F34FE7159F5A86F4', icon: 'microsoft' },
    { name: 'Microsoft AI-102', title: 'AI Engineer Associate', color: 'purple', valid: 'Jun, 2026', verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/Aditya-kr86/2729FFACB6978EF?sharingId=F34FE7159F5A86F4', icon: 'microsoft' },
    { name: 'GitHub Foundations', title: 'Certified Developer', color: 'green', valid: 'Jun, 2028', verifyUrl: 'https://www.credly.com/badges/0dced474-3c2f-41bb-a611-e7bc24b2d59f/public_url', icon: 'github' },
    { name: 'GitHub Copilot Expert', title: 'Certified Copilot Developer', color: 'green', valid: 'Dec, 2027', verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/Aditya-kr86/AC6F23A02DB9AA81?sharingId=F34FE7159F5A86F4', icon: 'github' }
  ];

  const getCertIcon = (iconType) => {
    switch(iconType) {
      case 'microsoft': return MicrosoftIcon;
      case 'github': return GitHubIcon;
      case 'mckinsey': return McKinseyIcon;
      default: return Award;
    }
  };

  const skills = [
    { category: 'Languages', items: ['Python', 'C/C++', 'SQL', 'Bash'], icon: Code2 },
    { category: 'Machine Learning', items: ['Pandas', 'NumPy', 'Scikit-learn', 'Statistics', 'EDA'], icon: Brain },
    { category: 'AI / NLP', items: ['TF-IDF', 'Deep Learning', 'GenAI', 'RAG', 'LLMs'], icon: Zap },
    { category: 'Cloud', items: ['AWS', 'Azure', 'IBM Cloud', 'Bedrock'], icon: Cloud },
    { category: 'Tools', items: ['Git', 'Docker', 'Streamlit', 'VS Code'], icon: Terminal },
    { category: 'Databases', items: ['PostgreSQL', 'SQLite', 'MongoDB', 'pgvector'], icon: Database }
  ];

  const experiences = [
    {
      role: 'Python & AI Intern',
      company: 'Infosys Springboard',
      period: 'Nov 2025 - Present',
      current: true,
      highlights: [
        'Building dynamic flight booking system using Agile methodology',
        'Integrating ML for intelligent pricing & booking recommendations',
        'Collaborating with mentors, iterating based on feedback'
      ]
    },
    {
      role: 'AI & Cloud Intern',
      company: 'IBM SkillsBuild × AICTE',
      period: 'Jul - Aug 2025',
      current: false,
      highlights: [
        'Built scalable ML models using IBM AutoAI and watsonx.ai',
        'Deployed cloud-based inference services for real-time predictions',
        'Analyzed datasets and communicated results effectively'
      ]
    }
  ];

  const achievements = [
    { icon: Trophy, text: 'Tech Lead (Core Member), AWS Cloud Club - GCE Gaya', highlight: true },
    { icon: Target, text: 'Top 3% globally - Selected from 50,000 applicants for AWS-sponsored Nanodegree', highlight: true },
    { icon: TrendingUp, text: '370+ problems solved on LeetCode (Rating: 1652)', highlight: false }
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 pt-10 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-green-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-green-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl">
              <img 
                src="/profile-pic.jpeg" 
                alt="Aditya Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Open to Work
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Aditya Kumar</h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
                Data Science & AI Engineer
              </p>
            </div>
            
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
              Microsoft-certified professional building intelligent, data-driven solutions. 
              Passionate about transforming complex problems into elegant ML/AI applications 
              that create real-world impact.
            </p>

            {/* Scholar & Alumni Badges */}
            <div className="flex flex-col gap-2 pt-3">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-2 border-orange-200 dark:border-orange-900/50 rounded-xl w-fit mx-auto md:mx-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span className="text-sm font-bold text-orange-900 dark:text-orange-100">AWS Machine Learning Scholar</span>
                <span className="px-2 py-0.5 bg-orange-200 dark:bg-orange-900/50 text-orange-900 dark:text-orange-200 rounded-full text-xs font-bold">Udacity</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-2 border-emerald-200 dark:border-emerald-900/50 rounded-xl w-fit mx-auto md:mx-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-6 h-6 bg-emerald-600 rounded-full">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">McKinsey Forward Alumni</span>
                <span className="px-2 py-0.5 bg-emerald-200 dark:bg-emerald-900/50 text-emerald-900 dark:text-emerald-200 rounded-full text-xs font-bold">2025</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              {[
                { label: 'Certifications', value: '4+', icon: Award },
                { label: 'Projects', value: '10+', icon: Code2 },
                { label: 'LeetCode', value: '370+', icon: Target }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <stat.icon size={16} className="text-zinc-500 dark:text-zinc-400" />
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{stat.value}</span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
              <button 
                disabled
                title="Coming Soon - Resume download will be available shortly"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-400 dark:bg-zinc-600 text-white dark:text-zinc-300 rounded-xl font-medium cursor-not-allowed opacity-60"
              >
                <Download size={18} /> Download Resume
                <span className="text-xs bg-yellow-500 text-yellow-900 px-2 py-0.5 rounded-full ml-1">Soon</span>
              </button>
              <a 
                href="https://linkedin.com/in/aditya-kr86" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
              >
                Connect on LinkedIn <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - Microsoft Badge Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
            <Award className="text-blue-600 dark:text-blue-400" size={20} />
          </div>
          <h2 className="text-2xl font-bold">Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <a 
              key={idx}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative p-5 rounded-2xl border overflow-hidden group
                bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800
                hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300
                cursor-pointer
              `}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${cert.color}-500/10 rounded-full blur-2xl -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500`} />
              <div className="relative flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{cert.name}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">{cert.title}</h3>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">Valid through {cert.valid}</p>
                  
                  {/* Verify Link */}
                  <div className="flex items-center gap-1 mt-3 text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                    <ExternalLink size={14} />
                    <span>Verify Credential</span>
                  </div>
                </div>
                <div className={`p-2 rounded-lg bg-${cert.color}-50 dark:bg-${cert.color}-950/30`}>
                  {React.createElement(getCertIcon(cert.icon), { size: 20, className: `text-${cert.color}-600 dark:text-${cert.color}-400` })}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
            <Briefcase className="text-purple-600 dark:text-purple-400" size={20} />
          </div>
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className={`
                relative p-6 rounded-2xl border
                bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800
                ${exp.current ? 'ring-2 ring-green-500/20' : ''}
              `}
            >
              {exp.current && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 rounded-full text-xs font-bold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Current
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">{exp.company}</p>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                    <Zap size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-50 dark:bg-green-950/30 rounded-lg">
            <GraduationCap className="text-green-600 dark:text-green-400" size={20} />
          </div>
          <h2 className="text-2xl font-bold">Education</h2>
        </div>

        <div className="p-6 rounded-2xl border bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">B.Tech in Computer Science</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">Gaya College of Engineering, Bihar</p>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">2023 - 2027</p>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border border-green-200 dark:border-green-900">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">8.38</p>
                <p className="text-xs font-semibold text-green-600/70 dark:text-green-400/70">CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
            <Code2 className="text-orange-600 dark:text-orange-400" size={20} />
          </div>
          <h2 className="text-2xl font-bold">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl border bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <skill.icon size={18} className="text-zinc-500 dark:text-zinc-400" />
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium rounded-lg border border-zinc-100 dark:border-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
            <Trophy className="text-yellow-600 dark:text-yellow-400" size={20} />
          </div>
          <h2 className="text-2xl font-bold">Achievements</h2>
        </div>

        <div className="space-y-3">
          {achievements.map((item, idx) => (
            <div 
              key={idx}
              className={`
                flex items-center gap-4 p-5 rounded-2xl border transition-all
                ${item.highlight 
                  ? 'bg-gradient-to-r from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-900/50' 
                  : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                }
              `}
            >
              <div className={`p-2 rounded-lg ${item.highlight ? 'bg-yellow-100 dark:bg-yellow-900/30' : 'bg-zinc-100 dark:bg-zinc-800'}`}>
                <item.icon size={20} className={item.highlight ? 'text-yellow-600 dark:text-yellow-400' : 'text-zinc-500 dark:text-zinc-400'} />
              </div>
              <p className={`font-medium ${item.highlight ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center p-10 rounded-3xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-3">Let's Build Something Amazing</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6 max-w-lg mx-auto">
          I'm actively looking for opportunities in Data Science, Machine Learning, and AI Engineering. 
          Let's connect and create impact together!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="mailto:hi@ankus.dev"
            className="flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-lg"
          >
            Hire Me Now
          </a>
          <a 
            href="https://github.com/aditya-kr86"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-8 py-4 border border-zinc-300 dark:border-zinc-700 rounded-xl font-medium hover:bg-white dark:hover:bg-zinc-900 transition-all"
          >
            View GitHub <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
