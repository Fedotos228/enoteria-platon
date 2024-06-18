import Banner from '@/components/blocks/Banner'
import FilterSidebar from '@/components/blocks/FilterSidebar'
import ShopGrid from '@/components/blocks/ShopGrid'
import Container from '@/components/layout/Container'

export default function ShopPage() {
	return (
		<Container>
			<Banner title='Magazin online' />
			<div className='shop-grid mb-20'>
				<FilterSidebar />
				<ShopGrid />
			</div>
		</Container>
	)
}
