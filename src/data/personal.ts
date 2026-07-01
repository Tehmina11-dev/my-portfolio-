/**
 * Central source of truth for personal details, social links and the
 * "About" narrative. Edit this file to personalise the portfolio.
 */
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import type { SocialLink } from "@/types";

export const personal = {
  name: "Tehmina",
  firstName: "Tehmina",
  title: "Frontend Developer | React & Next.js Developer | AI Enthusiast",
  tagline:
    "I build modern, scalable, and user-friendly web applications with React, Next.js, TypeScript, and AI-powered features.",
  location: "Pakistan",
  availability: "Open to opportunities",
  email: "tehminadev@gmail.com",
  github: "https://github.com/tehmina11-dev",
  linkedin: "https://www.linkedin.com/in/tehmina-dev-9722222ab",
  about: {
    intro:
      "I am a BSCS graduate and passionate software developer with experience in building responsive web applications, integrating AI features, and working with modern technologies including React, Next.js, Node.js, PostgreSQL, NeonDB, and vector databases. I enjoy solving real-world problems and continuously learning new technologies.",
    education: {
      degree: "BSCS — Bachelor of Science in Computer Science",
      institution: "University",
      period: "Graduated",
      detail:
        "Built strong foundations in data structures, algorithms, databases, and software engineering principles.",
    },
    experience:
      "Hands-on experience building full-stack web applications — from responsive React/Next.js frontends to Node.js APIs backed by PostgreSQL, NeonDB, and Weaviate vector search. Comfortable across the stack and in collaborative, Git-based team workflows.",
    goals:
      "To grow as a full-stack engineer at a product-focused team, shipping polished, performant interfaces and meaningful AI-powered features that solve real problems for real users.",
    interests: [
      "AI & LLM-powered apps",
      "Vector search & semantic retrieval",
      "UI/UX & design systems",
      "Open-source contribution",
      "Continuous learning",
    ],
  },
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: personal.github,
    icon: FaGithub,
    hoverClass: "hover:text-white hover:border-white/40",
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: FaLinkedin,
    hoverClass: "hover:text-[#0a66c2] hover:border-[#0a66c2]/40",
  },
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: HiOutlineMail,
    hoverClass: "hover:text-primary hover:border-primary/40",
  },
];
