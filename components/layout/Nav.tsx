"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useLenis } from "lenis/react";
import { homeAnchors, pageLinks, site } from "@/config/site";
import { Logo, SunMark } from "@/components/ui/SunMark";
import { buttonClass } from "@/components/ui/Button";
import { img } from "@/lib/media";

/** Anchor id currently in the middle of the viewport (homepage only). */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    if (!enabled) return;
    const els = homeAnchors.map((a) => document.getElementById(a.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
  return enabled ? active : "";
}

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu panel after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const solid = scrolled || open;
  const anchorHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-pill bg-gold px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow] duration-500",
          solid && !open ? "bg-off/85 text-forest shadow-[0_1px_0_rgba(14,59,44,0.08)] backdrop-blur-md" : "",
          open ? "text-off" : solid ? "text-forest" : "text-off",
        )}
      >
        <nav aria-label="Main" className="px-gutter flex h-(--header-h) items-center justify-between gap-6">
          <Link href={isHome ? "#sol-nascente" : "/"} aria-label="Sol Nascente, home" className="shrink-0">
            <Logo tone={solid && !open ? "dark" : "light"} />
          </Link>

          <ul className="hidden items-center gap-x-[1.6vw] xl:flex">
            {(isHome ? homeAnchors.map((a) => ({ href: anchorHref(a.id), label: a.label, id: a.id })) : pageLinks.slice(0, 7).map((p) => ({ ...p, id: p.href }))).map(
              (l) => {
                const isActive = isHome ? active === l.id : pathname.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={isActive ? (isHome ? "location" : "page") : undefined}
                      className="group relative flex items-center gap-1.5 py-2 text-[0.8125rem] font-medium"
                    >
                      <span
                        aria-hidden
                        className={clsx(
                          "block h-1.5 w-3 overflow-hidden transition-all duration-500",
                          isActive ? "opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60",
                        )}
                      >
                        <span className="block h-3 w-3 rounded-full bg-coral" />
                      </span>
                      {l.label}
                    </Link>
                  </li>
                );
              },
            )}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="rounded-pill px-4 py-2.5 text-sm font-semibold underline-offset-4 hover:underline"
            >
              {open ? "Close" : isHome ? <span><span className="xl:hidden">Menu</span><span className="hidden xl:inline">Explore</span></span> : "Menu"}
            </button>
            <span className="hidden sm:block">
              <Link href="/plan" className={buttonClass(solid && !open ? "forest" : "outline-light", "px-5 py-2.5")}>
                Plan with us
              </Link>
            </span>
          </div>
        </nav>
      </header>
      <MenuPanel open={open} onClose={() => setOpen(false)} isHome={isHome} />
    </>
  );
}

function MenuPanel({ open, onClose, isHome }: { open: boolean; onClose: () => void; isHome: boolean }) {
  const panel = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const image = img("sunrise-atlantic", "Sunrise over the Atlantic");

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    panel.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panel.current) {
        const f = [...panel.current.querySelectorAll<HTMLElement>("a,button")];
        const [a, z] = [f[0], f[f.length - 1]];
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          z.focus();
        } else if (!e.shiftKey && document.activeElement === z) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, lenis]);

  return (
    <div
      id="site-menu"
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      tabIndex={-1}
      hidden={!open}
      className="bg-waves fixed inset-0 z-40 overflow-y-auto bg-forest pt-(--header-h) text-off outline-none"
      data-lenis-prevent
    >
      <div className="px-gutter grid min-h-full gap-10 pb-10 pt-6 lg:grid-cols-[1.2fr_1fr_0.9fr]">
        <div>
          <p className="t-label mb-4 text-gold">{isHome ? "On this page" : "The homepage"}</p>
          <ul className="space-y-1">
            {homeAnchors.map((a) => (
              <li key={a.id}>
                <Link
                  href={isHome ? `#${a.id}` : `/#${a.id}`}
                  onClick={onClose}
                  className="font-display text-[clamp(1.6rem,4.2vw,2.75rem)] font-bold leading-tight transition-colors hover:text-gold"
                >
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="t-label mb-4 text-gold">Explore</p>
          <ul className="grid gap-2 text-lg">
            {pageLinks.map((p) => (
              <li key={p.href}>
                <Link href={p.href} onClick={onClose} className="hover:text-gold">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="mb-3 max-w-xs text-off/80">
              Tell us when and how you like to travel. A Brazil specialist replies within two working days.
            </p>
            <Link href="/plan" onClick={onClose} className={buttonClass("sun")}>
              Plan with us <span aria-hidden>→</span>
            </Link>
          </div>
          <div>
            <p className="t-label mb-2 text-gold">Elsewhere</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-off/80">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-off">
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.contact.whatsappLink} className="hover:text-off">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="relative mt-auto hidden aspect-[4/3] overflow-hidden lg:block">
            {image.src && <Image src={image.src} alt="" fill sizes="30vw" className="object-cover" />}
            <div className="absolute inset-0 bg-linear-to-t from-forest/80 to-transparent" />
            <p className="absolute bottom-4 left-5 flex items-center gap-2 font-display font-bold">
              <SunMark className="h-5 w-auto text-off" /> Brazil, from first light.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
