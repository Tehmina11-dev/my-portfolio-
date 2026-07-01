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
    demo: "https://chatfrontend-theta.vercel.app/",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A modern, responsive personal portfolio built with Next.js, TypeScript, and Framer Motion.",
    longDescription:
      "A premium, dark-mode-first portfolio showcasing my projects, skills, and experience. Features smooth animations, a light/dark theme toggle, project filtering, a validated contact form, and full SEO — all built with clean, reusable, type-safe components.",
    features: [
      "Responsive Design",
      "Dark / Light Mode",
      "Smooth Animations",
      "SEO Optimized",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tags: ["Frontend"],
    image: "/assets/projects/task-manager.svg",
    github: "https://github.com/Tehmina11-dev/my-portfolio-",
    demo: "https://my-portfolio-nu-seven-13.vercel.app/",
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
