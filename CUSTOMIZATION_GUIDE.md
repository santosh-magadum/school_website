## 📝 Content Customization Guide

This guide shows you exactly where to find and modify all content in the school website.

---

## 🏢 School Name & Branding

### Header Component (`src/components/Header.tsx`)
**Lines to modify:**
```tsx
<h1 className="text-xl font-bold leading-tight">Brilliant School</h1>
<p className="text-xs text-blue-200">Sankeshwar</p>
```

### Hero Section (`src/components/HeroSection.tsx`)
```tsx
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
  Brilliant School <span className="text-yellow-400">Sankeshwar</span>
</h1>
```

### Footer (`src/components/Footer.tsx`)
```tsx
<h3 className="font-bold text-white">Brilliant School</h3>
<p className="text-xs text-gray-400">Sankeshwar</p>
```

---

## 📞 Contact Information

### Footer (`src/components/Footer.tsx`)
**Update these values:**
```tsx
// Address
<span className="text-gray-400">Sankeshwar, Karnataka</span>

// Phone
<a href="tel:+919876543210" className="text-gray-400 hover:text-white transition">
  +91 9876543210
</a>

// Email
<a href="mailto:info@brilliantschool.edu.in" className="text-gray-400 hover:text-white transition">
  info@brilliant.edu.in
</a>

// Office Hours
<p>Monday - Friday: 8:30 AM - 4:30 PM</p>
<p>Saturday: 8:30 AM - 1:00 PM</p>

// CBSE Affiliation
<p>CBSE Affiliation No. - 830113</p>
```

---

## 🎓 School Sections

### SchoolSections Component (`src/components/SchoolSections.tsx`)
**Modify section details:**
```tsx
const sections = [
  {
    name: 'Primary School',        // Change section name
    time: '8:15 AM to 2:45 PM',    // Change timings
    grades: 'Grades 1-5',           // Change grade range
    color: 'from-green-400 to-green-600', // Change color
    icon: '📚',                     // Change emoji
  },
  // ... add more sections as needed
];
```

---

## 📰 News & Events

### NewsEvents Component (`src/components/NewsEvents.tsx`)
**Update news items:**
```tsx
const news = [
  {
    date: 'Feb 1, 2026',            // Update date
    title: 'Annual Sports Day Celebration',  // Update title
    description: 'Students showcase their athletic talents...',  // Update description
  },
  // ... add or modify news items
];
```

---

## 🖼️ Gallery Items

### Gallery Component (`src/components/Gallery.tsx`)
**Update gallery items:**
```tsx
const galleryImages = [
  {
    title: 'Science Exhibition 2026',    // Update title
    category: 'Academic',                // Update category
    emoji: '🔬',                         // Change emoji (or add image URL)
  },
  // ... add more gallery items
];
```

**To add real images instead of emoji:**
Replace:
```tsx
<div className="text-7xl">{image.emoji}</div>
```

With:
```tsx
<img src="/images/gallery-1.jpg" alt={image.title} className="w-full h-64 object-cover" />
```

---

## 💬 Testimonials

### Testimonials Component (`src/components/Testimonials.tsx`)
**Update parent testimonials:**
```tsx
const testimonials = [
  {
    name: 'Rajesh Kumar',                    // Parent name
    relation: 'Parent',
    text: 'Brilliant School has transformed...', // Review text
    rating: 5,                               // Star rating
  },
  // ... add more testimonials
];
```

---

## 📖 About Section

### AboutSection Component (`src/components/AboutSection.tsx`)
**Modify school information:**
```tsx
<p className="text-gray-700 text-lg mb-6 leading-relaxed">
  Brilliant School Sankeshwar is an institution dedicated to...
</p>

// Update statistics
<div className="text-3xl font-bold text-blue-900">1000+</div>
<p className="text-gray-600 text-sm mt-2">Students</p>
```

---

## 🎯 Hero Section Content

### HeroSection Component (`src/components/HeroSection.tsx`)
**Customize hero banner:**
```tsx
// Main heading (already customized)
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
  Brilliant School <span className="text-yellow-400">Sankeshwar</span>
</h1>

// Subtitle
<p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
  Nurturing minds, building character, and inspiring excellence...
</p>

// Admission banner
<p className="text-xl font-bold">🎉 Admissions Open for 2025-26 - Inquiries Started!</p>
<p className="text-sm mt-2">Limited seats available. Enroll your child in excellence today.</p>
```

---

## 🎨 Colors & Branding

