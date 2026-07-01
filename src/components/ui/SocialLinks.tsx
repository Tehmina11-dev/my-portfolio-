"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/personal";
import { cn } from "@/utils";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

/** Row of social icon links (GitHub, LinkedIn, Email) with hover lift. */
export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map(({ label, href, icon: Icon, hoverClass }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-colors duration-300",
            hoverClass,
            iconClassName
          )}
        >
          <Icon className="h-5 w-5" />
        </motion.a>
      ))}
    </div>
  );
}
