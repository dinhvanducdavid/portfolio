import { Metadata } from "next";
import { Mail, Code2, Globe, Send } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with David. Available for Android Platform engineering roles, consulting, and open-source collaboration.",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full pb-24">
      <section className="w-full max-w-4xl px-6 py-24 md:py-32 flex flex-col gap-16">
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Get in Touch
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Whether you have a question about Android architecture, want to discuss a project, or just say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          
          {/* Contact Links */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link 
              href="mailto:david@example.com"
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-zinc-400 text-sm">david@example.com</p>
              </div>
            </Link>

            <Link 
              href="https://github.com/dinhvanducdavid"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">GitHub</h3>
                <p className="text-zinc-400 text-sm">@dinhvanducdavid</p>
              </div>
            </Link>

            <Link 
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">LinkedIn</h3>
                <p className="text-zinc-400 text-sm">Let's connect</p>
              </div>
            </Link>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 p-8 rounded-2xl border border-white/10 bg-[#111]">
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg transition-colors mt-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
