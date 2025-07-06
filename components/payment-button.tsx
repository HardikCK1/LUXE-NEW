"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CreditCard, Loader2 } from "lucide-react"
import { trackPaymentInitiated } from "@/lib/analytics"
import { useRouter } from "next/navigation"

interface PaymentButtonProps {
  planId: "essential" | "premium" | "bespoke"
  planName: string
  amount: number
  clientEmail?: string
}

export function PaymentButton({ planId, planName, amount, clientEmail }: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handlePayment = async () => {
    if (!clientEmail) {
      // Redirect to registration if no email provided
      router.push("/client/register")
      return
    }

    setIsLoading(true)
    trackPaymentInitiated(planName, amount)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planId,
          clientEmail,
        }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error("Payment failed:", error)
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handlePayment}
      disabled={isLoading}
      className="w-full bg-gold text-noir hover:bg-gold-light transition-all duration-500 py-3 text-sm tracking-[2px] uppercase font-medium group"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 w-4 h-4" />
          {clientEmail ? `Start Project - $${(amount / 100).toLocaleString()}` : "Register & Pay"}
        </>
      )}
    </Button>
  )
}
