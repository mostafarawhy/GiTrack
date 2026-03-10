import {
  Github,
  Star,
  GitFork,
  Code2,
  FolderKanban,
  Users,
  ArrowUpRight,
} from "lucide-react";

export function DashboardPreview() {
  const stats = [
    {
      title: "Repos",
      value: "26",
      icon: FolderKanban,
      accent: "cyan",
    },
    {
      title: "Stars",
      value: "312",
      icon: Star,
      accent: "purple",
    },
    {
      title: "Forks",
      value: "58",
      icon: GitFork,
      accent: "cyan",
    },
    {
      title: "Top",
      value: "TS",
      icon: Code2,
      accent: "purple",
    },
  ];

  const languages = [
    { name: "TypeScript", value: 45, color: "bg-cyan-400" },
    { name: "JavaScript", value: 30, color: "bg-purple-400" },
    { name: "CSS", value: 15, color: "bg-cyan-500" },
    { name: "HTML", value: 10, color: "bg-fuchsia-400" },
  ];

  const repos = [
    {
      name: "gittrack",
      description: "Developer analytics dashboard.",
      language: "TypeScript",
      stars: 42,
    },
    {
      name: "dermatique",
      description: "Full-stack skincare e-commerce.",
      language: "JavaScript",
      stars: 96,
    },
    {
      name: "foodies-hub",
      description: "Realtime food-sharing platform.",
      language: "JavaScript",
      stars: 71,
    },
  ];

  return (
    <div className="mx-auto mt-14 w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-black/60 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-2xl">
      {/* Mini navbar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <Github className="h-4 w-4 text-black" />
          </div>
          <div>
            <p className="text-base font-semibold text-white">GitTrack</p>
            <p className="text-[11px] text-white/35">Developer Analytics</p>
          </div>
        </div>

        <div className="hidden items-center gap-5 text-xs text-white/45 md:flex">
          <span>Dashboard</span>
          <span>Insights</span>
        </div>
      </div>

      <div className="space-y-4 p-4 md:p-5">
        {/* Top mini bar */}
        <div className="flex flex-col gap-3 rounded-2xl border border-cyan-400/20 bg-white/5 p-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs text-white/50">Viewing dashboard for</p>
            <p className="text-lg font-semibold text-cyan-300">@mostafarawhy</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="rounded-xl bg-cyan-400 px-3 py-2 text-xs font-medium text-black">
              Generate Summary
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65">
              Analyze Profile
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20" />

              <div className="space-y-2">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Mostafa Rawhy
                  </h3>
                  <p className="text-sm text-cyan-300">@mostafarawhy</p>
                </div>

                <p className="max-w-xl text-xs leading-5 text-white/55">
                  Frontend developer building modern interfaces with React,
                  Next.js, and analytics-driven UX.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
                  <span className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-cyan-300" />
                    128 followers
                  </span>
                  <span>74 following</span>
                  <span className="flex items-center gap-2">
                    <FolderKanban className="h-3.5 w-3.5 text-purple-300" />
                    26 repos
                  </span>
                </div>
              </div>
            </div>

            <div className="w-fit rounded-xl bg-white px-3 py-2 text-xs font-medium text-black">
              View GitHub
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const accentClasses =
              stat.accent === "cyan"
                ? "bg-cyan-400/15 text-cyan-300"
                : "bg-purple-400/15 text-purple-300";

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs text-white/45">{stat.title}</p>
                  <div className={`rounded-xl p-2 ${accentClasses}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>

                <p className="text-2xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Analytics */}
        <div className="grid gap-4 xl:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">
                Language Distribution
              </h4>
              <p className="text-xs text-white/40">Repository language mix</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[180px_1fr] lg:items-center">
              <div className="flex items-center justify-center">
                <div className="relative h-36 w-36 rounded-full bg-[conic-gradient(#22d3ee_0_45%,#a855f7_45%_75%,#06b6d4_75%_90%,#d946ef_90%_100%)] shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <div className="absolute inset-[22%] rounded-full bg-black/95 ring-1 ring-white/5" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[11px] text-white/40">Languages</span>
                    <span className="text-xl font-bold text-white">4</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${lang.color}`}
                        />
                        <span className="text-sm font-medium text-white">
                          {lang.name}
                        </span>
                      </div>

                      <span className="text-xs text-white/50">
                        {lang.value}%
                      </span>
                    </div>

                    <div className="h-1.5 rounded-full bg-white/10">
                      <div
                        className={`h-1.5 rounded-full ${lang.color}`}
                        style={{ width: `${lang.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">
                Top Repositories
              </h4>
              <p className="text-xs text-white/40">Highest-impact projects</p>
            </div>

            <div className="space-y-3">
              {repos.map((repo) => (
                <div
                  key={repo.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-white">
                        {repo.name}
                      </p>
                      <p className="mt-1 text-xs text-white/40">
                        {repo.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-white/30" />
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/50">
                    <span>{repo.language}</span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-yellow-400" />
                      {repo.stars}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
