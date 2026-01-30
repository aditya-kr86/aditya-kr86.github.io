# Aditya Kumar - Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## 🌐 Live Site

[ankus.dev](https://ankus.dev)

## ✨ Features

- **Dark/Light Mode** - System-aware theme with manual toggle
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Project Showcase** - Auto-rotating featured projects with category filters
- **Interactive Timeline** - Journey and achievements visualization
- **Contact Form** - Email integration via MSG91 API
- **Smooth Animations** - CSS animations with `tailwindcss-animate`

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, tailwindcss-animate
- **Icons**: Lucide React
- **Backend**: Express.js (email API)
- **Email Service**: MSG91

## 📁 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Links.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectShowcase.jsx
│   │   ├── Timeline.jsx
│   │   └── Modals/
│   │       └── ComingSoon.jsx
│   ├── data/
│   │   ├── projectsData.js
│   │   └── timelineData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server.js
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aditya-kr86/ankus-site.git
cd ankus-site

# Install dependencies
npm install
```

### Environment Variables

Create a .env file in the root directory:

```env
VITE_MSG91_AUTHKEY=your_msg91_authkey
VITE_MSG91_DOMAIN=your_domain
```

### Development

```bash
# Run frontend only
npm run dev

# Run backend server only
npm run server

# Run both frontend and backend
npm run dev:all
```

### Build

```bash
npm run build
npm run preview
```

## 📄 Pages

| Page | Description |
|------|-------------|
| Home | Hero section with featured projects showcase |
| About | Certifications, experience, skills, and achievements |
| Projects | All projects with category filters and search |
| Timeline | Career journey and milestones |
| Links | Social media links |
| Contact | Contact form with email integration |

## 🎨 Customization

### Adding Projects

Edit projectsData.js:

```javascript
{
  id: <unique_number>,
  category: 'aiml', // Options: 'aiml', 'azure', 'fullstack', 'tools'
  title: 'Project Name',
  description: 'Brief description...',
  technologies: ['Tech1', 'Tech2'],
  metrics: [{ label: 'Metric', value: 'Value' }],
  github: 'https://github.com/...',
  demo: '#',
  featured: true // Shows on landing page
}
```

### Adding Timeline Events

Edit timelineData.js:

```javascript
{
  date: "Month Year",
  title: "Event Title",
  desc: "Event description...",
  icon: Icon,
  highlight: false,
  link: "#"
}
```

## 📬 Contact

- **Email**: [hi@ankus.dev](mailto:hi@ankus.dev)
- **LinkedIn**: [aditya-kr86](https://linkedin.com/in/aditya-kr86)
- **GitHub**: [aditya-kr86](https://github.com/aditya-kr86)
- **Twitter**: [@aditya_kr86](https://x.com/aditya_kr86)

## 📝 License

This project is open source and available under the MIT License.

---

**Think → Build → Fix → Ship** 🚀