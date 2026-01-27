import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  icon?: LucideIcon;
  className?: string;
}

export default function Card({ 
  title, 
  // description, 
  href, 
  // tags, 
  // icon: Icon,
  className = ''
}: CardProps) {
  const content = (
    <div className={`
      group border-4 border-black p-6
      transition-colors duration-150
      bg-white
      ${className}
    `}>
      <h3 className="text-base font-bold text-black">
        {title}
      </h3>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
