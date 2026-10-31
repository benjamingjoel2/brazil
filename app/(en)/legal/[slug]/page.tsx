import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { site, legalLinks } from "@/config/site";
import { brand } from "@/config/brand";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

const UPDATED = "31 October 2026";
const address = site.contact.address.join(", ");
const Email = () => <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>;

type Doc = { title: string; description: string; lead: string; body: React.ReactNode };

const docs: Record<string, Doc> = {
  terms: {
    title: "Booking terms",
    description: `The terms on which ${brand.name} plans and arranges private, tailor-made journeys in Brazil.`,
    lead: "How a journey goes from first enquiry to coming home, and what you and we can expect of each other.",
    body: (
      <>
        <h2>About these terms</h2>
        <p>
          These terms apply to every journey planned and arranged by {brand.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;), {address}. They form the
          contract between us and the person who books on behalf of everyone travelling (&ldquo;you&rdquo;). Please read them before you confirm a
          booking.
        </p>
        <h2>Enquiries and proposals</h2>
        <p>
          Sending an enquiry is free and commits you to nothing. We reply with ideas and, when you are ready, a written proposal showing the
          itinerary, what is included and the price for your dates. Prices on this website are guide prices that show what a journey usually
          costs from, per person. Your proposal is the price that applies. Proposals reflect availability when we write them; lodges, flights and
          guides are not held until you book.
        </p>
        <h2>Confirming a booking</h2>
        <p>
          Your booking is confirmed when you accept our written proposal and we receive the deposit stated in it. We then send you a booking
          confirmation. Please check every name and date on it and tell us straight away if anything is wrong.
        </p>
        <h2>Deposit and balance</h2>
        <p>
          The deposit secures your journey and lets us commit to lodges, flights and other services, some of which are non-refundable once
          paid. The balance is due by the date shown in your proposal and confirmation. If it is not paid on time, we may treat the booking as
          cancelled by you, and the cancellation terms below apply.
        </p>
        <h2>Changes you make</h2>
        <p>
          Tell us in writing if you would like to change your journey and we will do our best to help. Changes depend on availability and may
          involve supplier charges and an administration cost, which we confirm before making them.
        </p>
        <h2>If you cancel</h2>
        <p>
          You can cancel at any time by writing to us. Cancellation charges rise as your departure date gets closer and reflect the costs that
          we and our suppliers cannot recover. The charges that apply to your journey are set out in your proposal and confirmation. Services
          already paid on non-refundable terms cannot be refunded.
        </p>
        <h2>If we change or cancel</h2>
        <p>
          We rarely need to change a confirmed journey, but sometimes must. If we make a significant change or cancel for a reason other than
          non-payment, we will tell you as soon as possible and offer a comparable alternative or a refund of the money you have paid us for the
          affected services. We are not responsible for changes caused by events beyond our control, such as extreme weather, river levels,
          natural disasters, strikes, closures or government action.
        </p>
        <h2>Passports, visas and health</h2>
        <p>
          You are responsible for holding a valid passport, any visa or electronic travel authorisation you need, and for meeting health and
          vaccination requirements, including those for the Amazon and the Pantanal. We give general guidance in good faith, but rules change:
          check them with the relevant embassy and your doctor before you travel.
        </p>
        <h2>Travel insurance</h2>
        <p>
          Comprehensive travel insurance is a condition of booking. It should cover cancellation, medical treatment, emergency evacuation
          (including from remote areas) and repatriation, and the activities you plan. Please send us your policy details before you travel.
        </p>
        <h2>During your journey</h2>
        <p>
          Please follow the reasonable instructions of guides and suppliers, respect local laws and customs, and look after your belongings. We
          may end the journey of anyone whose behaviour puts others at risk, without a refund.
        </p>
        <h2>Our responsibility</h2>
        <p>
          We plan your journey with care and choose suppliers we trust. We accept responsibility for the services we agree to provide, as far
          as the law allows. We are not liable for losses that were not foreseeable, for anything caused by you or by third parties
          unconnected with your journey, or for events beyond our control. Nothing in these terms limits liability that cannot be limited by
          law.
        </p>
        <h2>Complaints</h2>
        <p>
          If something is not right during your journey, tell your guide or contact us straight away so we can try to put it right there and
          then. If it is not resolved, write to <Email /> within 28 days of your return and we will reply in full.
        </p>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the law that applies to the contract between you and us. Nothing in them affects your statutory rights as
          a consumer in your country of residence.
        </p>
      </>
    ),
  },
  privacy: {
    title: "Privacy policy",
    description: `How ${brand.name} collects, uses and protects the personal information you share when you plan a journey.`,
    lead: "What we collect when you enquire, why, who else handles it, how long we keep it, and your rights.",
    body: (
      <>
        <h2>Who we are</h2>
        <p>
          {brand.name} plans private, tailor-made journeys in Brazil and is responsible for the personal information described here. Our
          address is {address}. You can contact us about privacy at <Email />.
        </p>
        <h2>What we collect</h2>
        <p>
          When you send an enquiry we collect what you choose to give us: your name and email address, a phone number if you add one, your
          travel month and length of trip, the number of adults and children and the children&apos;s ages, your interests, pace, preferred stays,
          budget range and anything you write in your notes.
        </p>
        <p>
          If you go on to book, we also collect what is needed to arrange your journey, such as passport details, dates of birth, dietary and
          mobility needs, insurance details and emergency contacts. Please share health information only when it is needed for your trip, and
          with the agreement of the people it concerns.
        </p>
        <h2>How we use it</h2>
        <ul>
          <li>To reply to your enquiry and prepare proposals (steps you ask us to take before a contract).</li>
          <li>To book and run your journey (performance of our contract with you).</li>
          <li>To keep the records the law requires and protect our legal rights (legal obligation and legitimate interests).</li>
        </ul>
        <p>We do not sell your data, and we do not use it for advertising or automated decisions.</p>
        <h2>Who we share it with</h2>
        <p>
          Only the suppliers needed to deliver your journey (lodges, hotels, airlines, transport companies and guides), and the service
          providers that help us run our business, such as email and website hosting. Each receives only what it needs. Some are in Brazil or
          other countries outside your own; where the law requires it, we use appropriate safeguards for these transfers.
        </p>
        <h2>How long we keep it</h2>
        <p>
          Enquiries that do not lead to a booking are kept for up to two years and then deleted. Booking records are kept for as long as tax
          and accounting law requires.
        </p>
        <h2>Your rights</h2>
        <p>
          Under Brazil&apos;s LGPD and, where they apply, the UK and EU GDPR, you can ask to access, correct, delete or receive a copy of your
          data, object to or restrict how we use it, and withdraw consent at any time. Write to <Email /> and we will reply within one month. You
          can also complain to the data protection authority in your country (in Brazil, the ANPD).
        </p>
        <h2>Security</h2>
        <p>
          We use reputable providers, encrypted connections and limited access to keep your data safe. No system is perfectly secure, but we
          take care to protect what you share with us.
        </p>
        <h2>Cookies</h2>
        <p>
          See our <Link href="/legal/cookies">cookie policy</Link>. We may update this policy from time to time; the date above shows when it
          last changed.
        </p>
      </>
    ),
  },
  cookies: {
    title: "Cookie policy",
    description: `The cookies and browser storage the ${brand.name} website uses, and how to control them.`,
    lead: "This site keeps things simple: no advertising, tracking or analytics cookies.",
    body: (
      <>
        <h2>What cookies are</h2>
        <p>
          Cookies and similar browser storage are small pieces of information a website saves on your device so it can remember something
          about your visit.
        </p>
        <h2>What this website uses</h2>
        <ul>
          <li>
            <strong>Currency preference</strong> (local storage, key <code>sn-currency</code>): when you choose a currency for prices, your
            browser remembers it so prices show in that currency next time. It stays on your device until you clear it and is never sent to
            us.
          </li>
        </ul>
        <p>We set no cookies, and we use no advertising, tracking or analytics tools.</p>
        <h2>The enquiry form</h2>
        <p>When you send an enquiry, your answers are sent to us once. We do not set a cookie to do this.</p>
        <h2>Third-party content</h2>
        <p>
          Photographs and films load from our image and video delivery providers. Your browser sends them your IP address to fetch the files;
          they set no cookies through this website. Our hosting provider keeps standard server logs (such as IP address, browser type and the
          pages requested) for security.
        </p>
        <h2>Consent and how to withdraw it</h2>
        <p>
          The currency setting is strictly necessary to give you the display you asked for, so it does not need consent. You can clear it at
          any time in your browser settings (usually under privacy or site data); prices then show in US dollars again. If we ever add
          analytics or other non-essential cookies, we will ask for your consent first and update this policy.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy: <Email />. {brand.name}, {address}.
        </p>
      </>
    ),
  },
};

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(docs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = docs[slug];
  if (!d) return {};
  return pageMeta({ title: d.title, description: d.description, path: `/legal/${slug}` });
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = docs[slug];
  if (!d) notFound();
  return (
    <>
      <PageHero short label="Legal" title={d.title} lead={d.lead} image={img("sunrise-atlantic", "Sunrise over the Atlantic")} />
      <div className="px-gutter py-section">
        <div className="prose-sol">
          <p className="text-sm text-ink/65">Last updated {UPDATED}</p>
          {d.body}
          <hr />
          <p className="text-sm">
            {legalLinks.map((l, i) => (
              <span key={l.href}>
                {i > 0 && " · "}
                <Link href={l.href}>{l.label}</Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
