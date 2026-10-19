import type { Media, VideoMedia } from "./types";
import manifest from "@/data/media.json";

type Manifest = {
  images: Record<string, Media & { note?: string }>;
  videos: Record<string, VideoMedia & { approx?: boolean }>;
};
const m = manifest as unknown as Manifest;

/**
 * Looks up a photo. The manifest alt (written from the actual photo) wins over the
 * caller's alt, which only describes the intended subject. Missing keys render as a
 * branded gradient placeholder in <Img>.
 */
export function img(key: string, alt?: string): Media {
  const found = m.images[key];
  if (!found) return { src: "", alt: alt ?? key.replace(/-/g, " ") };
  return { src: found.src, alt: found.alt || alt || key, credit: found.credit, page: found.page, approx: found.approx };
}

export function video(key: string, captions?: string): VideoMedia {
  const found = m.videos[key];
  if (!found) return { src: "", poster: "", alt: key.replace(/-/g, " "), captions };
  return { ...found, captions: captions ?? `/captions/${key}.vtt` };
}

export function allCredits() {
  return [
    ...Object.values(m.images).map((x) => ({ credit: x.credit, page: x.page, kind: "photo" as const })),
    ...Object.values(m.videos).map((x) => ({ credit: x.credit, page: x.page, kind: "video" as const })),
  ].filter((x) => x.credit);
}
