import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";

/** Single-page site — one canonical URL. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
