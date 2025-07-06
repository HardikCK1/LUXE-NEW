"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const footerLinks = {
  services: [
    { name: "Essential Presence", href: "/services" },
    { name: "Premium Experience", href: "/services" },
    { name: "Bespoke Estate", href: "/services" },
    { name: "Add-Ons", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  resources: [
    { name: "Pricing Guide", href: "/pricing" },
    { name: "Creator Handbook", href: "/handbook" },
    { name: "Brand Strategy", href: "/strategy" },
    { name: "FAQ", href: "/faq" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@luxedigital.studio", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-noir/90 border-t border-creme/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <Link href="/" className="text-3xl font-serif text-gold mb-6 block">
              LUXE
            </Link>
            <p className="text-creme/70 leading-relaxed mb-8 max-w-sm">
              We craft digital ateliers for the world's most discerning content creators. Your brand deserves nothing
              less than perfection.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-creme/20 flex items-center justify-center text-creme hover:border-gold hover:text-gold transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-medium text-gold mb-6 tracking-wider uppercase">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-creme/70 hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-medium text-gold mb-6 tracking-wider uppercase">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-creme/70 hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-medium text-gold mb-6 tracking-wider uppercase">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-creme/70 hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-creme/10 mt-16 pt-8 text-center"
        >
          <p className="text-creme/60 text-sm">
            © 2024 Luxe Digital Studio. All rights reserved. Unauthorized use of our designs is prohibited.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
