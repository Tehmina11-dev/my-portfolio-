"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { LuExternalLink, LuStar } from "react-icons/lu";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/motion";

/** Premium project card with gradient cover, tech badges and hover lift. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeInUp}
      layout
      whileHover={{ y: -8 }}
      transition={{ layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-primary/40 hover:shadow-card"
    >
      {/* Cover / screenshot placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 transition-transform duration-500 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-20" />
        {/* Faux browser window for a screenshot vibe */}
        <div className="absolute inset-x-5 bottom-0 top-8 rounded-t-xl border border-white/20 bg-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-1.5 border-b border-white/20 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          </div>
          <div className="flex h-[calc(100%-2rem)] items-center justify-center px-4 text-center">
            <span className="text-lg font-bold text-white drop-shadow">
              {project.title}
            </span>
          </div>
        </div>

        {project.featured && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
            <LuStar className="h-3 w-3 fill-amber-400 text-amber-400" />
            Featured
          </span>
        )}

        {/* Hover action overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
            >
              <LuExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.longDescription ?? project.description}
        </p>

        {/* Feature chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3 border-t border-border pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              <FaGithub className="h-4 w-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <LuExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
