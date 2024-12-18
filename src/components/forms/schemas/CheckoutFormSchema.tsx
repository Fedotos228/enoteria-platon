'use client'

import { z } from "zod"

export function createCheckoutFormSchema(t: any) {

  const AddressFormSchema = z.object({
    firstName: z
      .string()
      .min(3, { message: t("firstName.validation") }),
    lastName: z
      .string()
      .min(4, { message: t("lastName.validation") }),
    email: z.string().email({ message: t("email.validation") }),
    phone: z.string().min(12, {
      message: t("phone.validation"),
    }),
    address: z
      .string()
      .min(5, { message: t("address.validation") }),
    city: z
      .string()
      .min(2, { message: t("city.validation") }),
    country: z.enum(["Moldova", "Romania"],),
  })

  return z.object({
    ...AddressFormSchema.shape,
    paymentMethod: z.enum(["15", "16", "17"]),
    deliveryMethod: z.enum(["1", "2", "3"]),
    shipping: z.number(),
    subTotalPrice: z.number(),
    totalPrice: z.number(),
  })
}

export type CheckoutFormSchemaType = z.infer<ReturnType<typeof createCheckoutFormSchema>>
