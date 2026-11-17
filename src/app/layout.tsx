import type { Metadata, Viewport } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import { roles, site } from "@/content/site";
import "./globals.css";

const display = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: "swap",
});

const text = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    type: "profile",
    url: `${site.url}/`,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_CA",
    firstName: "Sadegh",
    lastName: "Hayeri",
    images: [
      {
        url: `${site.url}/og.png`,
        width: 1200,
        height: 630,
        alt: `${site.name}. ${site.statement.join(" ")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [`${site.url}/og.png`],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: `${site.url}/`,
  email: `mailto:${site.email}`,
  jobTitle: "Senior Software Engineer",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressCountry: "CA",
  },
  worksFor: {
    "@type": "Organization",
    name: roles[0].company,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Tehran",
  },
  knowsAbout: [
    "Backend engineering",
    "Site reliability engineering",
    "Distributed systems",
    "Kubernetes",
    "Cloud infrastructure",
    "Financial systems",
    "Open source",
  ],
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
