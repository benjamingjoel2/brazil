import Link from "next/link";
import { legalLinks, site } from "@/config/site";
import { CurrencySwitcher } from "@/components/ui/Currency";
import { Logo } from "@/components/ui/SunMark";
import { ButtonLink } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { img } from "@/lib/media";

const explore = [
  { href: "/destinations", label: "Destinations" },
  { href: "/biomes", label: "Six Biomes" },
  { href: "/carnival", label: "Carnival chooser" },
  { href: "/wild-seasons", label: "Wild Seasons" },
  { href: "/sunrise-coast", label: "Sunrise Coast" },
];
const plan = [
  { href: "/journeys", label: "Journeys" },
  { href: "/experiences", label: "Experiences" },
  { href: "/stays", label: "Stays" },
  { href: "/plan", label: "Plan with us" },
];
const about = [
  { href: "/about", label: "About" },
  { href: "/responsible-travel", label: "Responsible travel" },
  { href: "/journal", label: "Journal" },
];

function Column({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="t-label mb-3 text-gold">{title}</h2>
      <ul className="space-y-1.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-off/85 underline-offset-4 hover:text-off hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="relative bg-atlantic text-off">
      {/* Photo band with the one call to action */}
      <div className="relative h-[clamp(13rem,26vw,20rem)] overflow-hidden bg-atlantic-deep">
        <Img media={img("sunrise-atlantic", "Low sun over the Atlantic from the beach at João Pessoa")} sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/70 via-ink/35 to-transparent" aria-hidden />
        <div className="px-gutter relative flex h-full flex-col items-start justify-center gap-5">
          <p className="font-display text-[clamp(1.75rem,3.4vw,3rem)] font-bold leading-tight tracking-[-0.02em]">Plan a journey</p>
          <ButtonLink href="/plan">Plan with us</ButtonLink>
        </div>
      </div>

      <div className="px-gutter pb-6 pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="text-sm leading-relaxed text-off/85">
            <Logo tone="light" />
            <p className="mt-3">Brazil, from first light.</p>
            <p className="mt-3">
              <a href={`mailto:${site.contact.email}`} className="underline underline-offset-4 hover:text-gold">
                {site.contact.email}
              </a>
            </p>
            <address className="mt-3 not-italic text-off/75">
              {site.contact.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
          <Column title="Explore" links={explore} />
          <Column title="Journeys" links={plan} />
          <Column title="About us" links={about} />
          <Column title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-off/20 pb-16 pt-4 md:pl-16 text-xs text-off/75 md:flex-row md:items-center md:justify-between md:pb-0">
          <p>© {year} Sol Nascente</p>
          <div className="flex items-center gap-3">
            <span>Show prices in</span>
            <CurrencySwitcher tone="light" />
          </div>
        </div>
      </div>
    </footer>
  );
}
