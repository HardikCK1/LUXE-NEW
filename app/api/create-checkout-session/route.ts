import { type NextRequest, NextResponse } from "next/server"
import { createCheckoutSession } from "@/lib/stripe"
import { z } from "zod"

const checkoutSchema = z.object({
  planId: z.enum(["essential", "premium", "bespoke"]),
  clientEmail: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { planId, clientEmail } = checkoutSchema.parse(body)

    const session = await createCheckoutSession(planId, clientEmail)

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Checkout session creation failed:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
