import { LanguageDistributionCard } from "./language-distribution-card";
import { TopRepositoriesCard } from "./top-repositories-card";
import type { DeveloperProfile } from "@/lib/map-github-user";

type AnalyticsGridProps = {
  developer: DeveloperProfile;
};

export function AnalyticsGrid({ developer }: AnalyticsGridProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <LanguageDistributionCard developer={developer} />
      <TopRepositoriesCard developer={developer} />
    </section>
  );
}
