/**
 * Project Showcase Data
 * Ordered by: Security ML → Industrial ML → AI Product → Cloud ML → Automation
 */

export const showcaseProjects = [
  {
    id: 'sentinel-ai',
    emoji: '🛡️',
    title: 'SentinelAI',
    tagline: 'Network Intrusion Detection System',
    description: 'A production-oriented dual-stage machine learning pipeline for detecting and classifying malicious network traffic with explainability and risk assessment.',
    highlights: [
      'Dual-stage XGBoost architecture',
      '99.66% recall (security-optimized)',
      'SHAP-based explainability',
      'FastAPI + Docker deployment'
    ],
    tech: ['Python', 'XGBoost', 'FastAPI', 'SHAP', 'Scikit-learn', 'Docker'],
    github: 'https://github.com/aditya-kr86/SentinelAI-Network-Intrusion-Detection',
    live: null,
    color: 'emerald'
  },
  {
    id: 'reliability-ai',
    emoji: '🔧',
    title: 'ReliabilityAI',
    tagline: 'Predictive Maintenance Microservice',
    description: 'An industrial-grade predictive maintenance system designed to detect machine failure probability and classify failure types in safety-critical environments.',
    highlights: [
      'Dual-stage ML architecture',
      '0.99 ROC-AUC performance',
      '40+ engineered features',
      'Risk-level mapping system'
    ],
    tech: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn', 'Docker'],
    github: 'https://github.com/aditya-kr86/ReliabilityAI-Predictive-Maintenance',
    live: null,
    color: 'amber'
  },
  {
    id: 'notice-iq',
    emoji: '📲',
    title: 'NoticeIQ',
    tagline: 'WhatsApp-Driven Document Intelligence',
    description: 'An AI-powered document ingestion pipeline that converts academic notices sent via WhatsApp into structured, searchable, publish-ready content.',
    highlights: [
      'WhatsApp Cloud API integration',
      'Hybrid OCR strategy',
      'AI-powered metadata extraction',
      'Async background processing'
    ],
    tech: ['FastAPI', 'Gemini API', 'PyMuPDF', 'Tesseract', 'OpenCV', 'httpx'],
    github: 'https://github.com/aditya-kr86/NoticeIQ',
    live: null,
    inDevelopment: true,
    color: 'violet'
  },
  {
    id: 'pmgsy-predictor',
    emoji: '🏛️',
    title: 'PMGSY ML Predictor',
    tagline: 'Governance-Oriented Cloud ML Application',
    description: 'A cloud-integrated ML web application for classifying PMGSY road connectivity schemes using IBM Watson Machine Learning.',
    highlights: [
      '5-class multiclass prediction',
      'IBM Cloud IAM authentication',
      'Interactive Plotly visualizations',
      '2,189 real project records'
    ],
    tech: ['Python', 'Streamlit', 'IBM Watson ML', 'Plotly', 'Pandas'],
    github: 'https://github.com/aditya-kr86/PMGSY_Multiclass_ML',
    live: null,
    color: 'blue'
  },
  {
    id: 'beulytics',
    emoji: '🎓',
    title: 'BEUlytics',
    tagline: 'Automated Result Fetcher & Analytics',
    description: 'A smart result scraping and analytics system for Bihar Engineering University with CGPA distribution analysis and ranking dashboard.',
    highlights: [
      'Multi-threaded result fetching',
      'CGPA distribution analysis',
      'Multi-format export support',
      'Clean Streamlit dashboard'
    ],
    tech: ['Python', 'Streamlit', 'BeautifulSoup', 'Pandas', 'Plotly'],
    github: 'https://github.com/aditya-kr86/BEUlytics---Result-Fetcher-and-Analyzer',
    live: null,
    color: 'rose'
  }
];
