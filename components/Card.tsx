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
      group card p-8
      transition-base
      hover:border-[color:var(--accent)]
      flex flex-col justify-between
      ${className}
    `}>
      <div>
        {Icon && (
          <div className="mb-4 p-2 inline-block border border-base rounded-md">
            <Icon className="w-4 h-4 text-[color:var(--accent)]" />
          </div>
        )}
        <h3 className="text-lg font-bold mb-3 text-[color:var(--fg)] group-hover:text-[color:var(--accent)] transition-base">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 border border-base text-[color:var(--fg)] font-medium rounded-full"
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
