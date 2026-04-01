import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visit — I'M SO ATL",
  description:
    "Plan your visit to Artlanta 2026. August 7–9, Piedmont Park, Atlanta. Free and open to the public — no ticket required.",
  openGraph: {
    title: "Visit Artlanta 2026 — I'M SO ATL",
    description: "August 7–9, Piedmont Park, Atlanta. Free and open to the public. MARTA, parking, and accessibility info.",
    url: "https://imsoatl.org/visit",
    siteName: "I'M SO ATL",
    images: [{ url: "https://imsoatl.org/assets/chillyo/indigenous.jpg", alt: "Atlanta — I'M SO ATL" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Artlanta 2026 — I'M SO ATL",
    description: "August 7–9, Piedmont Park, Atlanta. Free and open to the public. MARTA, parking, and accessibility info.",
    images: ["https://imsoatl.org/assets/chillyo/indigenous.jpg"],
  },
};

const infoItems = [
  { label: "Festival Dates", value: "August 7–9, 2026", note: "Friday through Sunday" },
  { label: "Venue", value: "Piedmont Park", note: "Atlanta, Georgia" },
  { label: "Address", value: "400 Park Drive NE, Atlanta, GA 30306", note: "Main entrance" },
  { label: "Admission", value: "Free", note: "No ticket required — open to all" },
  { label: "Hours", value: "TBA", note: "Full schedule published spring 2026" },
  { label: "MARTA", value: "North Avenue Station", note: "Red/Gold Line — 15 min walk to park" },
  { label: "Parking", value: "Limited on-site", note: "Public transit and ride-share strongly recommended" },
  { label: "Accessibility", value: "Piedmont Park is ADA accessible", note: "Full accessibility guide TBA" },
];

export default function Visit() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <header className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <p className="t-label t-label--blue reveal" style={{ marginBottom: "1.6rem" }}>
              Plan Your Visit
            </p>
            <h1 className="page-header__h1 reveal reveal-delay-1">
              Artlanta.
              <br />
              Aug 7–9.
            </h1>
            <p className="page-header__intro reveal reveal-delay-2">
              Free and open to the public at Piedmont Park, Atlanta. No ticket, no registration
              required. Here is everything you need before you arrive.
            </p>
            <div className="page-header__meta reveal reveal-delay-3">
              <span className="tag-red">
                <span className="tag-red__dot" />
                Aug 7–9, 2026
              </span>
              <span className="tag-blue">Free Admission</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── VENUE IMAGE ── */}
      <div className="img-wrap r-21-9" style={{ borderBottom: "1px solid var(--rule)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/chillyo/indigenous.jpg" alt="Atlanta — Omar Chilly-O Mitchell" loading="lazy" />
      </div>

      {/* ── VISIT INFO ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(4rem,7vw,8rem)",
              alignItems: "start",
            }}
          >
            <div>
              <p className="t-label reveal" style={{ marginBottom: "2rem" }}>
                Event Information
              </p>
              <div className="reveal reveal-delay-1">
                {infoItems.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "180px 1fr",
                      gap: "1.5rem",
                      padding: "1.2rem 0",
                      borderBottom: "1px solid var(--rule)",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-4)",
                      }}
                    >
                      {item.label}
                    </span>
                    <div>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--ink)",
                          fontWeight: 400,
                          letterSpacing: "-0.01em",
                          marginBottom: "0.1rem",
                        }}
                      >
                        {item.value}
                      </p>
                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--ink-4)",
                        }}
                      >
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <p className="t-label" style={{ marginBottom: "2rem" }}>
                Getting There
              </p>

              <div
                style={{
                  padding: "2rem",
                  background: "var(--white-alt)",
                  border: "1px solid var(--rule)",
                  marginBottom: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--blue)",
                    marginBottom: "0.8rem",
                  }}
                >
                  Recommended: MARTA
                </p>
                <p className="t-body--sm" style={{ marginBottom: "0.8rem" }}>
                  Take the Red or Gold Line to North Avenue Station. Piedmont Park is a 15-minute
                  walk through Midtown. This is the easiest option — avoid the parking situation
                  entirely.
                </p>
                <p style={{ fontSize: "0.72rem", color: "var(--ink-4)" }}>
                  One-way fare: $2.50 · All-day pass: $9.00
                </p>
              </div>

              <div
                style={{
                  padding: "2rem",
                  background: "var(--white-alt)",
                  border: "1px solid var(--rule)",
                  marginBottom: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-4)",
                    marginBottom: "0.8rem",
                  }}
                >
                  Ride-Share &amp; Bikes
                </p>
                <p className="t-body--sm">
                  Drop-off at the 10th Street entrance or Park Drive. Bicycle parking is available
                  throughout the park. During peak festival hours on Saturday, ride-share wait times
                  may be extended.
                </p>
              </div>

              <div style={{ padding: "2rem", background: "var(--white-alt)", border: "1px solid var(--rule)" }}>
                <p
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-4)",
                    marginBottom: "0.8rem",
                  }}
                >
                  Parking
                </p>
                <p className="t-body--sm">
                  Limited parking is available near the park. Rates are significantly higher
                  during major events. Street parking in the surrounding neighborhood is limited.
                  We strongly recommend using public transit or ride-share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCESSIBILITY + WHAT TO KNOW ── */}
      <section className="section section--alt" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(3rem,6vw,7rem)",
            }}
          >
            <div className="reveal">
              <p className="t-label" style={{ marginBottom: "1.4rem" }}>
                Accessibility
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.2rem,1.8vw,1.7rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.2,
                  marginBottom: "1.2rem",
                }}
              >
                Artlanta is designed for everyone.
              </h2>
              <p className="t-body--sm" style={{ marginBottom: "1rem" }}>
                Piedmont Park is ADA accessible with paved paths throughout. Artlanta&apos;s
                festival footprint will be designed with full accessibility in mind — accessible
                entrances, paved corridors between exhibition zones, accessible facilities.
              </p>
              <p className="t-body--sm">
                A full accessibility guide, including entrance points, accessible viewing areas,
                and support services, will be published ahead of the festival. If you have
                specific accessibility questions, contact us directly.
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <p className="t-label" style={{ marginBottom: "1.4rem" }}>
                What to Know
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "No ticket required", body: "Artlanta is completely free. No registration, no RSVP. Arrive, explore, leave — and come back." },
                  { title: "Bring comfortable shoes", body: "The festival spans a large footprint. You will walk. The art rewards exploration." },
                  { title: "Weather in August Atlanta", body: "Expect heat. August in Atlanta is warm and can be humid. Water stations will be available throughout the grounds." },
                  { title: "Dogs welcome", body: "Piedmont Park is a dog-friendly space. Leashed pets are welcome." },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "1.2rem 0",
                      borderBottom: "1px solid var(--rule)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.86rem",
                        fontWeight: 500,
                        color: "var(--ink)",
                        marginBottom: "0.3rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "var(--ink-3)", lineHeight: 1.6 }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
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
                Free. Open.
                <br />
                August 7–9, 2026.
              </h2>
              <p className="cta-band__support" style={{ color: "var(--ink-3)" }}>
                Piedmont Park, Atlanta. See you there.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link href="/festival" className="btn btn-primary">
                Festival Details
              </Link>
              <Link href="/participate" className="btn btn-outline">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
