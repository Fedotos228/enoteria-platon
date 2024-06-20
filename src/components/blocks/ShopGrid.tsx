'use client'

import useGetFilteredProducts from '@/hooks/queries/useGetFilteredProducts'
import { IPagination } from '@/types/strapi.types'
import ProductCard from '../cards/ProductCard'
import PaginationComponent from '../elements/PaginationComponent'
import { Skeleton } from '../ui/skeleton'

export default function ShopGrid() {
	const { data, isLoading, isFetched } = useGetFilteredProducts()
	const pagination: IPagination = data?.meta?.pagination
	const productsData = data?.data

	const loading = isLoading || !isFetched

	const loadingSkeleton = (
		<div className='grid grid-cols-3 gap-5'>
			{
				Array.from({ length: 6 }).map((_, i) => (
					<Skeleton key={i} className='h-[400px] w-full' />
				))
			}
		</div>
	)

	const productsMap = (
		<div className='grid grid-cols-3 gap-5'>
			{
				productsData?.map((product: any) => (
					<ProductCard
						key={product.attributes.slug}
						product={product}
					/>
				))
			}
		</div>
	)

	const productsNotFound = (
		<h1>Nu am găsit niciun produs</h1>
	)

	let content

	if (productsData?.length === 0) {
		content = productsNotFound
	} else if (loading) {
		content = loadingSkeleton
	} else {
		content = productsMap
	}

	return (
		<section>
			<div className='flex items-center justify-between gap-3 mb-8'>
				<div className='flex items-center gap-4'>
					<h5 className='cursor-pointer'>Vinuri</h5>
					<span>|</span>
					<h5 className='opacity-40 cursor-pointer'>Merchandise</h5>
				</div>
				<p>Afișez {pagination?.total} din {pagination?.pageSize} de produse</p>
			</div>

			<>
				{content}
			</>

			{content !== productsNotFound && (
				<PaginationComponent />
			)}
		</section>
	)
}
