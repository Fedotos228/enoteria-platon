import { Button } from '@/components/ui/button'
import { IProduct } from '@/types/data.types'
import { CirclePercent } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardFooter } from '../ui/card'

const backgroundImage = {
	backgroundImage: 'url(/images/bg.png)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	overflow: 'hidden',
}

export default function ProductCard({
	slug,
	thumbnail,
	title,
	price,
	discount,
}: IProduct) {
	let discountPrice

	if (discount) {
		discountPrice = price - (price * discount) / 100
	}

	return (
		<Card className='shadow-xl hover:scale-105 transition-transform duration-300 relative'>
			<div
				style={backgroundImage}
				className='relative flex items-center justify-center w-full h-[280px] rounded-t-lg'
			>
				<Image src={thumbnail} alt={title} width={220} height={250} />
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
					{discount && (
						<p className='text-button'>{discountPrice} lei</p>
					)}
					<p className={`${discount && 'line-through opacity-50 '}`}>
						{price} lei
					</p>
				</div>
				<Button>Adaugă</Button>
			</CardFooter>
		</Card>
	)
}
