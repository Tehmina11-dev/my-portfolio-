"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { scaleIn } from "@/lib/motion";

/**
 * Animated avatar/illustration placeholder for the hero. Uses a gradient
 * ring, floating tech badges and an emoji-free monogram so it looks polished
 * even before a real photo is dropped in. Replace the inner block with an
 * <Image /> when a profile image is available.
 */
export function HeroAvatar() {
  const badges = [
    { icon: FaReact, className: "top-2 -left-4 text-[#61dafb]", delay: 0 },
    { icon: SiNextdotjs, className: "top-1/3 -right-5 text-foreground", delay: 0.4 },
    { icon: SiTypescript, className: "bottom-6 -left-6 text-[#3178c6]", delay: 0.8 },
    { icon: TbBrandOpenai, className: "bottom-0 right-2 text-teal-400", delay: 1.2 },
  ];

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
    >
      {/* Glow */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />

      {/* Rotating gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgb(var(--primary)),rgb(var(--accent)),rgb(var(--primary)))] p-[2px] opacity-80"
      >
        <div className="h-full w-full rounded-full bg-background" />
      </motion.div>

      {/* Inner image placeholder */}
      <div className="absolute inset-3 overflow-hidden rounded-full border border-border bg-gradient-to-br from-muted to-card">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-8xl font-black text-transparent">
            T
          </span>
          <span className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Developer
          </span>
        </div>
      </div>

      {/* Floating tech badges */}
      {badges.map(({ icon: Icon, className, delay }, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className={`absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card/90 shadow-card backdrop-blur ${className}`}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
      ))}
    </motion.div>
  );
}
