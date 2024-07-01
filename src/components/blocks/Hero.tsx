import { Damion } from 'next/font/google'
import Link from 'next/link'
import { Button } from '../ui/button'

const heroBackground = {
	backgroundImage: 'url(/images/hero.png)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
}

const damion = Damion({
	weight: '400',
	subsets: ['latin']
})

export default function Hero() {
	return (
		<div
			style={heroBackground}
			className='flex items-center justify-center h-screen w-full'
		>
			<div className='flex flex-col gap-8'>
				<h1 className={`${damion.className} text-4xl text-white text-center leading-[160%]`}>
					A traditional winery & vineyard, <br />
					enjoy the experience
				</h1>

				<Button className='text-base w-fit mx-auto' size='lg'>
					<Link href='/shop'>
						Vinurile noastre
					</Link>
				</Button>
			</div>
		</div>
	)
}
