import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/config/site";
import { allCredits } from "@/lib/media";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "Legal",
  description: "Booking terms, privacy, cookies and media credits for Sol Nascente.",
  path: "/legal",
});

export default function LegalPage() {
  const credits = allCredits();
  const unique = [...new Map(credits.map((c) => [`${c.credit}|${c.page}`, c])).values()];
  return (
    <>
      <PageHero short label="Legal" title="The small print, written kindly" image={img("sunrise-atlantic", "Sunrise over the Atlantic")} />
      <div className="px-gutter py-section">
        <div className="prose-sol">
          <p>
            <strong>Placeholder content.</strong> Everything on this page must be reviewed by a qualified professional before launch.
          </p>
          <h2 id="company">Company</h2>
          <p>
            {site.contact.companyName}
            <br />
            {site.contact.address.join(", ")}
            <br />
            {site.contact.cadastur}
          </p>
          <h2 id="terms">Booking terms</h2>
          <p>
            Placeholder. Your journey is confirmed when we receive a signed booking form and deposit. The balance is due before
            travel. Cancellation charges depend on how close to departure you cancel and on the conditions of the lodges and airlines
            we book for you. Full terms will be published here.
          </p>
          <p>We strongly recommend comprehensive travel insurance from the moment you book.</p>
          <h2 id="privacy">Privacy</h2>
          <p>
            Placeholder. When you send an enquiry, we use your details only to plan your journey and reply to you. We don&apos;t sell
            your data. We will process personal data in line with Brazil&apos;s LGPD and, where applicable, the UK/EU GDPR. A full
            privacy notice will be published here.
          </p>
          <h2 id="cookies">Cookies</h2>
          <p>
            This site uses no tracking cookies. It remembers your chosen currency in your browser&apos;s local storage, which never
            leaves your device.
          </p>
          <h2 id="credits">Photo &amp; video credits</h2>
          <p>
            Placeholder imagery from Unsplash (Unsplash License) and Pexels (Pexels License), to be replaced with our own photography.
            With thanks to:
          </p>
          <ul>
            {unique.map((c, i) => (
              <li key={i}>
                {c.page ? (
                  <a href={c.page} rel="noopener noreferrer">
                    {c.credit}
                  </a>
                ) : (
                  c.credit
                )}{" "}
                ({c.kind})
              </li>
            ))}
          </ul>
          <p>Map outline: Natural Earth (public domain). Biome regions are simplified approximations after IBGE.</p>
        </div>
      </div>
    </>
  );
}
