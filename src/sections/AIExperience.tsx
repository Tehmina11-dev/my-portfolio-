"use client";

import { motion } from "framer-motion";
import { aiCapabilities } from "@/data/aiExperience";
import { SECTION_IDS } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * AI Experience — "Working with AI & Vector Databases".
 * Highlights modern, in-demand AI engineering skills.
 */
export function AIExperience() {
  return (
    <section
      id={SECTION_IDS.ai}
      className="relative overflow-hidden container-section"
    >
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/15 blur-[130px]" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-primary/15 blur-[130px]" />
      </div>

      <SectionHeading
        eyebrow="AI & Vector Databases"
        title={
          <>
            Working with{" "}
            <span className="text-gradient animate-gradient-x">AI &amp; Vector Databases</span>
          </>
        }
        description="Practical, hands-on experience building intelligent features that recruiters and modern teams are looking for."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {aiCapabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <motion.article
              key={cap.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-colors hover:border-accent/50"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent/20" />

              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-7 w-7" />
              </span>

              <h3 className="mt-5 text-lg font-semibold">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
