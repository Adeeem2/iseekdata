'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract language from className (format: language-js, language-typescript, etc.)
  const language = className?.replace('language-', '') || 'text';

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between bg-gray-900 text-gray-300 px-4 py-2 rounded-t-lg border-2 border-b-0 border-emerald-500">
        <span className="text-xs font-mono uppercase tracking-wide">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-xs hover:text-emerald-400 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre className="!bg-gray-900 !text-gray-100 p-4 rounded-b-lg overflow-x-auto border-2 border-t-0 border-emerald-500 m-0" style={{ backgroundColor: '#111827', color: '#f3f4f6' }}>
        <code className={`text-sm font-mono leading-relaxed ${className}`} style={{ color: '#f3f4f6' }}>
          {children}
        </code>
      </pre>
    </div>
  );
}
