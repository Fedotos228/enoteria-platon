import FilterSidebar from '@/components/blocks/FilterSidebar'
import Introduction from '@/components/blocks/Introduction'
import ShopGrid from '@/components/blocks/ShopGrid'
import Container from '@/components/layout/Container'

export default function ShopPage() {
  return (
    <Container>
      <Introduction background='/images/Banner.png' title='Magazin online' />
      <div className='shop-grid'>
        <FilterSidebar />
        <ShopGrid />
      </div>
    </Container>
  )
}
