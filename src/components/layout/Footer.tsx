"use client";

import { navLinks } from "@/data/navigation";
import { personal } from "@/data/personal";
import { SECTION_IDS } from "@/constants";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { scrollToSection } from "@/utils";

/** Site footer with quick links, socials and copyright. */
export function Footer() {
  const year = 2026; // Static to keep server/client render deterministic.

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <button
              onClick={() => scrollToSection(SECTION_IDS.hero)}
              className="flex items-center gap-2 text-xl font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                {personal.firstName.charAt(0)}
              </span>
              {personal.firstName}
              <span className="text-primary">.dev</span>
            </button>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {personal.tagline}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href.replace("#", ""))}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {personal.email}
                </a>
              </li>
              <li>{personal.location}</li>
              <li className="text-primary">{personal.availability}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
