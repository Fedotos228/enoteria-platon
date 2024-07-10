import { z } from "zod";

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

export const CheckoutFormSchema = z.object({
  ...AddressFormSchema.shape,
  paymentMethod: z.enum(["card", "paypal", "cash"]),
  shipping: z.number(),
  subTotalPrice: z.number(),
  totalPrice: z.number(),
});

export type CheckoutFormSchemaType = z.infer<typeof CheckoutFormSchema>;
