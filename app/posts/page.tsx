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
    <div className="w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[90vw] mx-auto px-6 md:px-12 lg:px-20 py-12">
      <h1 className="text-3xl font-bold mb-8">Posts</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block"
          >
            <article className="border-4 border-black p-6 h-full flex flex-col justify-center">
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
