"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Medal, Eye, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { TestimonialSection } from "@/components/testimonial-section"

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Luxe Digital Studio - Elite Web Design for Premium Content Creators",
  description:
    "Transform your content creation business with luxury web design. We craft immersive digital experiences for OnlyFans creators, boudoir photographers, and premium content producers.",
  url: "https://luxedigital.studio",
  mainEntity: {
    "@type": "Organization",
    name: "Luxe Digital Studio",
    description: "Elite web design studio specializing in luxury websites for premium content creators",
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen">
        <HeroSection />

        {/* Philosophy Section - Increased padding and better spacing */}
        <section className="py-40 px-6 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-24"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-light tracking-[3px] uppercase text-gold block mb-8"
              >
                Our Philosophy
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-light mb-12 text-creme font-serif">
                Redefining Digital Luxury
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-2xl text-creme/80 max-w-5xl mx-auto leading-relaxed">
                In an era of disposable content, we build enduring digital estates that command respect, inspire desire,
                and convert casual viewers into devoted patrons.
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                {
                  icon: Medal,
                  title: "Exclusivity",
                  description:
                    "We design for the 1%—those who understand that true luxury lies in restraint and intention.",
                },
                {
                  icon: Eye,
                  title: "Visual Storytelling",
                  description: "Every pixel serves a purpose in crafting narratives that linger in the subconscious.",
                },
                {
                  icon: Lock,
                  title: "Discretion",
                  description:
                    "Your privacy is paramount. We implement enterprise-grade security for all client projects.",
                },
              ].map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 group h-full">
                    <CardContent className="p-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="mb-8"
                      >
                        <service.icon className="w-16 h-16 text-gold" />
                      </motion.div>
                      <h3 className="text-3xl font-serif mb-6 text-creme group-hover:text-gold transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-creme/70 leading-relaxed text-lg">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Increased size */}
        <section className="py-40 px-6 bg-gradient-to-b from-transparent to-noir/50 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto text-center w-full">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-light mb-12 text-creme font-serif">
                Ready to Elevate Your Digital Presence?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-2xl text-creme/80 mb-16 leading-relaxed max-w-4xl mx-auto">
                Join the elite creators who trust Luxe Digital Studio to transform their vision into reality.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-gold text-noir hover:bg-gold-light transition-all duration-500 px-12 py-6 text-base tracking-[2px] uppercase font-medium group"
                  >
                    Explore Services
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 px-12 py-6 text-base tracking-[2px] uppercase font-medium bg-transparent"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <TestimonialSection />
      </div>
    </>
  )
}
