import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artlanta — I'M SO ATL",
  description:
    "Three days. 50+ structures. Piedmont Park. Artlanta is the flagship festival of I'M SO ATL — free and open to the public, August 7–9, 2026.",
};

export default function Festival() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <header className="page-header page-header--ink">
        <div className="container">
          <div className="page-header__inner">
            <p className="t-label t-label--blue reveal" style={{ marginBottom: "1.6rem" }}>
              The Flagship Festival
            </p>
            <h1 className="page-header__h1 reveal reveal-delay-1">Artlanta</h1>
            <p className="page-header__intro reveal reveal-delay-2">
              For three days, Piedmont Park becomes the centerpiece of a city transformed by art.
              Free and open to the public. August 7–9, 2026.
            </p>
            <div className="page-header__meta reveal reveal-delay-3">
              <span className="tag-red">
                <span className="tag-red__dot" />
                Applications Open
              </span>
              <span className="tag-blue">Free Admission</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO IMAGE ── */}
      {/* ASSET FOLDER: /public/assets/festival/ */}
      <div className="img-wrap r-21-9" style={{ borderBottom: "1px solid var(--rule)" }}>
        {/* DROP IMAGE: /public/assets/festival/hero.jpg (21:9 wide panoramic — festival grounds or Piedmont Park) */}
        <div className="img-placeholder">
          <span>Festival Hero · Piedmont Park · 21:9</span>
        </div>
      </div>

      {/* ── FESTIVAL FACTS ── */}
      <div className="facts-strip facts-strip--5">
        <div className="fact-item reveal">
          <span className="fact-item__label">Dates</span>
          <span className="fact-item__value fact-item__value--red">Aug 7–9</span>
          <span className="fact-item__note">2026</span>
        </div>
        <div className="fact-item reveal reveal-delay-1">
          <span className="fact-item__label">Venue</span>
          <span className="fact-item__value">Piedmont Park</span>
          <span className="fact-item__note">Atlanta, Georgia</span>
        </div>
        <div className="fact-item reveal reveal-delay-2">
          <span className="fact-item__label">Scale</span>
          <span className="fact-item__value fact-item__value--blue">50+</span>
          <span className="fact-item__note">Planned structures</span>
        </div>
        <div className="fact-item reveal reveal-delay-3">
          <span className="fact-item__label">Duration</span>
          <span className="fact-item__value">3 Days</span>
          <span className="fact-item__note">Multi-stage programming</span>
        </div>
        <div className="fact-item reveal reveal-delay-4">
          <span className="fact-item__label">Admission</span>
          <span className="fact-item__value fact-item__value--blue">Free</span>
          <span className="fact-item__note">Open to the public</span>
        </div>
      </div>

      {/* ── WHAT IS ARTLANTA ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(4rem,8vw,9rem)",
              alignItems: "center",
            }}
          >
            <div>
              <p className="t-label reveal" style={{ marginBottom: "1.4rem" }}>
                The Environment
              </p>
              <h2 className="t-h2 reveal reveal-delay-1">
                A City Transformed
                <br />
                Into an Art Gallery.
              </h2>
            </div>
            <div className="reveal reveal-delay-2">
              <p
                className="t-serif"
                style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)", marginBottom: "1.8rem" }}
              >
                Not a touring festival passing through Atlanta. This is Atlanta&apos;s festival —
                built by the city, for the city, and presented to the world.
              </p>
              <p className="t-body--sm">
                Artlanta brings together visual artists and visual art vendors of all disciplines
                within a large-scale public environment — 50+ planned structures — shaped by
                installation, performance, food, music, and immersive activation. Each element is
                designed to make the city itself the frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM AREAS ── */}
      <section className="section section--alt" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "end",
              paddingBottom: "3rem",
              borderBottom: "1px solid var(--rule)",
              marginBottom: "3rem",
            }}
          >
            <div className="reveal">
              <p className="t-label" style={{ marginBottom: "0.9rem" }}>
                Program Areas
              </p>
              <h2 className="t-h2">The Four Pillars of Artlanta.</h2>
            </div>
            <p className="t-body--sm reveal reveal-delay-2" style={{ alignSelf: "end" }}>
              Each program area functions as its own environment within the larger festival —
              distinct in form, unified by the citywide cultural frame.
            </p>
          </div>

          <div className="program-grid reveal">
            <div className="program-item">
              <div className="program-item__img">
                {/* DROP IMAGE: /public/assets/festival/program-exhibition.jpg (3:2) */}
                <div className="img-placeholder">
                  <span>Exhibition Environment</span>
                </div>
              </div>
              <span className="program-item__num">01</span>
              <h3 className="program-item__title">Exhibition</h3>
              <p className="program-item__body">
                Visual art of all disciplines — painting, sculpture, photography, digital,
                installation — presented within 50+ purpose-built structures across the festival
                grounds. The primary environment of Artlanta.
              </p>
            </div>

            <div className="program-item">
              <div className="program-item__img">
                {/* DROP IMAGE: /public/assets/festival/program-market.jpg (3:2) */}
                <div className="img-placeholder">
                  <span>Visual Art Market</span>
                </div>
              </div>
              <span className="program-item__num">02</span>
              <h3 className="program-item__title">Visual Art Market</h3>
              <p className="program-item__body">
                A curated vendor market powered by Atlanta Indie Market — original works, prints,
                cultural goods, and collectibles from artists and makers across the Southeast. Open
                to the public, all three days.
              </p>
            </div>

            <div className="program-item">
              <div className="program-item__img">
                {/* DROP IMAGE: /public/assets/festival/program-performance.jpg (3:2) */}
                <div className="img-placeholder">
                  <span>Performance &amp; Music</span>
                </div>
              </div>
              <span className="program-item__num">03</span>
              <h3 className="program-item__title">Performance &amp; Music</h3>
              <p className="program-item__body">
                Live performance, music, and activations woven throughout the festival grounds.
                Multi-stage programming across all three days — from ambient art performance to
                full live sets.
              </p>
            </div>

            <div className="program-item">
              <div className="program-item__img">
                {/* DROP IMAGE: /public/assets/festival/program-citywide.jpg (3:2) */}
                <div className="img-placeholder">
                  <span>Citywide Installations</span>
                </div>
              </div>
              <span className="program-item__num">04</span>
              <h3 className="program-item__title">Citywide Installations</h3>
              <p className="program-item__body">
                Public art works extending beyond the festival grounds into the fabric of Atlanta —
                parks, public corridors, landmarks, and cultural spaces. Beginning May 2026, building
                toward August.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VENUE ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(4rem,7vw,8rem)",
              alignItems: "center",
            }}
          >
            <div className="img-wrap r-3-2 reveal">
              {/* DROP IMAGE: /public/assets/festival/venue.jpg (3:2 — Piedmont Park aerial or ground-level) */}
              <div className="img-placeholder">
                <span>Piedmont Park · Venue · 3:2</span>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="t-label" style={{ marginBottom: "1.4rem" }}>
                The Venue
              </p>
              <h2 className="t-h2" style={{ marginBottom: "2rem" }}>
                Piedmont Park,
                <br />
                Atlanta.
              </h2>
              <p className="t-body--sm" style={{ marginBottom: "1.5rem" }}>
                One of Atlanta&apos;s most beloved public spaces becomes the canvas. 185 acres of
                parkland transformed into a multi-zone exhibition and festival environment —
                accessible, open, and free for the entire city.
              </p>
              <p className="t-body--sm" style={{ marginBottom: "2.5rem" }}>
                400 Park Drive NE, Atlanta, GA 30306. The festival footprint spans the primary park
                lawn, the Lake Clara Meer waterfront, and connecting paths — creating a destination
                that rewards both planned visits and spontaneous discovery.
              </p>
              <Link href="/visit" className="btn-text">
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE PREVIEW ── */}
      <section className="section section--alt" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            className="reveal"
            style={{
              paddingBottom: "3rem",
              borderBottom: "1px solid var(--rule)",
              marginBottom: "3rem",
            }}
          >
            <p className="t-label" style={{ marginBottom: "0.9rem" }}>
              Schedule
            </p>
            <h2 className="t-h2">Three Days. Every Day Open.</h2>
          </div>

          {[
            {
              day: "Day 01",
              date: "Friday, Aug 7",
              note: "Opening Day",
              desc: "Festival grounds open. Exhibition walkthrough. Opening activations across all program zones. Live performance evening set.",
            },
            {
              day: "Day 02",
              date: "Saturday, Aug 8",
              note: "Peak Day",
              desc: "Full programming across all four pillars. Visual Art Market open. Performance stage running full schedule. Artlanta at maximum activation.",
            },
            {
              day: "Day 03",
              date: "Sunday, Aug 9",
              note: "Closing Day",
              desc: "Full programming continues. Closing ceremony. Final walkthrough of the exhibition. Collector opportunities in the Visual Art Market.",
            },
          ].map((item, i) => (
            <div
              key={item.day}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "140px 200px 1fr",
                gap: "2rem",
                alignItems: "baseline",
                padding: "2rem 0",
                borderBottom: "1px solid var(--rule)",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <span className="t-label" style={{ color: "var(--blue)" }}>
                {item.day}
              </span>
              <div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.date}
                </p>
                <p
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                  }}
                >
                  {item.note}
                </p>
              </div>
              <p style={{ fontSize: "0.86rem", color: "var(--ink-3)", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}

          <p
            className="reveal"
            style={{
              fontSize: "0.75rem",
              color: "var(--ink-4)",
              letterSpacing: "0.03em",
              paddingTop: "2rem",
            }}
          >
            Full schedule and programming details released spring 2026. Sign up for updates below.
          </p>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div className="cta-band">
        <div className="container">
          <div className="cta-band__inner reveal">
            <div>
              <h2 className="cta-band__headline">
                Artists. Vendors.
                <br />
                Applications are open.
              </h2>
              <p className="cta-band__support">
                Visual artists and visual art vendors of all disciplines are invited to apply for
                Artlanta 2026. No admission ticket required to attend.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link href="/participate#artists" className="btn btn-primary">
                Apply as an Artist
              </Link>
              <Link
                href="/participate#vendors"
                className="btn btn-outline"
                style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.6)" }}
              >
                Apply as a Vendor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
