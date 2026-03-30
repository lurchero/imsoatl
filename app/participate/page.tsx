import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Participate — I'M SO ATL",
  description:
    "Artists, vendors, volunteers, press, and partners — find your pathway into I'M SO ATL and Artlanta 2026.",
};

const pathways = [
  {
    id: "artists",
    num: "01",
    label: "Artists",
    title: "Apply to Exhibit",
    status: "red" as const,
    statusText: "Applications Open",
    summary:
      "Artlanta invites visual artists of all disciplines to apply for exhibition within the festival's primary environment — 50+ purpose-built structures at Piedmont Park. This is a juried selection.",
    eligibility:
      "Visual artists working in any medium. Atlanta-based preferred. Portfolio submission required.",
    deadline: "TBA — Spring 2026",
    cta: "Apply as an Artist",
    href: "/contact?type=artist",
  },
  {
    id: "vendors",
    num: "02",
    label: "Visual Art Vendors",
    title: "Vendor Application",
    status: "red" as const,
    statusText: "Applications Open",
    summary:
      "The Artlanta Visual Art Market is powered by Atlanta Indie Market. Present original work, prints, and cultural goods within a high-visibility public environment at Piedmont Park. This is a curated selection — not a general craft fair.",
    eligibility:
      "Visual artists, designers, and makers with original work. Juried selection process.",
    deadline: "TBA — Spring 2026",
    cta: "Apply as a Vendor",
    href: "/contact?type=vendor",
  },
  {
    id: "partners",
    num: "03",
    label: "Partners & Institutions",
    title: "Cultural Partnership",
    status: "blue" as const,
    statusText: "Inquiries Open",
    summary:
      "Explore cultural partnership opportunities connected to a citywide platform with global implications. From institutional collaborations to co-presented programming, partnerships are structured around shared mission — not just transaction.",
    eligibility: "Cultural institutions, foundations, civic organizations, and brands.",
    deadline: "Rolling",
    cta: "Explore Partnership",
    href: "/partners",
  },
  {
    id: "sponsors",
    num: "04",
    label: "Sponsors",
    title: "Festival Sponsorship",
    status: "blue" as const,
    statusText: "Rolling Out 2026",
    summary:
      "Align your brand with a city-scale cultural platform. Sponsorship opportunities connect brands directly to Atlanta's most engaged cultural audience across the festival period and the platform's year-round programming.",
    eligibility: "Brands and organizations seeking meaningful cultural alignment.",
    deadline: "Rolling",
    cta: "View Sponsorship",
    href: "/partners#sponsorship",
  },
  {
    id: "press",
    num: "05",
    label: "Press & Media",
    title: "Media Credentials",
    status: "blue" as const,
    statusText: "Press Kit Available",
    summary:
      "I'M SO ATL welcomes editorial coverage, documentary projects, and broadcast partnerships. Official press credentials provide full festival access and access to official platform materials.",
    eligibility:
      "Journalists, editorial outlets, photographers, and documentary makers. Credentialing required.",
    deadline: "TBA — Summer 2026",
    cta: "Access Press Resources",
    href: "/press",
  },
  {
    id: "supporters",
    num: "06",
    label: "Supporters & Patrons",
    title: "Support the Platform",
    status: "blue" as const,
    statusText: "Launching Spring 2026",
    summary:
      "Your support sustains AMAAC Foundation's programming and the cultural infrastructure that I'M SO ATL delivers year-round. The patron program connects supporters directly to the artists and programs they make possible.",
    eligibility: "Open to all. No minimum contribution required.",
    deadline: "Ongoing",
    cta: "Express Interest",
    href: "/contact?type=supporter",
  },
  {
    id: "volunteers",
    num: "07",
    label: "Volunteers",
    title: "Join the Team",
    status: "blue" as const,
    statusText: "Sign-Ups Open Summer 2026",
    summary:
      "Artlanta runs on a committed volunteer team. Help support festival operations, installation setup, visitor services, and public programming across Atlanta. Volunteers receive full festival access and official recognition.",
    eligibility: "Open to all. No experience required — just commitment to the three days.",
    deadline: "Summer 2026",
    cta: "Sign Up to Volunteer",
    href: "/contact?type=volunteer",
  },
  {
    id: "visitors",
    num: "08",
    label: "Visitors",
    title: "Plan Your Visit",
    status: "red" as const,
    statusText: "Aug 7–9 · Free",
    summary:
      "Artlanta is free and open to the public — no ticket, no registration required. Plan your visit to Piedmont Park. The festival runs three full days, August 7–9, 2026.",
    eligibility: "Open to everyone. Free admission, all three days.",
    deadline: "August 7–9, 2026",
    cta: "Get Visit Information",
    href: "/visit",
  },
];

