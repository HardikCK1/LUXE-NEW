import type React from "react"
import type { Metadata } from "next"
import { Cinzel, EB_Garamond, Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingScreen } from "@/components/loading-screen"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://luxedigital.studio"),
  title: {
    default: "Luxe Digital Studio | Elite Web Design for Premium Content Creators",
    template: "%s | Luxe Digital Studio",
  },
  description:
    "Transform your content creation business with luxury web design. We craft immersive digital experiences for OnlyFans creators, boudoir photographers, and premium content producers. Starting at $2,800.",
  keywords: [
    "luxury web design",
    "premium website design",
    "OnlyFans website design",
    "content creator websites",
    "boudoir photography websites",
    "luxury brand websites",
    "premium web development",
    "high-end web design",
    "creator economy websites",
    "subscription website design",
    "membership site design",
    "adult content websites",
    "luxury digital marketing",
    "premium brand identity",
  ],
  authors: [{ name: "Luxe Digital Studio" }],
  creator: "Luxe Digital Studio",
  publisher: "Luxe Digital Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxedigital.studio",
    siteName: "Luxe Digital Studio",
    title: "Luxe Digital Studio | Elite Web Design for Premium Content Creators",
    description:
      "Transform your content creation business with luxury web design. We craft immersive digital experiences for OnlyFans creators, boudoir photographers, and premium content producers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe Digital Studio - Elite Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Digital Studio | Elite Web Design for Premium Content Creators",
    description: "Transform your content creation business with luxury web design. Starting at $2,800.",
    images: ["/twitter-image.jpg"],
    creator: "@luxedigitalstudio",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://luxedigital.studio",
  },
  category: "Web Design",
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Luxe Digital Studio",
  url: "https://luxedigital.studio",
  logo: "https://luxedigital.studio/logo.png",
  description:
    "Elite web design studio specializing in luxury websites for premium content creators, OnlyFans models, and boudoir photographers.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    email: "contact@luxedigital.studio",
  },
  sameAs: [
    "https://instagram.com/luxedigitalstudio",
    "https://twitter.com/luxedigitalstudio",
    "https://linkedin.com/company/luxedigitalstudio",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Essential Presence",
      description: "Single-page luxury website for emerging creators",
      price: "2800",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Premium Experience",
      description: "Multi-page luxury website with advanced features",
      price: "5800",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Bespoke Estate",
      description: "Fully custom luxury website for elite creators",
      price: "12500",
      priceCurrency: "USD",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://luxedigital.studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d2b48c" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${cinzel.variable} ${ebGaramond.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <LoadingScreen />
            <Navigation />
            <main>{children}</main>
            <Footer />
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
