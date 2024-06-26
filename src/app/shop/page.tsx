'use client'

import FilterSidebar from '@/components/blocks/FilterSidebar'
import Introduction from '@/components/blocks/Introduction'
import ShopGrid from '@/components/blocks/ShopGrid'
import Container from '@/components/layout/Container'
import { blocksService } from '@/services/blocks/blocks.service'
import { useQuery } from '@tanstack/react-query'

export default function ShopPage() {
	const { data } = useQuery({
		queryKey: ['shop'],
		queryFn: () => blocksService.getPage('shop'),
		select: data => data.data.data.attributes
	})

	return (
		<>
			<Introduction content={data?.introdunction} />
			<Container>
				<div className='shop-grid mb-20'>
					<FilterSidebar />
					<ShopGrid />
				</div>
			</Container>
		</>
	)
}
