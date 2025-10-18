import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className = '',
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
    primary: 'bg-black border-black text-white hover:bg-gray-800',
    secondary: 'bg-white border-black text-black hover:bg-gray-50',
    outline: 'bg-white border-black text-black hover:bg-gray-50',
  };

  const buttonClass = `${baseStyles} ${variants[variant]}`;

  if (href) {
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
