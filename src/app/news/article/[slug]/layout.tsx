import { newsService } from '@/services/news/news.service'
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
  const { data } = await newsService.getNewsBySlug(slug)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: data.data.attributes.title,
    // openGraph: {
    // 	images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export async function generateStaticParams() {
  const { data } = await newsService.getOnlySlugAnTitleNews()

  return data.data.map((product: any) => ({
    slug: product.attributes.slug,
  }))
}

export default function SingleProductLayout({ children }: PropsWithChildren<unknown>) {
  return children
}
