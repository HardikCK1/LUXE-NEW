"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText } from "lucide-react"
import { PageHeader } from "@/components/page-header"

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

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "We implement enterprise-grade security measures to protect all client information and project data.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "All projects are covered by strict NDAs. We never disclose client relationships or project details.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We clearly communicate what data we collect, how we use it, and provide full control over your information.",
  },
  {
    icon: FileText,
    title: "Compliance",
    description: "We adhere to GDPR, CCPA, and other privacy regulations to ensure your rights are protected.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24">
      <PageHeader
        overline="Your Privacy Matters"
        title="Privacy Policy"
        description="How we protect and handle your personal information with the utmost care and discretion."
      />

      {/* Privacy Principles */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {privacyPrinciples.map((principle, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700 text-center h-full">
                  <CardContent className="p-6">
                    <principle.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h3 className="text-lg font-serif text-creme mb-3">{principle.title}</h3>
                    <p className="text-creme/70 text-sm leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Privacy Policy */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-transparent border-creme/10">
              <CardContent className="p-12">
                <motion.div variants={fadeInUp} className="prose prose-invert max-w-none">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-serif text-gold mb-4">Information We Collect</h2>
                      <div className="text-creme/80 leading-relaxed space-y-4">
                        <p>
                          <strong className="text-creme">Contact Information:</strong> When you inquire about our
                          services, we collect your name, email address, phone number, and any project details you
                          choose to share.
                        </p>
                        <p>
                          <strong className="text-creme">Project Data:</strong> During our collaboration, we may collect
                          content, images, brand materials, and other assets necessary to complete your project.
                        </p>
                        <p>
                          <strong className="text-creme">Website Analytics:</strong> We use Google Analytics to
                          understand how visitors interact with our website, helping us improve our services.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif text-gold mb-4">How We Use Your Information</h2>
                      <div className="text-creme/80 leading-relaxed space-y-4">
                        <p>
                          <strong className="text-creme">Service Delivery:</strong> We use your information solely to
                          provide the luxury web design services you've requested.
                        </p>
                        <p>
                          <strong className="text-creme">Communication:</strong> We may contact you regarding your
                          project, send updates, or respond to your inquiries.
                        </p>
                        <p>
                          <strong className="text-creme">Legal Compliance:</strong> We may use your information to
                          comply with legal obligations or protect our rights.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif text-gold mb-4">Information Sharing</h2>
                      <div className="text-creme/80 leading-relaxed space-y-4">
                        <p>
                          <strong className="text-creme">No Third-Party Sharing:</strong> We never sell, rent, or share
                          your personal information with third parties for marketing purposes.
                        </p>
                        <p>
                          <strong className="text-creme">Service Providers:</strong> We may share limited information
                          with trusted service providers (hosting, email services) who assist in delivering our
                          services.
                        </p>
                        <p>
                          <strong className="text-creme">Legal Requirements:</strong> We may disclose information if
                          required by law or to protect our rights and safety.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif text-gold mb-4">Data Security</h2>
                      <div className="text-creme/80 leading-relaxed space-y-4">
                        <p>
                          <strong className="text-creme">Encryption:</strong> All data transmission is encrypted using
                          industry-standard SSL/TLS protocols.
                        </p>
                        <p>
                          <strong className="text-creme">Access Controls:</strong> We implement strict access controls
                          and regularly audit our security measures.
                        </p>
                        <p>
                          <strong className="text-creme">Data Retention:</strong> We retain your information only as
                          long as necessary to provide services or as required by law.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif text-gold mb-4">Your Rights</h2>
                      <div className="text-creme/80 leading-relaxed space-y-4">
                        <p>
                          <strong className="text-creme">Access & Correction:</strong> You have the right to access and
                          correct your personal information at any time.
                        </p>
                        <p>
                          <strong className="text-creme">Data Portability:</strong> You can request a copy of your data
                          in a portable format.
                        </p>
                        <p>
                          <strong className="text-creme">Deletion:</strong> You may request deletion of your personal
                          information, subject to legal and contractual obligations.
                        </p>
                        <p>
                          <strong className="text-creme">Opt-Out:</strong> You can opt out of marketing communications
                          at any time.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-serif text-gold mb-4">Contact Us</h2>
                      <div className="text-creme/80 leading-relaxed">
                        <p>
                          If you have any questions about this Privacy Policy or how we handle your information, please
                          contact us at:
                        </p>
                        <div className="mt-4 p-4 border border-gold/20 bg-gold/5">
                          <p>
                            <strong className="text-gold">Email:</strong> privacy@luxedigital.studio
                          </p>
                          <p>
                            <strong className="text-gold">Phone:</strong> +1 (555) 123-4567
                          </p>
                          <p>
                            <strong className="text-gold">Address:</strong> Luxe Digital Studio, New York, NY
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-8 border-t border-creme/10">
                      <p className="text-creme/60 text-sm">
                        Last updated: January 2024 | This policy may be updated periodically to reflect changes in our
                        practices.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
