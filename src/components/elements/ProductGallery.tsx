'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { MediaType, imageStrapUrl } from '@/lib/utils'
import Image from 'next/image'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

type ProductGalleryProps = {
  gallery: any
}

export default function ProductGallery({ gallery }: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <div className='max-w-xl'>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : undefined
        }}
        modules={[FreeMode, Navigation, Thumbs]}

        className="w-full !ml-0 !mr-0 mb-3"
      >
        {gallery?.map((image: any) => (
          <SwiperSlide key={image.id} className='rounded-[6px]'>
            <Image
              src={imageStrapUrl(image, MediaType.Multiple)}
              alt={image.attributes.url}
              width={580}
              height={475}
              className='rounded-[6px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5.5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full"
      >
        {gallery?.map((image: any) => (
          <SwiperSlide key={image.id} className='rounded-[6px]'>
            <Image
              src={imageStrapUrl(image, MediaType.Multiple)}
              alt={image.id}
              width={95}
              height={95}
              className='rounded-[6px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
