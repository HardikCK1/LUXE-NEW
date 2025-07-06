import { type NextRequest, NextResponse } from "next/server"
import { createPaymentIntent } from "@/lib/stripe"
import { z } from "zod"

const paymentSchema = z.object({
  planId: z.enum(["essential", "premium", "bespoke"]),
  clientEmail: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { planId, clientEmail } = paymentSchema.parse(body)

    const paymentIntent = await createPaymentIntent(planId, clientEmail)

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error("Payment intent creation failed:", error)
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
