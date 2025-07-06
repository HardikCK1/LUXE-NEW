"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Target, Palette, Camera, TrendingUp, Users, Heart, Download, CheckCircle, Star } from "lucide-react"
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

const handbookSections = [
  {
    icon: Target,
    title: "Defining Your Brand Identity",
    description: "Discover your unique voice and aesthetic in the luxury content space",
    chapters: [
      "Understanding Your Audience Psychology",
      "Crafting Your Signature Style",
      "Positioning in the Premium Market",
      "Building Authentic Connections",
    ],
  },
  {
    icon: Palette,
    title: "Visual Storytelling Mastery",
    description: "Create compelling visual narratives that command premium prices",
    chapters: [
      "Color Psychology in Luxury Branding",
      "Composition Techniques for Impact",
      "Lighting for Mood and Atmosphere",
      "Creating Cohesive Visual Themes",
    ],
  },
  {
    icon: Camera,
    title: "Content Creation Excellence",
    description: "Professional techniques for creating magazine-quality content",
    chapters: [
      "Equipment Essentials for Creators",
      "Posing and Direction Techniques",
      "Post-Production Workflows",
      "Maintaining Consistent Quality",
    ],
  },
  {
    icon: TrendingUp,
    title: "Pricing & Monetization",
    description: "Strategic approaches to premium pricing and revenue optimization",
    chapters: [
      "Value-Based Pricing Strategies",
      "Creating Tiered Offerings",
      "Subscription Model Optimization",
      "Upselling and Cross-selling",
    ],
  },
  {
    icon: Users,
    title: "Audience Development",
    description: "Build a devoted community of high-value subscribers",
    chapters: [
      "Identifying Your Ideal Client",
      "Content Marketing Strategies",
      "Social Media Mastery",
      "Email List Building",
    ],
  },
  {
    icon: Heart,
    title: "Client Relationship Management",
    description: "Nurture relationships that lead to long-term success",
    chapters: [
      "Creating VIP Experiences",
      "Handling Difficult Situations",
      "Building Loyalty Programs",
      "Feedback and Improvement",
    ],
  },
]

const testimonials = [
  {
    quote: "This handbook transformed my approach to content creation. My earnings increased 300% in just 3 months.",
    author: "Sophia R.",
    role: "Top 0.1% Creator",
  },
  {
    quote: "The pricing strategies alone were worth the investment. I finally understand my true value.",
    author: "Isabella M.",
    role: "Luxury Brand Owner",
  },
  {
    quote: "Every creator should have this guide. It's like having a business mentor in your pocket.",
    author: "Elena V.",
    role: "Boudoir Photographer",
  },
]

export default function HandbookPage() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Essential Knowledge"
        title="Creator Handbook"
        description="The definitive guide to building a luxury content creation business that commands premium prices."
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          >
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Creator Handbook"
                  className="w-full h-[600px] object-cover border border-gold/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-gold/10 backdrop-blur-sm border border-gold/30 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-current" />
                      ))}
                    </div>
                    <p className="text-creme text-sm">
                      "The most comprehensive guide I've ever read for content creators."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <BookOpen className="w-12 h-12 text-gold" />
                  <div>
                    <h3 className="text-2xl font-serif text-creme">180+ Pages</h3>
                    <p className="text-creme/60">Of actionable strategies</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-creme/80">6 comprehensive modules</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-creme/80">24 detailed chapters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-creme/80">Bonus templates & worksheets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-creme/80">Lifetime updates included</span>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-4xl font-serif text-gold mb-2">$297</div>
                  <p className="text-creme/60 mb-6">One-time investment</p>
                  <Button className="bg-gold text-noir hover:bg-gold-light transition-all duration-500 px-8 py-3 w-full">
                    <Download className="mr-2 w-4 h-4" />
                    Get Instant Access
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Handbook Sections */}
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
              What's Inside
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-creme/80 max-w-3xl mx-auto">
              Six comprehensive modules covering every aspect of building a luxury content creation business.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {handbookSections.map((section, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 h-full">
                  <CardContent className="p-8">
                    <section.icon className="w-12 h-12 text-gold mb-6" />
                    <h3 className="text-xl font-serif text-creme mb-4">{section.title}</h3>
                    <p className="text-creme/70 mb-6 leading-relaxed">{section.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gold tracking-wider uppercase mb-3">Chapters Include:</h4>
                      <ul className="space-y-2">
                        {section.chapters.map((chapter, chapterIndex) => (
                          <li key={chapterIndex} className="flex items-start gap-2 text-sm text-creme/70">
                            <div className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                            <span>{chapter}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              Success Stories
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-current" />
                      ))}
                    </div>
                    <p className="text-creme/80 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="text-creme font-medium">{testimonial.author}</h4>
                      <p className="text-gold text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-noir/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-creme mb-8">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-creme/80 mb-12 leading-relaxed">
              Join thousands of creators who have used this handbook to build six-figure businesses.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gold text-noir hover:bg-gold-light transition-all duration-500 px-12 py-4 text-lg">
                <Download className="mr-2 w-5 h-5" />
                Get The Handbook - $297
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 px-12 py-4 text-lg bg-transparent"
                >
                  Ask Questions First
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
