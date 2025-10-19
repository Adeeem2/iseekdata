import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/mdx';
import { MDXContent } from '@/components/MDXContent';
import Button from '@/components/Button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Your Name`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full max-w-content mx-auto px-6 py-12">
      {/* Back Button */}
      <Button 
        href="/"
        variant="secondary"
        className="mb-8 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Posts
      </Button>

      {/* Post Header */}
      <header className="mb-12">
        <time className="text-sm text-gray-400 mb-4 block">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
        <p className="text-xl text-gray-400">{post.excerpt}</p>
      </header>

      {/* Post Content */}
      <article className="prose prose-lg max-w-none">
        <MDXContent source={post.content} />
      </article>
    </div>
  );
}
