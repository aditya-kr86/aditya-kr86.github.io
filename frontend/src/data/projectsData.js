import { Brain, Cloud, Code2, Database, Lock, Plane, Wrench, Zap } from 'lucide-react';

/**
 * ========================================
 * PROJECT CATEGORIES CONFIGURATION
 * ========================================
 * Add/Edit/Remove categories here
 * Each category needs: name, color (blue/purple/green/orange), icon
 */
export const projectCategories = {
  aiml: {
    name: 'AI/ML Projects',
    color: 'blue',
    icon: Brain
  },
  azure: {
    name: 'Azure Cloud Projects',
    color: 'purple',
    icon: Cloud
  },
  fullstack: {
    name: 'Full Stack Projects',
    color: 'green',
    icon: Code2
  },
  tools: {
    name: 'Impactful Tools',
    color: 'orange',
    icon: Wrench
  }
};

/**
 * ========================================
 * PROJECTS DATA
 * ========================================
 * 
 * HOW TO ADD A NEW PROJECT:
 * Copy this template and fill in your details:
 * 
 * {
 *   id: <unique_number>,           // Must be unique
 *   category: 'aiml',              // Options: 'aiml', 'azure', 'fullstack', 'tools'
 *   title: 'Project Name',
 *   description: 'Brief description of what the project does...',
 *   technologies: ['Tech1', 'Tech2', 'Tech3'],
 *   metrics: [
 *     { label: 'Metric Name', value: 'Value' },
 *     { label: 'Another Metric', value: 'Value' }
 *   ],
 *   github: 'https://github.com/your-repo',
 *   demo: '#',                     // Use '#' if no demo available
 *   featured: true                 // true = shows on landing page, false = only on projects page
 * }
 * 
 * HOW TO REMOVE: Simply delete the project object
 * HOW TO EDIT: Modify the values directly
 * HOW TO FEATURE/UNFEATURE: Change featured to true/false
 */

export const projects = [
  // ==========================================
  // AI/ML Projects
  // ==========================================
  {
    id: 1,
    category: 'aiml',
    title: 'BEULytics',
    description: 'Automated result analyzer for Bihar Engineering University. Revolutionized academic analytics with intelligent data processing.',
    technologies: ['Python', 'Flask', 'Pandas', 'NumPy', 'Data Visualization'],
    metrics: [
      { label: 'Users', value: '500+' },
      { label: 'Time Saved', value: '98%' }
    ],
    github: 'https://github.com/aditya-kr86',
    demo: '#',
    featured: true  // ✅ Shows on landing page
  },
  {
    id: 2,
    category: 'aiml',
    title: 'Intelligent Document Querying',
    description: 'Production-grade RAG system leveraging Amazon Bedrock with Claude 3.5 Sonnet for advanced document understanding and retrieval.',
    technologies: ['AWS Bedrock', 'Claude 3.5', 'Aurora Serverless', 'Terraform', 'Python'],
    metrics: [
      { label: 'Accuracy', value: '95%+' },
      { label: 'Response Time', value: '<2s' }
    ],
    github: 'https://github.com/aditya-kr86',
    demo: '#',
    featured: true  // ✅ Shows on landing page
  },
  
  // ==========================================
  // Azure Cloud Projects
  // ==========================================
  {
    id: 3,
    category: 'azure',
    title: 'Azure AI Document Processor',
    description: 'Enterprise-grade document processing pipeline using Azure AI Services, Form Recognizer, and Cognitive Search for intelligent extraction.',
    technologies: ['Azure AI', 'Form Recognizer', 'Cognitive Search', 'Python', 'Azure Functions'],
    metrics: [
      { label: 'Documents/Day', value: '10K+' },
      { label: 'Accuracy', value: '97%' }
    ],
    github: 'https://github.com/aditya-kr86',
    demo: '#',
    featured: true  // ✅ Shows on landing page
  },
  {
    id: 4,
    category: 'azure',
    title: 'Cloud-Native ML Pipeline',
    description: 'End-to-end machine learning pipeline on Azure ML with automated training, deployment, and monitoring using MLOps best practices.',
    technologies: ['Azure ML', 'MLflow', 'Azure DevOps', 'Docker', 'Kubernetes'],
    metrics: [
      { label: 'Models Deployed', value: '15+' },
      { label: 'Uptime', value: '99.9%' }
    ],
    github: 'https://github.com/aditya-kr86',
    demo: '#',
    featured: true  // ✅ Shows on landing page
  },
  
  // ==========================================
  // Full Stack Projects
  // ==========================================
  {
    id: 5,
    category: 'fullstack',
    title: 'GaganYatra',
    description: 'Dynamic flight booking simulator with real-time seat selection, payment integration, and comprehensive booking management system.',
    technologies: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'JavaScript'],
    metrics: [
      { label: 'Bookings', value: '1000+' },
      { label: 'Features', value: '20+' }
    ],
    github: 'https://github.com/aditya-kr86',
    demo: '#',
    featured: true  // ✅ Shows on landing page
  },
  {
    id: 6,
    category: 'fullstack',
    title: 'Steganography Security System',
    description: 'Advanced data hiding application using AES-256 encryption and LSB pixel manipulation for secure information transmission.',
    technologies: ['Python', 'Cryptography', 'PIL', 'AES-256', 'Tkinter'],
    metrics: [
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Security', value: 'Military-grade' }
    ],
    github: 'https://github.com/aditya-kr86',
    demo: '#',
    featured: true  // ✅ Shows on landing page
  },

  // ==========================================
  // Impactful Tools
  // ==========================================
  {
    id: 7,
    category: 'tools',
    title: 'DevFlow CLI',
    description: 'A powerful command-line toolkit that automates repetitive development tasks, git workflows, and project scaffolding with intelligent templates.',
    technologies: ['Python', 'Click', 'Rich', 'Git', 'YAML'],
    metrics: [
      { label: 'Commands', value: '25+' },
      { label: 'Time Saved', value: '5hrs/week' }
    ],
    github: 'https://github.com/aditya-kr86',
    demo: '#',
    featured: true  // ✅ Shows on landing page
  },
  {
    id: 8,
    category: 'tools',
    title: 'DataSync Pro',
    description: 'Real-time data synchronization tool for seamless database migrations, backup automation, and cross-platform data integrity verification.',
    technologies: ['Python', 'PostgreSQL', 'Redis', 'AsyncIO', 'Docker'],
    metrics: [
      { label: 'Sync Speed', value: '10K/sec' },
      { label: 'Reliability', value: '99.99%' }
    ],
    github: 'https://github.com/aditya-kr86',
    demo: '#',
    featured: true  // ✅ Shows on landing page
  }
];

/**
 * ========================================
 * HELPER FUNCTIONS (Don't modify unless needed)
 * ========================================
 */

// Get projects by category (for category-specific views)
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

// Get all featured projects (for landing page)
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Get featured projects by category
export const getFeaturedByCategory = (category) => {
  return projects.filter(project => project.category === category && project.featured);
};

// Get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Get total project count
export const getTotalProjects = () => projects.length;

// Get featured project count
export const getFeaturedCount = () => projects.filter(p => p.featured).length;