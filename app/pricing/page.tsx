"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Download, Star, ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const pricingTiers = [
  {
    name: "Essential Presence",
    price: "$2,800",
    description: "Perfect for emerging creators establishing their digital identity",
    features: [
      "Single-page responsive website",
      "Custom contact form integration",
      "Basic SEO optimization",
      "Mobile-first design approach",
      "3 rounds of revisions",
      "5-day express delivery",
      "Basic analytics setup",
      "Social media integration",
    ],
    timeline: "5-7 business days",
    ideal: "New creators, photographers, models",
  },
  {
    name: "Premium Experience",
    price: "$5,800",
    description: "Multi-page luxury experience for established creators",
    features: [
      "3-5 page fully animated website",
      "Membership portal integration",
      "Cinematic video backgrounds",
      "Advanced SEO optimization",
      "5 rounds of revisions",
      "Custom photography integration",
      "Email marketing setup",
      "Advanced analytics dashboard",
      "Priority support",
    ],
    timeline: "10-14 business days",
    ideal: "Established creators, content producers",
    popular: true,
  },
  {
    name: "Bespoke Estate",
    price: "$12,500",
    description: "Fully custom digital property for elite creators",
    features: [
      "Unlimited pages & features",
      "E-commerce & paywall systems",
      "AI chatbot integration",
      "Custom CMS development",
      "Unlimited revisions",
      "White-glove concierge service",
      "Advanced security features",
      "Performance optimization",
      "Ongoing maintenance included",
      "Dedicated project manager",
    ],
    timeline: "3-4 weeks",
    ideal: "Celebrity clients, top-tier creators",
  },
]

const addOnServices = [
  {
    category: "Branding & Identity",
    services: [
      {
        name: "Complete Brand Identity Kit",
        price: "$1,500",
        description: "Logo, color palette, typography system, brand guidelines",
      },
      {
        name: "Professional Photography",
        price: "$800",
        description: "On-location luxury photoshoot for website content",
      },
      { name: "Custom Illustrations", price: "$600", description: "Bespoke illustrations and graphic elements" },
    ],
  },
  {
    category: "Content & Strategy",
    services: [
      {
        name: "Content Strategy Package",
        price: "$1,200",
        description: "Editorial calendar, posting schedule, content pillars",
      },
      { name: "Professional Copywriting", price: "$900", description: "Website copy, bios, and promotional content" },
      { name: "Social Media Templates", price: "$600", description: "Instagram stories, posts, and highlight covers" },
    ],
  },
  {
    category: "Technical & Marketing",
    services: [
      {
        name: "Advanced SEO Package",
        price: "$1,200",
        description: "Keyword research, on-page optimization, local SEO",
      },
      {
        name: "Email Marketing Setup",
        price: "$800",
        description: "Automated sequences, newsletter templates, integration",
      },
      { name: "Analytics & Tracking", price: "$500", description: "Advanced analytics setup and monthly reporting" },
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Investment Guide"
        title="Pricing"
        description="Transparent pricing for luxury digital experiences that deliver exceptional ROI."
      />

      {/* Main Pricing Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8 mb-20"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`bg-transparent border-creme/10 hover:border-gold/50 transition-all duration-700 group h-full relative overflow-hidden ${
                    tier.popular ? "ring-2 ring-gold/30 scale-105" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-gold text-noir px-4 py-2 text-xs font-medium tracking-wider">
                      <Star className="w-3 h-3 inline mr-1" />
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-serif mb-2 text-creme group-hover:text-gold transition-colors duration-500">
                        {tier.name}
                      </h3>
                      <div className="text-4xl font-serif text-gold mb-4">{tier.price}</div>
                      <p className="text-creme/70 leading-relaxed">{tier.description}</p>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-sm font-medium text-gold tracking-wider uppercase mb-3">
                          Features Included
                        </h4>
                        <ul className="space-y-2">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3 text-creme/80 text-sm">
                              <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-creme/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gold tracking-wider uppercase">Timeline</span>
                          <span className="text-sm text-creme">{tier.timeline}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gold tracking-wider uppercase">Ideal For</span>
                          <span className="text-sm text-creme text-right">{tier.ideal}</span>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 group">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Download Pricing Guide */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-creme mb-4">Complete Pricing Guide</h3>
                <p className="text-creme/70 mb-6 leading-relaxed">
                  Download our comprehensive pricing guide with detailed breakdowns, timelines, and investment ROI
                  calculations.
                </p>
                <Button className="bg-gold text-noir hover:bg-gold-light transition-all duration-500 px-8 py-3">
                  <Download className="mr-2 w-4 h-4" />
                  Download PDF Guide
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-noir/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-light tracking-[3px] uppercase text-gold block mb-6"
            >
              Enhancement Options
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-8 text-creme font-serif">
              Add-On Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-creme/80 leading-relaxed max-w-3xl mx-auto">
              Elevate your project with these premium add-on services, designed to complement your website perfectly.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {addOnServices.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={fadeInUp}>
                <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif text-gold mb-6">{category.category}</h3>
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="border-b border-creme/10 pb-4 last:border-b-0 last:pb-0">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-creme font-medium text-sm">{service.name}</h4>
                            <span className="text-gold font-serif text-sm">{service.price}</span>
                          </div>
                          <p className="text-creme/60 text-xs leading-relaxed">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
