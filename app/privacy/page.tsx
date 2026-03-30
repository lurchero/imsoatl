import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — I'M SO ATL",
  description: "Privacy policy for imsoatl.org and the I'M SO ATL platform.",
};

export default function Privacy() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <p className="t-label t-label--blue" style={{ marginBottom: "1.6rem" }}>
              Legal
            </p>
            <h1 className="page-header__h1">Privacy Policy</h1>
            <p className="page-header__intro" style={{ marginTop: "1rem" }}>
              Last updated: January 2026
            </p>
          </div>
        </div>
      </header>

      <section className="section" style={{ borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div className="prose">
            <p>
              I&apos;M SO ATL (&quot;we,&quot; &quot;our,&quot; or &quot;the platform&quot;) is
              operated by AMAAC Foundation, a 501(c)(3) nonprofit organization. This privacy
              policy describes how we collect, use, and protect information you provide when using
              our website at imsoatl.org.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you voluntarily provide to us, including when you:
            </p>
            <ul>
              <li>Subscribe to our email list</li>
              <li>Submit a contact, application, or inquiry form</li>
              <li>Apply to participate as an artist, vendor, or volunteer</li>
              <li>Request press credentials or assets</li>
              <li>Submit a partnership inquiry</li>
            </ul>
            <p>
              This may include your name, email address, organization, and any information
              included in your message or application submission.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              Information collected through our forms is used solely for the purpose indicated at
              the time of submission — to respond to your inquiry, process your application, or
              deliver communications you&apos;ve opted into. We do not sell or share your personal
              information with third parties for marketing purposes.
            </p>

            <h2>Email Communications</h2>
            <p>
              If you subscribe to our email list, you will receive updates related to Artlanta,
              platform programming, and cultural releases. You may unsubscribe at any time via the
              unsubscribe link included in every email, or by contacting us directly.
            </p>

            <h2>Form Submissions and Data Processing</h2>
            <p>
              This website uses Netlify Forms to process form submissions. Netlify processes form
              data on our behalf and stores submissions securely. By submitting a form on this
              site, you acknowledge that your data will be processed by Netlify in accordance with
              their privacy policy. We do not retain form data beyond what is required to respond
              to your inquiry.
            </p>

            <h2>Analytics</h2>
            <p>
              We may use privacy-respecting analytics tools to understand how visitors use our
              site — such as which pages are visited and how long visitors stay. We do not use
              cross-site tracking or share analytics data with advertising networks.
            </p>

            <h2>Cookies</h2>
            <p>
              Our site may use cookies for basic functionality. We do not use cookies for
              advertising or behavioral tracking. You can disable cookies in your browser settings
              without affecting your ability to use the site.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our site is not directed at children under 13. We do not knowingly collect personal
              information from children under 13. If you believe we have inadvertently collected
              such information, please contact us and we will delete it promptly.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal
              information we hold about you. To make such a request, contact us at{" "}
              <a href="mailto:support@expATL.com">support@expATL.com</a>.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. The date at the top of this
              page indicates when it was last revised. Continued use of the site following any
              update constitutes your acceptance of the revised policy.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href="mailto:support@expATL.com">support@expATL.com</a> or write to:
            </p>
            <p>
              AMAAC Foundation
              <br />
              Atlanta, Georgia
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
