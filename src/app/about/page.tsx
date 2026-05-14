import { User, Cpu, Code2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about David, an Android Platform Engineer specializing in AOSP customization and deep system-level architecture.",
};

export default function About() {
  return (
    <div className="flex flex-col items-center w-full pb-24">
      <section className="w-full max-w-3xl px-6 py-24 md:py-32 flex flex-col gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            About Me
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            I am an Android Platform Engineer specializing in AOSP customization and deep system-level architecture.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-zinc-300">
          <div className="flex flex-col gap-16">
            
            {/* Background */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white border-b border-white/10 pb-4">
                <User className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-semibold m-0">Background</h2>
              </div>
              <p className="leading-relaxed">
                With a strong foundation in Android application development, I transitioned into system-level engineering to solve deeper, more complex challenges. My experience ranges from crafting user-facing features to modifying the core Android framework, giving me a comprehensive understanding of the entire Android stack.
              </p>
            </div>

            {/* Technical Focus */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white border-b border-white/10 pb-4">
                <Cpu className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-semibold m-0">Technical Focus</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0">
                {[
                  "AOSP Customization",
                  "Android Framework Development",
                  "UI Rendering & Performance",
                  "SystemUI Modifications",
                  "Binder IPC & AIDL",
                  "Complex Debugging & Tracing",
                  "Multi-version Android Maintenance",
                  "C++ / JNI Integration"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 m-0 bg-white/5 p-4 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Philosophy */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white border-b border-white/10 pb-4">
                <Code2 className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-semibold m-0">Engineering Philosophy</h2>
              </div>
              <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 italic text-zinc-400 bg-white/5 rounded-r-lg p-6">
                "I enjoy solving complex Android system problems, creating scalable architectures, and improving user experiences through deep platform understanding."
              </blockquote>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
