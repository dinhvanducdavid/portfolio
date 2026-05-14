import { Smartphone, MonitorSmartphone, Code, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of Android open-source projects, AOSP modifications, and technical experiments by David.",
};

const categories = [
  {
    title: "AOSP & SystemUI",
    icon: <MonitorSmartphone className="w-5 h-5 text-emerald-400" />,
    projects: [
      {
        title: "Navigation Bar Customization",
        description: "Implemented a fully custom gesture navigation system integrated directly into AOSP framework, bypassing standard Launcher3 dependencies.",
        tech: ["AOSP", "Java", "SystemUI", "WindowManager"],
        link: "#",
      },
      {
        title: "Brightness Framework Debugging",
        description: "Diagnosed and resolved critical race conditions in the Android DisplayPowerController, ensuring smooth brightness transitions.",
        tech: ["Framework", "C++", "Debugging"],
        link: "#",
      },
      {
        title: "Fingerprint Enrollment Flow",
        description: "Overhauled the SystemUI biometric enrollment UI, achieving a 30% reduction in enrollment failures through better UX cues.",
        tech: ["SystemUI", "Kotlin", "Biometrics"],
        link: "#",
      }
    ]
  },
  {
    title: "Android Applications",
    icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
    projects: [
      {
        title: "Newton's Cradle Live Wallpaper",
        description: "A high-performance physics-based live wallpaper built from scratch using the Android Canvas API with realistic collision handling.",
        tech: ["Kotlin", "Canvas API", "Physics Simulation"],
        link: "#",
      },
      {
        title: "System Log Utility",
        description: "An internal tool for advanced logcat filtering, providing regular expression support and real-time highlighted log streams directly on device.",
        tech: ["Jetpack Compose", "Coroutines", "Shell Scripts"],
        link: "#",
      }
    ]
  },
  {
    title: "Technical Experiments",
    icon: <Code className="w-5 h-5 text-emerald-400" />,
    projects: [
      {
        title: "Binder IPC Benchmark",
        description: "A comprehensive test suite measuring latency and throughput of Binder transactions vs ashmem for large data transfers.",
        tech: ["AIDL", "NDK", "C++"],
        link: "https://github.com",
      },
      {
        title: "SurfaceView vs TextureView",
        description: "A deep dive rendering comparison app demonstrating the performance delta and memory usage differences between the two view types.",
        tech: ["Android SDK", "Profiling", "Graphics"],
        link: "https://github.com",
      }
    ]
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center w-full pb-24">
      <section className="w-full max-w-5xl px-6 py-24 md:py-32 flex flex-col gap-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Projects & Experiments
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            A selection of my work spanning system architecture, performance optimization, and application development.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {categories.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-8">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                {category.icon}
                <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.projects.map((project, pIdx) => (
                  <div 
                    key={pIdx} 
                    className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-medium text-white group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <Link 
                          href={project.link}
                          target="_blank"
                          className="text-zinc-500 hover:text-white transition-colors"
                        >
                          {project.link.includes('github') ? (
                            <Code2 className="w-5 h-5" />
                          ) : (
                            <ExternalLink className="w-5 h-5" />
                          )}
                        </Link>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-zinc-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
