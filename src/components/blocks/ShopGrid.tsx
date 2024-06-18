'use client'

import useGetFilteredProducts from '@/hooks/queries/useGetFilteredProducts'
import { useAppSelector } from '@/store/store'
import ProductCard from '../cards/ProductCard'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '../ui/pagination'

export default function ShopGrid() {
	const filter = useAppSelector(state => state.filter.subcategory)
	const { data } = useGetFilteredProducts(filter)

	return (
		<div>
			<div className='flex items-center justify-between gap-3 mb-8'>
				<div className='flex items-center gap-4'>
					<h5 className='cursor-pointer'>Vinuri</h5>
					<span>|</span>
					<h5 className='opacity-40 cursor-pointer'>Merchandise</h5>
				</div>
				<p>Afișez {data?.length ? data.length : 0} din 35 de produse</p>
			</div>
			<div className='grid grid-cols-3 gap-5'>
				{data?.map((product: any) => (
					<ProductCard
						key={product.attributes.slug}
						product={product}
					/>
				))}
			</div>

			<div className='mt-20'>
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href='#' />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink isActive href='#'>
								1
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href='#'>2</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href='#'>3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href='#'>4</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href='#' />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	)
}
