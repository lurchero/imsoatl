import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners — I'M SO ATL",
  description:
    "Partnership and sponsorship opportunities with I'M SO ATL and Artlanta 2026 — a citywide cultural platform with international relevance.",
  openGraph: {
    title: "Partners — I'M SO ATL",
    description: "Partnership and sponsorship opportunities with Artlanta 2026 — a citywide cultural platform with international relevance.",
    url: "https://imsoatl.org/partners",
    siteName: "I'M SO ATL",
    images: [{ url: "https://imsoatl.org/assets/chillyo/we-up-future.jpg", alt: "Atlanta culture — I'M SO ATL" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners — I'M SO ATL",
    description: "Partnership and sponsorship opportunities with Artlanta 2026 — a citywide cultural platform with international relevance.",
    images: ["https://imsoatl.org/assets/chillyo/we-up-future.jpg"],
  },
};

const tiers = [
  {
    name: "Presenting Partner",
    label: "Highest Tier",
    desc: "Top-level brand association with the Artlanta festival and the I'M SO ATL platform. Presenting credit appears in all event materials, signage, digital presence, and press communications. Premier logo placement across all touchpoints — festival, print, web.",
    benefits: [
      "Presenting credit in all festival materials",
      "Premier signage placement at Piedmont Park",
      "Brand integration across digital channels",
      "Dedicated press acknowledgment",
      "Platform-wide association year-round",
    ],
  },
  {
    name: "Program Sponsor",
    label: "Stage or Series",
    desc: "Exclusive naming rights to a festival stage, programming series, or platform initiative. Direct audience association with a specific cultural expression within the Artlanta environment.",
    benefits: [
      "Stage or program naming rights",
      "Signage at sponsored stage / area",
      "Digital presence across that programming strand",
      "Inclusion in all related press materials",
    ],
  },
  {
    name: "Installation Partner",
    label: "Citywide",
    desc: "Brand alignment with the 50+ cultural structures installed across Atlanta beginning May 2026. Visible civic presence for months before the festival — in parks, public corridors, and cultural landmarks.",
    benefits: [
      "Visible credit on citywide installation materials",
      "Association with Atlanta's public art infrastructure",
      "Months of pre-festival public exposure",
      "Inclusion in related press and platform coverage",
    ],
  },
  {
    name: "Community Partner",
    label: "Activation Level",
    desc: "Collaborative programming, co-branded activations, and community-level engagement. Designed for local institutions, neighborhood organizations, and brands with deep Atlanta roots.",
    benefits: [
      "Co-presented programming opportunities",
      "Brand presence within community activations",
      "Inclusion in platform communications",
      "Access to Artlanta audience and community",
    ],
  },
];

const currentPartners = [
  { name: "AMAAC Foundation", category: "Presenting", logo: "/assets/logos/amaac.webp", height: 28 },
  { name: "Atlanta Indie Market", category: "Production", logo: "/assets/logos/aim.webp", height: 38 },
  { name: "Bonfire", category: "Production", logo: "/assets/logos/bonfire.webp", height: 34 },
  { name: "The Hype Magazine", category: "Media", logo: "/assets/logos/hype.webp", height: 26 },
  { name: "ExpATL", category: "Media", logo: "/assets/logos/expatl.webp", height: 20 },
  { name: "Tobin Ink PR", category: "Agency & Technology", logo: "/assets/logos/tobin.webp", height: 24 },
  { name: "Rebelity Software", category: "Agency & Technology", logo: "/assets/logos/rebelity.webp", height: 24 },
];

export default function Partners() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <header className="page-header page-header--ink">
        <div className="container">
          <div className="page-header__inner">
            <p className="t-label t-label--blue reveal" style={{ marginBottom: "1.6rem" }}>
              Partnership &amp; Sponsorship
            </p>
            <h1 className="page-header__h1 reveal reveal-delay-1">
              Align With
              <br />
              the Platform.
            </h1>
            <p className="page-header__intro reveal reveal-delay-2">
              I&apos;M SO ATL offers organizations and brands direct, meaningful access to
              Atlanta&apos;s cultural community. This is not a transactional sponsorship. This is
              alignment with a city-scale cultural moment.
            </p>
            <div className="page-header__meta reveal reveal-delay-3">
              <span className="tag-blue">Inquiries Open</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── PLATFORM CASE ── */}
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
                The Opportunity
              </p>
              <h2 className="t-h2 reveal reveal-delay-1">
                Why this platform.
                <br />
                Why now.
              </h2>
            </div>
            <div className="reveal reveal-delay-2">
              <p
                className="t-serif"
                style={{ fontSize: "clamp(1.1rem,1.5vw,1.3rem)", marginBottom: "1.8rem" }}
              >
                As Atlanta welcomes global attention in 2026, I&apos;M SO ATL positions the city as
                a cultural platform with international relevance — and creates alignment
                opportunities for partners who understand that.
              </p>
              <p className="t-body--sm">
                The platform reaches Atlanta&apos;s cultural community directly — artists,
                collectors, creatives, civic leaders, press, and general public alike. With free
                admission and citywide scale, Artlanta&apos;s reach is not bounded by a ticket
                price or a venue cap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM FACTS ── */}
      <div className="facts-strip facts-strip--4" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="fact-item reveal">
          <span className="fact-item__label">Festival Scale</span>
          <span className="fact-item__value fact-item__value--blue">50+</span>
          <span className="fact-item__note">Cultural structures</span>
        </div>
        <div className="fact-item reveal reveal-delay-1">
          <span className="fact-item__label">Duration</span>
          <span className="fact-item__value">3 Days</span>
          <span className="fact-item__note">Continuous programming</span>
        </div>
        <div className="fact-item reveal reveal-delay-2">
          <span className="fact-item__label">Admission</span>
          <span className="fact-item__value">Free</span>
          <span className="fact-item__note">No ticket barrier</span>
        </div>
        <div className="fact-item reveal reveal-delay-3">
          <span className="fact-item__label">Citywide Presence</span>
          <span className="fact-item__value fact-item__value--blue">May–Aug</span>
          <span className="fact-item__note">Installations begin May</span>
        </div>
      </div>

      {/* ── ATMOSPHERE IMAGE ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/chillyo/artlanta-galleries.jpg"
        alt="Artlanta gallery experience — I'M SO ATL"
        loading="lazy"
        style={{ width: "100%", display: "block", maxHeight: "520px", objectFit: "cover" }}
      />

      {/* ── PARTNERSHIP TIERS ── */}
      <section id="sponsorship" className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "end",
              paddingBottom: "3rem",
              borderBottom: "1px solid var(--rule)",
              marginBottom: "0",
            }}
          >
            <div className="reveal">
              <p className="t-label" style={{ marginBottom: "0.9rem" }}>
                Partnership Tiers
              </p>
              <h2 className="t-h2">How to engage.</h2>
            </div>
            <p className="t-body--sm reveal reveal-delay-2" style={{ alignSelf: "end" }}>
              Each tier offers a distinct form of association with the platform. Custom
              arrangements are available for organizations with specific program goals.
            </p>
          </div>

          <div className="tier-list reveal">
            {tiers.map((tier, i) => (
              <div key={tier.name} className="tier-row" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div>
                  <span
                    style={{
                      fontSize: "0.58rem",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--blue)",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {tier.label}
                  </span>
                  <h3 className="tier-row__name">{tier.name}</h3>
                </div>
                <div>
                  <p className="tier-row__desc" style={{ marginBottom: "1rem" }}>
                    {tier.desc}
                  </p>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                    }}
                  >
                    {tier.benefits.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontSize: "0.76rem",
                          color: "var(--ink-3)",
                          paddingLeft: "1rem",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "var(--blue)",
                          }}
                        >
                          —
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact?type=partner" className="tier-row__cta">
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENT PARTNERS ── */}
      <section className="section section--alt" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "3rem" }}>
            <p className="t-label" style={{ marginBottom: "0.9rem" }}>
              Current Partners
            </p>
            <h2 className="t-h2">Institutional Support and Strategic Alignment.</h2>
          </div>

          <div className="partner-categories reveal">
            {["Presenting", "Production", "Media", "Agency & Technology"].map((cat) => (
              <div key={cat} className="partner-cat">
                <span className="partner-cat__label">{cat}</span>
                <div className="partner-cat__logos">
                  {currentPartners
                    .filter((p) => p.category === cat)
                    .map((p) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={p.name}
                        src={p.logo}
                        alt={p.name}
                        className="partner-logo-img"
                        style={{ height: `${p.height}px` }}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INQUIRY CTA ── */}
      <div className="cta-band">
        <div className="container">
          <div className="cta-band__inner reveal">
            <div>
              <h2 className="cta-band__headline">
                Ready to discuss
                <br />
                partnership?
              </h2>
              <p className="cta-band__support">
                Send a brief overview of your organization and the type of partnership you have in
                mind. We respond within 5 business days.
              </p>
            </div>
            <Link href="/contact?type=partner" className="btn btn-primary">
              Submit an Inquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
