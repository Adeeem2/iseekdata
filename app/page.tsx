import Link from 'next/link';
import { getProjects, getPosts } from '@/lib/mdx';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default async function Home() {
  const projects = await getProjects();
  const posts = await getPosts();
  
  // Show only first 4 projects and 3 posts on home page
  const featuredProjects = projects.slice(0, 4);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="w-full mx-auto px-6 md:px-8 py-16 max-w-[680px]">
      {/* Social media centered */}
      <div className="w-full flex justify-center mb-6">
        <div className="flex items-center gap-6 text-muted">
          <a href="https://github.com/yourusername" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="transition-base hover:text-[color:var(--accent)]">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="transition-base hover:text-[color:var(--accent)]">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/yourusername" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="transition-base hover:text-[color:var(--accent)]">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="mailto:your@email.com" aria-label="Email" className="transition-base hover:text-[color:var(--accent)]">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      {/* Two-column asymmetrical layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left Column - Narrower, Introduction */}
        <div className="lg:col-span-4">
          <div className="sticky top-8">
            {/* Small badge */}
            <div className="inline-block mb-6 px-2 py-0.5 border border-base rounded-full">
              <span className="text-xs font-medium text-muted">Portfolio 2025</span>
            </div>
            
            {/* Large heading */}
            <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              Your Name
            </h1>
            
            {/* Thin paragraph with strategic bold */}
            <p className="text-sm text-muted leading-relaxed mb-1">
              <strong className="font-bold text-[color:var(--fg)]">Developer / Designer</strong>
            </p>
            <p className="text-sm text-muted leading-relaxed mb-4">
              I build elegant digital experiences and solve complex problems with clean, 
              functional code. <strong className="font-semibold">Currently available</strong> for new projects.
            </p>
            
          </div>
        </div>
        
        {/* Right Column - Wider, Stacked Cards */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Projects Section - Card Container */}
          <section className="card p-3">
            <h2 className="text-lg font-bold mb-3">Projects</h2>
            <ul className="divide-y divide-[color:var(--border)]">
              {featuredProjects.map((project) => (
                <li key={project.slug} className="py-1">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="block transition-base hover:text-[color:var(--accent)]"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
            {featuredProjects.length === 0 && (
              <p className="text-muted text-center py-8">
                No projects yet. Check back soon.
              </p>
            )}
          </section>

          {/* Posts Section - Card Container */}
          <section className="card p-3">
            <h2 className="text-lg font-bold mb-3">Posts</h2>
            <ul className="divide-y divide-[color:var(--border)]">
              {recentPosts.map((post) => (
                <li key={post.slug} className="py-1">
                  <Link 
                    href={`/posts/${post.slug}`}
                    className="block transition-base hover:text-[color:var(--accent)]"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
            {recentPosts.length === 0 && (
              <p className="text-muted text-center py-8">
                No posts yet. Coming soon.
              </p>
            )}
          </section>
          
        </div>
      </div>
    </div>
  );
}
