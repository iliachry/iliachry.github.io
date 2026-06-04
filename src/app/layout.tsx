import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DisclaimerPopup } from "@/components/ui/disclaimer-popup";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.openGraph.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitter.handle,
    title: siteConfig.title,
    description: siteConfig.description,
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
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Structured Data — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ilias Chrysovergis",
              url: "https://iliachry.gr",
              jobTitle: "Software Architect, Researcher, Founder",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Metatopia",
                  url: "https://metatopia.gr",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "National Technical University of Athens",
                },
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Imperial College London",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Aristotle University of Thessaloniki",
                },
              ],
              sameAs: [
                "https://github.com/iliachry",
                "https://linkedin.com/in/ilias-chrysovergis",
                "https://scholar.google.com/citations?user=x5Zq1-QAAAAJ",
                "https://www.researchgate.net/profile/Ilias-Chrysovergis",
                "https://orcid.org/0000-0002-5434-2175",
                "https://x.com/iliachry",
              ],
              knowsAbout: [
                "Extended Reality",
                "Digital Twins",
                "Artificial Intelligence",
                "Hydroinformatics",
                "Spatial Computing",
                "Wireless Communications",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text-primary">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 pt-16">{children}</main>
          <Footer />
          <DisclaimerPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
