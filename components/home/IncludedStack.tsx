import { included } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";

/** Five sticky cards that stack as you scroll, each with a five-sun progress row. */
export function IncludedStack() {
  const n = included.items.length;
  return (
    <div className="px-gutter pb-section">
      <Reveal>
        <h3 className="t-h2 mb-10 max-w-5xl text-forest">
          {included.heading[0]} <span className="text-coral-deep">{included.heading[1]}</span>
        </h3>
      </Reveal>
      <ol className="relative">
        {included.items.map((item, i) => (
          <li
            key={item.title}
            className="md:sticky"
            style={{ top: `calc(var(--header-h) + ${i * 3.25}rem)`, zIndex: i + 1 }}
          >
            <article
              className={`grid gap-5 rounded-t-[2rem] border-t-2 border-forest/15 px-1 py-6 md:min-h-[60vh] md:grid-cols-[1fr_2fr_1fr] md:px-6 ${
                i % 2 ? "bg-sand" : "bg-off"
              }`}
            >
              <div className="flex items-start justify-between gap-4 md:flex-col md:justify-start">
                <h4 className="t-h3 text-forest">{item.title}</h4>
                <ol aria-label={`Item ${i + 1} of ${n}`} className="flex gap-1.5">
                  {Array.from({ length: n }, (_, d) => (
                    <li key={d} aria-hidden>
                      <svg viewBox="0 0 20 11" className="h-2.5 w-5">
                        <path d="M2 10a8 8 0 0 1 16 0Z" fill={d <= i ? "var(--color-coral)" : "none"} stroke="var(--color-coral)" strokeWidth="1.5" />
                      </svg>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-t-[999px] rounded-b-[1.25rem] md:aspect-[4/5] md:max-w-sm">
                <Img media={item.image} sizes="(min-width: 768px) 30vw, 100vw" />
              </div>
              <p className="text-ink/85 md:pt-1">{item.body}</p>
            </article>
          </li>
        ))}
      </ol>
      <Reveal>
        <p className="t-lead mx-auto mt-16 max-w-3xl text-center text-forest">{included.footnote}</p>
      </Reveal>
    </div>
  );
}
