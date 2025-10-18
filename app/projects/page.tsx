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
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            description={""}
            href={`/projects/${project.slug}`}
            tags={[]}
          />
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-lg mb-4">
            No projects yet. Stay tuned!
          </p>
        </div>
      )}
    </div>
  );
}
