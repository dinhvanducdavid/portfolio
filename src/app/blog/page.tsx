import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import { Calendar, ChevronRight } from "lucide-react";

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col items-center w-full pb-24">
      <section className="w-full max-w-3xl px-6 py-24 md:py-32 flex flex-col gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Engineering Blog
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Deep technical dives into Android architecture, AOSP internals, and performance optimization.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <h2 className="text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h2>
                <span className="flex items-center gap-2 text-sm text-zinc-500 whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </span>
              </div>
              
              <p className="text-zinc-400 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-emerald-400 text-sm font-medium flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Read post <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
