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
      <h1 className="text-3xl font-bold mb-8">Posts</h1>

      <div className="space-y-3">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block"
          >
            <article className="border-4 border-black p-6">
              <h2 className="text-base font-bold">{post.title}</h2>
            </article>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg mb-4">
            No posts yet. Coming soon!
          </p>
        </div>
      )}
    </div>
  );
}
