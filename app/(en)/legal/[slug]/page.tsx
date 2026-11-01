import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { legalLinks } from "@/config/site";
import { legalDocs, legalUpdated } from "@/data/legal";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

const docs = legalDocs;

/** Renders [label](/path) links inside a legal paragraph. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        return m ? (
          <Link key={i} href={m[2]}>
            {m[1]}
          </Link>
        ) : (
          part
        );
      })}
    </>
  );
}

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
          <p className="text-sm text-ink/65">Last updated {legalUpdated}</p>
          {d.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
              {s.table && (
                <div className="my-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[15px] leading-snug">
                    <thead>
                      <tr>
                        {s.table.head.map((c) => (
                          <th key={c} scope="col" className="border-b border-ink/25 py-2 pr-4 align-bottom font-medium">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r) => (
                        <tr key={r.join("|")}>
                          {r.map((c, i) => (
                            <td key={i} className="border-b border-ink/10 py-2 pr-4 align-top">
                              {c}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.after?.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </section>
          ))}
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
