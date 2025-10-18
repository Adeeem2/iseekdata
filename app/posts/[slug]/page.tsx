import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/mdx';
import { MDXContent } from '@/components/MDXContent';
import Button from '@/components/Button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

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

  const palette = ['var(--accent-a)', 'var(--accent-b)', 'var(--accent-c)', 'var(--accent-d)', 'var(--accent-e)', 'var(--accent-f)'];
  const pickAccent = (s: string) => {
    let sum = 0;
    for (let i = 0; i < s.length; i++) sum = (sum + s.charCodeAt(i)) % 2147483647;
    return palette[sum % palette.length];
  };
  const pageAccent = pickAccent(slug);
  type WithAccent = CSSProperties & { ['--page-accent']?: string };
  const styleVars: WithAccent = { ['--page-accent']: pageAccent };

  return (
    <div className="w-full max-w-content mx-auto px-6 py-12 accent-top" style={styleVars}>
      {/* Back Button */}
      <Button 
        href="/posts" 
        variant="secondary"
        className="mb-8 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Posts
      </Button>

      {/* Post Header */}
      <header className="mb-10">
        <time className="text-xs tracking-wide inline-block px-2 py-1 border border-base text-muted mb-3">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
          {post.title}
        </h1>
        <p className="text-base text-muted max-w-prose">{post.excerpt}</p>
      </header>

      {/* Post Content */}
      <MDXContent source={post.content} />
    </div>
  );
}
