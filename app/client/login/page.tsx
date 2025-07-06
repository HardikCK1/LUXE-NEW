"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Mail, Eye, EyeOff, UserPlus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

export default function ClientLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/client/dashboard"
    }, 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full">
        <motion.div initial="initial" animate="animate" variants={fadeInUp}>
          <div className="text-center mb-12">
            <Link href="/" className="text-4xl font-serif text-gold mb-4 block">
              LUXE
            </Link>
            <p className="text-sm tracking-[3px] uppercase text-creme/60">Client Portal</p>
          </div>

          <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-creme text-center flex items-center justify-center gap-3">
                <Lock className="w-6 h-6 text-gold" />
                Secure Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-creme/40" />
                    <Input
                      type="email"
                      className="bg-transparent border-creme/20 text-creme focus:border-gold pl-12"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-creme/40" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="bg-transparent border-creme/20 text-creme focus:border-gold pl-12 pr-12"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-creme/40 hover:text-gold transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-creme/70">
                    <input type="checkbox" className="rounded border-creme/20 bg-transparent" />
                    Remember me
                  </label>
                  <Link href="/client/forgot-password" className="text-gold hover:text-gold-light transition-colors">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gold text-noir hover:bg-gold-light transition-all duration-500 py-3 text-sm tracking-[2px] uppercase font-medium"
                >
                  {isLoading ? "Authenticating..." : "Access Portal"}
                </Button>
              </form>

              <div className="mt-8 text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-creme/10" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-noir px-4 text-creme/60">New to Luxe?</span>
                  </div>
                </div>
                <Link href="/client/register">
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 bg-transparent"
                  >
                    <UserPlus className="mr-2 w-4 h-4" />
                    Create Account
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
