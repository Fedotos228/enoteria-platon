'use client'

import useGetFilteredProducts from '@/hooks/queries/useGetFilteredProducts'
import { useAppSelector } from '@/store/store'
import ProductCard from '../cards/ProductCard'

export default function ShopGrid() {
  const filter = useAppSelector(state => state.filter.subcategory)
  const { data } = useGetFilteredProducts(filter)

  return (
    <div>
      <p className='mb-8'>{data?.length ? data.length : 0} de produse</p>
      <div className='grid grid-cols-3 gap-5'>
        {data?.map((product: any) => (
          <ProductCard key={product.attributes.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
