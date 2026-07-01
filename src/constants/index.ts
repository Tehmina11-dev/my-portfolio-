/**
 * Global, environment-agnostic constants for the site.
 * Update SITE_URL before deploying so SEO metadata, sitemap and OG tags
 * resolve to your real domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tehmina.dev";

export const SITE_NAME = "Tehmina — Frontend & Full-Stack Developer";

export const SITE_DESCRIPTION =
  "Tehmina is a Frontend & Full-Stack Developer building modern, scalable, user-friendly web apps with React, Next.js, TypeScript, and AI-powered features.";

export const SITE_KEYWORDS = [
  "Tehmina",
  "Frontend Developer",
  "Full-Stack Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript",
  "AI Developer",
  "Vector Database",
  "Weaviate",
  "NeonDB",
  "PostgreSQL",
  "Portfolio",
];

/** Path to the downloadable résumé (placed in /public). */
export const RESUME_PATH = "/Tehmina-Resume.pdf";

/** Section ids used for nav scrolling and active-link detection. */
export const SECTION_IDS = {
  hero: "home",
  about: "about",
  skills: "skills",
  projects: "projects",
  ai: "ai",
  experience: "experience",
  github: "github",
  contact: "contact",
} as const;

/** Roles cycled through by the hero typing animation. */
export const TYPING_ROLES = [
  "Frontend Developer",
  "Full-Stack Developer",
  "React Developer",
  "AI Enthusiast",
];
