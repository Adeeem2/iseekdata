import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjects } from '@/lib/mdx';
import { MDXContent } from '@/components/MDXContent';
import Button from '@/components/Button';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

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

  return (
    <div className="w-full max-w-content mx-auto px-6 py-12">
      {/* Back Button */}
      <Button 
        href="/projects" 
        variant="secondary"
        className="mb-8 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Button>

      {/* Project Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted mb-6">{project.description}</p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-muted text-sm rounded-full"
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
            className="inline-flex items-center gap-2"
          >
            View Live Project <ExternalLink className="w-4 h-4" />
          </Button>
        )}
      </header>

      {/* Hero Image */}
      {project.image && (
        <div className="mb-12 rounded-lg overflow-hidden bg-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Project Content */}
      <article className="prose prose-lg max-w-none">
        <MDXContent source={project.content} />
      </article>
    </div>
  );
}
