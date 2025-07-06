"use server"

import { z } from "zod"
import { sendContactEmail } from "@/lib/email"

const registerSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    serviceInterest: z.string().min(1, "Please select a service"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
    acceptTerms: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.acceptTerms === "on", {
    message: "You must accept the terms and conditions",
    path: ["acceptTerms"],
  })

export async function registerClient(prevState: any, formData: FormData) {
  try {
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      serviceInterest: formData.get("serviceInterest") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
      acceptTerms: formData.get("acceptTerms") as string,
    }

    const validatedData = registerSchema.parse(data)

    // Send registration notification email
    const emailResult = await sendContactEmail({
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
      service: validatedData.serviceInterest,
      message: `New client registration:\n\nPhone: ${validatedData.phone}\nService Interest: ${validatedData.serviceInterest}\n\nPlease set up their client portal access.`,
    })

    if (!emailResult.success) {
      throw new Error("Failed to send registration notification")
    }

    // In a real app, you would save to database here
    // For now, we'll just simulate success

    return {
      success: true,
      message: "Registration successful! Check your email for verification.",
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
      message: "Registration failed. Please try again.",
    }
  }
}
