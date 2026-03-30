import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Interactions from "@/components/Interactions";

export const metadata: Metadata = {
  title: "I'M SO ATL — This Summer, Atlanta Becomes an Art Gallery",
  description:
    "As Atlanta welcomes the world, the city transforms itself into a living art gallery. I'M SO ATL. Artlanta. Aug 7–9, 2026.",
  openGraph: {
    title: "I'M SO ATL — This Summer, Atlanta Becomes an Art Gallery",
    description:
      "As Atlanta welcomes the world, the city transforms itself into a living art gallery. I'M SO ATL. Artlanta. Aug 7–9, 2026.",
    url: "https://imsoatl.org",
    siteName: "I'M SO ATL",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
