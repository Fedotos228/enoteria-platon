'use client'

import useMerchBySlug from '@/hooks/queries/useMerchBySlug'
import { MediaType, imageStrapUrl } from '@/lib/utils'
import Image from 'next/image'
import Loader from '../elements/Loader'
import ProductGallery from '../elements/ProductGallery'
import { Card } from '../ui/card'
import MerchSingleDetails from '../blocks/MerchSingleDetails'

export default function MerchSingle({ slug }: { slug: string }) {
  const { data: merch, isLoading } = useMerchBySlug(slug)
  if (isLoading) return <Loader loading={isLoading} />


  const { title, gallery, price_mdl, discount, thumbnail, colors, sizes } = merch

  console.log(merch)

  return (
    <Card className='p-4'>
      <div className='grid grid-cols-2 gap-4'>
        {gallery.data !== null ? (
          <ProductGallery gallery={gallery.data} />
        ) : (
          thumbnail && (
            <Image
              src={imageStrapUrl(thumbnail, MediaType.Single)}
              alt={title}
              width={580}
              height={590}
            />
          )
        )}
        <MerchSingleDetails title={title} price={price_mdl} discount={discount} colors={colors} sizes={sizes} />
      </div>
    </Card>
  )
}