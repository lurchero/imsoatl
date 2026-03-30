import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — I'M SO ATL",
  description: "Get in touch with I'M SO ATL. General inquiries, press, partnership, artist applications, and vendor questions.",
};

export default function Contact() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <header className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <p className="t-label t-label--blue reveal" style={{ marginBottom: "1.6rem" }}>
              Contact
            </p>
            <h1 className="page-header__h1 reveal reveal-delay-1">Get in touch.</h1>
            <p className="page-header__intro reveal reveal-delay-2">
              Use this form for general inquiries, press requests, partnership discussions, and
              participation questions. We respond to all inquiries within 5 business days.
            </p>
          </div>
        </div>
      </header>

      {/* ── CONTACT GRID ── */}
      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div className="contact-grid">
            {/* FORM */}
            <div className="reveal">
              <form data-netlify="true" name="contact" id="contact-form" noValidate>
                <input type="hidden" name="form-name" value="contact" />

                <div className="form-row" style={{ marginBottom: "0" }}>
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-org">Organization / Website</label>
                  <input
                    type="text"
                    id="contact-org"
                    name="organization"
                    placeholder="Optional"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-type">Inquiry Type</label>
                  <select id="contact-type" name="type" required>
                    <option value="">Select type</option>
                    <option value="general">General Inquiry</option>
                    <option value="press">Press / Media</option>
                    <option value="partner">Partnership</option>
                    <option value="artist">Artist / Creative</option>
                    <option value="vendor">Vendor</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="supporter">Supporter / Patron</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="reveal reveal-delay-2">
              <div style={{ position: "sticky", top: "calc(var(--nav-h) + 2rem)" }}>
                <p className="t-label" style={{ marginBottom: "2rem" }}>
                  Direct Contacts
                </p>

                <div className="contact-info__item" style={{ borderTop: "1px solid var(--rule)" }}>
                  <span className="contact-info__label">General Inquiries</span>
                  <span className="contact-info__value">
                    <a href="mailto:support@expATL.com">support@expATL.com</a>
                  </span>
                </div>
                <div className="contact-info__item">
                  <span className="contact-info__label">Media &amp; Press</span>
                  <span className="contact-info__value">
                    Rachel — Tobin Ink PR
                    <br />
                    <a href="mailto:rachel@tobinink.com">rachel@tobinink.com</a>
                  </span>
                </div>
                <div className="contact-info__item">
                  <span className="contact-info__label">Partnership Inquiries</span>
                  <span className="contact-info__value">
                    <Link href="/partners">View Partnership Page →</Link>
                  </span>
                </div>
                <div className="contact-info__item">
                  <span className="contact-info__label">Response Time</span>
                  <span className="contact-info__value">Within 5 business days</span>
                </div>

                <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--rule)" }}>
                  <p className="t-label" style={{ marginBottom: "1.2rem" }}>
                    Specific Inquiries
                  </p>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
                  >
                    <Link href="/press" className="btn-text">
                      Press Resources
                    </Link>
                    <Link href="/partners" className="btn-text">
                      Partnership Info
                    </Link>
                    <Link href="/participate" className="btn-text">
                      Participation Pathways
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
