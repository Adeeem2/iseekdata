'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-content mx-auto px-8 md:px-12 py-8 border-b border-base">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-base font-bold transition-base hover:text-[color:var(--accent)]">
          Your Name
        </Link>
        
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                href={item.path}
                aria-current={pathname === item.path ? 'page' : undefined}
                className={`
                  text-sm font-medium transition-base u-underline
                  ${pathname === item.path 
                    ? 'text-[color:var(--fg)]' 
                    : 'text-muted hover:text-[color:var(--fg)]'
                  }
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
