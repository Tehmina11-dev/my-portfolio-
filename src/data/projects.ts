import type { Project, ProjectTag } from "@/types";

/** Filter tags rendered above the project grid. */
export const projectFilters: ProjectTag[] = [
  "All",
  "AI",
  "Full-Stack",
  "Frontend",
  "Dashboard",
];

/**
 * Featured projects. Replace `image` with real screenshots placed under
 * /public/assets/projects and update the github/demo links.
 */
export const projects: Project[] = [
  {
    id: "ai-chat",
    title: "AI-Powered Chat Application",
    description:
      "Real-time chat application with AI-powered responses and semantic search capabilities.",
    longDescription:
      "A production-grade messaging platform combining real-time group chat with an AI assistant. Messages are embedded and indexed in Weaviate, enabling semantic search across conversation history and context-aware AI replies.",
    features: [
      "Authentication",
      "Group Chat",
      "Real-Time Messaging",
      "AI Chat Assistant",
      "Vector Search",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "NeonDB",
      "Weaviate",
      "Socket.IO",
    ],
    tags: ["AI", "Full-Stack"],
    image: "/assets/projects/ai-chat.svg",
    github: "https://github.com/Tehmina11-dev/Chat-app",
    demo: "https://ai-chat-app.vercel.app",
    featured: true,
  },
  {
    id: "task-manager",
    title: "Task Management System",
    description:
      "Full-stack task manager with dashboards and role-based access control.",
    longDescription:
      "A team productivity tool where admins assign and track work across members. Includes a metrics dashboard, granular role-based permissions, and an audit-friendly activity model.",
    features: [
      "Authentication",
      "Dashboard",
      "Task Management",
      "Role-based Access",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    tags: ["Full-Stack", "Dashboard"],
    image: "/assets/projects/task-manager.svg",
    github: "https://github.com/tehmina11-dev/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    featured: true,
  },
  {
    id: "landing-page",
    title: "Landing Page Project",
    description:
      "High-converting, fully responsive marketing landing page with smooth animations.",
    longDescription:
      "A polished product landing page focused on conversion: crisp typography, motion-driven storytelling, and flawless responsiveness from mobile to desktop.",
    features: [
      "Responsive Layout",
      "Smooth Animations",
      "Reusable Sections",
      "SEO Friendly",
    ],
    tech: ["React", "Tailwind CSS"],
    tags: ["Frontend"],
    image: "/assets/projects/landing-page.svg",
    github: "https://github.com/tehmina11-dev/landing-page",
    demo: "https://landing-page-demo.vercel.app",
  },
  {
    id: "dashboard-app",
    title: "Dashboard Application",
    description:
      "Analytics dashboard with interactive charts and live API integrations.",
    longDescription:
      "A data-dense admin dashboard surfacing KPIs through interactive charts. Pulls live data from external APIs and presents it with clean, filterable visualizations.",
    features: [
      "Interactive Charts",
      "API Integration",
      "Filtering",
      "Responsive Widgets",
    ],
    tech: ["Next.js", "TypeScript", "Charts", "API Integration"],
    tags: ["Dashboard", "Frontend"],
    image: "/assets/projects/dashboard.svg",
    github: "https://github.com/tehmina11-dev/dashboard-app",
    demo: "https://dashboard-app-demo.vercel.app",
  },
];
