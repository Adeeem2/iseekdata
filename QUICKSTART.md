# Quick Start Guide

Welcome to your new portfolio! Follow these steps to customize it and make it your own.

## ✅ Step 1: Update Personal Information (5 minutes)

### Navigation Header
Edit `components/Nav.tsx` (line 17):
```tsx
<Link href="/" className="text-xl font-bold hover:text-accent transition-colors">
  Your Actual Name  // Change this
</Link>
```

### Home Page Hero
Edit `app/page.tsx` (lines 19-23):
```tsx
<h1 className="text-5xl font-bold mb-4">
  Hi, I'm <span className="text-accent">Your Actual Name</span>
</h1>
<p className="text-xl text-muted font-semibold mb-8">
  Your Actual Title / Role
</p>
```

### About Page
Edit `app/about/page.tsx`:
- Line 7: Update name in title
- Line 16: Update skills array with your actual skills
- Lines 52-54: Update bio paragraphs
- Lines 99-124: Update experience section

### Footer
Edit `components/Footer.tsx` (lines 5-10):
Update social links with your actual profiles

### Site Metadata
Edit `app/layout.tsx` (lines 13-24):
Update all metadata with your actual information

## ✅ Step 2: Add Your Profile Photo (2 minutes)

1. Add your photo to `public/images/profile.jpg`
2. Edit `app/about/page.tsx` (lines 40-50)
3. Uncomment the Image component and comment out the placeholder

## ✅ Step 3: Customize Colors (Optional, 2 minutes)

Edit `tailwind.config.js` (lines 9-14):
```js
colors: {
  background: '#ffffff',  // Background color
  text: '#111111',       // Main text color
  accent: '#0070f3',     // Links and accents (change this!)
  muted: '#888888',      // Secondary text
},
```

## ✅ Step 4: Setup Contact Form (5 minutes)

1. Go to [Formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Copy your form endpoint ID
4. Edit `app/contact/page.tsx` (line 21):
   ```tsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID
6. Update email in `app/contact/page.tsx` (line 69)

## ✅ Step 5: Add Your Projects (10 minutes)

Create files in `content/projects/` with this format:

```mdx
---
title: "Your Project Name"
description: "Brief description (1-2 sentences)"
tags: ["Tech1", "Tech2", "Tech3"]
image: "/images/your-project.png"
link: "https://your-project-url.com"
---

## Overview
Describe your project...

## Features
- Feature 1
- Feature 2

## Tech Stack
- Technology 1
- Technology 2
```

**Tips:**
- Use descriptive titles
- Keep descriptions concise
- Add 3-5 relevant tags
- Include a screenshot (recommended size: 800x800px)
- Link to live demo or GitHub repo

## ✅ Step 6: Write Blog Posts (Optional, 15 minutes)

Create files in `content/posts/`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2025-10-13"
excerpt: "A compelling 1-2 sentence summary"
---

Your post content in Markdown...
```

**Tips:**
- Use present dates for current posts
- Keep excerpts short and engaging
- Use headers (##, ###) for structure
- Include code blocks with triple backticks

## ✅ Step 7: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and check:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Project cards display
- [ ] Contact form looks good
- [ ] Mobile responsiveness (resize browser)

## ✅ Step 8: Deploy to Vercel (5 minutes)

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push
   ```

2. Go to [Vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

**Done!** Your site will be live at `https://your-project.vercel.app`

## 🎨 Optional Enhancements

### Add Dark Mode
Uncomment dark mode classes in components and add a theme toggle

### Add Analytics
1. Sign up for Vercel Analytics
2. Add to your project in Vercel dashboard

### Custom Domain
1. Buy a domain (Namecheap, Google Domains, etc.)
2. Add it in Vercel dashboard under "Domains"
3. Update DNS records as instructed

### Performance Optimization
- Optimize images (use WebP format, recommended tools: Squoosh, TinyPNG)
- Add loading states for slower connections
- Implement lazy loading for images below the fold

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX Guide](https://mdxjs.com)
- [Vercel Deployment](https://vercel.com/docs)

## 🆘 Common Issues

**Issue**: CSS not loading
**Fix**: Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

**Issue**: MDX content not showing
**Fix**: Check frontmatter syntax and ensure files are in `content/` folder

**Issue**: Build fails
**Fix**: Run `npm run build` locally to see detailed errors

## 🎉 You're All Set!

Your portfolio is ready to showcase your work. Keep it updated with new projects and posts!

Need help? Check the main README.md or open an issue on GitHub.
