"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Lightbulb, Palette, Code, Rocket } from "lucide-react"
import { PageHeader } from "@/components/page-header"

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

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Deep dive into your brand essence and target audience",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "Conversion-focused user journeys and content strategy",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Editorial-level visual storytelling and brand identity",
  },
  {
    icon: Code,
    title: "Development",
    description: "Pixel-perfect implementation with cutting-edge technology",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Flawless execution, training, and ongoing support",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Our Philosophy"
        title="About Luxe"
        description="Where editorial excellence meets digital innovation."
      />

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="space-y-6 text-lg text-creme/80 leading-relaxed">
                <p>
                  Founded by former creative directors from the luxury fashion world, Luxe Digital Studio brings
                  editorial excellence to digital spaces. We understand that for elite creators, your website isn't just
                  a portfolio—it's your most powerful conversion tool.
                </p>
                <p>
                  Our team of designers, developers, and strategists work exclusively with high-end content creators who
                  demand nothing less than perfection. From OnlyFans models to boudoir photographers, we specialize in
                  crafting digital experiences that command premium prices.
                </p>
                <p>
                  What sets us apart is our meticulous attention to detail—the subtle animations, the carefully curated
                  color palettes, the strategic placement of every call-to-action. These are the touches that transform
                  casual visitors into devoted patrons.
                </p>
                <div className="pt-8">
                  <div className="text-4xl font-script text-gold mb-2">Camille Laurent</div>
                  <p className="text-sm tracking-[3px] uppercase text-gold/70">Founder & Creative Director</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Luxe Studio"
                  className="w-full h-[600px] object-cover border border-gold/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Our Process"
                  className="w-full h-[600px] object-cover border border-gold/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent" />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className="text-sm font-light tracking-[3px] uppercase text-gold block mb-6">Methodology</span>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-creme font-serif">Our Process</h2>
              <p className="text-xl text-creme/80 mb-12 leading-relaxed">
                Every project follows our proven luxury framework:
              </p>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-noir transition-all duration-500">
                        <step.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-creme mb-2 group-hover:text-gold transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-creme/70">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span
              variants={fadeInUp}
              className="text-sm font-light tracking-[3px] uppercase text-gold block mb-6"
            >
              Our Values
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-12 text-creme font-serif">
              What Drives Us
            </motion.h2>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "We never compromise on quality. Every project receives our full attention and expertise.",
                },
                {
                  title: "Innovation",
                  description: "We stay ahead of trends, implementing cutting-edge technologies and design principles.",
                },
                {
                  title: "Partnership",
                  description: "We work closely with our clients, ensuring their vision is perfectly realized.",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700"
                >
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-serif text-gold mb-4">{value.title}</h3>
                    <p className="text-creme/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
