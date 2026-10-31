import Link from "next/link";
import { homeAnchors, legalLinks, pageLinks, site } from "@/config/site";
import { SunArcs } from "@/components/ui/SunArcs";
import { CurrencySwitcher } from "@/components/ui/Currency";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="footer"
      className="bg-waves relative bottom-0 z-0 -mt-16 overflow-hidden bg-atlantic pt-16 text-off md:sticky md:-mt-24 md:min-h-svh md:pt-24"
    >
      <SunArcs className="absolute -right-24 -top-8 w-[46rem] max-w-none opacity-40" rings={6} color="var(--color-gold)" />
      <div className="px-gutter relative flex min-h-[inherit] flex-col justify-between gap-16 pb-6 pt-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr_1fr]">
          <address className="not-italic text-sm leading-relaxed text-off/85">
            <p className="font-semibold text-off">Sol Nascente</p>
            {site.contact.address.map((l) => (
              <p key={l}>{l}</p>
            ))}
            <p className="mt-3">
              <a href={`mailto:${site.contact.email}`} className="underline-offset-4 hover:underline">
                {site.contact.email}
              </a>
            </p>
          </address>

          <nav aria-label="Homepage sections">
            <ul className="space-y-0.5">
              {homeAnchors.map((a) => (
                <li key={a.id}>
                  <Link
                    href={`/#${a.id}`}
                    className="group inline-flex items-center gap-2 font-display text-lg font-semibold transition-colors hover:text-gold"
                  >
                    <span aria-hidden className="h-2 w-2 scale-0 rounded-full bg-gold transition-transform group-hover:scale-100" />
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore">
            <ul className="space-y-1.5 text-sm">
              {pageLinks.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-off/85 hover:text-off">
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/plan" className="font-semibold text-gold hover:text-off">
                  Plan with us →
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-6 text-sm lg:items-end lg:text-right">
            <div>
              <p className="t-label mb-2 text-off/70">Show prices in</p>
              <CurrencySwitcher tone="light" />
            </div>
          </div>
        </div>

        <div>
          <p aria-hidden className="t-wordmark flex justify-between whitespace-nowrap text-off">
            <span>Sol</span>
            <span>Nascente</span>
          </p>
          <div className="mt-6 flex flex-col gap-3 border-t border-off/20 pt-4 text-xs text-off/75 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} Sol Nascente. Brazil, from first light.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-off">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