### Tailwind Config (`tailwind.config.js`)
**Modify color scheme:**
```js
theme: {
  extend: {
    colors: {
      primary: '#1e3a8a',        // Primary blue
      secondary: '#f59e0b',      // Accent yellow
    },
  },
},
```

### Replace throughout components:
- `bg-blue-900` → Blue backgrounds
- `bg-yellow-500` → Yellow accents
- `text-blue-100` → Light blue text

---

## 🔗 Navigation Links

### Header Component (`src/components/Header.tsx`)
**Update navigation links:**
```tsx
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Sections', href: '#sections' },
  { label: 'News', href: '#news' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];
```

---

## 🔘 Button Text & Actions

### Throughout Components
**Update button text:**
```tsx
<button className="...">Admissions</button>        // Header
<button className="...">Apply Now</button>         // Hero
<button className="...">Learn More</button>        // Hero
<button className="...">Read More</button>         // About
<button className="...">Learn More</button>        // Sections
<button className="...">View All News</button>     // News
<button className="...">View All Gallery</button>  // Gallery
```

---

## 📱 Social Media Links

### Footer Component (`src/components/Footer.tsx`)
**Update social media links:**
```tsx
<a href="https://facebook.com/yourpage" className="...">
  <FaFacebook size={20} />
</a>
<a href="https://twitter.com/yourhandle" className="...">
  <FaTwitter size={20} />
</a>
<a href="https://linkedin.com/company/yourcompany" className="...">
  <FaLinkedin size={20} />
</a>
```

---

## 📧 Contact Form (Future Enhancement)

If you want to add a contact form:

1. Create a new component `src/components/ContactForm.tsx`
2. Add form fields for Name, Email, Message
3. Integrate with your backend or use:
   - Formspree
   - EmailJS
   - Netlify Forms
   - Your own API

---

## 🎨 Style Customization

### Global Styles (`src/index.css`)
```css
/* Modify global colors and fonts */
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
```

### Component-Specific Styles (`src/App.css`)
```css
/* Custom animations */
@keyframes blob {
  /* Modify animation timings */
}

.animate-blob {
  animation: blob 7s infinite;  /* Change duration */
}
```

---

## 🖼️ Adding Real Images

### Replace Emoji with Images

**In Gallery (`src/components/Gallery.tsx`):**
```tsx
// Before: <div className="text-7xl">{image.emoji}</div>

// After:
<div className="bg-cover bg-center h-64" style={{ backgroundImage: `url('/images/' + image.id + '.jpg')` }}></div>
```

**In About Section (`src/components/AboutSection.tsx`):**
```tsx
// Before: <div className="text-6xl mb-4">🏫</div>

// After:
<img src="/images/school-building.jpg" alt="School Building" className="w-64 h-64 object-cover rounded-3xl" />
```

---

## 📝 Meta Information (SEO)

### index.html
```html
<title>Brilliant School Sankeshwar - Premier Education</title>
<meta name="description" content="Excellence in education at Brilliant School Sankeshwar">
<meta name="keywords" content="school, education, Sankeshwar, Karnataka, CBSE">
<meta property="og:title" content="Brilliant School Sankeshwar">
<meta property="og:description" content="Nurturing minds, building character, inspiring excellence">
```

---

## 🚀 Implementation Steps

1. **Open the component file** you want to modify
2. **Find the content** you want to change (use Ctrl+F)
3. **Update the text/values**
4. **Save the file** (Ctrl+S)
5. **Check the browser** - changes appear instantly with HMR
6. **Test on mobile** - ensure responsiveness

---

## ⚠️ Important Notes

- Keep text concise and professional
- Use consistent formatting
- Test all changes in browser (desktop & mobile)
- Keep backups of original files
- Don't delete HTML structure, only modify content
- Colors should match school branding
- Phone numbers should include country code
- Email addresses should be official school email

---

## 📞 Quick Reference

| Item | Location | Property |
|------|----------|----------|
| School Name | Header, Hero, Footer | text content |
| Contact Phone | Footer | href="tel:+91..." |
| Contact Email | Footer | href="mailto:..." |
| Sections | SchoolSections.tsx | sections array |
| News Items | NewsEvents.tsx | news array |
| Gallery Items | Gallery.tsx | galleryImages array |
| Testimonials | Testimonials.tsx | testimonials array |
| Social Links | Footer.tsx | href attributes |
| Colors | tailwind.config.js | colors object |

---

**Happy customizing! Your Brilliant School Sankeshwar website awaits your personal touch!** ✨
