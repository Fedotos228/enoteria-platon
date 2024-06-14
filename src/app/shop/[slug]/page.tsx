import Banner from '@/components/blocks/Banner'
import ProductSingle from '@/components/blocks/ProductSingle'
import Container from '@/components/layout/Container'
import { products } from '@/constants/data'
import { IProduct } from '@/types/data.types'

export type ProductSiglePageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const data: IProduct[] = await Promise.resolve(products)

  return data.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductSiglePage({ params }: ProductSiglePageProps) {
  const product = products.find((product) => product.slug === params.slug)

  return (
    <Container>
      <Banner title={product?.title} />
      <ProductSingle slug={params.slug} />
    </Container>
  )
}