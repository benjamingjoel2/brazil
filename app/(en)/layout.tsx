import type { Metadata, Viewport } from "next";
import { Figtree, Unbounded } from "next/font/google";
import "./globals.css";
import { brand } from "@/config/brand";
import { site } from "@/config/site";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CurrencyProvider } from "@/components/ui/Currency";
import { JsonLd, languageAlternates, organizationJsonLd } from "@/lib/seo";
import { homePath, locale, ogLocale } from "@/lib/locale";

const display = Unbounded({ variable: "--font-unbounded", subsets: ["latin"], display: "swap" });
const body = Figtree({ variable: "--font-figtree", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${brand.name} · ${brand.promise}`, template: `%s · ${brand.name}` },
  description: brand.description,
  applicationName: brand.name,
  alternates: { canonical: homePath, languages: languageAlternates(homePath) },
  openGraph: { siteName: brand.name, locale: ogLocale, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: brand.colors.forest,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body className="bg-atlantic">
        <JsonLd data={organizationJsonLd} />
        <CurrencyProvider>
          <SmoothScroll>
            <Nav />
            <main
              id="main"
              tabIndex={-1}
              className="relative z-10 overflow-x-clip bg-off outline-none"
            >
              {children}
            </main>
            <Footer />
            <BackToTop />
          </SmoothScroll>
        </CurrencyProvider>
      </body>
    </html>
  );
}
