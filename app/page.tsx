import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Values } from "@/components/home/Values";
import { StayIntro } from "@/components/home/StayIntro";
import { IncludedStack } from "@/components/home/IncludedStack";
import { StaySlider } from "@/components/home/StaySlider";
import { BiomesReveal } from "@/components/home/BiomesReveal";
import { CarnivalWeek } from "@/components/home/CarnivalWeek";
import { PantanalStory } from "@/components/home/PantanalStory";
import { LikeALocal } from "@/components/home/LikeALocal";
import { PortraitQuote } from "@/components/home/PortraitQuote";
import { Team } from "@/components/home/Team";
import { Words } from "@/components/home/Words";
import { Faq } from "@/components/home/Faq";
import { stays } from "@/data/stays";
import { faq } from "@/data/faq";
import { JsonLd } from "@/lib/seo";

const homeStays = ["casa-rio-negro", "fazenda-tuiuiu", "pousada-coqueiral", "casa-santa-teresa", "solar-das-pedras"]
  .map((slug) => stays.find((s) => s.slug === slug)!)
  .filter(Boolean);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <About />
      <Values />
      <section id="stay" aria-labelledby="stay-title">
        <StayIntro />
        <IncludedStack />
        <StaySlider stays={homeStays} label="Where you'll stay" />
      </section>
      <BiomesReveal />
      <CarnivalWeek />
      <PantanalStory />
      <LikeALocal />
      <PortraitQuote />
      <Team />
      <Words />
      <Faq items={faq} />
    </>
  );
}
