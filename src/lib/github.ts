const GITHUB_API_BASE = "https://api.github.com";

export type GitHubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
};

async function githubFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("GitHub user not found");
    }

    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

export async function getUser(username: string): Promise<GitHubUser> {
  return githubFetch<GitHubUser>(`/users/${username}`);
}

export async function getUserRepos(username: string): Promise<GitHubRepo[]> {
  return githubFetch<GitHubRepo[]>(
    `/users/${username}/repos?sort=updated&per_page=100`,
  );
}
