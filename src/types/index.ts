import type { IconType } from "react-icons";

/** A single navigation link in the navbar / footer. */
export interface NavLink {
  label: string;
  href: string;
}

/** Social profile link. */
export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
  /** Tailwind classes applied on hover for brand-accurate coloring. */
  hoverClass?: string;
}

/** A skill entry rendered inside a skill card. */
export interface Skill {
  name: string;
  icon: IconType;
  /** Tailwind text color class for the icon. */
  color?: string;
}

/** A group of related skills (e.g. "Frontend"). */
export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
}

/** Tags used by the project filter UI. */
export type ProjectTag =
  | "All"
  | "AI"
  | "Full-Stack"
  | "Frontend"
  | "Dashboard";

/** A featured project. */
export interface Project {
  id: string;
  title: string;
  description: string;
  /** Longer narrative shown in the card body. */
  longDescription?: string;
  features: string[];
  tech: string[];
  tags: ProjectTag[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

/** A card in the "Working with AI & Vector Databases" section. */
export interface AICapability {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  tags: string[];
}

/** A timeline entry in the experience section. */
export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "Work" | "Internship" | "Project" | "Collaboration";
  description: string;
  highlights: string[];
  tech?: string[];
}

/** A GitHub statistic tile. */
export interface GitHubStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: IconType;
}

/** Shape of the validated contact form. */
export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
