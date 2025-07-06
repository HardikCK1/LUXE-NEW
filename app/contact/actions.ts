"use server"

import { z } from "zod"
import { sendContactEmail } from "@/lib/email"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    const validatedData = contactSchema.parse(data)

    // Send email
    const emailResult = await sendContactEmail(validatedData)

    if (!emailResult.success) {
      throw new Error(emailResult.error || "Failed to send email")
    }

    return {
      success: true,
      message: "Thank you for your inquiry. We'll respond within 48 hours.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}
