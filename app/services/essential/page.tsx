"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Gem, Clock, Users, Smartphone } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { PaymentButton } from "@/components/payment-button"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const features = [
  "Single-page responsive website",
  "Mobile-first design approach",
  "Custom contact form integration",
  "Basic SEO optimization",
  "Social media integration",
  "Basic analytics setup",
  "3 rounds of revisions",
  "5-day express delivery",
]

const process = [
  {
    step: "Day 1",
    title: "Discovery & Planning",
    description: "We analyze your brand, goals, and target audience to create the perfect strategy.",
  },
  {
    step: "Day 2-3",
    title: "Design & Development",
    description: "Our team crafts your stunning single-page website with luxury aesthetics.",
  },
  {
    step: "Day 4",
    title: "Review & Refinement",
    description: "You review the design and we make any necessary adjustments.",
  },
  {
    step: "Day 5",
    title: "Launch & Training",
    description: "We launch your site and provide training on managing your new digital presence.",
  },
]

export default function EssentialPage() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Essential Package"
        title="Essential Presence"
        description="A polished single-page showcase for emerging creators establishing their visual identity."
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-8">
                <Gem className="w-12 h-12 text-gold" />
                <div>
                  <h3 className="text-2xl font-serif text-creme">Perfect for Beginners</h3>
                  <p className="text-creme/60">Professional presence in just 5 days</p>
                </div>
              </div>
              <div className="text-5xl font-serif text-gold mb-4">$2,800</div>
              <p className="text-xl text-creme/80 mb-8 leading-relaxed">
                Get a stunning, professional website that establishes your brand and converts visitors into customers.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-lg font-serif text-creme">5 Days</div>
                  <p className="text-sm text-creme/60">Delivery</p>
                </div>
                <div className="text-center">
                  <Smartphone className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-lg font-serif text-creme">Mobile</div>
                  <p className="text-sm text-creme/60">Optimized</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-lg font-serif text-creme">3 Rounds</div>
                  <p className="text-sm text-creme/60">Revisions</p>
                </div>
              </div>
              <div className="space-y-3">
                <PaymentButton planId="essential" planName="Essential Presence" amount={280000} />
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 bg-transparent"
                  >
                    Ask Questions First
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Essential Presence Example"
                  className="w-full h-[600px] object-cover border border-gold/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-noir/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-creme mb-8">
              What's Included
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center gap-3 p-4 border border-creme/10 hover:border-gold/30 transition-colors duration-300"
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-creme/80">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-creme mb-8">
              5-Day Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-creme/80 max-w-3xl mx-auto">
              From concept to launch in just 5 business days with our streamlined process.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-2xl font-serif text-gold mb-3">{step.step}</div>
                    <h3 className="text-lg font-serif text-creme mb-3">{step.title}</h3>
                    <p className="text-creme/70 text-sm leading-relaxed">{step.description}</p>
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
