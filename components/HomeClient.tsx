"use client";

import Link from 'next/link';
import TextGenerateEffect from '@/components/TextGenerateEffect';
import TypingEffect from '@/components/TypingEffect';

interface HomeClientProps {
  featuredProjects: Array<{ slug: string; title: string }>;
  recentPosts: Array<{ slug: string; title: string }>;
}

export default function HomeClient({ featuredProjects, recentPosts }: HomeClientProps) {
  return (
    <div className="w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[90vw] mx-auto px-6 md:px-12 lg:px-40 py-8">
      {/* Two-column asymmetrical layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* Left Column - Narrower, Introduction */}
        <div className="lg:col-span-4">
          <div className="sticky top-8">
            {/* Logo */}
            <div className="inline-block mb-4 px-2 py-1 border-3 rounded-sm  border-emerald-500 ">
              <TypingEffect 
                text="i seek data"
                speed={150}
                loop={true}
                className="text-sm font-bold font-mono text-white"
              />
              <br/>
            </div>

            {/* Large heading with text generate effect */}
            <TextGenerateEffect 
              words="Hi, I'm Edam"
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white"
            />

            {/* Thin paragraph with strategic bold */}
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              <strong className="font-bold">Data Science engineering student</strong>
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              passionate about exploring data, building intelligent systems, and learning how technology shapes the world. <strong className="font-semibold">Currently available</strong> for new projects.
            </p>


          </div>
        </div>
        
        {/* Right Column - Wider, Stacked Cards */}
        <div className="lg:col-span-8 space-y-8 lg:mt-24">

          {/* Projects Section - Minimalist Box with Neon Border */}
          <section className="border-3 rounded-sm border-emerald-500 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold !text-white">Projects</h2>

            </div>
            
            <ul className="space-y-0">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block py-1 text-sm !text-gray-300 hover:!text-white transition-colors"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>

            {featuredProjects.length === 0 && (
              <p className="!text-gray-600 text-center py-6 text-sm">
                No projects yet. Check back soon.
              </p>
            )}
          </section>

          {/* Posts Section - Minimalist Box with Neon Border */}
          <section className="border-3 rounded-sm border-emerald-500 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold !text-white">Posts</h2>

            </div>

            <ul className="space-y-0">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="block py-1 text-sm !text-gray-300 hover:!text-white transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>

            {recentPosts.length === 0 && (
              <p className="!text-gray-600 text-center py-6 text-sm">
                No posts yet. Coming soon.
              </p>
            )}
          </section>
          
        </div>
      </div>
    </div>
  );
}
