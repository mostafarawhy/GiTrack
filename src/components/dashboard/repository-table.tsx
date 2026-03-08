import { Star, GitFork } from "lucide-react";
import type { DeveloperProfile } from "@/src/lib/mock-user";

type RepositoryTableProps = {
  developer: DeveloperProfile;
};

export function RepositoryTable({ developer }: RepositoryTableProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Repositories</h3>
        <p className="text-sm text-white/50">Detailed project breakdown</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-white/40">
              <th className="pb-2 font-medium">Repository</th>
              <th className="pb-2 font-medium">Language</th>
              <th className="pb-2 font-medium">Stars</th>
              <th className="pb-2 font-medium">Forks</th>
              <th className="pb-2 font-medium">Updated</th>
            </tr>
          </thead>

          <tbody>
            {developer.repositories.map((repo) => (
              <tr
                key={repo.id}
                className="rounded-xl bg-white/5 text-sm text-white/70"
              >
                <td className="rounded-l-xl border-y border-l border-white/10 px-4 py-4">
                  <div>
                    <p className="font-medium text-white">{repo.name}</p>
                    <p className="mt-1 text-xs text-white/50">
                      {repo.description}
                    </p>
                  </div>
                </td>

                <td className="border-y border-white/10 px-4 py-4">
                  {repo.language}
                </td>

                <td className="border-y border-white/10 px-4 py-4">
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    {repo.stars}
                  </span>
                </td>

                <td className="border-y border-white/10 px-4 py-4">
                  <span className="flex items-center gap-2">
                    <GitFork className="h-4 w-4 text-cyan-400" />
                    {repo.forks}
                  </span>
                </td>

                <td className="rounded-r-xl border-y border-r border-white/10 px-4 py-4 text-white/50">
                  {repo.updatedAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
