## 🚀 Deployment Guide - Brilliant School Sankeshwar Website

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy a Vite + React application.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Brilliant School website"
   git remote add origin https://github.com/yourusername/school-app.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"
   - Your site will be live at `yourdomain.vercel.app`

3. **Add Custom Domain**
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain (e.g., brilliantschoolsankeshwar.edu.in)
   - Follow DNS instructions

---

## Option 2: Deploy to Netlify

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to https://netlify.com
   - Drag and drop the `dist/` folder
   - Your site is now live!

3. **For GitHub integration**
   - Connect your GitHub account
   - Select your repository
   - Netlify will auto-deploy on every push to main

---

## Option 3: Deploy to GitHub Pages

### Steps:

1. **Update vite.config.ts**
   ```ts
   export default defineConfig({
     base: '/school-app/',  // Change to your repo name
     plugins: [react()],
   })
   ```

2. **Build and deploy**
   ```bash
   npm run build
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **Enable GitHub Pages**
   - Go to Repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Your site will be at `yourusername.github.io/school-app`

---

## Option 4: Traditional Web Hosting

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to server**
   - Use FTP/SFTP to upload contents of `dist/` folder
   - Upload to your hosting's `public_html` directory

3. **Configure server**
   - Set index.html as default page
   - Enable gzip compression for .js and .css files
   - Set appropriate MIME types

---

## Production Checklist

Before going live:

- [ ] Update all contact information
- [ ] Add real school logo (replace emoji)
- [ ] Add real school photos (replace emoji in gallery)
- [ ] Update testimonials with real parent reviews
- [ ] Update news & events with current information
- [ ] Set up email/contact form
- [ ] Test on all devices
- [ ] Enable HTTPS
- [ ] Add Google Analytics
- [ ] Set up SEO metadata
- [ ] Test mobile responsiveness
- [ ] Check page speed (should be excellent)
- [ ] Verify all links work
- [ ] Check form submissions

---

## SEO Optimization

Add to `index.html` head:

```html
<meta name="description" content="Brilliant School Sankeshwar - Premier educational institution committed to excellence">
<meta name="keywords" content="school, education, Sankeshwar, Karnataka, CBSE">
<meta property="og:title" content="Brilliant School Sankeshwar">
<meta property="og:description" content="Excellence in Education">
<meta property="og:type" content="website">
```

---

## Environment Variables (if needed)

Create `.env` file:
```
VITE_SCHOOL_NAME=Brilliant School Sankeshwar
VITE_SCHOOL_EMAIL=info@brilliant.edu.in
VITE_SCHOOL_PHONE=+91 9876543210
```

---

## Performance Tips

The website already has excellent performance:

- **CSS**: 7.04 KB → 1.98 KB gzipped ✅
- **JS**: 221.43 KB → 68.45 KB gzipped ✅
- **HTML**: 0.46 KB → 0.29 KB gzipped ✅

### Further optimization:
1. Compress images to WebP format
2. Use CDN for static assets
3. Enable HTTP/2 on server
4. Cache busting with query parameters

---

## Monitoring & Analytics

### Add Google Analytics

1. Create a Google Analytics property
2. Add to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Monitor page speed with:
- Google PageSpeed Insights
- Lighthouse (built-in Chrome DevTools)
- GTmetrix
- WebPageTest

---

## Maintenance

### Regular updates:
- Update news & events monthly
- Keep testimonials fresh
- Verify all links quarterly
- Check for broken images
- Update contact information as needed

### Security:
- Keep dependencies updated: `npm update`
- Check for vulnerabilities: `npm audit`
- Enable HTTPS (automatic with Vercel/Netlify)
- Regular backups of source code

---

## Support & Troubleshooting

### Common issues:

**Styles not loading**
- Clear browser cache
- Ensure CSS file is served
- Check console for errors

**Images not showing**
- Verify image paths
- Check image file sizes
- Use correct format (WebP, PNG, JPG)

**Responsive design broken**
- Test with browser DevTools
- Check viewport meta tag
- Verify Tailwind classes

### Get help:
- Check Vite docs: https://vite.dev
- React documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com

---

## File Structure After Build

```
project/
├── dist/                    (Production files)
│   ├── index.html
│   └── assets/
│       ├── index-XXXXX.css
│       └── index-XXXXX.js
├── src/                     (Source code)
├── public/                  (Static files)
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

---

## Quick Deployment Commands

```bash
# Build for production
npm run build

# Preview build locally
npm run preview

# Deploy to Vercel
vercel

# Deploy to Netlify (from dist folder)
netlify deploy --prod --dir=dist
```

---

**Your Brilliant School Sankeshwar website is ready for the world!** 🎉

For any questions or customizations, feel free to contact us.

Built with ❤️ for Excellence in Education
