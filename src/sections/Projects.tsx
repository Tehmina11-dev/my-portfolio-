"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectFilters, projects } from "@/data/projects";
import type { ProjectTag } from "@/types";
import { SECTION_IDS } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/utils";
import { ProjectCard } from "./projects/ProjectCard";

/** Projects — filterable grid of premium project cards. */
export function Projects() {
  const [filter, setFilter] = useState<ProjectTag>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  return (
    <section id={SECTION_IDS.projects} className="container-section">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've built"
        description="A selection of projects spanning AI, full-stack apps, dashboards and polished frontends."
      />

      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((tag) => {
          const isActive = filter === tag;
          return (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="project-filter-active"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {tag}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-7 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
