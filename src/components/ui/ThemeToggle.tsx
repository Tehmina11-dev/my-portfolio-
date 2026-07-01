"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { LuMoon, LuSun } from "react-icons/lu";
import { useMounted } from "@/hooks";
import { cn } from "@/utils";

/** Animated dark/light toggle. Renders a stable placeholder until mounted. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-colors hover:border-primary/50",
        className
      )}
    >
      {mounted ? (
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <LuMoon className="h-5 w-5" />
          ) : (
            <LuSun className="h-5 w-5 text-amber-500" />
          )}
        </motion.span>
      ) : (
        <span className="h-5 w-5" />
      )}
    </button>
  );
}
