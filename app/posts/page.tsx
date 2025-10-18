import Link from 'next/link';
import { getPosts } from '@/lib/mdx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts - Your Name',
  description: 'Articles, tutorials, and thoughts on development and design',
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="w-full max-w-content mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Posts</h1>
        <p className="text-lg text-muted">
          Thoughts, tutorials, and learnings from my journey in tech.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block group"
          >
            <article className="border-b border-gray-200 pb-8 hover:border-accent transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-muted whitespace-nowrap ml-4">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <p className="text-muted text-lg">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg mb-4">
            No posts yet. Coming soon!
          </p>
          <p className="text-sm text-muted">
            Add MDX files to the <code className="bg-gray-100 px-2 py-1 rounded">content/posts</code> folder to see them here.
          </p>
        </div>
      )}
    </div>
  );
}
