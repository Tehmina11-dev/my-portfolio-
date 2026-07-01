import { SITE_URL } from "@/constants";
import { personal } from "@/data/personal";

/**
 * Structured data (JSON-LD) describing the person for rich search results.
 * Rendered server-side as a script tag.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: SITE_URL,
    email: `mailto:${personal.email}`,
    jobTitle: "Frontend & Full-Stack Developer",
    description: personal.tagline,
    sameAs: [personal.github, personal.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "NeonDB",
      "Weaviate Vector Database",
      "AI Integrations",
      "Semantic Search",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
