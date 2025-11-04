# 🌍 Digital Nomad Hub

A modern, responsive web platform for digital nomads built with **Astro** and **Tailwind CSS**. This project showcases contemporary web development practices with a focus on performance, accessibility, and user experience.

![GitHub Docs Inspired Design](https://img.shields.io/badge/Design-GitHub%20Docs%20Inspired-blue)
![Astro](https://img.shields.io/badge/Built%20with-Astro-orange)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-blue)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)

## ✨ Features

- **Modern Tech Stack**: Built with Astro 4.x, Tailwind CSS 3.x, and TypeScript
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Performance Optimized**: Static site generation with minimal JavaScript
- **Accessible**: WCAG compliant with semantic HTML structure
- **Dark Theme**: GitHub Docs inspired dark theme design  
- **Component Architecture**: Reusable Astro components
- **Type Safety**: Full TypeScript support with strict configuration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kulachat/kulachat.github.io.git
cd kulachat.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # Run TypeScript checks
npm run lint         # Lint and check code
npm run format       # Format code with Prettier
npm run clean        # Clean build artifacts
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Features.astro
│   └── Footer.astro
├── layouts/        # Page layouts
│   └── BaseLayout.astro
├── pages/          # File-based routing
│   ├── index.astro
│   └── demo/
├── styles/         # Global styles
│   └── global.css
├── utils/          # Utility functions
│   └── index.ts
└── env.d.ts        # TypeScript declarations
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (from-blue-600 to-purple-600)
- **Background**: Dark grays (gray-800, gray-900)
- **Text**: White with gray variants for secondary text
- **Accents**: Various colors for different sections

### Typography
- **Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono
- **Responsive**: Scales from mobile to desktop

### Components
- Consistent button styles (`btn-primary`, `btn-secondary`)
- Card components with hover effects
- Form inputs with focus states
- Animated elements and transitions

## 🛠️ Configuration

### Tailwind CSS
- Custom color palette
- Dark mode support
- Typography plugin
- Custom animations and utilities

### Astro
- Static site generation
- Path aliases for clean imports
- TypeScript strict mode
- Optimized build configuration

### TypeScript
- Strict configuration
- Path mapping for clean imports
- Astro-specific type definitions

## 📱 Responsive Design

The design follows a **mobile-first approach** with breakpoints:
- **sm**: 640px and up
- **md**: 768px and up  
- **lg**: 1024px and up
- **xl**: 1280px and up

## 🎯 Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with tree-shaking
- **Images**: Optimized formats and lazy loading
- **CSS**: Purged unused styles in production

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from GitHub Docs
- Icons from Heroicons
- Fonts from Google Fonts
- Built with the amazing Astro framework

---

**Made with ❤️ for the digital nomad community** 