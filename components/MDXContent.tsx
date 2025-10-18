import { MDXRemote } from 'next-mdx-remote/rsc';
import { ReactNode } from 'react';

interface ComponentProps {
  children?: ReactNode;
  [key: string]: unknown;
}

const components = {
  h1: (props: ComponentProps) => <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-8 text-[color:var(--fg)]" {...props} />,
  h2: (props: ComponentProps) => <h2 className="text-2xl md:text-3xl font-semibold mb-3 mt-6 text-[color:var(--fg)]" {...props} />,
  h3: (props: ComponentProps) => <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-4 text-[color:var(--fg)]" {...props} />,
  p: (props: ComponentProps) => <p className="mb-4 text-[color:var(--fg)] leading-relaxed" {...props} />,
  ul: (props: ComponentProps) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
  ol: (props: ComponentProps) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
  li: (props: ComponentProps) => <li className="text-[color:var(--fg)]" {...props} />,
  a: (props: ComponentProps) => (
    <a 
      className="u-underline transition-base hover:text-[color:var(--accent)]" 
      target="_blank" 
      rel="noopener noreferrer" 
      {...props} 
    />
  ),
  code: (props: ComponentProps) => (
    <code className="px-2 py-0.5 border border-base text-[0.95em]" {...props} />
  ),
  pre: (props: ComponentProps) => (
    <pre className="p-4 border-4 border-base overflow-x-auto mb-4" {...props} />
  ),
  blockquote: (props: ComponentProps) => (
    <blockquote className="border-l-4 border-base pl-4 italic my-4" {...props} />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-minimal">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
