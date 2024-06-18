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
import { toast } from 'sonner'
import { Textarea } from '../ui/textarea'

const FormSchema = z.object({
	fullname: z.string().min(4, {
		message: 'Numele trebuie sa aiba cel putin 4 caractere',
	}),
	email: z.string().email({
		message: 'Adresa de email nu este valida',
	}),
	phone: z.string().min(12, {
		message: 'Numarul de telefon trebuie sa aiba cel putin 12 caractere',
	}),
	message: z.string().max(300, {
		message: 'Mesajul nu poate avea mai mult de 300 de caractere',
	}),
})

export function ContactForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			fullname: '',
			email: '',
			phone: '',
			message: '',
		},
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data)
		toast.success(
			'Mesajul a fost trimis cu succes! Veți fi contactat în cel mai scurt timp posibil.',
			{
				position: 'top-center',
			},
		)
	}

	return (
		<Form {...form}>
			<form
				className='grid xs:grid-cols-2 gap-5 w-full md:w-[55%] py-10'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='fullname'
					render={({ field }) => (
						<FormItem className='col-span-2'>
							<FormLabel>
								Numele, Prenumele{' '}
								<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className='h-12'
									placeholder='ex. Popescu Ion'
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
						<FormItem>
							<FormLabel>
								Email{' '}
								<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className='h-12'
									inputMode='email'
									type='email'
									placeholder='ex. example@example.com'
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
						<FormItem>
							<FormLabel>
								Telefon{' '}
								<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className='h-12'
									inputMode='tel'
									type='tel'
									placeholder='ex. +37367525214'
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
							<FormLabel>Mesaj</FormLabel>
							<FormControl>
								<Textarea
									className='resize-none'
									placeholder='Maxim 200 de caractere.'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className='xs:col-start-2' type='submit' size='lg'>
					Trimite
				</Button>
			</form>
		</Form>
	)
}
