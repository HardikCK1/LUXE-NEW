"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  overline: string
  title: string
  description: string
}

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

export function PageHeader({ overline, title, description }: PageHeaderProps) {
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          <motion.span variants={fadeInUp} className="text-sm font-light tracking-[3px] uppercase text-gold block mb-6">
            {overline}
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-light mb-8 text-creme font-serif">
            {title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-creme/80 leading-relaxed max-w-3xl mx-auto">
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
