import Introduction from '@/components/blocks/Introduction'
import Socials from '@/components/elements/Socials'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
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
							<CardContent className='gap-12 flex flex-col my-16'>
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

						<form
							action=''
							className='grid xs:grid-cols-2 gap-5 w-full md:w-[55%]'
						>
							<div className='grid gap-1.5'>
								<Label htmlFor='lastname'>Numele</Label>
								<Input
									className='h-12'
									type='lastname'
									id='lastname'
									placeholder='ex. Popescu'
								/>
							</div>
							<div className='grid gap-1.5'>
								<Label htmlFor='firstname'>Prenumele</Label>
								<Input
									className='h-12'
									type='firstname'
									id='firstname'
									placeholder='ex. Ion'
								/>
							</div>
							<div className='grid gap-1.5'>
								<Label htmlFor='email'>Email</Label>
								<Input
									className='h-12'
									type='email'
									id='email'
									inputMode='email'
									placeholder='ex. example@example.com'
								/>
							</div>
							<div className='grid gap-1.5'>
								<Label htmlFor='phone'>Telefon</Label>
								<Input
									className='h-12'
									type='phone'
									id='phone'
									inputMode='tel'
									placeholder='ex. +37367525214'
								/>
							</div>
							<div className='grid gap-1.5 xs:col-span-2'>
								<Label htmlFor='message'>Mesaj</Label>
								<Textarea />
							</div>

							<Button
								className='xs:col-start-2'
								type='submit'
								size='lg'
							>
								Trimite
							</Button>
						</form>
					</CardContent>
				</Card>
			</Container>
		</div>
	)
}
