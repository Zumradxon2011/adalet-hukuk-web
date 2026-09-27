import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content/site-config";

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
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#101923",
          color: "#fcf9f3",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              background: "#fcf9f3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#101923",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, fontWeight: 700 }}>
            ADALET HUKUK
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, marginTop: 48, maxWidth: 900 }}>
          Hukukta tecrübe. Stratejide güven.
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 24, color: "#dae3f1", maxWidth: 800 }}>
          {siteConfig.tagline} · İstanbul, {siteConfig.foundedYear}&apos;den bu yana
        </div>
      </div>
    ),
    { ...size },
  );
}
