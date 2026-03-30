import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — I'M SO ATL",
  description:
    "I'M SO ATL is a citywide cultural platform organized around exhibition, storytelling, installation, and public experience. Presented by AMAAC Foundation.",
};

const initiatives = [
  {
    num: "01",
    id: "imsoatl",
    label: "I'M SO ATL",
    title: "The Platform",
    desc: "The umbrella campaign and citywide frame for Atlanta's cultural moment in 2026. I'M SO ATL coordinates four distinct expressions of the same mission — and makes the city itself the site of cultural authorship.",
    link: { href: "/festival", text: "See the Festival" },
  },
  {
    num: "02",
    id: "classic-atlanta",
    label: "The Classic Atlanta Project",
    title: "The Archive",
    desc: "A living archive of the people, places, voices, and movements that continue to define Atlanta. Photography, writing, oral history, and visual documentation — preserved in perpetuity. Not a trend piece. A record.",
    link: { href: "/stories", text: "Explore the Archive" },
  },
  {
    num: "03",
    id: "atl-parks",
    label: "ISA × ATL Parks",
    title: "Citywide Installations",
    desc: "Large-scale public art works installed across Atlanta's parks, landmarks, public corridors, and cultural spaces. Art as civic infrastructure — not contained in galleries, but available to everyone who lives here. Beginning May 2026.",
    link: { href: "/participate#artists", text: "Get Involved" },
  },
  {
    num: "04",
    id: "amaac",
    label: "AMAAC Foundation",
    title: "The Institutional Backbone",
    desc: "The Atlanta Metropolitan Arts & Culture (AMAAC) Foundation is the 501(c)(3) organizing entity behind I'M SO ATL. It provides the legal, financial, and institutional infrastructure that sustains the platform's programming year-round — grants, scholarships, community investment.",
    link: { href: "/contact?type=supporter", text: "Support AMAAC" },
  },
];

