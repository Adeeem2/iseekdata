# Minimal Square-Design Portfolio

A fast, elegant, and modular personal portfolio website inspired by [citw.dev](https://citw.dev), built with Next.js 14+ and Tailwind CSS.

## Features

- ⚡ **Lightning Fast** - Static site generation with Next.js App Router
- 🎨 **Minimal Design** - Clean square-grid aesthetic with generous whitespace
- 📱 **Fully Responsive** - Beautiful on all devices
- 🔍 **SEO Optimized** - Built-in metadata and Open Graph tags
- 📝 **MDX Content** - Easy content management with Markdown
- 🎭 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling
- ✨ **Framer Motion Ready** - Smooth animations (optional)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX via next-mdx-remote
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   ├── posts/             # Blog posts pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Card.tsx
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   └── MDXContent.tsx
├── content/              # MDX content
│   ├── projects/         # Project MDX files
│   └── posts/            # Blog post MDX files
├── lib/                  # Utility functions
│   └── mdx.ts           # MDX helpers
└── public/              # Static assets
```

## Customization

### 1. Update Personal Information

Edit the following files to add your information:

- `app/layout.tsx` - Site metadata
- `app/page.tsx` - Hero section
- `app/about/page.tsx` - About content
- `components/Nav.tsx` - Navigation name
- `components/Footer.tsx` - Social links

### 2. Add Your Projects

Create MDX files in `content/projects/`:

```mdx
---
title: "Your Project"
description: "A brief description"
tags: ["Next.js", "React", "TypeScript"]
image: "/images/project.png"
link: "https://project-url.com"
---

## Project content here...
```

### 3. Write Blog Posts

Create MDX files in `content/posts/`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2025-10-13"
excerpt: "A brief excerpt..."
---

## Post content here...
```

### 4. Customize Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      background: '#ffffff',
      text: '#111111',
      accent: '#0070f3',  // Change this!
      muted: '#888888',
    },
  },
}
```

### 5. Add Your Images

Place images in the `public/images/` directory and reference them in your content.

## Contact Form Setup

To enable the contact form:

1. Sign up at [Formspree](https://formspree.io)
2. Create a new form
3. Copy your form endpoint
4. Update `app/contact/page.tsx`:
   ```tsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `https://your-project.vercel.app`

### Custom Domain

1. Add your domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL certificate is automatically provisioned

## Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start           # Start production server

# Linting
npm run lint        # Run ESLint
```

## Performance

This portfolio is optimized for performance:

- ✅ Static Site Generation (SSG)
- ✅ Image optimization with next/image
- ✅ Automatic code splitting
- ✅ Font optimization
- ✅ Minimal JavaScript bundle

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

- Inspired by [citw.dev](https://citw.dev)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

**Built with ❤️ and Next.js**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
