"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus, MessageSquare, Clock, CreditCard, Palette } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { useState } from "react"
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

const faqCategories = [
  {
    icon: Clock,
    title: "Process & Timeline",
    faqs: [
      {
        question: "What's your typical project timeline?",
        answer:
          "Essential Presence: 5-7 days | Premium Experience: 10-14 days | Bespoke Estate: 3-4 weeks. Rush delivery available for additional fee.",
      },
      {
        question: "What does your design process look like?",
        answer:
          "We follow a 5-phase approach: Discovery & Strategy, Design Concepts, Client Review & Refinement, Development & Testing, and Launch & Training. Each phase includes client collaboration and approval.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Essential: 3 rounds | Premium: 5 rounds | Bespoke: Unlimited. Additional revisions beyond the included amount are available at $150/hour.",
      },
      {
        question: "Can you work with tight deadlines?",
        answer:
          "Yes, we offer rush delivery for urgent projects. Rush fees apply: 50% for 2-day delivery, 25% for same-week delivery.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Pricing & Payment",
    faqs: [
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment plans for projects over $5,000. Typically: 50% upfront, 25% at design approval, 25% at launch.",
      },
      {
        question: "What's included in the quoted price?",
        answer:
          "All quoted prices include design, development, basic SEO, mobile optimization, and the specified number of revisions. Hosting, domain, and third-party integrations are separate.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No hidden fees. We provide transparent pricing upfront. Additional costs only apply for scope changes, extra revisions, or premium add-ons you choose.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a satisfaction guarantee. If you're not happy with the initial concepts, we'll refund your deposit minus any work completed.",
      },
    ],
  },
  {
    icon: Palette,
    title: "Design & Development",
    faqs: [
      {
        question: "Do you work with existing branding?",
        answer:
          "Absolutely. We can work with your existing brand guidelines or create new branding as part of our Brand Identity Kit add-on service.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes, all our websites are mobile-first and fully responsive. We test on all major devices and browsers to ensure perfect functionality.",
      },
      {
        question: "Can you integrate with my existing platforms?",
        answer:
          "Yes, we integrate with OnlyFans, Patreon, social media platforms, email marketing tools, payment processors, and most major platforms.",
      },
      {
        question: "Do you provide content creation?",
        answer:
          "We offer professional copywriting and can coordinate photography. We also provide guidance on content strategy and can recommend trusted photographers.",
      },
    ],
  },
  {
    icon: MessageSquare,
    title: "Support & Maintenance",
    faqs: [
      {
        question: "What support do you provide after launch?",
        answer:
          "All clients receive 30 days of complimentary support post-launch. This includes bug fixes, minor content updates, and technical assistance.",
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer:
          "Yes, we offer monthly maintenance packages starting at $200/month. This includes updates, backups, security monitoring, and priority support.",
      },
      {
        question: "Can I update the website myself?",
        answer:
          "Yes, we build user-friendly websites with content management systems. We provide training and documentation for easy self-management.",
      },
      {
        question: "How do you ensure my privacy?",
        answer:
          "All projects are covered by strict NDAs. We never disclose client relationships and implement enterprise-grade security measures.",
      },
    ],
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-300">
      <CardContent className="p-0">
        <button onClick={onToggle} className="w-full p-6 text-left flex items-center justify-between group">
          <h3 className="text-lg font-medium text-creme group-hover:text-gold transition-colors duration-300 pr-4">
            {question}
          </h3>
          <div className="flex-shrink-0">
            {isOpen ? <Minus className="w-5 h-5 text-gold" /> : <Plus className="w-5 h-5 text-gold" />}
          </div>
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6">
            <p className="text-creme/70 leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Common Questions"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with Luxe Digital Studio."
      />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {faqCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={fadeInUp}>
                <div className="flex items-center gap-4 mb-8">
                  <category.icon className="w-8 h-8 text-gold" />
                  <h2 className="text-3xl font-serif text-creme">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <FAQItem
                      key={faqIndex}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openItems[`${categoryIndex}-${faqIndex}`] || false}
                      onToggle={() => toggleItem(categoryIndex, faqIndex)}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20"
          >
            <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700">
              <CardContent className="p-12 text-center">
                <MessageSquare className="w-12 h-12 text-gold mx-auto mb-6" />
                <h3 className="text-2xl font-serif text-creme mb-4">Still Have Questions?</h3>
                <p className="text-creme/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Our team is here to help. Get in touch for personalized answers about your specific project needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-gold text-noir hover:bg-gold-light transition-all duration-500 px-8 py-3">
                      <MessageSquare className="mr-2 w-4 h-4" />
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/client/login">
                    <Button
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 px-8 py-3 bg-transparent"
                    >
                      Client Portal
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
