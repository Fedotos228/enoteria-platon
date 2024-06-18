import { formatMDLPrice } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function CartProduct() {
	return (
		<li className='flex py-6 gap-4'>
			<div className='h-20 w-20 xs:h-24 xs:w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
				<Image
					src='https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg'
					alt='Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
					className='h-full w-full object-cover object-center'
					width={80}
					height={80}
				/>
			</div>

			<div className='flex flex-1 flex-col'>
				<div className='flex justify-between gap-2 font-medium'>
					<Link href='#'>Medium Stuff Satchel</Link>
					<p>{formatMDLPrice(1852)}</p>
				</div>
				<p className='mt-1 text-sm text-muted-foreground flex items-center gap-1'>
					<span className='circle rosu'></span> Roșu
				</p>
				<div className='flex flex-1 items-center justify-between text-sm'>
					<div className='flex items-center gap-4'>
						<Button variant='ghost' size='icon'>
							<Minus size={20} />
						</Button>
						<p className='select-none'>2</p>
						<Button variant='ghost' size='icon'>
							<Plus size={20} />
						</Button>
					</div>

					<Button variant='link' className='!text-bordo'>
						Remove
					</Button>
				</div>
			</div>
		</li>
	)
}
