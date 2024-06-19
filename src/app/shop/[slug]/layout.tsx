import { productsService } from '@/services/products/products.service'
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
  const { data } = await productsService.getProductBySlugFetch(slug)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: data.attributes.title,
    // openGraph: {
    // 	images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export async function generateStaticParams() {
  const { data } = await productsService.getProductsByFetch()

  return data.map((product: any) => ({
    slug: product.attributes.slug,
  }))
}

export default function SingleProductLayout({ children }: PropsWithChildren<unknown>) {
  return children
}
