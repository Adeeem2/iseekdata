import { getProjects, getPosts } from '@/lib/mdx';
import HomeClient from '@/components/HomeClient';

export default async function Home() {
  const projects = await getProjects();
  const posts = await getPosts();
  
  // Show only first 4 projects and 3 posts on home page
  const featuredProjects = projects.slice(0, 4);
  const recentPosts = posts.slice(0, 3);

  return <HomeClient featuredProjects={featuredProjects} recentPosts={recentPosts} />;
}