import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Your Name',
  description: 'Learn more about my background, skills, and experience',
};

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'Python',
  'SQL',
  'Git',
  'UI/UX Design',
];

export default function About() {
  return (
    <div className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 min-h-screen flex flex-col justify-center">
      <h1 className="text-base font-medium text-[#e5e5e5] mb-12">About</h1>

      {/* Bio */}
      <div className="mb-16">
        <div className="space-y-4 text-base text-[#999999] leading-relaxed">
          <p>
            I&apos;m a developer and designer with a passion for creating
            elegant, minimal digital experiences. I focus on clean code,
            thoughtful design, and solving problems efficiently.
          </p>
          <p>
            My journey in tech started with curiosity about how things work.
            That curiosity evolved into building web applications, analyzing
            data, and crafting user interfaces that prioritize simplicity.
          </p>
          <p>
            When I&apos;m not coding, I&apos;m exploring new technologies,
            contributing to open source, or writing about what I&apos;ve learned.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-base font-medium text-[#e5e5e5] mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                px-4 py-3 bg-[#0f0f0f] border border-[#333333]
                text-sm text-[#999999]
                transition-all duration-200
                hover:border-[#666666] hover:text-[#e5e5e5]
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-base font-medium text-[#e5e5e5] mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-[#4a9eff] pl-4">
            <h3 className="text-base font-normal text-[#e5e5e5] mb-1">Senior Developer</h3>
            <p className="text-sm text-[#666666] mb-2">Company Name • 2021 - Present</p>
            <p className="text-sm text-[#999999] leading-relaxed">
              Leading development of modern web applications using Next.js, React,
              and TypeScript. Mentoring junior developers and establishing best
              practices.
            </p>
          </div>

          <div className="border-l-2 border-[#333333] pl-4">
            <h3 className="text-base font-normal text-[#e5e5e5] mb-1">Full Stack Developer</h3>
            <p className="text-sm text-[#666666] mb-2">Previous Company • 2019 - 2021</p>
            <p className="text-sm text-[#999999] leading-relaxed">
              Built and maintained client projects, focusing on performance
              optimization and user experience with React and Node.js.
            </p>
          </div>

          <div className="border-l-2 border-[#333333] pl-4">
            <h3 className="text-base font-normal text-[#e5e5e5] mb-1">Junior Developer</h3>
            <p className="text-sm text-[#666666] mb-2">First Company • 2017 - 2019</p>
            <p className="text-sm text-[#999999] leading-relaxed">
              Started my professional journey learning modern web development
              practices and contributing to frontend and backend features.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
