import { z } from "zod"

<<<<<<< HEAD
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
    country: z.enum(["moldova", "romania"]),
  })
=======
const AddressFormSchema = z.object({
  firstName: z
    .string()
    .nonempty({ message: "Numele este obligatoriu" }),
  lastName: z
    .string()
    .nonempty({ message: "Prenumele este obligatoriu" }),
  email: z
    .string()
    .nonempty({ message: "Adresa de email este obligatorie" })
    .email({ message: "Adresa de email nu este validă" }),
  phone: z
    .string()
    .min(12, {message: "Numărul de telefon trebuie să aibă cel puțin 12 caractere"}),
  address: z
    .string()
    .nonempty({ message: "Adresa este obligatorie" }),
  city: z
    .string()
    .nonempty({ message: "Orașul este obligatoriu" }),
  country: z
    .enum(["moldova", "romania"])
});
>>>>>>> 0c0f928efc3b434eec09bc40d0103e0fa1137f92

  return z.object({
    ...AddressFormSchema.shape,
    paymentMethod: z.enum(["card", "paypal", "cash"]),
    shipping: z.number(),
    subTotalPrice: z.number(),
    totalPrice: z.number(),
  })
}

export type CheckoutFormSchemaType = z.infer<ReturnType<typeof createCheckoutFormSchema>>
