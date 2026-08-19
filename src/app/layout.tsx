import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilias Chrysovergis — Systems Architect, Researcher & Founder",
  description:
    "Ilias Chrysovergis — Software architect, researcher, and founder building spatial computing, sovereign infrastructure, and AI systems.",
  metadataBase: new URL("https://iliachry.gr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iliachry.gr",
    siteName: "Ilias Chrysovergis",
    title: "Ilias Chrysovergis — Systems Architect, Researcher & Founder",
    description:
      "Software architect, researcher, and founder building spatial computing, sovereign infrastructure, and AI systems.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@iliachry",
    title: "Ilias Chrysovergis — Systems Architect, Researcher & Founder",
    description:
      "Software architect, researcher, and founder building spatial computing, sovereign infrastructure, and AI systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ilias Chrysovergis",
              url: "https://iliachry.gr",
              jobTitle: "Software Architect, Researcher, Founder",
              worksFor: {
                "@type": "Organization",
                name: "Metatopia",
                url: "https://metatopia.gr",
              },
              sameAs: [
                "https://github.com/iliachry",
                "https://www.linkedin.com/in/ilias-chrysovergis/",
                "https://scholar.google.com/citations?user=ionnzvMAAAAJ",
                "https://x.com/iliachry",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased font-sans selection:bg-white selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
