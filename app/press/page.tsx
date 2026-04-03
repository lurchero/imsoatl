import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press — I'M SO ATL",
  description:
    "Press resources, media contacts, and official boilerplate for I'M SO ATL and Artlanta 2026.",
  openGraph: {
    title: "Press — I'M SO ATL",
    description: "Press resources, media contacts, and official boilerplate for I'M SO ATL and Artlanta 2026.",
    url: "https://imsoatl.org/press",
    siteName: "I'M SO ATL",
    images: [{ url: "https://imsoatl.org/assets/chillyo/kings-on-the-block.jpg", alt: "Atlanta culture — I'M SO ATL" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press — I'M SO ATL",
    description: "Press resources, media contacts, and official boilerplate for I'M SO ATL and Artlanta 2026.",
    images: ["https://imsoatl.org/assets/chillyo/kings-on-the-block.jpg"],
  },
};

const keyFacts = [
  { label: "Platform", value: "I'M SO ATL" },
  { label: "Platform Type", value: "Citywide cultural platform" },
  { label: "Organizing Entity", value: "AMAAC Foundation 501(c)(3)" },
  { label: "Flagship Festival", value: "Artlanta Arts & Culture Festival" },
  { label: "Festival Dates", value: "August 7–9, 2026" },
  { label: "Festival Location", value: "Piedmont Park, 400 Park Drive NE, Atlanta, GA 30306" },
  { label: "Admission", value: "Free and open to the public" },
  { label: "Festival Scale", value: "50+ cultural structures installed citywide" },
  { label: "Citywide Installations", value: "Beginning May 2026 — parks, landmarks, and public corridors" },
  { label: "Programming", value: "Exhibition, Visual Art Market, performance and music, citywide public art" },
  { label: "Geographic Scope", value: "Citywide — Atlanta, Georgia + global press reach" },
];

export default function Press() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      {/* ASSET FOLDER: /public/assets/press/ */}
      <header className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <p className="t-label t-label--blue reveal" style={{ marginBottom: "1.6rem" }}>
              Press &amp; Media
            </p>
            <h1 className="page-header__h1 reveal reveal-delay-1">
              Official press
              <br />
              resources.
            </h1>
            <p className="page-header__intro reveal reveal-delay-2">
              Everything you need to cover I&apos;M SO ATL and the Artlanta Arts &amp; Culture
              Festival. For interview requests, credentials, and editorial partnerships — use the
              contact below.
            </p>
            <div className="page-header__meta reveal reveal-delay-3">
              <span className="tag-blue">Press Kit Available</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── PRESS HERO IMAGE ── */}
      <section style={{ borderBottom: "1px solid var(--rule)", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <picture>
          <source
            type="image/webp"
            srcSet="/assets/chillyo/kings-on-the-block-400.webp 400w, /assets/chillyo/kings-on-the-block-800.webp 800w, /assets/chillyo/kings-on-the-block-1200.webp 1200w"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/chillyo/kings-on-the-block.jpg"
            srcSet="/assets/chillyo/kings-on-the-block-400.jpg 400w, /assets/chillyo/kings-on-the-block-800.jpg 800w, /assets/chillyo/kings-on-the-block-1200.jpg 1200w"
            sizes="100vw"
            alt="Kings on the Block — Omar Chilly-O Mitchell. Classic Atlanta Project."
            loading="lazy"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </picture>
      </section>

      {/* ── OFFICIAL BOILERPLATE ── */}
      <section className="section section--alt" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <p className="t-label reveal" style={{ marginBottom: "2rem" }}>
            Official Boilerplate
          </p>
          <div
            className="reveal reveal-delay-1"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "clamp(3rem,5vw,6rem)",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "var(--ink-3)",
                  lineHeight: 1.65,
                  maxWidth: "240px",
                }}
              >
                Use the following boilerplate in any reference to I&apos;M SO ATL or Artlanta.
                Please do not modify the core copy without approval.
              </p>
            </div>
            <blockquote
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.05rem,1.4vw,1.2rem)",
                color: "var(--ink)",
                lineHeight: 1.72,
                borderLeft: "1px solid var(--blue)",
                paddingLeft: "2rem",
              }}
            >
              I&apos;M SO ATL is an Atlanta-based citywide cultural platform organized around
              exhibition, storytelling, installation, and public experience. The platform brings
              multiple expressions of Atlanta&apos;s cultural life into one evolving frame — with
              Artlanta as its flagship festival and leading public gathering. Artlanta takes place
              August 7–9, 2026 at Piedmont Park, Atlanta. Free and open to the public. Presented
              by AMAAC Foundation 501(c)(3).
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── KEY FACTS ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <p className="t-label reveal" style={{ marginBottom: "2.5rem" }}>
            Key Facts
          </p>
          <div className="press-facts reveal">
            {keyFacts.map((fact) => (
              <div key={fact.label} className="press-fact">
                <p className="press-fact__label">{fact.label}</p>
                <p className="press-fact__value">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS CONTACTS ── */}
      <section className="section section--alt" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(3rem,6vw,7rem)",
            }}
          >
            <div>
              <p className="t-label reveal" style={{ marginBottom: "2rem" }}>
                Press Contacts
              </p>
              <div className="reveal reveal-delay-1">
                <div className="contact-info__item" style={{ borderTop: "1px solid var(--rule)" }}>
                  <span className="contact-info__label">Media &amp; Press</span>
                  <span className="contact-info__value">
                    Rachel — Tobin Ink PR
                    <br />
                    <a href="mailto:rachel@tobinink.com">rachel@tobinink.com</a>
                  </span>
                </div>
                <div className="contact-info__item">
                  <span className="contact-info__label">General Platform Inquiries</span>
                  <span className="contact-info__value">
                    <a href="mailto:support@expATL.com">support@expATL.com</a>
                  </span>
                </div>
                <div className="contact-info__item">
                  <span className="contact-info__label">Partnership Inquiries</span>
                  <span className="contact-info__value">
                    <Link href="/partners">View Partnership Page →</Link>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="t-label reveal" style={{ marginBottom: "2rem" }}>
                Press Assets
              </p>
              <div className="reveal reveal-delay-1">
                <p className="t-body--sm" style={{ marginBottom: "1.5rem" }}>
                  Official photography, platform logos, and brand assets are available for
                  credentialed press. The full asset kit will be published ahead of Artlanta 2026.
                </p>
                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--whisper)",
                    border: "1px solid var(--rule)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink-4)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Asset Download Portal
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--ink-3)" }}>
                    Available to credentialed press. Launching summer 2026.
                  </p>
                </div>
                <Link href="/contact?type=press" className="btn btn-outline">
                  Request Press Credentials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM COVERAGE CONTEXT ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "clamp(3rem,5vw,6rem)",
              alignItems: "start",
            }}
          >
            <div className="reveal">
              <p className="t-label" style={{ marginBottom: "0.9rem" }}>
                Coverage Context
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.4rem,2vw,1.9rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.2,
                }}
              >
                I&apos;M SO ATL and Atlanta 2026.
              </h2>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="t-body--sm" style={{ marginBottom: "1.2rem" }}>
                As Atlanta welcomes global attention in 2026, I&apos;M SO ATL positions the city
                not only as a destination, but as a cultural platform with international relevance.
                The platform exists to document, present, and contextualize Atlanta&apos;s
                contributions to global culture — in music, visual art, fashion, film, language,
                and civic life.
              </p>
              <p className="t-body--sm" style={{ marginBottom: "1.2rem" }}>
                Artlanta is the leading public expression of that mission — a free, multi-stage
                cultural festival that treats Atlanta&apos;s culture with institutional seriousness.
                Three days. 50+ structures. No admission ticket. No barrier.
              </p>
              <p className="t-body--sm">
                For press teams covering Atlanta&apos;s cultural moment in 2026, I&apos;M SO ATL
                is the archive, the platform, and the story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="cta-band cta-band--light">
        <div className="container">
          <div className="cta-band__inner reveal">
            <div>
              <h2 className="cta-band__headline">
                Press inquiries.
                <br />
                Response in 48 hours.
              </h2>
              <p className="cta-band__support" style={{ color: "var(--ink-3)" }}>
                For interview requests, photo access, editorial partnerships, and credential
                applications — contact rachel@tobinink.com or use the form below.
              </p>
            </div>
            <Link href="/contact?type=press" className="btn btn-primary">
              Submit Press Inquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
