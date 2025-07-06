"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Target,
  TrendingUp,
  Users,
  Zap,
  Crown,
  Gem,
  ArrowRight,
  CheckCircle,
  Calendar,
  MessageSquare,
} from "lucide-react"
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
      staggerChildren: 0.1,
    },
  },
}

const strategyServices = [
  {
    icon: Target,
    title: "Brand Positioning Audit",
    duration: "2-3 hours",
    price: "$1,500",
    description: "Deep dive analysis of your current brand position and competitive landscape",
    includes: [
      "Comprehensive brand assessment",
      "Competitor analysis report",
      "Market positioning recommendations",
      "Brand differentiation strategy",
      "Action plan with priorities",
    ],
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization Strategy",
    duration: "3-4 hours",
    price: "$2,200",
    description: "Strategic roadmap to maximize your earning potential and pricing power",
    includes: [
      "Revenue stream analysis",
      "Pricing strategy optimization",
      "Upselling opportunity identification",
      "Subscription model design",
      "90-day implementation plan",
    ],
  },
  {
    icon: Users,
    title: "Audience Development Blueprint",
    duration: "2-3 hours",
    price: "$1,800",
    description: "Comprehensive strategy to attract and retain high-value subscribers",
    includes: [
      "Ideal client persona development",
      "Content strategy framework",
      "Social media growth plan",
      "Email marketing sequence",
      "Community building tactics",
    ],
  },
]

const intensivePrograms = [
  {
    icon: Crown,
    title: "Luxury Brand Transformation",
    duration: "6 weeks",
    price: "$8,500",
    description: "Complete brand overhaul for creators ready to command premium prices",
    features: [
      "Weekly 1-on-1 strategy sessions",
      "Complete brand identity redesign",
      "Premium pricing strategy",
      "Content calendar for 3 months",
      "Email marketing automation setup",
      "Social media optimization",
      "Ongoing support and adjustments",
    ],
    popular: true,
  },
  {
    icon: Gem,
    title: "Elite Creator Mastermind",
    duration: "12 weeks",
    price: "$15,000",
    description: "Exclusive program for top-tier creators scaling to 7-figures",
    features: [
      "Bi-weekly private consultations",
      "Access to exclusive creator network",
      "Advanced monetization strategies",
      "Personal brand PR strategy",
      "Investment and wealth planning",
      "Legal and business structure advice",
      "Lifetime alumni network access",
    ],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We start with a comprehensive consultation to understand your goals, challenges, and vision.",
  },
  {
    step: "02",
    title: "Strategic Analysis",
    description: "Deep dive into your current situation, market position, and untapped opportunities.",
  },
  {
    step: "03",
    title: "Custom Strategy",
    description: "Development of a tailored strategy designed specifically for your unique situation.",
  },
  {
    step: "04",
    title: "Implementation",
    description: "Guided execution with ongoing support to ensure successful strategy deployment.",
  },
]

export default function StrategyPage() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Strategic Excellence"
        title="Brand Strategy"
        description="Bespoke strategic consulting for creators ready to dominate their market and command premium prices."
      />

      {/* Hero Section */}
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
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <Zap className="w-12 h-12 text-gold" />
                  <div>
                    <h3 className="text-2xl font-serif text-creme">Strategic Advantage</h3>
                    <p className="text-creme/60">Outthink, outposition, outperform</p>
                  </div>
                </div>
                <p className="text-xl text-creme/80 leading-relaxed">
                  Most creators compete on price. Our strategic consulting helps you compete on value, positioning you
                  as the premium choice in your market.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-serif text-gold mb-2">300%</div>
                    <p className="text-sm text-creme/60">Average revenue increase</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-gold mb-2">90 days</div>
                    <p className="text-sm text-creme/60">To see results</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Brand Strategy"
                  className="w-full h-[600px] object-cover border border-gold/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Services */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-noir/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-creme mb-8">
              Strategic Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-creme/80 max-w-3xl mx-auto">
              Focused consulting sessions designed to solve specific challenges and unlock growth opportunities.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8 mb-20"
          >
            {strategyServices.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 h-full">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-gold mb-6" />
                    <h3 className="text-xl font-serif text-creme mb-2">{service.title}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-serif text-gold">{service.price}</span>
                      <span className="text-sm text-creme/60">{service.duration}</span>
                    </div>
                    <p className="text-creme/70 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2 mb-8">
                      <h4 className="text-sm font-medium text-gold tracking-wider uppercase">Includes:</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-creme/70">
                            <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/contact">
                      <Button className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500">
                        Book Session
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Intensive Programs */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-creme mb-8">
              Intensive Programs
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-creme/80 max-w-3xl mx-auto">
              Comprehensive transformation programs for creators ready to make a quantum leap in their business.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8"
          >
            {intensivePrograms.map((program, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`bg-transparent border-creme/10 hover:border-gold/50 transition-all duration-700 h-full relative ${
                    program.popular ? "ring-2 ring-gold/30" : ""
                  }`}
                >
                  {program.popular && (
                    <div className="absolute top-0 right-0 bg-gold text-noir px-4 py-2 text-xs font-medium tracking-wider">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-8">
                    <program.icon className="w-12 h-12 text-gold mb-6" />
                    <h3 className="text-2xl font-serif text-creme mb-2">{program.title}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-serif text-gold">{program.price}</span>
                      <span className="text-sm text-creme/60">{program.duration}</span>
                    </div>
                    <p className="text-creme/70 mb-6 leading-relaxed">{program.description}</p>
                    <div className="space-y-2 mb-8">
                      <h4 className="text-sm font-medium text-gold tracking-wider uppercase">Program Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-creme/70">
                            <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <Link href="/contact">
                        <Button className="w-full bg-gold text-noir hover:bg-gold-light transition-all duration-500">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 bg-transparent"
                      >
                        <Calendar className="mr-2 w-4 h-4" />
                        Schedule Discovery Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-noir/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-creme mb-8">
              Our Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-creme/80 max-w-3xl mx-auto">
              A proven methodology that has helped hundreds of creators achieve breakthrough results.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 text-center h-full">
                  <CardContent className="p-8">
                    <div className="text-4xl font-serif text-gold mb-4">{step.step}</div>
                    <h3 className="text-xl font-serif text-creme mb-4">{step.title}</h3>
                    <p className="text-creme/70 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-creme mb-8">
              Ready to Dominate Your Market?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-creme/80 mb-12 leading-relaxed">
              Stop competing on price. Start commanding premium rates with strategic positioning.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-gold text-noir hover:bg-gold-light transition-all duration-500 px-12 py-4 text-lg">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Start Your Strategy Session
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 px-12 py-4 text-lg bg-transparent"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
