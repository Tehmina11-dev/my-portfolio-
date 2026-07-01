"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personal } from "@/data/personal";

/**
 * Full-screen intro loader shown briefly on first paint, then fades out.
 * Purely cosmetic — keeps the entrance feeling premium without blocking
 * content for long.
 */
export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex h-20 w-20 items-center justify-center"
          >
            <span className="absolute inset-0 animate-spin rounded-full border-2 border-border border-t-primary" />
            <span className="text-2xl font-bold text-gradient">
              {personal.firstName.charAt(0)}
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm tracking-[0.3em] text-muted-foreground uppercase"
          >
            {personal.firstName}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
