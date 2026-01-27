import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjects } from '@/lib/mdx';
import { MDXContent } from '@/components/MDXContent';
import Button from '@/components/Button';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Your Name`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
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
    <div className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12" style={styleVars}>
      {/* Back Button */}
      <Button 
        href="/"
        variant="secondary"
        className="mb-8 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Button>

      {/* Project Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-white">{project.title}</h1>
        <p className="text-base text-gray-400 mb-4 max-w-prose">{project.description}</p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 border border-gray-700 text-gray-400 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Live Link */}
        {project.link && (
          <Button 
            href={project.link}
            variant="primary"
            target="_blank"
            className="inline-flex items-center gap-2"
          >
            View Live Project <ExternalLink className="w-4 h-4" />
          </Button>
        )}
      </header>

      {/* Hero Image */}
      {project.image && (
        <div className="mb-10 border-4 border-base overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Project Content */}
      <MDXContent source={project.content} />
    </div>
  );
}
