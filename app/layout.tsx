import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Interactions from "@/components/Interactions";

export const metadata: Metadata = {
  title: "I'M SO ATL — This Summer, Atlanta Becomes an Art Gallery",
  description:
    "As Atlanta welcomes the world, the city transforms itself into a living art gallery. I'M SO ATL. Artlanta. Aug 7–9, 2026.",
  icons: {
    icon: "/assets/logo.webp",
    apple: "/assets/logo.webp",
  },
  openGraph: {
    title: "I'M SO ATL — This Summer, Atlanta Becomes an Art Gallery",
    description:
      "As Atlanta welcomes the world, the city transforms itself into a living art gallery. I'M SO ATL. Artlanta. Aug 7–9, 2026.",
    url: "https://imsoatl.org",
    siteName: "I'M SO ATL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://imsoatl.org/assets/rich_homie_quan.jpg",
        width: 1200,
        height: 800,
        alt: "I'M SO ATL — Artlanta 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I'M SO ATL — This Summer, Atlanta Becomes an Art Gallery",
    description:
      "As Atlanta welcomes the world, the city transforms itself into a living art gallery. I'M SO ATL. Artlanta. Aug 7–9, 2026.",
    images: ["https://imsoatl.org/assets/rich_homie_quan.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      name: "Artlanta Arts & Culture Festival",
      startDate: "2026-08-07",
      endDate: "2026-08-09",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Piedmont Park",
        address: {
          "@type": "PostalAddress",
          streetAddress: "400 Park Drive NE",
          addressLocality: "Atlanta",
          addressRegion: "GA",
          postalCode: "30306",
          addressCountry: "US",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "AMAAC Foundation",
        url: "https://imsoatl.org",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      description:
        "Artlanta is a free, multi-stage cultural festival featuring 50+ cultural structures installed citywide. Aug 7–9, 2026 at Piedmont Park, Atlanta.",
      url: "https://imsoatl.org/festival",
    },
    {
      "@type": "Organization",
      name: "AMAAC Foundation",
      alternateName: "I'M SO ATL",
      url: "https://imsoatl.org",
      logo: "https://imsoatl.org/assets/logo.webp",
      description:
        "Atlanta Metropolitan Arts & Culture Foundation — a 501(c)(3) nonprofit organizing citywide cultural platform I'M SO ATL and the Artlanta festival.",
      sameAs: [],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div id="scroll-progress" />
        <div className="page-overlay" />
        <div id="cursor-dot" aria-hidden="true" />
        <div id="cursor-ring" aria-hidden="true" />
        <a href="#main-content" className="skip-nav">
          Skip to content
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <Interactions />
      </body>
    </html>
  );
}
