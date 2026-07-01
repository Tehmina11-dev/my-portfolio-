import { SECTION_IDS } from "@/constants";
import type { NavLink } from "@/types";

/** Primary navigation links — anchor to in-page section ids. */
export const navLinks: NavLink[] = [
  { label: "Home", href: `#${SECTION_IDS.hero}` },
  { label: "About", href: `#${SECTION_IDS.about}` },
  { label: "Skills", href: `#${SECTION_IDS.skills}` },
  { label: "Projects", href: `#${SECTION_IDS.projects}` },
  { label: "AI", href: `#${SECTION_IDS.ai}` },
  { label: "Experience", href: `#${SECTION_IDS.experience}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
];
