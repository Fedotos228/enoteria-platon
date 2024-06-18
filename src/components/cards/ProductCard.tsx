import { CirclePercent } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Card, CardFooter } from '../ui/card'

const backgroundImage = {
	backgroundImage: 'url(/images/bg.png)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	overflow: 'hidden',
}

export default function ProductCard({ product }: any) {
	const { title, price_mdl, thumbnail, discount, slug } = product.attributes

	const price = discount
		? price_mdl - (price_mdl * discount) / 100
		: price_mdl

	return (
		<Card className='shadow hover:scale-[1.02] transition-transform duration-300 relative'>
			<div
				style={backgroundImage}
				className='relative flex items-center justify-center w-full h-[280px] rounded-t-lg'
			>
				<Image
					src={
						process.env.NEXT_PUBLIC_BASE_URL +
						thumbnail?.data?.attributes?.url
					}
					alt={title}
					width={320}
					height={350}
				/>
				{discount && (
					<div className='absolute bottom-2 left-2 flex items-center gap-1 bg-red-500/70 px-2 py-1 rounded-md'>
						<CirclePercent color='white' opacity='70' />
						<p className='text-white text-sm'>
							{discount}% reducere
						</p>
					</div>
				)}
			</div>
			<Link
				href={`shop/${slug}`}
				className='after:absolute after:inset-0'
			>
				<h6 className='m-4'>{title}</h6>
			</Link>
			<CardFooter className='justify-between'>
				<div className='flex gap-1 font-semibold'>
					{price_mdl && (
						<>
							{discount && (
								<p className='text-bordo'>{price} lei</p>
							)}

							<p
								className={`${
									discount && 'line-through opacity-50 '
								}`}
							>
								{discount ? price_mdl : price} lei
							</p>
						</>
					)}
				</div>
				{price_mdl ? (
					<Button>Adaugă</Button>
				) : (
					<Button>Află prețul</Button>
				)}
				{/* <Button className='bg-green-700'>Adaugat (5)</Button> */}
			</CardFooter>
		</Card>
	)
}
