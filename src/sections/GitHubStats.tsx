"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { githubStats } from "@/data/githubStats";
import { personal } from "@/data/personal";
import { SECTION_IDS } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

/** GitHub Statistics — animated counters for repos, commits, etc. */
export function GitHubStats() {
  return (
    <section id={SECTION_IDS.github} className="container-section">
      <SectionHeading
        eyebrow="GitHub Statistics"
        title="Building in the open"
        description="A snapshot of my activity and contributions on GitHub."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {githubStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 text-center transition-colors hover:border-primary/40"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/20" />
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-4xl font-extrabold tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-10 flex justify-center"
      >
        <a href={personal.github} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" leftIcon={<FaGithub className="h-5 w-5" />}>
            View GitHub Profile
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
