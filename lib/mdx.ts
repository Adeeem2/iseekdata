import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  content: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export async function getProjects(): Promise<Project[]> {
  const projectsDir = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const files = fs.readdirSync(projectsDir);
  
  const projects = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const filePath = path.join(projectsDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        tags: data.tags || [],
        image: data.image,
        link: data.link,
        content,
      };
    });

  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(contentDirectory, 'projects', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    tags: data.tags || [],
    image: data.image,
    link: data.link,
    content,
  };
}

export async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(contentDirectory, 'posts');
  
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs.readdirSync(postsDir);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const filePath = path.join(postsDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(contentDirectory, 'posts', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    content,
  };
}
