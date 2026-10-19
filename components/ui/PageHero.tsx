import type { ReactNode } from "react";
import type { Media } from "@/lib/types";
import { Img } from "./Img";
import { SunArcs } from "./SunArcs";
import { RiseWords } from "./Reveal";

/** Full-bleed hero for inner pages, with a curved bottom edge and rising title. */
export function PageHero({
  label,
  title,
  lead,
  image,
  children,
  short = false,
}: {
  label?: ReactNode;
  title: string;
  lead?: ReactNode;
  image: Media;
  children?: ReactNode;
  short?: boolean;
}) {
  return (
    <header
      className={`relative isolate flex flex-col justify-end overflow-hidden rounded-b-[2.5rem] bg-forest text-off md:rounded-b-[5rem] ${
        short ? "min-h-[62svh]" : "min-h-[86svh]"
      }`}
    >
      <Img media={image} priority sizes="100vw" />
      <div className="absolute inset-0 bg-linear-to-b from-ink/50 via-ink/15 to-forest-deep/85" />
      <SunArcs className="absolute -bottom-6 left-1/2 w-[110vw] max-w-none -translate-x-1/2 opacity-25" rings={6} />
      <div className="px-gutter relative pb-[max(2.5rem,5vw)] pt-[calc(var(--header-h)+3rem)]">
        {label && <p className="t-label mb-4 text-gold">{label}</p>}
        <h1 className="t-h1 max-w-5xl">
          <RiseWords text={title} />
        </h1>
        {lead && <div className="t-lead mt-6 max-w-2xl text-off/90">{lead}</div>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}

export function SectionHeader({ title, lead, id, className = "" }: { title: string; lead?: ReactNode; id?: string; className?: string }) {
  return (
    <div className={`mb-10 max-w-4xl ${className}`}>
      <h2 id={id} className="t-h2 text-forest">
        <RiseWords text={title} />
      </h2>
      {lead && <div className="t-lead mt-5 max-w-3xl text-ink/85">{lead}</div>}
    </div>
  );
}
