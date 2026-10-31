import { ButtonLink } from "@/components/ui/Button";
import { SunArcs } from "@/components/ui/SunArcs";

export default function NotFound() {
  return (
    <section className="bg-waves relative grid min-h-svh place-items-center overflow-hidden bg-forest px-6 text-center text-off">
      <SunArcs className="absolute bottom-0 left-1/2 w-[120vw] max-w-none -translate-x-1/2 opacity-30" rings={7} />
      <div className="relative">
        <p className="t-label text-gold">404</p>
        <h1 className="t-h1 mt-3">This path hasn&apos;t seen the sun yet</h1>
        <p className="t-lead mx-auto mt-5 max-w-xl text-off/85">The page you&apos;re looking for has wandered off, probably to the beach. Let&apos;s get you back.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to first light</ButtonLink>
          <ButtonLink href="/journeys" variant="outline-light">
            See our journeys
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
