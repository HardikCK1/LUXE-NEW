import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export const PRICING_PLANS = {
  essential: {
    name: "Essential Presence",
    price: 280000, // $2,800 in cents
    description: "A polished single-page showcase for emerging creators",
    features: [
      "Mobile-first responsive design",
      "Custom contact form",
      "Basic SEO optimization",
      "3 revision rounds",
      "5-day turnaround",
    ],
  },
  premium: {
    name: "Premium Experience",
    price: 580000, // $5,800 in cents
    description: "Multi-page digital sanctuary for established creators",
    features: [
      "3-5 page fully animated site",
      "Membership portal integration",
      "Cinematic video backgrounds",
      "5 revision rounds",
      "10-day turnaround",
    ],
  },
  bespoke: {
    name: "Bespoke Estate",
    price: 1250000, // $12,500 in cents
    description: "Fully custom digital property for top-tier creators",
    features: [
      "White-glove concierge service",
      "E-commerce & paywall systems",
      "AI chatbot integration",
      "Unlimited revisions",
      "14-day turnaround",
    ],
  },
}

export async function createPaymentIntent(planId: keyof typeof PRICING_PLANS, clientEmail: string) {
  const plan = PRICING_PLANS[planId]

  if (!plan) {
    throw new Error("Invalid plan selected")
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: plan.price,
    currency: "usd",
    metadata: {
      plan: planId,
      clientEmail,
    },
  })

  return paymentIntent
}

export async function createCheckoutSession(planId: keyof typeof PRICING_PLANS, clientEmail: string) {
  const plan = PRICING_PLANS[planId]

  if (!plan) {
    throw new Error("Invalid plan selected")
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: plan.name,
            description: plan.description,
          },
          unit_amount: plan.price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/client/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    customer_email: clientEmail,
    metadata: {
      plan: planId,
    },
  })

  return session
}
