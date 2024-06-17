'use client'

import useProductBySlug from '@/hooks/queries/useProductBySlug'
import Image from 'next/image'
import ProductGallery from '../elements/ProductGallery'

export default function ProductSingle({
  slug
}: {
  slug: string
}) {
  const { data: product } = useProductBySlug(slug)

  return (
    <div>
      <h1>{product?.title}</h1>
      {product?.gallery ?
        <ProductGallery gallery={product?.gallery} />
        :
        (product?.thumbnail && <Image
          src={product?.thumbnail}
          alt={product?.title}
        />
        )
      }
    </div>
  )
}