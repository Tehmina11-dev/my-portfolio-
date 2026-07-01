import { FaCodeBranch, FaUserGroup, FaStar } from "react-icons/fa6";
import { LuGitCommitHorizontal } from "react-icons/lu";
import type { GitHubStat } from "@/types";

/**
 * Placeholder GitHub statistics. Replace the values with real numbers,
 * or wire this to the GitHub REST/GraphQL API for live stats.
 */
export const githubStats: GitHubStat[] = [
  {
    id: "repos",
    label: "Repositories",
    value: 32,
    suffix: "+",
    icon: FaCodeBranch,
  },
  {
    id: "commits",
    label: "Total Commits",
    value: 1200,
    suffix: "+",
    icon: LuGitCommitHorizontal,
  },
  {
    id: "contributions",
    label: "Contributions",
    value: 800,
    suffix: "+",
    icon: FaStar,
  },
  {
    id: "followers",
    label: "Followers",
    value: 120,
    suffix: "+",
    icon: FaUserGroup,
  },
];
