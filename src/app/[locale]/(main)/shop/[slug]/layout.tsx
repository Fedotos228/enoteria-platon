import { fetchGenerateParams } from '@/lib/fetchGenerateParams'
import { fetchSlugForMeta } from '@/lib/fetchSlugForMeta'
import { MediaType, imageStrapUrl } from '@/lib/utils'
import { Metadata, ResolvingMetadata } from 'next'
import type { PropsWithChildren } from 'react'

export type ProductSiglePageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: ProductSiglePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const { data } = await fetchSlugForMeta('products', slug)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: data.attributes.title,
    description: data.attributes.description,
    openGraph: {
      images: [imageStrapUrl(data.attributes.thumbnail, MediaType.Single), ...previousImages],
    },
  }
}

export async function generateStaticParams() {
  const { data } = await fetchGenerateParams('products')

  return data.map((product: any) => ({
    slug: product.attributes.slug,
  }))
}

export default function SingleProductLayout({ children }: PropsWithChildren<unknown>) {
  return children
}
