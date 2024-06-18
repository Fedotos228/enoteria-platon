'use client'

import useProductBySlug from '@/hooks/queries/useProductBySlug'
import { MediaType, imageStrapUrl } from '@/lib/utils'
import Image from 'next/image'
import Loader from '../elements/Loader'
import ProductGallery from '../elements/ProductGallery'
import ProductSingleDetails from './ProductSingleDetails'

export default function ProductSingle({
  slug
}: {
  slug: string
}) {
  const { data: product, isLoading } = useProductBySlug(slug)
  if (isLoading) return <Loader loading={isLoading} />

  const { title, gallery, thumbnail, subcategories, description, price_mdl } = product?.attributes

  return (
    <div className='grid grid-cols-2'>
      {
        gallery
          ?
          <ProductGallery gallery={gallery.data} />
          :
          (
            thumbnail && <Image
              src={imageStrapUrl(thumbnail, MediaType.Single)}
              alt={title}
              width={580}
              height={590}
            />
          )
      }
      <ProductSingleDetails
        title={title}
        price={price_mdl}
        description={description}
        subcategories={subcategories}
      />
    </div>
  )
}