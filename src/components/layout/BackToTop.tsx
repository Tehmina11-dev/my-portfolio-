"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LuArrowUp } from "react-icons/lu";
import { useScrolled } from "@/hooks";

/** Floating button that appears after scrolling and returns to the top. */
export function BackToTop() {
  const visible = useScrolled(500);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-card backdrop-blur-md transition-colors hover:border-primary/60 hover:text-primary"
        >
          <LuArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
