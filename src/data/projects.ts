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
    id: "babysitter-ui",
    title: "Babysitter UI",
    description:
      "A clean, responsive babysitter booking interface built with React and Tailwind CSS.",
    longDescription:
      "A modern UI for finding and booking babysitters — featuring sitter listings, profile cards, and a smooth, fully responsive booking flow with polished, reusable components.",
    features: [
      "Responsive Layout",
      "Sitter Listings",
      "Booking Flow",
      "Reusable Components",
    ],
    tech: ["React", "Tailwind CSS"],
    tags: ["Frontend"],
    image: "/assets/projects/landing-page.svg",
    github: "https://github.com/Tehmina11-dev/babysitter-ui",
    demo: "https://babysitter-ui.vercel.app",
  },
  {
    id: "ecommerce-stripe",
    title: "E-Commerce Store (Stripe)",
    description:
      "A full-stack e-commerce store with secure Stripe checkout and payments.",
    longDescription:
      "A modern online store with a product catalog, shopping cart, and secure Stripe-powered checkout. Handles payment sessions and order flow end to end with a clean, responsive UI.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Stripe Checkout",
      "Secure Payments",
    ],
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    tags: ["Full-Stack", "Frontend"],
    image: "/assets/projects/dashboard.svg",
    github: "https://github.com/Tehmina11-dev/E-commerce-Stripe",
    demo: "https://e-commerce-stripe.vercel.app",
  },
];
