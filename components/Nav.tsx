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
    <nav className="w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[90vw] mx-auto px-6 md:px-12 lg:px-20 py-8 border-b border-black">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-base font-bold text-black hover:text-gray-600 transition-colors">
          Your Name
        </Link>
        
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                href={item.path}
                className={`
                  text-sm font-medium transition-colors
                  ${pathname === item.path 
                    ? 'text-black' 
                    : 'text-gray-500 hover:text-black'
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
