import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer-pre">
        <p>I&apos;M SO ATL is a citywide cultural platform. Artlanta is its flagship festival.</p>
      </div>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/logo.webp" alt="I'M SO ATL" />
              </div>
              <p className="footer__tagline">
                A citywide cultural platform organized around exhibition, storytelling, installation,
                and public experience. Hosted by AMAAC Foundation 501(c)(3). Artlanta — Aug 7–9,
                2026, Piedmont Park.
              </p>
            </div>

            <div className="footer__col">
              <h4>Navigate</h4>
              <ul>
                <li>
                  <Link href="/festival">Festival</Link>
                </li>
                <li>
                  <Link href="/stories">Stories</Link>
                </li>
                <li>
                  <Link href="/participate">Participate</Link>
                </li>
                <li>
                  <Link href="/partners">Partners</Link>
                </li>
                <li>
                  <Link href="/press">Press</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/visit">Visit</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:support@expATL.com">General Inquiries</a>
                </li>
                <li>
                  <a href="mailto:rachel@tobinink.com">Media &amp; Press</a>
                </li>
                <li>
                  <Link href="/partners">Partnership Inquiries</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Stay Connected</h4>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "0.8rem",
                  lineHeight: 1.65,
                }}
              >
                Updates on Artlanta, installations, exhibitions, and exclusive releases.
              </p>
              <form
                data-netlify="true"
                className="footer__email-form"
                id="footer-form"
                name="footer-updates"
                noValidate
              >
                <input type="hidden" name="form-name" value="footer-updates" />
                <input
                  type="email"
                  id="footer-email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  aria-label="Email address for newsletter"
                />
                <button type="submit" aria-label="Subscribe">
                  →
                </button>
              </form>
              <div
                id="footer-success"
                style={{
                  display: "none",
                  fontSize: "0.72rem",
                  color: "var(--blue)",
                  marginTop: "0.5rem",
                }}
                role="alert"
              >
                You&apos;re on the list.
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p>
              © 2026 Atlanta Music Arts &amp; Culture Foundation (AMAAC) · AMAAC Foundation
              501(c)(3)
            </p>
            <p>
              <Link href="/about">About</Link> · <Link href="/press">Press</Link> ·{" "}
              <Link href="/privacy">Privacy</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
