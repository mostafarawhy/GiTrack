import { Sparkles } from "lucide-react";
import type { DeveloperProfile } from "@/lib/map-github-user";

type DeveloperInsightsCardProps = {
  developer: DeveloperProfile;
};

export function DeveloperInsightsCard({
  developer,
}: DeveloperInsightsCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-purple-500/10 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-cyan-400/15 p-2 text-cyan-300">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            Developer Insights
          </h3>
          <p className="text-sm text-white/50">AI-ready interpretation layer</p>
        </div>
      </div>

      <div className="space-y-3">
        {developer.insights.map((insight) => (
          <div
            key={insight}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white/75"
          >
            {insight}
          </div>
        ))}
      </div>
    </section>
  );
}
