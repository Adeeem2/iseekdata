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
  description, 
  href, 
  tags, 
  icon: Icon,
  className = ''
}: CardProps) {
  const content = (
    <div className={`
      group border border-black p-8
      transition-all duration-150
      hover:border-gray-400
      flex flex-col justify-between
      bg-white
      ${className}
    `}>
      <div>
        {Icon && (
          <div className="mb-4 p-2 inline-block bg-gray-50 border border-black">
            <Icon className="w-4 h-4 text-black" />
          </div>
        )}
        <h3 className="text-lg font-bold mb-3 text-black group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 border border-black text-black font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
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
