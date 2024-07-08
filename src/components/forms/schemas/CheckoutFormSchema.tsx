import { z } from "zod";

const AddressFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Numele trebuie să aibă cel puțin 3 caractere" }),
  lastName: z
    .string()
    .min(4, { message: "Prenumele trebuie să aibă cel puțin 4 caractere" }),
  email: z.string().email({ message: "Adresa de email nu este validă" }),
  phone: z.string().min(12, {
    message: "Numărul de telefon trebuie să aibă cel puțin 12 caractere",
  }),
  address: z
    .string()
    .min(5, { message: "Adresa trebuie să aibă cel puțin 5 caractere" }),
  city: z
    .string()
    .min(2, { message: "Orașul trebuie să aibă cel puțin 2 caractere" }),
  country: z.enum(["moldova", "romania"]),
});

export const CheckoutFormSchema = z.object({
  ...AddressFormSchema.shape,
  paymentMethod: z.enum(["card", "paypal", "cash"]),
  shipping: z.number(),
  subTotalPrice: z.number(),
  totalPrice: z.number(),
});

export type CheckoutFormSchemaType = z.infer<typeof CheckoutFormSchema>;
