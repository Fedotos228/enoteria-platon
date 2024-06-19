'use client'

import useGetProducts from '@/hooks/queries/useGetProducts'
import ProductCard from '../cards/ProductCard'
import Grid from '../elements/Grid'
import SectionHeader from '../elements/SectionHeader'

export default function ProductsGrid({
	products,
	sectionTitle,
	sectionLink,
}: {
	products?: any[]
	sectionTitle?: string
	sectionLink?: string
}) {
	const { data } = useGetProducts()

	return products && products.length ? (
		<section>
			<SectionHeader
				title={sectionTitle || 'Vinurile noastre'}
				link={sectionLink}
			/>

			<Grid>
				{products?.slice(0, 4).map((product: any) => (
					<ProductCard
						key={product.attributes.slug}
						product={product}
					/>
				))}
			</Grid>
		</section>
	) : (
		data && data.length && (
			<section>
				<SectionHeader
					title={sectionTitle || 'Vinurile noastre'}
					link={sectionLink}
				/>

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
