import {
  Hero,
  About,
  Skills,
  Projects,
  AIExperience,
  Experience,
  GitHubStats,
  Contact,
} from "@/sections";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * Single-page portfolio. Sections are composed in narrative order and each
 * exposes an `id` for in-page navigation and scroll-spy.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIExperience />
      <Experience />
      <GitHubStats />
      <Contact />
    </>
  );
}
