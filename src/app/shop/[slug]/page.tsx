import Banner from '@/components/blocks/Banner'
import ProductSingle from '@/components/blocks/ProductSingle'
import Container from '@/components/layout/Container'
import { productsService } from '@/services/products/products.service'

export type ProductSiglePageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const { data } = await productsService.getProductsByFetch()

  return data.map((product: any) => ({
    slug: product.attributes.slug,
  }))
}

export default function ProductSiglePage({ params }: ProductSiglePageProps) {
  const title = params.slug.replace(/-/g, ' ').split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <Container>
      <Banner title={title} />
      <ProductSingle slug={params.slug} />
    </Container>
  )
}
