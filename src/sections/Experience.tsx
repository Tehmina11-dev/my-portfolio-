"use client";

import { motion } from "framer-motion";
import { LuBriefcase, LuCode, LuUsers, LuGraduationCap } from "react-icons/lu";
import type { IconType } from "react-icons";
import { experiences } from "@/data/experience";
import type { ExperienceItem } from "@/types";
import { SECTION_IDS } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const typeIcon: Record<ExperienceItem["type"], IconType> = {
  Work: LuBriefcase,
  Internship: LuGraduationCap,
  Project: LuCode,
  Collaboration: LuUsers,
};

/** Experience — vertical timeline of roles, projects and collaboration. */
export function Experience() {
  return (
    <section id={SECTION_IDS.experience} className="container-section">
      <SectionHeading
        eyebrow="Experience"
        title="My journey so far"
        description="Internships, team work, and self-driven projects — built with real Git workflows and collaboration."
      />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-3xl"
      >
        {/* Vertical line */}
        <div className="absolute left-5 top-2 h-full w-px bg-primary/30 sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-10">
          {experiences.map((item, index) => {
            const Icon = typeIcon[item.type];
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-5 top-2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-primary shadow-card sm:left-1/2">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Card */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-1/2 ${
                    isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        isLeft ? "sm:justify-end" : ""
                      }`}
                    >
                      <Badge variant="primary">{item.type}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm font-medium text-primary">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <ul
                      className={`mt-4 space-y-1.5 text-sm text-muted-foreground ${
                        isLeft ? "sm:text-right" : ""
                      }`}
                    >
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 sm:inline-flex">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {item.tech && (
                      <div
                        className={`mt-4 flex flex-wrap gap-1.5 ${
                          isLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        {item.tech.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
