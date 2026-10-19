import { Suspense } from "react";
import { PlanForm } from "@/components/forms/PlanForm";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "Plan with us",
  description: "Tell us when and how you like to travel, and a Brazil specialist will design a private journey around you.",
  path: "/plan",
});

export default function PlanPage() {
  return (
    <>
      <PageHero
        short
        label="Plan with us"
        title="Let's plan your Brazil"
        lead="A few questions, then a real person who knows Brazil takes it from here. The more you tell us, the better it gets."
        image={img("sunrise-atlantic", "Sunrise over the Atlantic")}
      />
      <section className="px-gutter py-section grid gap-12 lg:grid-cols-[1fr_2.2fr]">
        <aside className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <p className="t-lead text-forest">Prefer to talk?</p>
          <ul className="mt-4 space-y-2 text-ink/85">
            <li>
              <a className="underline underline-offset-4 hover:text-coral-deep" href={site.contact.whatsappLink}>
                WhatsApp {site.contact.whatsapp}
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4 hover:text-coral-deep" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-ink/65">
            We use your details only to plan your trip and reply to you. See our <a href="/legal#privacy" className="underline">privacy notes</a>.
          </p>
        </aside>
        <Suspense fallback={<p>Loading the form…</p>}>
          <PlanForm />
        </Suspense>
      </section>
    </>
  );
}
