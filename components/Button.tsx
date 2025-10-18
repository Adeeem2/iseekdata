import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className = '',
  target,
  rel,
  ...props 
}: ButtonProps) {
  const baseStyles = `
    px-6 py-3 font-medium text-sm
    transition-all duration-150
    inline-flex items-center justify-center
    border-2
    ${className}
  `;

  const variants = {
    primary: 'bg-transparent border-emerald-500 text-white hover:bg-emerald-500/10',
    secondary: 'bg-transparent border-emerald-500 text-white hover:bg-emerald-500/10',
    outline: 'bg-white border-black text-black hover:bg-gray-50',
  };

  const buttonClass = `${baseStyles} ${variants[variant]}`;

  if (href) {
    // External link
    if (target === '_blank' || href.startsWith('http')) {
      return (
        <a 
          href={href} 
          className={buttonClass}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
        >
          {children}
        </a>
      );
    }
    
    // Internal link
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}