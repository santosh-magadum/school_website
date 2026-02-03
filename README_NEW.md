# Brilliant School Sankeshwar - Website

A professional, elegant static school website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

✨ **Modern Design** - Professional, elegant, and responsive layout inspired by leading educational institutions
🎓 **Comprehensive Sections** - Hero, About, School Sections, News & Events, Gallery, Testimonials, and Footer
📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
⚡ **Fast Performance** - Built with Vite for rapid development and optimized production builds
🎨 **Beautiful UI** - Tailwind CSS styling with smooth animations and transitions
🔗 **Smooth Navigation** - Sticky header with smooth scrolling between sections

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           - Navigation and branding
│   ├── HeroSection.tsx       - Main banner with admission info
│   ├── AboutSection.tsx      - School information and stats
│   ├── SchoolSections.tsx    - Primary, Middle, Secondary details
│   ├── NewsEvents.tsx        - Latest news and announcements
│   ├── Gallery.tsx           - Photo gallery showcase
│   ├── Testimonials.tsx      - Parent testimonials
│   └── Footer.tsx            - Contact info and links
├── App.tsx                   - Main app component
├── App.css                   - Custom animations and styles
├── index.css                 - Global styles with Tailwind
└── main.tsx                  - Entry point
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Preview production build
npm run preview
```

## Development

The application runs on `http://localhost:5173` (or next available port).

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build production-ready application
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Sections Overview

### Header
- Sticky navigation bar
- Responsive mobile menu
- School branding
- Admission button

### Hero Section
- Eye-catching banner with admission notification
- Call-to-action buttons
- Gradient background with animations

### About Section
- School information
- Key statistics (students, faculty, years)
- School history and vision

### School Sections
- Primary School details
- Middle School details
- Secondary School details
- Curriculum highlights

### News & Events
- Latest announcements
- Event information
- News articles

### Gallery
- Photo showcase
- Categorized gallery items
- Hover effects

### Testimonials
- Parent reviews
- Star ratings
- Success stories

### Footer
- Contact information
- Quick links
- Office hours
- Social media links
- Copyright information

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```js
colors: {
  primary: '#1e3a8a',    // Blue
  secondary: '#f59e0b',  // Amber
}
```

### School Information
Update school details directly in component files:
- School name: "Brilliant School Sankeshwar"
- Contact: info@brilliant.edu.in
- Phone: +91 9876543210
- Location: Sankeshwar, Karnataka

## Performance

- **Lighthouse Scores**: Optimized for high performance
- **Bundle Size**: Minimal with tree-shaking
- **Mobile Friendly**: Responsive design on all devices
- **Accessibility**: WCAG compliant elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © Brilliant School Sankeshwar 2025. All Rights Reserved.

## Support

For questions or issues, please contact:
- Email: info@brilliant.edu.in
- Phone: +91 9876543210

---

Built with ❤️ for Excellence in Education
