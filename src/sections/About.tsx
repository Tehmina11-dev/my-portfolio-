"use client";

import { motion } from "framer-motion";
import { LuGraduationCap, LuBriefcase, LuTarget, LuHeart } from "react-icons/lu";
import { personal } from "@/data/personal";
import { SECTION_IDS } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const cards = [
  {
    icon: LuGraduationCap,
    title: "Education",
    body: `${personal.about.education.degree}. ${personal.about.education.detail}`,
  },
  {
    icon: LuBriefcase,
    title: "Experience",
    body: personal.about.experience,
  },
  {
    icon: LuTarget,
    title: "Career Goals",
    body: personal.about.goals,
  },
];

/** About — intro narrative + education/experience/goals/interests. */
export function About() {
  return (
    <section id={SECTION_IDS.about} className="container-section">
      <SectionHeading
        eyebrow="About Me"
        title="Turning ideas into polished products"
        description="A quick look at who I am, what I've done, and where I'm headed."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-card p-8 shadow-card"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            {personal.about.intro}
          </p>

          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <LuHeart className="h-4 w-4 text-accent" />
              Interests
            </div>
            <div className="flex flex-wrap gap-2">
              {personal.about.interests.map((interest) => (
                <Badge key={interest} variant="primary">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          {cards.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group flex gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