export default function Participate() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      {/* ASSET FOLDER: /public/assets/participate/ */}
      <header className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <p className="t-label t-label--blue reveal" style={{ marginBottom: "1.6rem" }}>
              Participation
            </p>
            <h1 className="page-header__h1 reveal reveal-delay-1">Get Involved.</h1>
            <p className="page-header__intro reveal reveal-delay-2">
              I&apos;M SO ATL and Artlanta open multiple pathways across the platform. Each pathway
              has distinct requirements. Find the entry point that fits your role.
            </p>
          </div>
        </div>
      </header>

      {/* ── STATUS STRIP ── */}
      <div
        style={{
          background: "var(--ink)",
          borderBottom: "2px solid var(--blue)",
          padding: "1.1rem var(--gutter)",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Application Status
        </span>
        <span className="tag-red">
          <span className="tag-red__dot" />
          Artists — Open
        </span>
        <span className="tag-red">
          <span className="tag-red__dot" />
          Vendors — Open
        </span>
        <span className="tag-blue">Partners — Inquiries Open</span>
        <span className="tag-blue">Volunteers — Opening Summer 2026</span>
      </div>

      {/* ── PATHWAY LIST ── */}
      <section className="pathways section">
        <div className="container">
          <div className="pathway-list" role="list">
            {pathways.map((p) => (
              <div key={p.id} id={p.id} className="pathway-row" role="listitem">
                <span className="pathway-row__num">{p.num}</span>
                <h2 className="pathway-row__title">{p.label}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <p className="pathway-row__desc">{p.summary}</p>
                  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                    <div>
                      <span
                        style={{
                          fontSize: "0.58rem",
                          fontWeight: 500,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--ink-4)",
                          display: "block",
                          marginBottom: "0.2rem",
                        }}
                      >
                        Eligibility
                      </span>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--ink-2)",
                        }}
                      >
                        {p.eligibility}
                      </span>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.58rem",
                          fontWeight: 500,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--ink-4)",
                          display: "block",
                          marginBottom: "0.2rem",
                        }}
                      >
                        Deadline
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "var(--ink-2)" }}>
                        {p.deadline}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pathway-row__right">
                  {p.status === "red" ? (
                    <span className="tag-red" style={{ marginBottom: "0.5rem" }}>
                      <span className="tag-red__dot" />
                      {p.statusText}
                    </span>
                  ) : (
                    <span className="tag-blue" style={{ marginBottom: "0.5rem" }}>
                      {p.statusText}
                    </span>
                  )}
                  <Link href={p.href} className="pathway-row__cta">
                    {p.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="pathways__hint" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L13 7L7 13M1 7H13" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Swipe to explore
          </p>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div className="cta-band">
        <div className="container">
          <div className="cta-band__inner reveal">
            <div>
              <h2 className="cta-band__headline">
                Not sure where
                <br />
                you fit?
              </h2>
              <p className="cta-band__support">
                Send us a message and describe how you want to be involved. We&apos;ll point you
                to the right pathway.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
