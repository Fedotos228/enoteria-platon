import { products } from '@/constants/data'
import ProductCard from '../cards/ProductCard'
import Grid from '../elements/Grid'
import SectionHeader from '../elements/SectionHeader'

export default function ProductsGrid() {
  return (
    <section>
      <SectionHeader title='Vinurile noastre' link='/' />

      <Grid>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </Grid>
    </section>
  )
}
