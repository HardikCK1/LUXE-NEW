"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const testimonials = [
  {
    content:
      "Luxe Digital Studio transformed my OnlyFans from a content page into a luxury destination. Within three months, my subscription price increased 400% with no loss of subscribers.",
    author: "Sophia R.",
    role: "Top 0.01% Creator",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    content:
      "The attention to detail is unmatched. Every element of my website tells a story and converts visitors into paying customers. Best investment I've made for my business.",
    author: "Isabella M.",
    role: "Luxury Brand Owner",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    content:
      "Working with Luxe was like having a personal creative director. They understood my vision and elevated it beyond what I thought was possible.",
    author: "Elena V.",
    role: "Boudoir Photographer",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
]

export function TestimonialSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-noir/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span variants={fadeInUp} className="text-sm font-light tracking-[3px] uppercase text-gold block mb-6">
            Client Voices
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-light text-creme font-serif">
            Testimonials
          </motion.h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 group h-full">
                <CardContent className="p-8 relative">
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-gold/20" />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>

                  <p className="text-creme/80 text-lg leading-relaxed mb-8 italic relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full border-2 border-gold/30 object-cover"
                    />
                    <div>
                      <h4 className="text-creme font-medium text-lg">{testimonial.author}</h4>
                      <p className="text-gold text-sm tracking-wider uppercase">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
