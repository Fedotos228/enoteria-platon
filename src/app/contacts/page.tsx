'use client'

import Introduction from '@/components/blocks/Introduction'
import Loader from '@/components/elements/Loader'
import Socials from '@/components/elements/Socials'
import { ContactForm } from '@/components/forms/ContactForm'
import Container from '@/components/layout/Container'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { blocksService } from '@/services/blocks/blocks.service'
import { useQuery } from '@tanstack/react-query'
import { Mail, MapPin, PhoneCall } from 'lucide-react'

export default function ContactPage() {
	const { data, isLoading } = useQuery({
		queryKey: ['contact'],
		queryFn: () => blocksService.getPage('contact'),
		select: data => data.data.data.attributes
	})

	function iconSwitch(icon: string) {
		switch (icon) {
			case "PhoneCall":
				return <PhoneCall />
			case "Mail":
				return <Mail />
			case "MapPin":
				return <MapPin />
			default:
				return null
		}
	}

	if (isLoading) return <Loader loading={isLoading} />

	return (
		<div className='mb-20'>
			<Introduction content={data?.introdunction} />

			<Container>
				<Card>
					<CardContent className='flex flex-col-reverse md:flex-row items-center p-4 md:p-3 gap-10 md:gap-5 ml:gap-8'>
						<Card className='bg-bordo w-full md:w-[45%] py-10'>
							<CardHeader>
								<CardTitle className='text-white'>
									Informatii de contact
								</CardTitle>
							</CardHeader>
							<CardContent className='gap-12 flex flex-col my-20'>
								{data?.contactList.map((item: any) => (
									<p className='text-white flex items-center gap-4' key={item.id}>
										{iconSwitch(item.icon)}
										{item.title}
									</p>
								))}
							</CardContent>

							<CardFooter>
								<Socials socials={data?.socials} />
							</CardFooter>
						</Card>

						<ContactForm />
					</CardContent>
				</Card>
			</Container>
		</div>
	)
}
