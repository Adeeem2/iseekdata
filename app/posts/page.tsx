import Link from 'next/link';
import { getPosts } from '@/lib/mdx';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

export const metadata: Metadata = {
  title: 'Posts - Your Name',
  description: 'Articles, tutorials, and thoughts on development and design',
};

export default async function Posts() {
  const posts = await getPosts();

  const palette = ['var(--accent-a)', 'var(--accent-b)', 'var(--accent-c)', 'var(--accent-d)', 'var(--accent-e)', 'var(--accent-f)'];
  const pickAccent = (s: string) => {
    let sum = 0;
    for (let i = 0; i < s.length; i++) sum = (sum + s.charCodeAt(i)) % 2147483647;
    return palette[sum % palette.length];
  };

  return (
    <div className="w-full max-w-content mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Posts</h1>
        <p className="text-lg text-muted">
          Thoughts, tutorials, and learnings from my journey in tech.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => {
          type WithAccent = CSSProperties & { ['--page-accent']?: string };
          const styleVars: WithAccent = { ['--page-accent']: pickAccent(post.slug) };
          return (
            <Link 
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block group"
              style={styleVars}
            >
              <article className="relative border-b border-base pb-6 transition-base">
                <div className="flex items-start mb-2">
                  <span className="mt-2 mr-3 inline-block w-2 h-2" style={{ background: 'var(--page-accent)' }} />
                  <h2 className="text-xl md:text-2xl font-semibold group-hover:text-[color:var(--accent)] transition-base">
                    {post.title}
                  </h2>
                  <time className="text-xs text-muted whitespace-nowrap ml-auto mt-1">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <p className="text-muted text-base">{post.excerpt}</p>
              </article>
            </Link>
          );
        })}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg mb-4">
            No posts yet. Coming soon!
          </p>
          <p className="text-sm text-muted">
            Add MDX files to the <code className="border border-base px-2 py-1">content/posts</code> folder to see them here.
          </p>
        </div>
      )}
    </div>
  );
}
