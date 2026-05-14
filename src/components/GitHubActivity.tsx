import { GitBranch, Star, GitCommit } from "lucide-react";

export function GitHubActivity() {
  const username = "dinhvanducdavid";

  return (
    <div className="flex flex-col gap-8 w-full border-t border-white/10 pt-16 mt-16">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <GitBranch className="w-8 h-8 text-emerald-400" />
          GitHub Integration
        </h2>
        <p className="text-zinc-400 max-w-2xl">
          Real-time open source contributions, pinned repositories, and activity metrics fetched directly from GitHub.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* GitHub Stats Card */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col gap-6 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl font-medium text-white relative z-10 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            Contribution Activity
          </h3>
          {/* Using github-readme-stats for dynamic SVG generation */}
          <div className="relative z-10 w-full flex justify-center">
            {/* Note: We use a dark theme parameter to match the site */}
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=react&hide_border=true&bg_color=00000000&title_color=34d399&icon_color=34d399&text_color=a1a1aa`}
              alt="GitHub Stats"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Top Languages Card */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col gap-6 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl font-medium text-white relative z-10 flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-emerald-400" />
            Top Languages
          </h3>
          <div className="relative z-10 w-full flex justify-center">
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=react&hide_border=true&bg_color=00000000&title_color=34d399&text_color=a1a1aa`}
              alt="Top Languages"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <a 
          href={`https://github.com/${username}`}
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-colors"
        >
          View full GitHub Profile
        </a>
      </div>
    </div>
  );
}
