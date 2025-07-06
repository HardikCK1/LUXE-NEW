"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Crown, Clock, Users, Video, Star } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { PaymentButton } from "@/components/payment-button"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const features = [
  "3-5 page fully animated website",
  "Membership portal integration",
  "Cinematic video backgrounds",
  "Advanced SEO optimization",
  "Custom photography integration",
  "Email marketing setup",
  "Advanced analytics dashboard",
  "5 rounds of revisions",
  "10-day delivery",
  "Priority support",
]

export default function PremiumPage() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Premium Package"
        title="Premium Experience"
        description="Multi-page digital sanctuary for established creators demanding elevated aesthetics."
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
                <Crown className="w-12 h-12 text-gold" />
                <div>
                  <h3 className="text-2xl font-serif text-creme">Most Popular Choice</h3>
                  <p className="text-creme/60">Complete digital transformation</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-serif text-gold">$5,800</div>
                <div className="bg-gold text-noir px-3 py-1 text-xs font-medium tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  POPULAR
                </div>
              </div>
              <p className="text-xl text-creme/80 mb-8 leading-relaxed">
                A comprehensive multi-page website with advanced features designed to maximize conversions and establish
                your premium brand presence.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-lg font-serif text-creme">10-14 Days</div>
                  <p className="text-sm text-creme/60">Delivery</p>
                </div>
                <div className="text-center">
                  <Video className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-lg font-serif text-creme">Cinematic</div>
                  <p className="text-sm text-creme/60">Videos</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-lg font-serif text-creme">5 Rounds</div>
                  <p className="text-sm text-creme/60">Revisions</p>
                </div>
              </div>
              <div className="space-y-3">
                <PaymentButton planId="premium" planName="Premium Experience" amount={580000} />
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 bg-transparent"
                  >
                    Discuss Your Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Premium Experience Example"
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
              Premium Features
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
