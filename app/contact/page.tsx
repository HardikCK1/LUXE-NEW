"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Clock, MapPin, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { submitContactForm } from "./actions"
import { useActionState } from "react"
import { useState } from "react"

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

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@luxedigital.studio",
    href: "mailto:contact@luxedigital.studio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday-Friday, 10AM-6PM EST",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York | Paris | Dubai",
    href: null,
  },
]

const faqs = [
  {
    question: "What's your average turnaround time?",
    answer: "Essential sites: 5-7 days | Premium: 10-14 days | Bespoke: 3-4 weeks",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer 3-part payment schedules for projects over $5,000",
  },
  {
    question: "How do you ensure discretion?",
    answer: "All projects are covered by strict NDAs. We never disclose client relationships.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, all clients receive 30 days of complimentary support post-launch.",
  },
]

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [selectedService, setSelectedService] = useState("")

  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Begin Your Journey"
        title="Contact Us"
        description="For serious inquiries only. Expect a response within 48 hours."
      />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-creme mb-8">Start Your Project</h3>

                  {state?.success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <p className="text-green-400">{state.message}</p>
                    </motion.div>
                  )}

                  {state?.success === false && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <p className="text-red-400">{state.message}</p>
                    </motion.div>
                  )}

                  <form action={formAction} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                          Full Name
                        </label>
                        <Input
                          name="name"
                          className="bg-transparent border-creme/20 text-creme focus:border-gold"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          className="bg-transparent border-creme/20 text-creme focus:border-gold"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                        Service Interest
                      </label>
                      <Select name="service" value={selectedService} onValueChange={setSelectedService} required>
                        <SelectTrigger className="bg-transparent border-creme/20 text-creme focus:border-gold">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-noir border-creme/20">
                          <SelectItem value="essential">Essential Presence</SelectItem>
                          <SelectItem value="premium">Premium Experience</SelectItem>
                          <SelectItem value="bespoke">Bespoke Estate</SelectItem>
                          <SelectItem value="custom">Custom Project</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="service" value={selectedService} />
                    </div>
                    <div>
                      <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                        Tell Us About Your Project
                      </label>
                      <Textarea
                        name="message"
                        className="bg-transparent border-creme/20 text-creme focus:border-gold min-h-[120px]"
                        placeholder="Describe your vision, goals, and any specific requirements..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-gold text-noir hover:bg-gold-light transition-all duration-500 py-3 text-sm tracking-[2px] uppercase font-medium group disabled:opacity-50"
                    >
                      {isPending ? "Submitting..." : "Submit Inquiry"}
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information - Keep the rest the same */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-creme mb-8">Studio Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-noir transition-all duration-500">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gold tracking-wider uppercase">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-creme hover:text-gold transition-colors duration-300">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-creme">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-creme mb-8">Frequently Asked</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="border-b border-creme/10 pb-4"
                    >
                      <h4 className="text-lg text-creme mb-2 font-medium">{faq.question}</h4>
                      <p className="text-creme/70">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 bg-transparent"
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 bg-transparent"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Telegram
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
