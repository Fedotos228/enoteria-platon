import { products } from '@/constants/data'
import Image from 'next/image'
import ProductGallery from '../elements/ProductGallery'

export default function ProductSingle({
  slug
}: {
  slug: string
}) {
  const product = products.find(product => product.slug === slug)

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