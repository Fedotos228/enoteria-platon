import { contacts, NAVIGATION_ITEMS } from '@/constants/navigation'
import Image from 'next/image'
import FooterColumn from '../elements/FooterColumn'
import Socials from '../elements/Socials'
import Container from './Container'

export default function Footer() {
	return (
		<footer className='bg-[#222024] sm:pt-14 mt-5'>
			<Container>
				<div className='flex items-start justify-between'>
					<div className='flex flex-col justify-between gap-5'>
						<Image
							src={'/logos/logoWhite.svg'}
							alt='logo'
							width={174}
							height={32}
						/>
						<Socials />
					</div>
					<div className='flex gap-14'>
						<FooterColumn
							title='Navigatie'
							items={NAVIGATION_ITEMS}
						/>
						<FooterColumn title='Contacte' items={contacts} />
					</div>
				</div>
			</Container>
			<div className='text-gray-300 bg-[#1a181c] text-sm py-4 text-center mt-10'>
				&copy; 2022 Enoteria Platon. Toate drepturile rezervate.
			</div>
		</footer>
	)
}
