import { formatMDLPrice } from '@/lib/utils'
import { ShoppingCart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import CartProduct from '../cards/CartProduct'
import { Button } from '../ui/button'

export default function Cart() {
	const [cartOpen, setCartOpen] = useState<boolean>(false)

	const toggleCart = () => {
		setCartOpen(!cartOpen)
	}

	useEffect(() => {
		if (cartOpen) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}
	}, [cartOpen])

	return (
		<div className=''>
			<Button
				className='text-background hover:bg-accent/10 hover:text-accent'
				variant='ghost'
				size='icon'
				onClick={toggleCart}
			>
				<ShoppingCart />
			</Button>

			<>
				<div
					onClick={toggleCart}
					className={`fixed inset-0 backdrop-blur-md transition-all z-30 duration-300 bg-opacity-75 ${
						cartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
					}`}
				></div>

				<div
					className={`pointer-events-none transition-all duration-300 fixed z-50 inset-y-0 flex max-w-full xs:max-w-lg bg-background ${
						cartOpen ? 'right-0' : '-right-full xs:-right-[512px]'
					}`}
				>
					<div className='pointer-events-auto w-full flex h-full flex-col overflow-y-scroll shadow-xl'>
						<div className='flex-1 overflow-y-auto p-4 sm:px-6'>
							<div className='flex items-center justify-between'>
								<h2 className='text-lg font-medium text-gray-900'>
									Coşul
								</h2>
								<Button
									variant='ghost'
									size='icon'
									onClick={toggleCart}
								>
									<span className='sr-only'>Close panel</span>

									<X />
								</Button>
							</div>

							<div className='mt-8'>
								<div className='flow-root'>
									<ul
										role='list'
										className='-my-6 divide-y divide-gray-200'
									>
										<CartProduct />
									</ul>
								</div>
							</div>
						</div>

						<div className='border-t p-4 sm:px-6'>
							<div className='flex justify-between font-medium'>
								<p>Subtotal</p>
								<p>{formatMDLPrice(2452)}</p>
								{/* <p>{formatRONPrice(2452)}</p> */}
							</div>
							<p className='mt-0.5 text-sm text-muted-foreground'>
								Transportul și taxele calculate la finalizarea
							</p>
							<Button className='w-full px-6 mt-5 py-3 h-fit text-base !text-bordo-foreground font-medium'>
								Finalizează comanda
							</Button>

							<Button
								variant='link'
								onClick={toggleCart}
								className='!text-bordo mt-3 w-full'
							>
								Continuă cumpărăturile
								<span aria-hidden='true'> &rarr;</span>
							</Button>
						</div>
					</div>
				</div>
			</>
		</div>
	)
}
