import Link from 'next/link';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { getProjects, getPosts } from '@/lib/mdx';

export default async function Home() {
  const projects = await getProjects();
  const posts = await getPosts();
  
  // Show only first 4 projects and 3 posts on home page
  const featuredProjects = projects.slice(0, 4);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="w-full max-w-content mx-auto px-8 md:px-12 py-16">
      {/* Two-column asymmetrical layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column - Narrower, Introduction */}
        <div className="lg:col-span-4">
          <div className="sticky top-8">
            {/* Small badge */}
            <div className="inline-block mb-6 px-3 py-1 border border-black bg-gray-50">
              <span className="text-xs font-medium">Portfolio 2025</span>
            </div>
            
            {/* Large heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Name
            </h1>
            
            {/* Thin paragraph with strategic bold */}
            <p className="text-base text-gray-700 leading-relaxed mb-2">
              <strong className="font-bold">Developer / Designer</strong>
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              I build elegant digital experiences and solve complex problems with clean, 
              functional code. <strong className="font-semibold">Currently available</strong> for new projects.
            </p>
            
            {/* Simple bordered button */}
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
        
        {/* Right Column - Wider, Stacked Cards */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Projects Section - Card Container */}
          <section className="border border-black p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Selected Projects</h2>
              <Link 
                href="/projects" 
                className="text-sm text-gray-600 hover:text-black border-b border-transparent hover:border-black transition-all"
              >
                View all →
              </Link>
            </div>
            
            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <Card
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  href={`/projects/${project.slug}`}
                  tags={project.tags}
                />
              ))}
            </div>
            
            {featuredProjects.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                No projects yet. Check back soon.
              </p>
            )}
          </section>

          {/* Posts Section - Card Container */}
          <section className="border border-black p-8">
            <h2 className="text-xl font-bold mb-6">Recent Writing</h2>
            
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="block group pb-6 border-b border-gray-200 last:border-0 last:pb-0"
                >
                  <article>
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="text-base font-bold group-hover:text-gray-600 transition-colors flex-1">
                        {post.title}
                      </h3>
                      <time className="text-xs text-gray-500 whitespace-nowrap">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <p className="text-sm text-gray-600">{post.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
            
            {recentPosts.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                No posts yet. Coming soon.
              </p>
            )}
          </section>
          
        </div>
      </div>
    </div>
  );
}
