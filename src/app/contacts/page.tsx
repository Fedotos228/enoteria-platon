import Introduction from '@/components/blocks/Introduction'
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
import { Mail, MapPin, PhoneCall } from 'lucide-react'

export default function page() {
	return (
		<div className='mb-20'>
			<Introduction background='/images/Banner.png'>
				<h1 className='text-xl xs:text-2xl md:text-3xl text-white text-center leading-[160%]'>
					Contacte
				</h1>
			</Introduction>

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
								<p className='text-white flex items-center gap-4'>
									<PhoneCall /> 0723 456 789
								</p>
								<p className='text-white flex items-center gap-4'>
									<Mail />
									<a href='mailto:orbupetru12@gmail.com'>
										orbupetru12@gmail.com
									</a>
								</p>
								<p className='text-white flex items-center gap-4'>
									<MapPin /> Str. Lorem Ipsum nr. 123
								</p>
							</CardContent>

							<CardFooter>
								<Socials />
							</CardFooter>
						</Card>

						<ContactForm />
					</CardContent>
				</Card>
			</Container>
		</div>
	)
}
