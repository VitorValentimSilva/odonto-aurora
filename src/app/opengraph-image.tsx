import { ImageResponse } from "next/og";

import { site } from "@/config/site";

import { ToothMark, brandColors as c } from "./og-shared";

export const alt = site.seo.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: `linear-gradient(135deg, ${c.background} 0%, #e6f3f3 55%, ${c.warmLight} 100%)`,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -220,
            width: 640,
            height: 640,
            borderRadius: 9999,
            border: `48px solid ${c.warm}`,
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: -80,
            width: 380,
            height: 380,
            borderRadius: 9999,
            background: c.primary,
            opacity: 0.12,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <ToothMark size={84} />
            <span style={{ fontSize: 44, fontWeight: 800, color: c.foreground }}>{site.brand.name}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
            <span style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, color: c.foreground, letterSpacing: -2 }}>
              {site.brand.slogan}
            </span>
            <span style={{ marginTop: 24, fontSize: 30, color: c.primaryDark }}>
              {site.address.city} – {site.address.state} · {site.hero.trustBadges.map((b) => b.label).join(" · ")}
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
