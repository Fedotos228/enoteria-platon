import { z } from 'zod'

export const createContactFormSchema = (t: any) => {
  return z.object({
		fullname: z.string().min(4, {
			message: t("fullname.validation"),
		}),
		email: z.string().email({
			message: t("email.validation"),
		}),
		phone: z.string().min(12, {
			message: t("phone.validation"),
		}),
		message: z.string().max(300, {
			message: t("message.validation"),
		}),
	})
}

export type ContactFormSchemaType = z.infer<ReturnType<typeof createContactFormSchema>>