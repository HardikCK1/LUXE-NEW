import type { Metadata } from "next"
import ServicesPageClient from "./services-client"

export const metadata: Metadata = {
  title: "Luxury Web Design Services | Premium Websites for Content Creators",
  description:
    "Professional web design services for OnlyFans creators, boudoir photographers, and premium content producers. Essential ($2,800), Premium ($5,800), and Bespoke ($12,500+) packages available.",
  keywords: [
    "luxury web design services",
    "OnlyFans website design",
    "content creator web design",
    "boudoir photography websites",
    "premium website packages",
    "luxury website pricing",
    "high-end web development",
  ],
  openGraph: {
    title: "Luxury Web Design Services | Premium Websites for Content Creators",
    description:
      "Professional web design services starting at $2,800. Transform your content creation business with luxury websites.",
    url: "https://luxedigital.studio/services",
    images: [
      {
        url: "/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe Digital Studio Services",
      },
    ],
  },
  alternates: {
    canonical: "https://luxedigital.studio/services",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luxury Web Design Services",
  description:
    "Professional web design services for premium content creators, OnlyFans models, and boudoir photographers.",
  provider: {
    "@type": "Organization",
    name: "Luxe Digital Studio",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Essential Presence",
      description: "Single-page luxury website for emerging creators",
      price: "2800",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Premium Experience",
      description: "Multi-page luxury website with advanced features",
      price: "5800",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Bespoke Estate",
      description: "Fully custom luxury website for elite creators",
      price: "12500",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicesPageClient />
    </>
  )
}
