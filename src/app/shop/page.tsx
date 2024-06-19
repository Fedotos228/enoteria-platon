import FilterSidebar from '@/components/blocks/FilterSidebar'
import Introduction from '@/components/blocks/Introduction'
import ShopGrid from '@/components/blocks/ShopGrid'
import IntroductionTitle from '@/components/elements/IntroductionTitle'
import Container from '@/components/layout/Container'

export default function ShopPage() {
	return (
		<Container>
			<Introduction>
				<IntroductionTitle>Magazin online</IntroductionTitle>
			</Introduction>
			<div className='shop-grid mb-20'>
				<FilterSidebar />
				<ShopGrid />
			</div>
		</Container>
	)
}
