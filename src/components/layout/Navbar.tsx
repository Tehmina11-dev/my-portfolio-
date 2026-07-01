"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import { navLinks } from "@/data/navigation";
import { personal } from "@/data/personal";
import { SECTION_IDS } from "@/constants";
import { useActiveSection, useScrolled } from "@/hooks";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn, scrollToSection } from "@/utils";

const sectionIds = Object.values(SECTION_IDS);

/** Sticky, blur-on-scroll navbar with active-link tracking + mobile drawer. */
export function Navbar() {
  const scrolled = useScrolled(24);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    scrollToSection(href.replace("#", ""));
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav(`#${SECTION_IDS.hero}`)}
          className="group flex items-center gap-2 text-lg font-bold"
          aria-label="Go to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            {personal.firstName.charAt(0)}
          </span>
          <span className="hidden sm:inline">
            {personal.firstName}
            <span className="text-primary">.dev</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => handleNav(`#${SECTION_IDS.contact}`)}
          >
            Let&apos;s talk
          </Button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className={cn(
                        "w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
              <li className="mt-2">
                <Button
                  className="w-full"
                  onClick={() => handleNav(`#${SECTION_IDS.contact}`)}
                >
                  Contact Me
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
