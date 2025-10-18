import Link from 'next/link';
import { getProjects, getPosts } from '@/lib/mdx';

export default async function Home() {
  const projects = await getProjects();
  const posts = await getPosts();
  
  // Show only first 4 projects and 3 posts on home page
  const featuredProjects = projects.slice(0, 4);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="w-full max-w-3xl mx-auto px-8 md:px-12 py-8">
      {/* Two-column asymmetrical layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* Left Column - Narrower, Introduction */}
        <div className="lg:col-span-4">
          <div className="sticky top-8">
            {/* Logo */}
            <div className="inline-block mb-4 px-2 py-1 border-2  border-emerald-500 ">
              <span className="text-sm font-bold font-mono text-white">i seek data</span>
              <br/>
            </div>

            {/* Large heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
              Hi, I&apos;m Edam
            </h1>

            {/* Thin paragraph with strategic bold */}
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              <strong className="font-bold">Developer / Designer</strong>
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              I build elegant digital experiences and solve complex problems with clean,
              functional code. <strong className="font-semibold">Currently available</strong> for new projects.
            </p>


          </div>
        </div>
        
        {/* Right Column - Wider, Stacked Cards */}
        <div className="lg:col-span-8 space-y-8 lg:mt-24">

          {/* Projects Section - Minimalist Box with Neon Border */}
          <section className="border-2 border-emerald-500 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold text-white">Projects</h2>

            </div>
            
            <ul className="space-y-0">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block py-1 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>

            {featuredProjects.length === 0 && (
              <p className="text-gray-600 text-center py-6 text-sm">
                No projects yet. Check back soon.
              </p>
            )}
          </section>

          {/* Posts Section - Minimalist Box with Neon Border */}
          <section className="border-2 border-emerald-500 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold text-white">Posts</h2>

            </div>

            <ul className="space-y-0">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="block py-1 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>

            {recentPosts.length === 0 && (
              <p className="text-gray-600 text-center py-6 text-sm">
                No posts yet. Coming soon.
              </p>
            )}
          </section>
          
        </div>
      </div>
    </div>
  );
}