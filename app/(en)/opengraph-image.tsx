import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const alt = "Sol Nascente: Brazil, from first light";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background: `linear-gradient(180deg, ${brand.colors.atlantic} 0%, ${brand.colors.forest} 100%)`,
          color: brand.colors.offWhite,
          position: "relative",
        }}
      >
        <svg width="900" height="450" viewBox="0 0 200 100" style={{ position: "absolute", right: -120, bottom: 0 }}>
          <path d="M70 100a30 30 0 0 1 60 0Z" fill={brand.colors.coral} />
          {[45, 60, 75, 90].map((r) => (
            <path key={r} d={`M${100 - r} 100a${r} ${r} 0 0 1 ${r * 2} 0`} fill="none" stroke={brand.colors.gold} strokeWidth="1.5" strokeOpacity={1 - r / 120} />
          ))}
        </svg>
        <div style={{ fontSize: 30, color: brand.colors.gold, letterSpacing: 4, textTransform: "uppercase" }}>Private journeys across Brazil</div>
        <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1, marginTop: 16 }}>Sol Nascente</div>
        <div style={{ fontSize: 44, marginTop: 20 }}>{brand.promise}</div>
      </div>
    ),
    size,
  );
}
