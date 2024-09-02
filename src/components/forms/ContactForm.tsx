'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { Textarea } from '../ui/textarea'
import { createContactFormSchema, ContactFormSchemaType } from './schemas/ContactFormShema'

export function ContactForm() {
	const t = useTranslations("ContactForm")
	const ContactFormSchema = createContactFormSchema(t)

	const form = useForm<ContactFormSchemaType>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			fullname: '',
			email: '',
			phone: '',
			message: '',
		},
	})

	function onSubmit(data: ContactFormSchemaType) {
		toast.success(
			t("successMessage"),
			{
				position: 'top-center',
			},
		)
	}

	return (
		<Form {...form}>
			<form
				className='grid grid-cols-1 xs:grid-cols-2 gap-5 w-full md:w-[55%] py-5 xs:py-10'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='fullname'
					render={({ field }) => (
						<FormItem className='col-span-2'>
							<FormLabel>
								{t("fullname.label")}{' '}
								<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className='h-12'
									placeholder={t("fullname.placeholder")}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem className='col-span-2 xs:col-span-1'>
							<FormLabel>
								{t("email.label")}{' '}
								<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className='h-12'
									inputMode='email'
									type='email'
									placeholder={t("email.placeholder")}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem className='col-span-2 xs:col-span-1'>
							<FormLabel>
								{t("phone.label")}{' '}
								<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className='h-12'
									inputMode='tel'
									type='tel'
									placeholder={t("phone.placeholder")}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem className='col-span-2'>
							<FormLabel>{t("message.label")}</FormLabel>
							<FormControl>
								<Textarea
									className='resize-none'
									placeholder={t("phone.placeholder")}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className='xs:col-start-2' type='submit' size='lg'>
					{t("submit")}
				</Button>
			</form>
		</Form>
	)
}