export default function About() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      {/* ASSET FOLDER: /public/assets/about/ */}
      <header className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <p className="t-label t-label--blue reveal" style={{ marginBottom: "1.6rem" }}>
              About the Platform
            </p>
            <h1 className="page-header__h1 reveal reveal-delay-1">I&apos;M SO ATL</h1>
            <p className="page-header__intro reveal reveal-delay-2">
              A citywide cultural platform organized around exhibition, storytelling, installation,
              and public experience. Bringing multiple expressions of Atlanta&apos;s cultural life
              into one evolving frame. Presented by AMAAC Foundation 501(c)(3).
            </p>
          </div>
        </div>
      </header>

      {/* ── MISSION STATEMENT ── */}
      <section className="section section--silence" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            className="reveal"
            style={{
              maxWidth: "820px",
            }}
          >
            <blockquote
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.8rem,3.5vw,3.2rem)",
                fontWeight: 400,
                color: "var(--ink)",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                marginBottom: "4rem",
              }}
            >
              &ldquo;Atlanta&apos;s culture is not a moment.
              <br />
              It is a body of work — and it deserves
              <br />a platform equal to its significance.&rdquo;
            </blockquote>
            <div
              style={{
                height: "1px",
                background: "var(--rule)",
                maxWidth: "480px",
                marginBottom: "2.5rem",
              }}
            />
            <p
              style={{
                fontSize: "clamp(0.9rem,1.1vw,0.98rem)",
                color: "var(--ink-3)",
                lineHeight: 1.8,
                maxWidth: "520px",
              }}
            >
              I&apos;M SO ATL exists because Atlanta&apos;s contributions — in music, visual art,
              fashion, film, language, and civic life — have shaped global culture while remaining
              underrepresented in institutional archives. The platform was built to change that.
              Not through celebration alone, but through documentation, preservation, and
              institutional presentation.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLATFORM RATIONALE ── */}
      <section className="section section--alt" style={{ borderBottom: "1px solid var(--rule)" }}>
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
              {/* DROP IMAGE: /public/assets/about/mission.jpg (3:2 — Atlanta cultural / documentary image) */}
              <div className="img-placeholder">
                <span>Mission Image · 3:2</span>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="t-label" style={{ marginBottom: "1.4rem" }}>
                Why This Exists
              </p>
              <h2 className="t-h2" style={{ marginBottom: "2rem" }}>
                Atlanta&apos;s culture doesn&apos;t need to be explained.
                <br />
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  It needs to be documented.
                </span>
              </h2>
              <p className="t-body--sm" style={{ marginBottom: "1.2rem" }}>
                Atlanta has always been a cultural exporter — producing music, language, fashion,
                and movements that define American culture far beyond the city limits. What
                Atlanta has often lacked is the institutional infrastructure to claim that
                authorship publicly and permanently.
              </p>
              <p className="t-body--sm">
                I&apos;M SO ATL is the claim. The festival is the proof of concept. The archive is
                the legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR INITIATIVES ── */}
      <section className="expressions section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div className="expressions__header reveal">
            <div>
              <p className="t-label" style={{ marginBottom: "0.9rem" }}>
                Platform Expressions
              </p>
              <h2 className="t-h2">
                One platform.
                <br />
                Four expressions.
              </h2>
            </div>
            <p className="expressions__intro">
              Each initiative is distinct in form. All are unified by the same conviction: that
              Atlanta&apos;s cultural life deserves to be treated with institutional seriousness.
            </p>
          </div>
          <div className="expr-list reveal">
            {initiatives.map((item) => (
              <div key={item.id} id={item.id} className="expr-row">
                <span className="expr-row__num">{item.num}</span>
                <h3 className="expr-row__title">{item.label}</h3>
                <p className="expr-row__desc">{item.desc}</p>
                <Link href={item.link.href} className="expr-row__cta">
                  {item.link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
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
                Leadership
              </p>
              <h2 className="t-h2">The team behind the platform.</h2>
            </div>
            <p className="t-body--sm reveal reveal-delay-2" style={{ alignSelf: "end" }}>
              Leadership profiles and organizational bios will be published ahead of Artlanta 2026.
            </p>
          </div>

          <div className="team-grid reveal">
            {[1, 2, 3].map((i) => (
              <div key={i} className="team-card">
                <div className="team-card__img">
                  {/* DROP IMAGE: /public/assets/about/portrait-{i}.jpg (4:5 — professional portrait) */}
                  <div className="img-placeholder">
                    <span>Portrait {i} · 4:5</span>
                  </div>
                </div>
                <div>
                  <p className="team-card__name">Name TBA</p>
                  <p className="team-card__role">Title TBA</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDATION ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: "clamp(3rem,6vw,7rem)",
              alignItems: "start",
            }}
          >
            <div className="reveal">
              <div
                style={{
                  padding: "2rem",
                  background: "var(--white-alt)",
                  border: "1px solid var(--rule)",
                  marginBottom: "1.5rem",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logos/amaac.webp"
                  alt="AMAAC Foundation"
                  style={{ height: "32px", filter: "brightness(0)", marginBottom: "1.2rem" }}
                />
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-4)",
                  }}
                >
                  501(c)(3) Organization
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="t-label" style={{ marginBottom: "1.4rem" }}>
                AMAAC Foundation
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.4rem,2vw,2rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.15,
                  marginBottom: "1.8rem",
                }}
              >
                The institutional backbone.
              </h2>
              <p className="t-body--sm" style={{ marginBottom: "1.2rem" }}>
                The Atlanta Metropolitan Arts & Culture (AMAAC) Foundation is the 501(c)(3)
                nonprofit that hosts I&apos;M SO ATL and provides the organizational infrastructure
                that sustains the platform&apos;s programming year-round.
              </p>
              <p className="t-body--sm" style={{ marginBottom: "2rem" }}>
                AMAAC supports Atlanta&apos;s cultural ecosystem through grants, scholarships, and
                community investment — making the work possible before, during, and after the
                festival period.
              </p>
              <Link href="/contact?type=supporter" className="btn-text">
                Support AMAAC Foundation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONNECT ── */}
      <div className="cta-band cta-band--light">
        <div className="container">
          <div className="cta-band__inner reveal">
            <div>
              <h2 className="cta-band__headline">
                Press, partnership,
                <br />
                or general inquiry?
              </h2>
              <p className="cta-band__support" style={{ color: "var(--ink-3)" }}>
                We respond to all inquiries within 5 business days. For immediate press needs,
                contact Tobin Ink PR directly.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/press" className="btn btn-outline">
                Press Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
