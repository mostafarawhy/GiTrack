export function extractGitHubUsername(input: string): string {
  const trimmed = input.trim();

  const match = trimmed.match(/github\.com\/([^\/\s]+)/i); //regex to match the username

  return match ? match[1] : trimmed;
}
