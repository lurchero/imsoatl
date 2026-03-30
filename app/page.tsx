import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════
          S1 — HERO
      ══════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero__body">
          <div className="hero__timing">
            <span className="tag-red">
              <span className="tag-red__dot" />
              Summer 2026
            </span>
            <span className="hero__timing-text">
              Citywide transformation begins May 2026 — Artlanta Aug 7–9
            </span>
          </div>
          <p className="hero__eyebrow">I&apos;M SO ATL</p>
          <h1 className="hero__headline">
            This Summer,
            <br />
            Atlanta Becomes
            <br />
            an Art Gallery.
          </h1>
          <p className="hero__support">
            As Atlanta welcomes the world, I&apos;M SO ATL frames the city as a living cultural
            platform shaped by art, public space, memory, and imagination. At its center is Artlanta
            — the platform&apos;s flagship festival and leading exhibition environment.
          </p>
          <div className="hero__actions">
            <Link href="/festival" className="btn btn-primary">
              Explore Artlanta
            </Link>
            <Link href="/about" className="btn btn-outline">
              Discover the Platform
            </Link>
          </div>
        </div>
        <div className="hero__datum" role="list" aria-label="Key details">
          <div className="hero__datum-item" role="listitem">
            <span className="hero__datum-label">Festival</span>
            <span className="hero__datum-value red">Artlanta</span>
          </div>
          <div className="hero__datum-item" role="listitem">
            <span className="hero__datum-label">Dates</span>
            <span className="hero__datum-value">Aug 7–9, 2026</span>
          </div>
          <div className="hero__datum-item" role="listitem">
            <span className="hero__datum-label">Venue</span>
            <span className="hero__datum-value">Piedmont Park, Atlanta</span>
          </div>
          <div className="hero__datum-item" role="listitem">
            <span className="hero__datum-label">Citywide Installations</span>
            <span className="hero__datum-value">Beginning May 2026</span>
          </div>
          <div className="hero__datum-item" role="listitem">
            <span className="hero__datum-label">Admission</span>
            <span className="hero__datum-value blue">Free to the Public</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          S2 — PROOF STRIP
      ══════════════════════════════════════════ */}
      <div className="proof-strip" role="complementary" aria-label="Platform facts">
        <div className="proof-strip__inner">
          <div className="proof-strip__item">
            <span className="proof-strip__label">Date</span>
            <span className="proof-strip__value" style={{ color: "var(--red)" }}>
              AUG 7–9, 2026
            </span>
          </div>
          <div className="proof-strip__item">
            <span className="proof-strip__label">Venue</span>
            <span className="proof-strip__value">PIEDMONT PARK</span>
          </div>
          <div className="proof-strip__item">
            <span className="proof-strip__label">Scale</span>
            <span className="proof-strip__value hi">50+ PLANNED STRUCTURES</span>
          </div>
          <div className="proof-strip__item">
            <span className="proof-strip__label">Citywide</span>
            <span className="proof-strip__value">INSTALLATIONS BEGINNING MAY 2026</span>
          </div>
          <div className="proof-strip__item">
            <span className="proof-strip__label">Admission</span>
            <span className="proof-strip__value hi">FREE TO THE PUBLIC</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          S3 — PLATFORM INTRO
          NOTE: b_money.jpg is a missing asset — placeholder used.
          Replace with: architectural/cinematic Atlanta public space image (4:5 ratio)
      ══════════════════════════════════════════ */}
      <section className="platform-intro section">
        <div className="container">
          <div className="platform-intro__grid">
            <div className="platform-intro__img reveal">
              {/* MISSING ASSET: b_money.jpg — architectural, cinematic, Atlanta public space (4:5 ratio) */}
              <div
                style={{
                  width: "100%",
                  paddingBottom: "125%",
                  background: "var(--whisper)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "0.7rem",
                    color: "var(--ink-4)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    lineHeight: 1.8,
                  }}
                >
                  Image
                  <br />
                  Coming Soon
                </p>
              </div>
            </div>
            <div className="platform-intro__right">
              <p className="t-label t-label--blue reveal">The Platform</p>
              <h2 className="t-h2 reveal reveal-delay-1">
                A Platform for
                <br />a City on Display.
              </h2>
              <p className="platform-intro__serif reveal reveal-delay-2">
                Not a single venue. Not a single wall.
                <br />A city under transformation.
              </p>
              <p className="platform-intro__body reveal reveal-delay-3">
                I&apos;M SO ATL is a citywide cultural platform organized around exhibition,
                storytelling, installation, and public experience — bringing multiple expressions of
                Atlanta&apos;s cultural life into one evolving frame.
              </p>
              <div className="reveal reveal-delay-4">
                <Link href="/about" className="btn-text">
                  Discover the Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          S4 — ARTLANTA FEATURE
      ══════════════════════════════════════════ */}
      <section className="artlanta-feature">
        <div className="artlanta-feature__inner">
          <div className="artlanta-feature__visual reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.squarespace-cdn.com/content/v1/696ee64a2136380e1eba3b64/5cf031cb-aa3d-4861-8c34-1de5e216d280/web1a.png"
              alt="Artlanta — Piedmont Park festival environment"
              loading="lazy"
            />
          </div>
          <div className="artlanta-feature__content">
            <p className="artlanta-feature__label reveal">Featured Festival</p>
            <h2 className="artlanta-feature__name reveal reveal-delay-1">Artlanta</h2>
            <p className="artlanta-feature__sub reveal reveal-delay-1">
              The flagship festival of I&apos;M SO ATL
            </p>
            <div className="reveal reveal-delay-2" style={{ marginBottom: "2rem", alignSelf: "flex-start" }}>
              <span className="tag-red">
                <span className="tag-red__dot" />
                Applications Open · Aug 7–9, 2026
              </span>
            </div>
            <p className="artlanta-feature__body reveal reveal-delay-2">
              For three days, Piedmont Park becomes the centerpiece of a city transformed by art.
              Artlanta brings together visual artists and visual art vendors of all disciplines
              within a large-scale public environment — 50+ planned structures — shaped by
              installation, performance, food, music, and immersive activation.
            </p>
            <div className="reveal reveal-delay-3">
              <Link href="/festival" className="btn btn-primary">
                View the Festival
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          S5 — FEATURED ART ZONE
      ══════════════════════════════════════════ */}
      <section className="featured-art section--alt section">
        <div className="container">
          <div className="featured-art__header reveal">
            <div>
              <p className="t-label" style={{ marginBottom: "0.9rem" }}>
                Featured Work
              </p>
              <h2 className="t-h2">Art of the Platform.</h2>
            </div>
            <Link href="/stories" className="btn-text reveal reveal-delay-2">
              View All Stories
            </Link>
          </div>

          <div className="featured-art__primary reveal">
            <div className="featured-art__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/rich_homie_quan.jpg"
                alt="Rich Homie Quan — Atlanta artist portrait. Classic Atlanta Project."
                loading="lazy"
              />
            </div>
            <div className="featured-art__caption">
              <p className="featured-art__overline">The Classic Atlanta Project</p>
              <h3 className="featured-art__title">Atlanta&apos;s story, told by Atlanta.</h3>
              <p className="featured-art__body">
                A living archive of the people, places, and voices that continue to define the city.
                The Classic Atlanta Project documents Atlanta&apos;s cultural figures — the ones you
                know and the ones you should.
              </p>
              <Link href="/stories" className="btn-text">
                Explore the Archive
              </Link>
            </div>
          </div>

          <div className="featured-art__grid reveal">
            <div className="featured-art__slot">
              <div className="featured-art__slot-img img-wrap r-3-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.squarespace-cdn.com/content/v1/696ee64a2136380e1eba3b64/95e8ec0e-420b-4c3e-b442-b72d1edf0db6/61df51b4-9aee-47c2-bc1d-b7909c7b90b24fd0a171fc339bb904_outkast+mural.jpg"
                  alt="Outkast Mural — Atlanta"
                  loading="lazy"
                />
              </div>
              <div className="featured-art__slot-caption">
                <p className="t-label" style={{ marginBottom: "0.4rem" }}>
                  Public Art
                </p>
                <p className="featured-art__slot-title">Citywide Installations</p>
                <p className="featured-art__slot-body">
                  Works across Atlanta&apos;s parks, landmarks, and public corridors beginning May
                  2026.
                </p>
              </div>
            </div>

            <div className="featured-art__slot">
              <div
                className="featured-art__slot-img img-wrap r-3-2"
                style={{
                  background: "var(--whisper)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--ink-4)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  Featured Artist
                  <br />
                  Coming Soon
                </p>
              </div>
              <div className="featured-art__slot-caption">
                <p className="t-label" style={{ marginBottom: "0.4rem" }}>
                  Artist Spotlight
                </p>
                <p className="featured-art__slot-title">Announcing Soon</p>
                <p className="featured-art__slot-body">
                  Artist features and spotlights will be added as the program develops.
                </p>
              </div>
            </div>

            <div className="featured-art__slot">
              <div
                className="featured-art__slot-img img-wrap r-3-2"
                style={{
                  background: "var(--whisper)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--ink-4)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  Artifact Preview
                  <br />
                  Coming Soon
                </p>
              </div>
              <div className="featured-art__slot-caption">
                <p className="t-label" style={{ marginBottom: "0.4rem" }}>
                  Artifact
                </p>
                <p className="featured-art__slot-title">Limited Pieces</p>
                <p className="featured-art__slot-body">
                  Limited pieces and cultural keepsakes connected to a singular moment in the life
                  of the city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          S6 — PLATFORM EXPRESSIONS
      ══════════════════════════════════════════ */}
      <section className="expressions section">
        <div className="container">
          <div className="expressions__header reveal">
            <div>
              <p className="t-label" style={{ marginBottom: "0.9rem" }}>
                The Platform
              </p>
              <h2 className="t-h2">
                One Platform.
                <br />
                Multiple Expressions.
              </h2>
            </div>
            <p className="expressions__intro">
              I&apos;M SO ATL unfolds through a set of connected cultural expressions — each
              distinct in form, unified in intent.
            </p>
          </div>
          <div className="expr-list reveal">
            <div className="expr-row">
              <span className="expr-row__num">01</span>
              <h3 className="expr-row__title">I&apos;M SO ATL</h3>
              <p className="expr-row__desc">
                The umbrella campaign platform — the citywide frame for Atlanta&apos;s cultural
                moment in 2026.
              </p>
              <Link href="/about" className="expr-row__cta">
                About the Platform
              </Link>
            </div>
            <div className="expr-row">
              <span className="expr-row__num">02</span>
              <h3 className="expr-row__title">The Classic Atlanta Project</h3>
              <p className="expr-row__desc">
                A living archive of the people, places, and voices that continue to define the city.
              </p>
              <Link href="/stories" className="expr-row__cta">
                View the Archive
              </Link>
            </div>
            <div className="expr-row">
              <span className="expr-row__num">03</span>
              <h3 className="expr-row__title">Citywide Installations</h3>
              <p className="expr-row__desc">
                Works extending beyond the festival grounds into the fabric of Atlanta — parks,
                public space, landmarks, and cultural corridors.
              </p>
              <Link href="/participate" className="expr-row__cta">
                Get Involved
              </Link>
            </div>
            <div className="expr-row">
              <span className="expr-row__num">04</span>
              <h3 className="expr-row__title">Artlanta</h3>
              <p className="expr-row__desc">
                A major public festival and exhibition environment — the platform&apos;s leading
                public gathering. Piedmont Park, Aug 7–9, 2026.
              </p>
              <Link href="/festival" className="expr-row__cta">
                Explore Artlanta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          S7 — THESIS / SILENCE SECTION
      ══════════════════════════════════════════ */}
      <section className="thesis-block section--silence" aria-label="Platform statement">
        <div className="container">
          <div className="thesis-block__inner reveal">
            <blockquote className="thesis-block__quote">
              &ldquo;Atlanta becomes the gallery.
              <br />
              Its spaces become the exhibitions.
              <br />
              Its people become the curators, the artists,
              <br />
              the designers, and part of the living work.&rdquo;
            </blockquote>
            <div className="thesis-block__rule" />
            <p className="thesis-block__support">
              As Atlanta welcomes global attention in 2026, I&apos;M SO ATL presents the city as a
              site of cultural authorship — where public space, artistic expression, and collective
              memory come into view through a new exhibition frame.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          S8 — PARTICIPATION PATHWAYS
      ══════════════════════════════════════════ */}
      <section className="pathways section">
        <div className="container">
          <div className="pathways__header reveal">
            <div>
              <p className="t-label" style={{ marginBottom: "0.9rem" }}>
                Participation
              </p>
              <h2 className="t-h2">Get Involved.</h2>
            </div>
            <p className="pathways__intro">
              I&apos;M SO ATL and Artlanta open multiple pathways across the platform. Find the
              entry point that fits your role.
            </p>
          </div>

          <div className="pathway-list reveal" role="list">
            <div className="pathway-row" role="listitem">
              <span className="pathway-row__num">01</span>
              <h3 className="pathway-row__title">Artists</h3>
              <p className="pathway-row__desc">
                Apply to exhibit or participate in Artlanta and related platform expressions. Visual
                artists of all disciplines.
              </p>
              <div className="pathway-row__right">
                <span className="tag-red" style={{ marginBottom: "0.5rem" }}>
                  <span className="tag-red__dot" />
                  Applications Open
                </span>
                <Link href="/participate#artists" className="pathway-row__cta">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="pathway-row" role="listitem">
              <span className="pathway-row__num">02</span>
              <h3 className="pathway-row__title">Visual Art Vendors</h3>
              <p className="pathway-row__desc">
                Present work, products, and visual culture within a high-visibility public
                environment. Powered by Atlanta Indie Market.
              </p>
              <div className="pathway-row__right">
                <span className="tag-red" style={{ marginBottom: "0.5rem" }}>
                  <span className="tag-red__dot" />
                  Applications Open
                </span>
                <Link href="/participate#vendors" className="pathway-row__cta">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="pathway-row" role="listitem">
              <span className="pathway-row__num">03</span>
              <h3 className="pathway-row__title">Partners &amp; Institutions</h3>
              <p className="pathway-row__desc">
                Explore cultural partnership opportunities connected to a citywide platform with
                global implications.
              </p>
              <div className="pathway-row__right">
                <span className="tag-blue" style={{ marginBottom: "0.5rem" }}>
                  Inquiries Open
                </span>
                <Link href="/partners" className="pathway-row__cta">
                  Inquire
                </Link>
              </div>
            </div>

            <div className="pathway-row" role="listitem">
              <span className="pathway-row__num">04</span>
              <h3 className="pathway-row__title">Sponsors</h3>
              <p className="pathway-row__desc">
                Align your brand with a city-scale cultural platform. Sponsorship tiers rolling out
                in phases.
              </p>
              <div className="pathway-row__right">
                <span className="tag-blue" style={{ marginBottom: "0.5rem" }}>
                  Rolling Out 2026
                </span>
                <Link href="/partners#sponsorship" className="pathway-row__cta">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="pathway-row" role="listitem">
              <span className="pathway-row__num">05</span>
              <h3 className="pathway-row__title">Press &amp; Media</h3>
              <p className="pathway-row__desc">
                Access press resources, media contacts, and official platform updates for journalists
                and reporters.
              </p>
              <div className="pathway-row__right">
                <span className="tag-blue" style={{ marginBottom: "0.5rem" }}>
                  Press Kit Available
                </span>
                <Link href="/press" className="pathway-row__cta">
                  Access
                </Link>
              </div>
            </div>

            <div className="pathway-row" role="listitem">
              <span className="pathway-row__num">06</span>
              <h3 className="pathway-row__title">Supporters &amp; Patrons</h3>
              <p className="pathway-row__desc">
                Support the platform and the artists making Atlanta a city-scale gallery. Patron
                program coming soon.
              </p>
              <div className="pathway-row__right">
                <span className="tag-blue" style={{ marginBottom: "0.5rem" }}>
                  Launching Spring 2026
                </span>
                <Link href="/contact" className="pathway-row__cta">
                  Express Interest
                </Link>
              </div>
            </div>

            <div className="pathway-row" role="listitem">
              <span className="pathway-row__num">07</span>
              <h3 className="pathway-row__title">Volunteers</h3>
              <p className="pathway-row__desc">
                Join the volunteer team supporting Artlanta operations, installations, and public
                programming across Atlanta.
              </p>
              <div className="pathway-row__right">
                <span className="tag-blue" style={{ marginBottom: "0.5rem" }}>
                  Sign-Ups Open Summer 2026
                </span>
                <Link href="/participate#volunteers" className="pathway-row__cta">
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="pathway-row" role="listitem">
              <span className="pathway-row__num">08</span>
              <h3 className="pathway-row__title">Visitors</h3>
              <p className="pathway-row__desc">
                Plan your visit and follow the evolving program as it unfolds across the city. Free,
                no ticket required.
              </p>
              <div className="pathway-row__right">
                <span className="tag-red" style={{ marginBottom: "0.5rem" }}>
                  <span className="tag-red__dot" />
                  Aug 7–9 · Free
                </span>
                <Link href="/festival" className="pathway-row__cta">
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </div>

          <p className="pathways__hint" aria-hidden="true">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path d="M7 1L13 7L7 13M1 7H13" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Swipe to explore
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          S9 — PARTNER / CREDIBILITY
      ══════════════════════════════════════════ */}
      <section className="credibility section section--alt">
        <div className="container">
          <div className="credibility__header">
            <div className="reveal">
              <p className="t-label" style={{ marginBottom: "0.9rem" }}>
                Institutional Support
              </p>
              <h2 className="t-h2">
                Institutional Support
                <br />
                and Strategic Alignment.
              </h2>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="credibility__body">
                Built for public visibility and long-term cultural relevance, I&apos;M SO ATL is
                designed to support meaningful collaboration across institutions, brands, media, and
                civic partners.
              </p>
              <p className="credibility__secondary">
                Partnership and sponsorship opportunities connected to Artlanta and the wider
                platform continue to evolve as the campaign develops.
              </p>
              <Link href="/partners" className="btn btn-outline">
                Explore Partnership Opportunities
              </Link>
            </div>
          </div>

          <div className="partner-categories reveal">
            <div className="partner-cat">
              <span className="partner-cat__label">Presenting</span>
              <div className="partner-cat__logos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logos/amaac.webp"
                  alt="AMAAC Foundation"
                  className="partner-logo-img"
                  style={{ height: "28px" }}
                />
              </div>
            </div>
            <div className="partner-cat">
              <span className="partner-cat__label">Production</span>
              <div className="partner-cat__logos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logos/aim.webp"
                  alt="Atlanta Indie Market"
                  className="partner-logo-img"
                  style={{ height: "38px" }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logos/bonfire.webp"
                  alt="Bonfire"
                  className="partner-logo-img"
                  style={{ height: "34px" }}
                />
              </div>
            </div>
            <div className="partner-cat">
              <span className="partner-cat__label">Media</span>
              <div className="partner-cat__logos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logos/hype.webp"
                  alt="The Hype Magazine"
                  className="partner-logo-img"
                  style={{ height: "26px" }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logos/expatl.webp"
                  alt="ExpATL"
                  className="partner-logo-img"
                  style={{ height: "20px" }}
                />
              </div>
            </div>
            <div className="partner-cat">
              <span className="partner-cat__label">Community</span>
              <div className="partner-cat__logos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logos/tobin.webp"
                  alt="Tobin Ink PR"
                  className="partner-logo-img"
                  style={{ height: "24px" }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logos/rebelity.webp"
                  alt="Rebelity Software"
                  className="partner-logo-img"
                  style={{ height: "24px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          S10 — GLOBAL VISIBILITY
      ══════════════════════════════════════════ */}
      <section className="global-block">
        <div className="container">
          <div className="global-block__inner reveal">
            <p className="global-block__eyebrow">I&apos;M SO ATL · Artlanta · Atlanta 2026</p>
            <h2 className="global-block__headline">
              Presented from Atlanta.
              <br />
              Addressed to the World.
            </h2>
            <p className="global-block__body">
              As Atlanta welcomes the world, I&apos;M SO ATL positions the city not only as a
              destination, but as a cultural platform with international relevance — a public
              statement about what Atlanta makes, how it gathers, and how it should be experienced.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          S11 — EMAIL CAPTURE
      ══════════════════════════════════════════ */}
      <section className="capture">
        <div className="container">
          <div className="capture__inner">
            <div className="reveal">
              <p className="t-label t-label--blue" style={{ marginBottom: "0.9rem" }}>
                Stay Connected
              </p>
              <h2 className="capture__headline">
                Stay
                <br />
                Connected.
              </h2>
              <p className="capture__body" style={{ marginTop: "1rem" }}>
                Get updates on Artlanta, citywide installations, exhibitions, and exclusive releases
                across the platform.
              </p>
            </div>
            <div className="reveal reveal-delay-2">
              <form data-netlify="true" id="capture-form" name="homepage-updates" noValidate>
                <input type="hidden" name="form-name" value="homepage-updates" />
                <div className="capture__input-row">
                  <input
                    type="email"
                    id="capture-email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                    aria-label="Email address"
                  />
                  <button type="submit">Subscribe for Updates</button>
                </div>
              </form>
              <div id="capture-success" role="alert">
                You&apos;re on the list. We&apos;ll be in touch.
              </div>
              <div id="capture-error" role="alert">
                Please enter a valid email address.
              </div>
              <p className="capture__note">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
