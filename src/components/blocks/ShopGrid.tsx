'use client'

import useGetProducts from '@/hooks/queries/useGetProducts'
import ProductCard from '../cards/ProductCard'

export default function ShopGrid() {
  const { data } = useGetProducts()

  return (
    <div>
      <p className='mb-8'>{data.length} de produse</p>
      <div className='grid grid-cols-3 gap-5'>
        {data?.map((product: any) => (
          <ProductCard key={product.attributes.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
