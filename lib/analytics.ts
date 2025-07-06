declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID!, {
      page_path: url,
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Custom events for luxury studio
export const trackInquiry = (service: string) => {
  event({
    action: "inquiry_submitted",
    category: "engagement",
    label: service,
  })
}

export const trackPortfolioView = (project: string) => {
  event({
    action: "portfolio_view",
    category: "engagement",
    label: project,
  })
}

export const trackServiceView = (service: string) => {
  event({
    action: "service_view",
    category: "engagement",
    label: service,
  })
}

export const trackPaymentInitiated = (plan: string, amount: number) => {
  event({
    action: "payment_initiated",
    category: "ecommerce",
    label: plan,
    value: amount,
  })
}

export const trackPaymentCompleted = (plan: string, amount: number) => {
  event({
    action: "purchase",
    category: "ecommerce",
    label: plan,
    value: amount,
  })
}
