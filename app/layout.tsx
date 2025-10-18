import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name - Developer & Designer",
  description: "Personal portfolio showcasing projects and writings",
  keywords: ["portfolio", "developer", "designer", "projects"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourname.dev",
    title: "Your Name - Developer & Designer",
    description: "Personal portfolio showcasing projects and writings",
    siteName: "Your Name Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Top centered social icons */}
        <div className="w-full border-b border-black bg-black">
          <div className="max-w-content mx-auto px-8 md:px-12 py-4">
            <div className="flex justify-center items-center gap-6">
              <a href="https://github.com/Adeeem2" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-gray-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/edam-taktek-5b9b27338/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:edam.taktek65@gmail.com" aria-label="Email" className="text-white hover:text-gray-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}