import type { DeveloperProfile } from "@/lib/map-github-user";

export type AIAnalysis = {
  summary: string;
  strengths: string[];
  patterns: string[];
  stackFocus: string[];
};

export async function fetchProfileAnalysis(
  developer: DeveloperProfile,
): Promise<AIAnalysis> {
  const response = await fetch("/api/profile-analysis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ developer }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate analysis");
  }

  return response.json();
}
