import { z } from "zod";

export const AddressFormSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "Numele trebuie să aibă cel puțin 3 caractere" }),
  lastname: z
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

export const CardPaypalPaymentSchema = z.object({
  cardNumber: z.string().min(16, {
    message: "Numărul cardului trebuie să aibă cel puțin 16 cifre",
  }),
  cardName: z.string().min(4, {
    message: "Numele și prenumele trebuie să aibă cel puțin 4 caractere",
  }),
  expiryMonth: z
    .string()
    .min(1, { message: "Luna de expirare este obligatorie" }),
  expiryYear: z
    .string()
    .min(1, { message: "Anul de expirare este obligatoriu" }),
  cvv: z
    .string()
    .min(3, { message: "CVV-ul trebuie să aibă cel puțin 3 caractere" }),
});

export const CashPaymentSchema = z.object({
  cardNumber: z.string().optional(),
  cardName: z.string().optional(),
  expiryMonth: z.string().optional(),
  expiryYear: z.string().optional(),
  cvv: z.string().optional(),
});

export const PaymentFormSchema = z.object({
  paymentMethod: z.enum(["card", "paypal", "cash"]),
  ...CashPaymentSchema.shape, // default Schema
});

export const FormSchema = z
  .object({
    ...AddressFormSchema.shape,
    paymentMethod: z.enum(["card", "paypal", "cash"]),
    shipping: z.number(),
    subTotalPrice: z.number(),
    totalPrice: z.number(),
  })
  .and(
    z.union([
      z.object({
        paymentMethod: z.literal("cash"),
        ...CashPaymentSchema.shape,
      }),
      z.object({
        paymentMethod: z.enum(["card", "paypal"]),
        ...CardPaypalPaymentSchema.shape,
      }),
    ]),
  );

export type PaymentFormSchemaType = z.infer<typeof PaymentFormSchema>;
export type AddressFormSchemaType = z.infer<typeof AddressFormSchema>;
export type FormSchemaType = z.infer<typeof FormSchema>;
