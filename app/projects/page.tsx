import Link from 'next/link';
import { getProjects } from '@/lib/mdx';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

export const metadata: Metadata = {
  title: 'Projects - Your Name',
  description: 'A collection of my work and side projects',
};

export default async function Projects() {
  const projects = await getProjects();

  const palette = ['var(--accent-a)', 'var(--accent-b)', 'var(--accent-c)', 'var(--accent-d)', 'var(--accent-e)', 'var(--accent-f)'];
  const pickAccent = (s: string) => {
    let sum = 0;
    for (let i = 0; i < s.length; i++) sum = (sum + s.charCodeAt(i)) % 2147483647;
    return palette[sum % palette.length];
  };

  return (
    <div className="w-full mx-auto px-6 py-12 max-w-[760px]">
      <section className="card p-4">
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        <ul className="divide-y divide-[color:var(--border)]">
          {projects.map((project) => {
            const styleVars: CSSProperties & { ['--page-accent']?: string } = { ['--page-accent']: pickAccent(project.slug) };
            return (
              <li key={project.slug} className="py-2">
                <Link 
                  href={`/projects/${project.slug}`}
                  className="block transition-base hover:text-[color:var(--accent)]"
                  style={styleVars}
                >
                  <span className="inline-block w-2 h-2 mr-3 align-middle" style={{ background: 'var(--page-accent)' }} />
                  {project.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {projects.length === 0 && (
          <p className="text-muted text-center py-8">
            No projects yet. Stay tuned!
          </p>
        )}
      </section>
    </div>
  );
}
