'use client'

import useGetProducts from '@/hooks/queries/useGetProducts'
import ProductCard from '../cards/ProductCard'
import Grid from '../elements/Grid'
import SectionHeader from '../elements/SectionHeader'

export default function ProductsGrid() {
	const { data } = useGetProducts()

	return (
		data &&
		data.length && (
			<section>
				<SectionHeader title='Vinurile noastre' link='/shop' />

				<Grid>
					{data?.slice(0, 4).map((product: any) => (
						<ProductCard
							key={product.attributes.slug}
							product={product}
						/>
					))}
				</Grid>
			</section>
		)
	)
}
