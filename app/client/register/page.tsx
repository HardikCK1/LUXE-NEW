"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Mail, Lock, User, Phone, Briefcase, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useActionState } from "react"
import { registerClient } from "./actions"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

export default function ClientRegister() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [state, formAction, isPending] = useActionState(registerClient, null)

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full">
        <motion.div initial="initial" animate="animate" variants={fadeInUp}>
          <div className="text-center mb-12">
            <Link href="/" className="text-4xl font-serif text-gold mb-4 block">
              LUXE
            </Link>
            <p className="text-sm tracking-[3px] uppercase text-creme/60 mb-2">Client Registration</p>
            <p className="text-creme/80">Create your account to access our exclusive client portal</p>
          </div>

          <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-creme text-center flex items-center justify-center gap-3">
                <UserPlus className="w-6 h-6 text-gold" />
                Create Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              {state?.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center"
                >
                  <p className="text-green-400 mb-2">Registration successful!</p>
                  <p className="text-green-400/80 text-sm">Please check your email to verify your account.</p>
                </motion.div>
              )}

              {state?.success === false && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center"
                >
                  <p className="text-red-400">{state.message}</p>
                </motion.div>
              )}

              <form action={formAction} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-creme/40" />
                      <Input
                        name="firstName"
                        className="bg-transparent border-creme/20 text-creme focus:border-gold pl-12"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-creme/40" />
                      <Input
                        name="lastName"
                        className="bg-transparent border-creme/20 text-creme focus:border-gold pl-12"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-creme/40" />
                    <Input
                      name="email"
                      type="email"
                      className="bg-transparent border-creme/20 text-creme focus:border-gold pl-12"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-creme/40" />
                    <Input
                      name="phone"
                      type="tel"
                      className="bg-transparent border-creme/20 text-creme focus:border-gold pl-12"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                    Service Interest
                  </label>
                  <Select name="serviceInterest" value={selectedService} onValueChange={setSelectedService} required>
                    <SelectTrigger className="bg-transparent border-creme/20 text-creme focus:border-gold">
                      <Briefcase className="w-5 h-5 text-creme/40 mr-2" />
                      <SelectValue placeholder="Select your service interest" />
                    </SelectTrigger>
                    <SelectContent className="bg-noir border-creme/20">
                      <SelectItem value="essential">Essential Presence - $2,800</SelectItem>
                      <SelectItem value="premium">Premium Experience - $5,800</SelectItem>
                      <SelectItem value="bespoke">Bespoke Estate - $12,500+</SelectItem>
                      <SelectItem value="strategy">Brand Strategy Consulting</SelectItem>
                      <SelectItem value="handbook">Creator Handbook</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="serviceInterest" value={selectedService} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-creme/40" />
                      <Input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="bg-transparent border-creme/20 text-creme focus:border-gold pl-12 pr-12"
                        placeholder="Create password"
                        required
                        minLength={8}
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
                  <div>
                    <label className="block text-sm font-light tracking-wider uppercase text-gold mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-creme/40" />
                      <Input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className="bg-transparent border-creme/20 text-creme focus:border-gold pl-12 pr-12"
                        placeholder="Confirm password"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-creme/40 hover:text-gold transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="acceptTerms"
                    className="mt-1 rounded border-creme/20 bg-transparent"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-creme/70 leading-relaxed">
                    I agree to the{" "}
                    <Link href="/privacy" className="text-gold hover:text-gold-light transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-gold hover:text-gold-light transition-colors">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gold text-noir hover:bg-gold-light transition-all duration-500 py-3 text-sm tracking-[2px] uppercase font-medium disabled:opacity-50"
                >
                  {isPending ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-creme/60">
                  Already have an account?{" "}
                  <Link href="/client/login" className="text-gold hover:text-gold-light transition-colors">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
