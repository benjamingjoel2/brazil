import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "Responsible travel",
  description:
    "How we travel in Brazil: local guides and local money, ethical wildlife viewing, community visits run by and for communities, and no poverty tourism.",
  path: "/responsible-travel",
});

const principles = [
  {
    title: "Local people, local money",
    body: "We work with guides, drivers, cooks, boatmen and lodge owners who were born in the places we send you. We pay fairly and promptly, and we choose locally owned stays wherever we can.",
  },
  {
    title: "Wildlife on its own terms",
    body: "No baiting, no feeding, no chasing. Our Pantanal guides keep a respectful distance from jaguars and limit boats at each sighting. In the Amazon, we never offer animal handling or photos with captive wildlife. If an animal changes its behaviour because of us, we're too close.",
  },
  {
    title: "Community visits, done right",
    body: "When you visit a riverside community, a quilombo or an Indigenous-led project, it is because the community has chosen to host visitors, sets the terms and keeps the income. You come as a guest, not a spectator.",
  },
  {
    title: "No poverty tourism. Ever.",
    body: "We don't run favela tours as entertainment, and we never present people's lives as a sight to see. If you'd like to understand a city more deeply, we'll introduce you to community-led cultural projects, music schools and kitchens where your visit supports the people who run them.",
  },
  {
    title: "Fewer, longer, better",
    body: "Brazil is enormous, and flying is part of seeing it. We plan routes that avoid unnecessary flights, encourage longer stays in fewer places, and favour lodges that protect the land around them.",
  },
  {
    title: "Leave it better",
    body: "Wherever we can, we choose lodges, guides and community hosts who look after the land and the people around them. If you would like to support a conservation or community project in a region you visit, ask us and we'll help you find one that suits.",
  },
];

export default function ResponsibleTravelPage() {
  return (
    <>
      <PageHero
        short
        label="Responsible travel"
        title="Raiz: travelling from the roots"
        lead="The best of Brazil is its people and its wild places. Our job is to make sure your journey is good for both."
        image={img("guide-walk", "A local guide leading a small group along a forest trail")}
      />
      <section className="px-gutter py-section">
        <ol className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 2) * 0.08} className="border-t-2 border-forest/15 pt-6">
              <p className="t-label text-coral-deep">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="t-h3 mt-2 text-forest">{p.title}</h2>
              <p className="mt-3 max-w-xl text-ink/85">{p.body}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-20 bg-sand p-8 md:p-12">
          <p className="t-lead max-w-3xl text-forest">Questions about how we work, or ideas for how we could do better? We&apos;d genuinely love to hear them.</p>
          <ButtonLink href="/plan" className="mt-6">
            Talk to us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
