import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stories — I'M SO ATL",
  description:
    "Essays, features, and cultural context from the I'M SO ATL platform. The Classic Atlanta Project — a living archive of the people and places that define the city.",
};

// Story data — replace with Sanity CMS queries when connected
const featuredStory = {
  category: "Classic Atlanta Project",
  title: "Atlanta's story, told by Atlanta.",
  dek: "A living archive of the people, places, and voices that continue to define the city. The Classic Atlanta Project documents Atlanta's cultural figures — the ones you know and the ones you should.",
  date: "2026",
  href: "/stories/classic-atlanta-project",
};

const stories = [
  {
    category: "Essays",
    title: "Atlanta's Sound and the Architecture of Influence",
    dek: "How the city's musical geography shaped a global cultural movement — and why that story belongs in an archive.",
    date: "Coming Soon",
    href: "#",
  },
  {
    category: "Platform",
    title: "What We're Building With the Classic Atlanta Project",
    dek: "An inside look at the archival initiative and the methodology behind documenting a living culture.",
    date: "Coming Soon",
    href: "#",
  },
  {
    category: "Context",
    title: "Public Art as Civic Claim",
    dek: "On the meaning of 50+ cultural structures installed across Atlanta's public spaces beginning May 2026.",
    date: "Coming Soon",
    href: "#",
  },
  {
    category: "Profiles",
    title: "The Architects of Atlanta's Cultural Moment",
    dek: "The artists, curators, organizers, and institutions building the next chapter of the city.",
    date: "Coming Soon",
    href: "#",
  },
  {
    category: "Essays",
    title: "Why a Free Festival Is a Political Act",
    dek: "On accessibility, public space, and what it means to present culture without a ticket barrier.",
    date: "Coming Soon",
    href: "#",
  },
  {
    category: "Platform",
    title: "Citywide Installations: The Thinking Behind the Work",
    dek: "How site selection, artist curation, and installation design come together to transform Atlanta's public realm.",
    date: "Coming Soon",
    href: "#",
  },
];

export default function Stories() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <header className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <p className="t-label t-label--blue reveal" style={{ marginBottom: "1.6rem" }}>
              The Classic Atlanta Project
            </p>
            <h1 className="page-header__h1 reveal reveal-delay-1">
              Stories
            </h1>
            <p className="page-header__intro reveal reveal-delay-2">
              Essays, features, and cultural context from the I&apos;M SO ATL platform. A living
              archive of Atlanta&apos;s people, places, and moments. Publishing begins ahead of
              Artlanta 2026.
            </p>
          </div>
        </div>
      </header>

      {/* ── FEATURED STORY ── */}
      {/* ASSET FOLDER: /public/assets/stories/ */}
      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <p className="t-label" style={{ marginBottom: "2rem" }}>
            Featured
          </p>
          <div className="story-featured">
            <div className="story-featured__img reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/chillyo/portrait.png" alt="Omar Chilly-O Mitchell — Classic Atlanta Project" loading="lazy" />
            </div>
            <div className="story-featured__body reveal reveal-delay-2">
              <div className="story-featured__eyebrow">
                <span className="story-card__cat">{featuredStory.category}</span>
                <span className="story-card__date">{featuredStory.date}</span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.6rem,2.8vw,2.4rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                {featuredStory.title}
              </h2>
              <p className="t-body--sm">{featuredStory.dek}</p>
              <Link href={featuredStory.href} className="btn-text">
                Read the Archive
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RICH HOMIE QUAN FEATURE (existing asset) ── */}
      <section className="section section--alt" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(3rem,6vw,6rem)",
              alignItems: "center",
            }}
          >
            <div className="reveal reveal-delay-2">
              <p className="t-label" style={{ marginBottom: "1.4rem", color: "var(--blue)" }}>
                Profiles
              </p>
              <h2 className="t-h2" style={{ marginBottom: "1.8rem" }}>
                The people who made Atlanta what it is.
              </h2>
              <p className="t-body--sm" style={{ marginBottom: "1rem" }}>
                The Classic Atlanta Project puts faces and names to the cultural history most people
                feel but can rarely cite. These are the figures — the artists, the architects, the
                catalysts — whose work defines the city.
              </p>
              <p className="t-body--sm" style={{ marginBottom: "2.5rem" }}>
                Each profile is part of a permanent, growing archive. Not a trend piece. Not a
                listicle. A record.
              </p>
              <Link href="/stories/classic-atlanta-project" className="btn-text">
                Explore the Project
              </Link>
            </div>
            <div className="img-wrap r-3-2 reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/rich_homie_quan.jpg"
                alt="Rich Homie Quan — Atlanta artist portrait. Classic Atlanta Project."
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY GRID ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingBottom: "2.5rem",
              borderBottom: "1px solid var(--rule)",
              marginBottom: "2.5rem",
            }}
          >
            <div className="reveal">
              <p className="t-label" style={{ marginBottom: "0.9rem" }}>
                All Stories
              </p>
              <h2 className="t-h2">From the archive.</h2>
            </div>
            <span
              className="reveal reveal-delay-2"
              style={{ fontSize: "0.72rem", color: "var(--ink-4)", letterSpacing: "0.06em" }}
            >
              Publishing 2026
            </span>
          </div>

          <div className="story-grid">
            {stories.map((story, i) => (
              <div
                key={story.title}
                className={`story-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ""}`}
              >
                <div className="story-card__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={[
                      "/assets/chillyo/kings-on-the-block.png",
                      "/assets/chillyo/we-up-future.jpg",
                      "/assets/chillyo/inner-child.jpg",
                      "/assets/chillyo/life-is-art.jpg",
                      "/assets/chillyo/uhltra.jpg",
                      "/assets/chillyo/knows-jones.jpg",
                    ][i]}
                    alt={`Story — Omar Chilly-O Mitchell`}
                    loading="lazy"
                  />
                </div>
                <div className="story-card__meta">
                  <span className="story-card__cat">{story.category}</span>
                  <span className="story-card__date">{story.date}</span>
                </div>
                <Link href={story.href} className="story-card__title">
                  {story.title}
                </Link>
                <p className="story-card__dek">{story.dek}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: STAY INFORMED ── */}
      <div className="cta-band cta-band--light">
        <div className="container">
          <div className="cta-band__inner reveal">
            <div>
              <h2 className="cta-band__headline">
                New stories.
                <br />
                Published ahead of Artlanta.
              </h2>
              <p className="cta-band__support" style={{ color: "var(--ink-3)" }}>
                Subscribe for updates on new stories, archival releases, and platform programming
                ahead of August 2026.
              </p>
            </div>
            <Link href="/#capture-form" className="btn btn-primary">
              Stay Updated
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
