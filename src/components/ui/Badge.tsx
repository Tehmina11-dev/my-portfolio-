import type { ReactNode } from "react";
import { cn } from "@/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "accent";
}

const variants = {
  default: "border-border bg-muted/60 text-muted-foreground",
  primary: "border-primary/30 bg-primary/10 text-primary",
  accent: "border-accent/30 bg-accent/10 text-accent",
};

/** Small pill used for tech-stack tags and feature labels. */
export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
