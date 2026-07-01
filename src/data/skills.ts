import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import {
  TbBrandVscode,
  TbApi,
  TbVectorTriangle,
  TbBrandOpenai,
  TbDatabaseSearch,
  TbCpu,
  TbCode,
} from "react-icons/tb";
import { LuSparkles, LuSearch, LuLayers } from "react-icons/lu";
import type { SkillCategory } from "@/types";

/**
 * Skills grouped by category. Each entry maps to a brand/feature icon.
 * Colors are Tailwind text classes applied to the icon.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Crafting accessible, responsive, pixel-perfect interfaces.",
    icon: TbCode,
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-[#e34f26]" },
      { name: "CSS", icon: FaCss3Alt, color: "text-[#1572b6]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#f7df1e]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
      { name: "React", icon: FaReact, color: "text-[#61dafb]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38bdf8]" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Building robust APIs and server-side logic.",
    icon: TbCpu,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#5fa04e]" },
      { name: "Express.js", icon: SiExpress, color: "text-foreground" },
      { name: "REST APIs", icon: TbApi, color: "text-emerald-400" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Modeling data with relational, document & vector stores.",
    icon: FaDatabase,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169e1]" },
      { name: "NeonDB", icon: TbDatabaseSearch, color: "text-emerald-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
      { name: "Weaviate", icon: TbVectorTriangle, color: "text-[#84cc16]" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "The everyday workflow that keeps shipping smooth.",
    icon: LuLayers,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-[#f05032]" },
      { name: "GitHub", icon: FaGithub, color: "text-foreground" },
      { name: "Docker", icon: FaDocker, color: "text-[#2496ed]" },
      { name: "Postman", icon: SiPostman, color: "text-[#ff6c37]" },
      { name: "VS Code", icon: TbBrandVscode, color: "text-[#0078d4]" },
    ],
  },
  {
    id: "ai",
    title: "AI & Integrations",
    description: "Adding intelligent, AI-powered features to products.",
    icon: LuSparkles,
    skills: [
      { name: "AI Chat Features", icon: TbBrandOpenai, color: "text-teal-400" },
      { name: "Vector Search", icon: TbVectorTriangle, color: "text-[#84cc16]" },
      { name: "Embeddings", icon: TbCpu, color: "text-fuchsia-400" },
      { name: "Semantic Search", icon: LuSearch, color: "text-sky-400" },
      { name: "API Integrations", icon: TbApi, color: "text-emerald-400" },
    ],
  },
];
