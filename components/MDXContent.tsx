import { MDXRemote } from 'next-mdx-remote/rsc';
import { ReactNode } from 'react';
import CodeBlock from './CodeBlock';

interface ComponentProps {
  children?: ReactNode;
  className?: string;
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
  code: (props: ComponentProps) => {
    // Inline code (no className means it's inline)
    if (!props.className) {
      return <code className="font-mono text-sm bg-transparent text-emerald-400 px-1" {...props} />;
    }
    // Block code - use CodeBlock component
    return <CodeBlock className={props.className}>{String(props.children)}</CodeBlock>;
  },
  pre: (props: ComponentProps) => {
    // Extract code element from pre
    const codeElement = props.children as { props?: { className?: string; children?: ReactNode } };
    if (codeElement?.props?.className) {
      return <CodeBlock className={codeElement.props.className}>{String(codeElement.props.children)}</CodeBlock>;
    }
    // Fallback for pre without code
    return <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border-2 border-emerald-500" {...props} />;
  },
  blockquote: (props: ComponentProps) => (
    <blockquote className="border-l-4 border-accent pl-4 italic my-4" {...props} />
  ),
  img: (props: ComponentProps) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="max-w-full h-auto rounded-lg my-6" {...props} alt={props.alt as string || ''} />
  ),
  div: (props: ComponentProps) => <div {...props} />,
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}