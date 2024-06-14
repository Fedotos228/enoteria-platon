import { products } from '@/constants/data'
import ProductCard from '../cards/ProductCard'

export default function ShopGrid() {
  return (
    <div>
      <p className='mb-8'>{products.length} de produse</p>
      <div className='grid grid-cols-3 gap-5'>
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </div>
  )
}
