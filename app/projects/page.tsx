import Card from '@/components/Card';
import { getProjects } from '@/lib/mdx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Your Name',
  description: 'A collection of my work and side projects',
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="w-full max-w-content mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted">
          A collection of personal and professional projects I&apos;ve worked on.
          From web applications to data science experiments, each project represents
          a problem solved or a skill developed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            description={project.description}
            href={`/projects/${project.slug}`}
            tags={project.tags}
          />
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg mb-4">
            No projects yet. Stay tuned!
          </p>
          <p className="text-sm text-muted">
            Add MDX files to the <code className="bg-gray-100 px-2 py-1 rounded">content/projects</code> folder to see them here.
          </p>
        </div>
      )}
    </div>
  );
}
