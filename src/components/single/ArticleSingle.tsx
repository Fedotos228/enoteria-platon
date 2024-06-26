'use client'

import BlockRendererClient from '@/components/blocks/BlockRendererClient'
import { Card } from '@/components/ui/card'
import useGetArticleBySlug from '@/hooks/queries/useGetArticleBySlug'
import { MediaType, imageStrapUrl } from '@/lib/utils'
import Image from 'next/image'

type ArticleSingleProps = {
  params: {
    slug: string
  }
}

export default function ArticleSingle({ slug }: { slug: string }) {
  const { data } = useGetArticleBySlug(slug)
  const dateObj = new Date(data?.attributes?.publishedAt)

  const day = String(dateObj.getUTCDate()).padStart(2, '0')
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0')
  const year = dateObj.getUTCFullYear()

  const formattedDate = `${day}.${month}.${year}`

  console.log(data)

  return (
    <Card className='mt-7 p-3'>
      <h2 className='max-w-full'>{data?.attributes?.title}</h2>
      <time className='block text-gray-500 my-5' dateTime={formattedDate}>{formattedDate}</time>
      {
        data?.attributes?.image && <Image
          src={imageStrapUrl(data?.attributes?.image, MediaType.Single)}
          alt={data?.attributes?.slug}
          width={800}
          height={400}
          className='mx-auto mb-8 h-96 object-cover rounded-lg'
        />
      }
      {
        data?.attributes?.body && <BlockRendererClient
          content={data?.attributes?.body}
        />
      }
    </Card>
  )
}
