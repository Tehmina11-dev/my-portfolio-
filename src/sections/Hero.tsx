"use client";

import { motion } from "framer-motion";
import { LuDownload, LuArrowRight, LuMapPin } from "react-icons/lu";
import { personal } from "@/data/personal";
import { RESUME_PATH, SECTION_IDS, TYPING_ROLES } from "@/constants";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { TypingEffect } from "@/components/ui/TypingEffect";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { scrollToSection } from "@/utils";
import { HeroAvatar } from "./hero/HeroAvatar";

/** Hero — name, animated role, tagline, CTAs and socials. */
export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-40" />
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-accent/25 blur-[120px]" />
      </div>

      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {personal.availability}
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient animate-gradient-x">{personal.name}</span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mt-4 flex min-h-[2.5rem] items-center text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            <span className="mr-2 hidden text-muted-foreground sm:inline">I&apos;m a</span>
            <TypingEffect words={TYPING_ROLES} />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a href={RESUME_PATH} download>
              <Button size="lg" leftIcon={<LuDownload className="h-5 w-5" />}>
                Download Resume
              </Button>
            </a>
            <Button
              size="lg"
              variant="secondary"
              rightIcon={<LuArrowRight className="h-5 w-5" />}
              onClick={() => scrollToSection(SECTION_IDS.projects)}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection(SECTION_IDS.contact)}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <SocialLinks />
            <span className="hidden h-6 w-px bg-border sm:block" />
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <LuMapPin className="h-4 w-4" />
              {personal.location}
            </span>
          </motion.div>
        </motion.div>

        <HeroAvatar />
      </div>
    </section>
  );
}
