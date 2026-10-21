import Image from "next/image";
import clsx from "clsx";
import type { Media } from "@/lib/types";

/**
 * next/image wrapper. Always `fill` inside a sized, relatively positioned parent.
 * Missing media renders a warm sunrise gradient so layouts never collapse.
 */
export function Img({
  media,
  sizes = "100vw",
  className,
  priority,
  quality = 75,
}: {
  media: Media;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: 60 | 75 | 85;
}) {
  if (!media.src) {
    return (
      <div
        role="img"
        aria-label={media.alt}
        className={clsx("absolute inset-0 bg-linear-to-br from-gold via-coral to-atlantic", className)}
      />
    );
  }
  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes={sizes}
      quality={quality}
      preload={priority}
      className={clsx("object-cover", className)}
    />
  );
}
