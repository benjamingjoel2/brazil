import { waterSeasons } from "@/data/water-seasons";
import { WaterToggle } from "@/components/features/WaterToggle";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { journeyLinks, stayLinks } from "@/lib/links";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "Wild Seasons: high water or low?",
  description:
    "The Amazon and the Pantanal change completely with the water. See what high and low water mean for canoeing, trails, jaguars and birds, with typical months.",
  path: "/wild-seasons",
});

export default function WildSeasonsPage() {
  return (
    <>
      <PageHero
        label="Wild Seasons"
        title="Same forest, two different trips"
        lead="In the wet season, you canoe through the treetops of the Amazon. In the dry season, you walk beneath them. Toggle the water and see how everything changes."
        image={img("amazon-flooded-forest", "Canoe gliding between flooded trees in the Amazon")}
      />
      <div className="px-gutter py-section grid gap-[max(6rem,10vw)]">
        {waterSeasons.map((r) => (
          <WaterToggle
            key={r.id}
            region={r}
            links={{
              high: { stays: stayLinks(r.phases[0].stays), journeys: journeyLinks(r.phases[0].journeys) },
              low: { stays: stayLinks(r.phases[1].stays), journeys: journeyLinks(r.phases[1].journeys) },
            }}
          />
        ))}
        <div className="rounded-[2rem] bg-sand p-8 md:p-12">
          <p className="t-lead max-w-3xl text-forest">
            Months are typical ranges, not promises. Rivers and rains vary from year to year, so we check levels with our lodge partners before every trip.
          </p>
          <ButtonLink href="/plan" className="mt-6">
            Plan with us
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
