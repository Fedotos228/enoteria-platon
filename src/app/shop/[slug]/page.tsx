'use client'

import Introduction from '@/components/blocks/Introduction'
import ProductSingle from '@/components/blocks/ProductSingle'
import Container from '@/components/layout/Container'
import { ProductSiglePageProps } from './layout'

export default function ProductSiglePage({ params }: ProductSiglePageProps) {
	const title = params.slug
		.replace(/-/g, ' ')
		.split(' ')
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')

	let content = {
		title: title,
		background: {
			data: null
		}
	}


	return (
		<Container>
			<Introduction content={content} />
			<ProductSingle slug={params.slug} />
		</Container>
	)
}
