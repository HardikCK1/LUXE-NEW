"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gem, Crown, Diamond, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { PaymentButton } from "@/components/payment-button"

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

const services = [
  {
    icon: Gem,
    title: "Essential Presence",
    description: "A polished single-page showcase for emerging creators establishing their visual identity.",
    price: "$2,800+",
    features: [
      "Mobile-first responsive design",
      "Custom contact form",
      "Basic SEO optimization",
      "3 revision rounds",
      "5-day turnaround",
    ],
    popular: false,
  },
  {
    icon: Crown,
    title: "Premium Experience",
    description: "Multi-page digital sanctuary for established creators demanding elevated aesthetics.",
    price: "$5,800+",
    features: [
      "3-5 page fully animated site",
      "Membership portal integration",
      "Cinematic video backgrounds",
      "5 revision rounds",
      "10-day turnaround",
    ],
    popular: true,
  },
  {
    icon: Diamond,
    title: "Bespoke Estate",
    description: "Fully custom digital property for top-tier creators and celebrity clients.",
    price: "$12,500+",
    features: [
      "White-glove concierge service",
      "E-commerce & paywall systems",
      "AI chatbot integration",
      "Unlimited revisions",
      "14-day turnaround",
    ],
    popular: false,
  },
]

const addOns = [
  { name: "Brand Identity Kit", price: "+$1,500", description: "Logo, color palette, typography system" },
  { name: "Content Strategy", price: "+$800", description: "Editorial calendar and posting schedule" },
  { name: "Social Media Templates", price: "+$600", description: "Cohesive Instagram story designs" },
  { name: "Copywriting", price: "+$1,200", description: "Premium bios and promotional text" },
  { name: "SEO Optimization", price: "+$900", description: "Guaranteed first-page rankings" },
]

export default function ServicesPageClient() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Our Offerings"
        title="Signature Services"
        description="Tailored solutions for creators at every stage of their journey."
      />

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`bg-transparent border-creme/10 hover:border-gold/50 transition-all duration-700 group h-full relative overflow-hidden ${
                    service.popular ? "ring-2 ring-gold/30" : ""
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gold text-noir px-4 py-2 text-xs font-medium tracking-wider">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-8">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }} className="mb-6">
                      <service.icon className="w-12 h-12 text-gold" />
                    </motion.div>
                    <h3 className="text-2xl font-serif mb-4 text-creme group-hover:text-gold transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-creme/70 mb-6 leading-relaxed">{service.description}</p>
                    <div className="text-3xl font-serif text-gold mb-6">{service.price}</div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-creme/80">
                          <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3">
                      <Link href="/contact">
                        <Button className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 group">
                          Inquire Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                      <PaymentButton
                        planId={
                          service.title.toLowerCase().includes("essential")
                            ? "essential"
                            : service.title.toLowerCase().includes("premium")
                              ? "premium"
                              : "bespoke"
                        }
                        planName={service.title}
                        amount={Number.parseInt(service.price.replace(/[^0-9]/g, "")) * 100}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-sm font-light tracking-[3px] uppercase text-gold block mb-6">Add-On Services</span>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-creme font-serif">Enhance Your Experience</h2>
              <p className="text-xl text-creme/80 mb-8 leading-relaxed">
                Complement your website with these premium offerings:
              </p>
              <div className="space-y-6">
                {addOns.map((addon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex justify-between items-start p-4 border border-creme/10 hover:border-gold/30 transition-colors duration-500 group"
                  >
                    <div>
                      <h4 className="text-lg font-medium text-creme group-hover:text-gold transition-colors duration-300">
                        {addon.name}
                      </h4>
                      <p className="text-creme/60 text-sm mt-1">{addon.description}</p>
                    </div>
                    <span className="text-gold font-serif text-lg">{addon.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Luxe Add-Ons"
                  className="w-full h-[600px] object-cover border border-gold/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
