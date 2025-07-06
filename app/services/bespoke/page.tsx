"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Diamond, Clock, Infinity, Shield } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { PaymentButton } from "@/components/payment-button"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const features = [
  "Unlimited pages & custom features",
  "White-glove concierge service",
  "E-commerce & paywall systems",
  "AI chatbot integration",
  "Custom CMS development",
  "Advanced security features",
  "Performance optimization",
  "Ongoing maintenance included",
  "Unlimited revisions",
  "Dedicated project manager",
  "Priority 24/7 support",
  "Legal compliance review",
]

export default function BespokePage() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Bespoke Package"
        title="Bespoke Estate"
        description="Fully custom digital property for top-tier creators and celebrity clients."
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
                <Diamond className="w-12 h-12 text-gold" />
                <div>
                  <h3 className="text-2xl font-serif text-creme">Ultimate Luxury</h3>
                  <p className="text-creme/60">For elite creators only</p>
                </div>
              </div>
              <div className="text-5xl font-serif text-gold mb-4">$12,500+</div>
              <p className="text-xl text-creme/80 mb-8 leading-relaxed">
                A completely custom digital estate built from the ground up to your exact specifications. No limits, no
                compromises.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-lg font-serif text-creme">3-4 Weeks</div>
                  <p className="text-sm text-creme/60">Delivery</p>
                </div>
                <div className="text-center">
                  <Infinity className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-lg font-serif text-creme">Unlimited</div>
                  <p className="text-sm text-creme/60">Features</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-lg font-serif text-creme">Enterprise</div>
                  <p className="text-sm text-creme/60">Security</p>
                </div>
              </div>
              <div className="space-y-3">
                <PaymentButton planId="bespoke" planName="Bespoke Estate" amount={1250000} />
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 bg-transparent"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Bespoke Estate Example"
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
              Bespoke Features
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
    </div>
  )
}
