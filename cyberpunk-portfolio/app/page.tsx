import Link from "next/link"
import { GlitchText } from "@/components/glitch-text"
import { BentoGrid } from "@/components/bento-grid"
import { BentoCard } from "@/components/bento-card"
import { Navigation } from "@/components/navigation"
import { HolographicBackground } from "@/components/holographic-background"
import { NeonButton } from "@/components/neon-button"
import { Code, User, Briefcase, FileText, Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background effects */}
      <HolographicBackground />

      {/* Header */}
      <header className="relative z-10 pt-20 pb-12 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-8 relative">
            <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-70 animate-pulse-slow"></div>
            <div className="relative size-36 rounded-full border-2 border-cyan-400/50 overflow-hidden glow-cyan">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-black"></div>
              <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse-slow">
                  FS
                </span>
              </div>
              <div className="absolute inset-0 bg-hexagon-pattern opacity-30"></div>
              <div className="absolute inset-0 border-4 border-cyan-400/20 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
            <GlitchText>ALEX CYBER</GlitchText>
          </h1>
          <div className="relative mb-6">
            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-size-200 animate-gradient-x font-mono tracking-wider">
              FULL-STACK DEVELOPER
            </p>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
          <p className="max-w-2xl text-gray-300 text-lg mb-8">
            Building digital experiences at the intersection of design and technology. Specializing in modern web
            applications with a focus on performance and user experience.
          </p>

          <div className="flex gap-6 mt-2">
            <Link
              href="https://github.com"
              className="size-12 flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-cyan-400 transition-all duration-300 group hover:scale-110 hover:glow-cyan"
            >
              <Github className="size-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="size-12 flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-purple-400 transition-all duration-300 group hover:scale-110 hover:glow-purple"
            >
              <Linkedin className="size-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </Link>
            <Link
              href="https://twitter.com"
              className="size-12 flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-cyan-400 transition-all duration-300 group hover:scale-110 hover:glow-cyan"
            >
              <Twitter className="size-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <div className="relative z-10 px-4 md:px-6 max-w-7xl mx-auto pb-20">
        <BentoGrid>
          {/* About section */}
          <BentoCard id="about" title="About Me" icon={<User />} className="md:col-span-2" variant="cyan">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate full-stack developer with 5+ years of experience building modern web applications. My
                journey in tech began with a fascination for creating digital experiences that blend aesthetics with
                functionality.
              </p>
              <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-950/50 to-purple-950/50 border border-cyan-800/30 backdrop-blur-sm">
                <p className="text-cyan-300 font-medium mb-2">// Personal Mission</p>
                <p className="text-gray-300">
                  To push the boundaries of web technology while creating immersive digital experiences that leave a
                  lasting impression.
                </p>
              </div>
              <p>
                When I'm not coding, you can find me exploring cyberpunk literature, experimenting with digital art, or
                contributing to open-source projects that push the boundaries of web technology.
              </p>
            </div>
          </BentoCard>

          {/* Skills section */}
          <BentoCard
            id="skills"
            title="Skills"
            icon={<Code />}
            className="md:col-span-1 md:row-span-2"
            variant="purple"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-cyan-400 mb-3 flex items-center">
                  <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                  FRONTEND
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 hover:scale-105 hover:border-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-purple-400 mb-3 flex items-center">
                  <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                  BACKEND
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs bg-purple-950/50 border border-purple-800/50 text-purple-400 hover:scale-105 hover:border-purple-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2 animate-pulse"></span>
                  TOOLS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "Vercel", "Figma"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs bg-gray-900/80 border border-gray-700/50 text-gray-300 hover:scale-105 hover:border-gray-500 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-800/50">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="text-cyan-400">Frontend Development</span>
                      <span className="text-cyan-400">95%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="text-purple-400">Backend Development</span>
                      <span className="text-purple-400">90%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="text-gray-400">UI/UX Design</span>
                      <span className="text-gray-400">85%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gray-500 to-gray-300 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Projects section */}
          <BentoCard
            id="projects"
            title="Projects"
            icon={<Briefcase />}
            className="md:col-span-2 md:row-span-2"
            variant="gradient"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "NeoVerse",
                  description: "A virtual reality marketplace for digital assets with blockchain integration",
                  tags: ["React", "Three.js", "Solidity"],
                  image: "/placeholder.svg?height=160&width=320",
                  color: "cyan",
                },
                {
                  title: "SynthWave",
                  description: "Browser-based music production tool with AI-assisted composition",
                  tags: ["Next.js", "Web Audio API", "TensorFlow.js"],
                  image: "/placeholder.svg?height=160&width=320",
                  color: "purple",
                },
                {
                  title: "CyberDash",
                  description: "Real-time analytics dashboard for monitoring system performance",
                  tags: ["Vue", "D3.js", "WebSockets"],
                  image: "/placeholder.svg?height=160&width=320",
                  color: "cyan",
                },
                {
                  title: "QuantumChat",
                  description: "End-to-end encrypted messaging platform with ephemeral messages",
                  tags: ["React Native", "Node.js", "Signal Protocol"],
                  image: "/placeholder.svg?height=160&width=320",
                  color: "purple",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-800 hover:border-${project.color}-500/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-${project.color}-500/20`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                  <div className="absolute inset-0 bg-hexagon-pattern opacity-10"></div>
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${project.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover opacity-70 group-hover:opacity-90 transition-all duration-500 scale-105 group-hover:scale-110"
                  />

                  <div className="relative z-10 p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className={`font-bold text-${project.color}-400 group-hover:text-${project.color}-300 transition-colors text-xl`}
                      >
                        {project.title}
                      </h3>
                      <span
                        className={`size-8 flex items-center justify-center rounded-full bg-${project.color}-950/50 border border-${project.color}-800/50 group-hover:border-${project.color}-400 transition-all`}
                      >
                        <ExternalLink className={`size-4 text-${project.color}-400`} />
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-full text-xs bg-${project.color}-950/50 border border-${project.color}-800/30 text-${project.color}-400`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <NeonButton href="#" color="gradient">
                View All Projects
              </NeonButton>
            </div>
          </BentoCard>

          {/* Blog section */}
          <BentoCard id="blog" title="Blog" icon={<FileText />} className="md:col-span-1" variant="cyan">
            <div className="space-y-4">
              {[
                {
                  title: "The Future of Web Development with AI",
                  date: "Mar 15, 2024",
                  minutes: 5,
                  excerpt: "Exploring how AI is transforming the landscape of web development...",
                },
                {
                  title: "Building Immersive 3D Experiences with Three.js",
                  date: "Feb 22, 2024",
                  minutes: 8,
                  excerpt: "A deep dive into creating engaging 3D web experiences...",
                },
                {
                  title: "Optimizing React Performance in Large Applications",
                  date: "Jan 10, 2024",
                  minutes: 6,
                  excerpt: "Practical strategies to improve React app performance...",
                },
              ].map((post, index) => (
                <Link
                  href="#"
                  key={index}
                  className="block p-4 rounded-lg bg-cyan-950/30 border border-cyan-800/30 hover:border-cyan-500/50 hover:bg-cyan-900/20 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <h3 className="font-medium text-white group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.minutes} min read</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center">
              <NeonButton href="#" color="cyan" size="sm">
                Read More Articles
              </NeonButton>
            </div>
          </BentoCard>

          {/* Contact section */}
          <BentoCard id="contact" title="Contact" icon={<Mail />} className="md:col-span-2" variant="purple">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="p-5 rounded-lg bg-purple-950/30 border border-purple-800/30 backdrop-blur-sm mb-6">
                  <p className="text-lg text-purple-300 font-medium mb-2">Let's Connect</p>
                  <p className="text-gray-300">
                    Have a project in mind or just want to chat? Feel free to reach out! I'm always open to discussing
                    new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300 group">
                    <div className="size-10 flex items-center justify-center rounded-full bg-purple-950/50 border border-purple-800/50 group-hover:border-purple-400 transition-all">
                      <Mail className="size-5 text-purple-400" />
                    </div>
                    <span className="group-hover:text-purple-400 transition-colors">alex@cyberdomain.dev</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="size-10 flex items-center justify-center rounded-full bg-green-950/50 border border-green-800/50">
                      <div className="size-5 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <span>Available for freelance work</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-purple-400 font-medium">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-purple-800/30 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-purple-400 font-medium">Your Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-purple-800/30 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-purple-400 font-medium">Message</label>
                    <textarea
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-purple-800/30 focus:border-purple-500 focus:outline-none transition-colors resize-none placeholder:text-gray-600"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <NeonButton type="submit" color="purple" fullWidth>
                      Send Message
                    </NeonButton>
                  </div>
                </form>
              </div>
            </div>
          </BentoCard>
        </BentoGrid>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="size-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mr-3 glow-cyan"></div>
              <div>
                <p className="text-white font-bold">Alex Cyber</p>
                <p className="text-gray-500 text-sm">Full-Stack Developer</p>
              </div>
            </div>

            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Alex Cyber. All rights reserved.
            </div>

            <div className="flex items-center">
              <span className="text-gray-500 text-sm mr-2">Designed and built with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span className="text-gray-500 text-sm ml-2">in the digital realm</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

