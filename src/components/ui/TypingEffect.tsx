"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils";

interface TypingEffectProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

/**
 * Classic "typewriter" effect that types and deletes through a list of words.
 * Implemented with timeouts (not a library) so it stays dependency-free and
 * fully controllable.
 */
export function TypingEffect({
  words,
  className,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseMs = 1400,
}: TypingEffectProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const current = words[index % words.length];

    // Pause at the end of a fully-typed word before deleting.
    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(timeout);
    }

    // Move to the next word once fully deleted.
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseMs]);

  const text = words.length ? words[index % words.length].substring(0, subIndex) : "";

  return (
    <span className={cn("inline-flex items-center", className)} aria-live="polite">
      <span className="text-gradient animate-gradient-x font-semibold">{text}</span>
      <span className="ml-0.5 inline-block h-[1.1em] w-[3px] animate-blink bg-primary" />
    </span>
  );
}
