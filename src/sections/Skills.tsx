"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SECTION_IDS } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

/** Skills — animated cards grouped by category with branded icons. */
export function Skills() {
  return (
    <section id={SECTION_IDS.skills} className="relative container-section">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <SectionHeading
        eyebrow="Skills"
        title="My technical toolkit"
        description="Technologies I use to design, build, and ship full-stack applications."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <motion.article
              key={category.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 hover:shadow-card"
            >
              {/* Hover accent tint */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CategoryIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
              </div>

              <p className="mb-5 text-sm text-muted-foreground">
                {category.description}
              </p>

              <motion.ul
                variants={staggerContainer(0.05)}
                className="flex flex-wrap gap-2.5"
              >
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.li
                      key={skill.name}
                      variants={scaleIn}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium"
                    >
                      <SkillIcon className={`h-4 w-4 ${skill.color ?? ""}`} />
                      {skill.name}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
