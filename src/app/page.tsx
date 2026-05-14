import Link from "next/link";
import { ArrowRight, ChevronRight, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 py-24 md:py-32 flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-zinc-300 w-fit mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl">
          Hi, I&apos;m David <br className="hidden md:block" />
          <span className="text-zinc-500">Android Platform Engineer</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mt-2">
          I specialize in AOSP customization, SystemUI, Android architecture, and performance optimization. Building scalable systems and solving complex system-level problems.
        </p>
        <div className="flex items-center gap-4 mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="w-full max-w-5xl px-6 py-16 border-t border-white/5">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-5 h-5 text-zinc-400" />
          <h2 className="text-2xl font-semibold text-white">Technical Arsenal</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Kotlin", "Java", "Android SDK", "AOSP",
            "SystemUI", "Binder IPC", "Jetpack", "C++ / JNI",
            "SurfaceView", "TextureView", "Git / Gerrit", "Performance Profiling"
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 flex items-center gap-3 hover:border-white/20 hover:bg-white/10 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              <span className="text-sm font-medium text-zinc-300">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full max-w-5xl px-6 py-16 border-t border-white/5">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-white">Featured Work</h2>
          <Link href="/projects" className="text-sm text-zinc-400 hover:text-white flex items-center gap-1 transition-colors">
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "SystemUI Navigation Customization",
              desc: "Deep integration into AOSP SystemUI for custom gesture navigation and specialized status bar behaviors.",
              tags: ["AOSP", "SystemUI", "Java"],
            },
            {
              title: "High-Performance Rendering Engine",
              desc: "Comparison and implementation of SurfaceView vs TextureView for complex UI rendering and simulations.",
              tags: ["Kotlin", "SurfaceView", "Performance"],
            }
          ].map((project, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 mt-12 border-t border-white/10 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} David. All rights reserved.</p>
      </footer>
    </div>
  );
}
