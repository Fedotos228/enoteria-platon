import { fetchGenerateParams } from '@/lib/fetchGenerateParams'
import { fetchSlugForMeta } from '@/lib/fetchSlugForMeta'
import { IParamsWithLocale, IParamsWithSlug } from '@/types/strapi.types'
import { Metadata, ResolvingMetadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { PropsWithChildren } from 'react'

export async function generateMetadata(
  { params }: IParamsWithSlug,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const { data } = await fetchSlugForMeta('news', slug)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: data.attributes.title,
    // openGraph: {
    // 	images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export async function generateStaticParams() {
  const { data } = await fetchGenerateParams('news')

  return data.map((aricle: any) => ({
    slug: aricle.attributes.slug,
  }))
}

export default function SingleArticleLayout({ children, params: {locale} }: PropsWithChildren<IParamsWithLocale>) {
  unstable_setRequestLocale(locale);
  return children
}
