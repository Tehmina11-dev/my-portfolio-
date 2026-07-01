import type { ExperienceItem } from "@/types";

/**
 * Timeline entries for the Experience section. These are professionally
 * framed placeholders — swap in real dates, companies and details.
 */
export const experiences: ExperienceItem[] = [
  {
    id: "frontend-intern",
    role: "Frontend Developer Intern",
    organization: "Software House",
    period: "Internship",
    type: "Internship",
    description:
      "Contributed to client-facing web applications, translating Figma designs into responsive, accessible React components.",
    highlights: [
      "Built reusable, responsive UI components with React & Tailwind CSS",
      "Collaborated with designers and backend engineers in an Agile team",
      "Worked daily with Git — feature branches, pull requests, and code reviews",
    ],
    tech: ["React", "Tailwind CSS", "TypeScript", "Git"],
  },
  {
    id: "software-house",
    role: "Software House Experience",
    organization: "Development Team",
    period: "Team Project Work",
    type: "Work",
    description:
      "Worked within a development team delivering full-stack features, from API design to frontend integration, under real deadlines.",
    highlights: [
      "Implemented end-to-end features across frontend and Node.js backends",
      "Integrated PostgreSQL & NeonDB for reliable data persistence",
      "Followed team development practices and shared coding standards",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "NeonDB"],
  },
  {
    id: "personal-projects",
    role: "Personal Projects",
    organization: "Self-Directed",
    period: "Ongoing",
    type: "Project",
    description:
      "Built and shipped self-directed projects to explore AI integrations, vector databases, and modern full-stack patterns.",
    highlights: [
      "Created an AI chat app with semantic search powered by Weaviate",
      "Experimented with embeddings, RAG, and AI API integrations",
      "Maintained clean architecture, TypeScript types, and reusable components",
    ],
    tech: ["Next.js", "TypeScript", "Weaviate", "AI APIs"],
  },
  {
    id: "team-collaboration",
    role: "Team Collaboration Experience",
    organization: "Cross-Functional Teams",
    period: "Across Projects",
    type: "Collaboration",
    description:
      "Comfortable working in collaborative, Git-driven environments with shared ownership of the codebase.",
    highlights: [
      "Git workflow: branches, pull requests, and conflict resolution",
      "Code reviews to maintain quality and share knowledge",
      "Clear async communication and documentation",
    ],
    tech: ["Git", "GitHub", "Agile"],
  },
];
