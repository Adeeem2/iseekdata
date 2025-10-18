/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        text: '#111111',
        accent: '#0070f3',
        muted: '#888888',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        'content': '800px',
      },
      aspectRatio: {
        'square': '1 / 1',
      },
      gap: {
        'grid': '2rem',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
}
