import Link from "next/link";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

type Variant = "sun" | "light" | "outline" | "outline-light" | "forest";

const styles: Record<Variant, string> = {
  sun: "bg-coral text-ink hover:bg-gold",
  forest: "bg-forest text-off hover:bg-atlantic",
  light: "bg-off text-forest hover:bg-gold",
  outline: "border-2 border-forest text-forest hover:bg-forest hover:text-off",
  "outline-light": "border-2 border-off/70 text-off backdrop-blur-sm hover:bg-off hover:text-forest",
};

export function buttonClass(variant: Variant = "sun", className?: string) {
  return clsx(
    "group relative inline-flex whitespace-nowrap items-center justify-center gap-2 overflow-hidden rounded-pill px-6 py-3 text-sm font-semibold",
    "transition-[background-color,color,transform] duration-300 ease-(--ease-sun) hover:-translate-y-0.5 active:translate-y-0",
    styles[variant],
    className,
  );
}

export function ButtonLink({
  href,
  variant = "sun",
  className,
  children,
  arrow = true,
  ...rest
}: { href: string; variant?: Variant; children: ReactNode; arrow?: boolean } & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={href} className={buttonClass(variant, className)} {...rest}>
      <span>{children}</span>
      {arrow && (
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
