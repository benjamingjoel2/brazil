import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, posts } from "@/content/journal";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/config/site";
import { formatDate } from "@/lib/dates";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.description, path: `/journal/${p.slug}` });
}

export default async function PostPage({ params }: PageProps<"/journal/[slug]">) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const { default: Body } = await p.load();
  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          author: { "@type": "Person", name: p.author },
          url: `${site.url}/journal/${p.slug}`,
        }}
      />
      <PageHero
        short
        label={
          <>
            <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.author}
          </>
        }
        title={p.title}
        lead={p.description}
        image={p.image}
      />
      <div className="px-gutter py-section">
        <div className="prose-sol mx-auto">
          <Body />
        </div>
        <div className="mx-auto mt-16 max-w-[68ch] border-t-2 border-forest/15 pt-8">
          <ButtonLink href="/plan">Plan with us</ButtonLink>
          <h2 className="t-label mt-12 text-forest/75">More from the journal</h2>
          <ul className="mt-4 space-y-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/journal/${o.slug}`} className="t-h4 text-forest hover:text-coral-deep">
                  {o.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
