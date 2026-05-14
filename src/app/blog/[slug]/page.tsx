import { getPostData, getSortedPostsData } from "@/lib/blog";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostData(resolvedParams.slug);

  return (
    <article className="flex flex-col items-center w-full pb-32">
      <div className="w-full max-w-3xl px-6 pt-24 pb-8 md:pt-32">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2 text-zinc-400">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </span>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl px-6">
        <div className="prose prose-invert prose-emerald max-w-none prose-pre:bg-[#282c34] prose-pre:border prose-pre:border-white/10">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
