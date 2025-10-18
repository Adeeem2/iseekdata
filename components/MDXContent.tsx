import { MDXRemote } from 'next-mdx-remote/rsc';
import { ReactNode } from 'react';

interface ComponentProps {
  children?: ReactNode;
  [key: string]: unknown;
}

const components = {
  h1: (props: ComponentProps) => <h1 className="text-4xl font-bold mb-4 mt-8" {...props} />,
  h2: (props: ComponentProps) => <h2 className="text-3xl font-semibold mb-3 mt-6" {...props} />,
  h3: (props: ComponentProps) => <h3 className="text-2xl font-semibold mb-2 mt-4" {...props} />,
  p: (props: ComponentProps) => <p className="mb-4 text-foreground leading-relaxed" {...props} />,
  ul: (props: ComponentProps) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
  ol: (props: ComponentProps) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
  li: (props: ComponentProps) => <li className="text-foreground" {...props} />,
  a: (props: ComponentProps) => (
    <a 
      className="text-accent hover:underline transition-all" 
      target="_blank" 
      rel="noopener noreferrer" 
      {...props} 
    />
  ),
  code: (props: ComponentProps) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props} />
  ),
  pre: (props: ComponentProps) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  blockquote: (props: ComponentProps) => (
    <blockquote className="border-l-4 border-accent pl-4 italic my-4" {...props} />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
