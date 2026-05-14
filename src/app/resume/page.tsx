import { Metadata } from "next";
import { Briefcase, GraduationCap, Award, Terminal, Code2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: "David's professional experience, skills, and certifications as an Android Platform Engineer.",
};

const experience = [
  {
    role: "Senior Android Platform Engineer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Leading the SystemUI architecture team. Reduced Binder IPC latency by 15% and implemented custom gesture navigation frameworks for specialized Android hardware.",
  },
  {
    role: "Android Developer",
    company: "Mobile Innovations",
    period: "2020 - 2023",
    description: "Developed and maintained 3 highly-rated Android applications using Kotlin and Jetpack Compose. Optimized Canvas rendering for custom graphing libraries.",
  },
];

const skills = [
  "Android SDK", "Kotlin", "Java", "C++", "AOSP", "SystemUI", 
  "Binder IPC", "NDK", "JNI", "Jetpack Compose", "Coroutines", "Git"
];

const certifications = [
  {
    name: "Associate Android Developer",
    issuer: "Google",
    year: "2021",
  },
  {
    name: "Advanced Android Architecture",
    issuer: "Coursera / Meta",
    year: "2022",
  }
];

export default function Resume() {
  return (
    <div className="flex flex-col items-center w-full pb-24">
      <section className="w-full max-w-4xl px-6 py-24 md:py-32 flex flex-col gap-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Resume
            </h1>
            <p className="text-xl text-zinc-400">
              Android Platform Engineer & AOSP Specialist
            </p>
          </div>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all flex items-center gap-2"
          >
            Download PDF
          </a>
        </div>

        {/* Experience Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
          </div>
          <div className="flex flex-col gap-8 border-l border-white/10 ml-3 pl-8">
            {experience.map((job, idx) => (
              <div key={idx} className="relative flex flex-col gap-2">
                <div className="absolute w-3 h-3 bg-emerald-400 rounded-full -left-[38px] top-1.5" />
                <h3 className="text-xl font-medium text-white">{job.role}</h3>
                <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                  <span>{job.company}</span>
                  <span>•</span>
                  <span>{job.period}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed mt-2">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="text-lg font-medium text-white">{cert.name}</h3>
                <div className="flex justify-between items-center mt-2 text-zinc-400 text-sm">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Links Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Open Source</h2>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-medium text-white">GitHub Profile</h3>
              <p className="text-zinc-400 text-sm">View my latest open source contributions and repositories.</p>
            </div>
            <Link 
              href="https://github.com/dinhvanducdavid" 
              target="_blank"
              className="px-6 py-3 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-lg font-medium transition-all"
            >
              View GitHub
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
