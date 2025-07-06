"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ExternalLink, TrendingUp, Users, DollarSign, Target } from "lucide-react"
import { PageHeader } from "@/components/page-header"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const portfolioItems = [
  {
    name: "Elena Velez",
    category: "Boudoir Photography",
    image: "/placeholder.svg?height=600&width=480",
    description: "Luxury boudoir portfolio with membership integration",
  },
  {
    name: "Sophia Laurent",
    category: "Premium Content",
    image: "/placeholder.svg?height=600&width=480",
    description: "High-end content creator platform with paywall system",
  },
  {
    name: "Isabella M.",
    category: "Luxury Branding",
    image: "/placeholder.svg?height=600&width=480",
    description: "Complete brand identity and digital presence",
  },
  {
    name: "Mira K.",
    category: "Editorial Portfolio",
    image: "/placeholder.svg?height=600&width=480",
    description: "Fashion editorial showcase with e-commerce integration",
  },
  {
    name: "Clara W.",
    category: "Membership Site",
    image: "/placeholder.svg?height=600&width=480",
    description: "Exclusive membership platform with tiered access",
  },
  {
    name: "Ava S.",
    category: "E-Commerce",
    image: "/placeholder.svg?height=600&width=480",
    description: "Luxury product showcase with seamless checkout",
  },
]

const stats = [
  { icon: TrendingUp, value: "217%", label: "Average increase in premium subscriptions" },
  { icon: Users, value: "48%", label: "Higher engagement rates" },
  { icon: DollarSign, value: "3.2x", label: "Return on investment within 90 days" },
  { icon: Target, value: "92%", label: "Client retention rate" },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Recent Work"
        title="Portfolio"
        description="Selected projects for elite creators across industries."
      />

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 group overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    >
                      <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                      <p className="text-sm text-gold tracking-wider uppercase mb-2">{item.category}</p>
                      <p className="text-sm text-creme/80">{item.description}</p>
                      <ExternalLink className="w-5 h-5 mt-3 text-gold" />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
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
                  alt="Client Results"
                  className="w-full h-[600px] object-cover border border-gold/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className="text-sm font-light tracking-[3px] uppercase text-gold block mb-6">
                Results That Matter
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-creme font-serif">By The Numbers</h2>
              <p className="text-xl text-creme/80 mb-12 leading-relaxed">
                Our clients consistently outperform industry benchmarks:
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                    <div className="text-3xl font-serif text-gold mb-2">{stat.value}</div>
                    <p className="text-sm text-creme/70 leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
