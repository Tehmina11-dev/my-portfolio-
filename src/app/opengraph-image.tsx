import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";

/** Dynamically generated Open Graph / social share image. */
export const runtime = "edge";
export const alt = `${personal.name} — Frontend & Full-Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#020617",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#34d399",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", fontSize: 110, fontWeight: 800, marginTop: 12 }}>
          {personal.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 600, marginTop: 8, color: "#34d399" }}>
          Frontend &amp; Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 28,
            color: "#94a3b8",
            maxWidth: 900,
          }}
        >
          React · Next.js · TypeScript · Node.js · PostgreSQL · NeonDB · Weaviate · AI
        </div>
      </div>
    ),
    { ...size }
  );
}
