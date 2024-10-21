import { fetchGenerateParams } from '@/lib/fetchGenerateParams'
import { fetchSlugForMeta } from '@/lib/fetchSlugForMeta'
import { IParamsWithLocale, IParamsWithSlug } from '@/types/strapi.types'
import { Metadata, ResolvingMetadata } from 'next'
import { getLocale, unstable_setRequestLocale } from 'next-intl/server'
import type { PropsWithChildren } from 'react'

export async function generateMetadata(
  { params }: IParamsWithSlug,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = await getLocale()
  const slug = params.slug
  const { data } = await fetchSlugForMeta('merchandises', slug, locale)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: data.attributes.title,
    // openGraph: {
    // 	images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export async function generateStaticParams() {
  const { data } = await fetchGenerateParams('merchandises')

  return data.map((product: any) => ({
    slug: product.attributes.slug,
  }))
}

export default function SingleMerchLayout({ children, params: {locale} }: PropsWithChildren<IParamsWithLocale>) {
  unstable_setRequestLocale(locale);
  return children
}
