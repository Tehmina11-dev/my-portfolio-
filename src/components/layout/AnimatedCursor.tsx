"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks";

/**
 * Custom animated cursor: a small dot that tracks the pointer precisely and a
 * larger ring that follows with spring easing and grows over interactive
 * elements. Disabled on touch / coarse-pointer devices and when the user
 * prefers reduced motion.
 */
export function AnimatedCursor() {
  const isFinePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );
  const enabled = isFinePointer && !prefersReducedMotion;

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 350, damping: 28 });
  const ringY = useSpring(cursorY, { stiffness: 350, damping: 28 });

  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHidden(false);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], label'
      );
      setHovering(Boolean(interactive));
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Precise inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference"
        style={{ x: cursorX, y: cursorY, opacity: hidden ? 0 : 1 }}
      />
      {/* Spring-following outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary mix-blend-difference"
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
        animate={{ width: hovering ? 44 : 28, height: hovering ? 44 : 28 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}
