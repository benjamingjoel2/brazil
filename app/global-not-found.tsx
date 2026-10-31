import type { Metadata } from "next";
import { Figtree, Unbounded } from "next/font/google";
import "./(en)/globals.css";

// Unmatched URLs outside every locale. There is no single root layout (see app/(en) and the
// generated app/fr, app/de, app/es); pages that call notFound() use their locale's not-found page.
const display = Unbounded({ variable: "--font-unbounded", subsets: ["latin"], display: "swap" });
const body = Figtree({ variable: "--font-figtree", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Page not found · Sol Nascente",
  robots: { index: false },
};

const homes = [
  { href: "/", lang: "en", label: "Back to first light" },
  { href: "/fr", lang: "fr", label: "Retour à l’accueil" },
  { href: "/de", lang: "de", label: "Zur Startseite" },
  { href: "/es", lang: "es", label: "Volver al inicio" },
];

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-atlantic">
        <main className="bg-waves grid min-h-svh place-items-center bg-forest px-6 text-center text-off">
          <div>
            <p className="t-label text-gold">404</p>
            <h1 className="t-h1 mt-3">This path hasn&apos;t seen the sun yet</h1>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {homes.map((h) => (
                <li key={h.lang}>
                  <a href={h.href} lang={h.lang} hrefLang={h.lang} className="inline-flex rounded-pill border-2 border-off/60 px-5 py-2.5 text-sm font-semibold hover:bg-off hover:text-forest">
                    {h.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </body>
    </html>
  );
}
