"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
          <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir/90" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-20 w-32 h-32 border border-gold/20 rotate-45 hidden lg:block"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 left-16 w-24 h-24 border border-gold/10 rounded-full hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          <motion.span
            variants={fadeInUp}
            className="text-base font-light tracking-[4px] uppercase text-gold block mb-12"
          >
            Digital Ateliers for Discerning Creators
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl lg:text-9xl font-light mb-12 text-creme font-serif leading-tight"
          >
            Where Sensuality
            <br />
            <span className="text-gold italic">Meets</span>
            <br />
            Sophistication
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-3xl text-creme/80 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            We craft immersive digital experiences that transform premium content creators into enduring luxury brands.
            Your audience deserves more than a Linktree—they deserve an invitation.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gold text-noir hover:bg-gold-light transition-all duration-500 px-12 py-6 text-base tracking-[2px] uppercase font-medium group relative z-30"
              >
                Explore Our Services
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 px-12 py-6 text-base tracking-[2px] uppercase font-medium group bg-transparent relative z-30"
              >
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
