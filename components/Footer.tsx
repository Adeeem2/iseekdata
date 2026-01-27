import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[90vw] mx-auto px-6 md:px-12 lg:px-20 py-12 mt-20 border-t border-black">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Your Name
        </p>
        
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-black hover:text-gray-600 transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
