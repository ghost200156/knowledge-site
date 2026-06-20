import { defineConfig } from "astro/config";

const [githubOwner, githubRepo] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && githubOwner && githubRepo;
const isUserOrOrgPage = githubRepo === `${githubOwner}.github.io`;

export default defineConfig({
  site: isGitHubPagesBuild ? `https://${githubOwner}.github.io` : "http://localhost:4321",
  ...(isGitHubPagesBuild && !isUserOrOrgPage ? { base: `/${githubRepo}` } : {}),
});
