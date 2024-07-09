"use client"

import Introduction from "@/components/blocks/Introduction"
import Container from "@/components/layout/Container"
import ProductSingle from "@/components/single/ProductSingle"
import { ProductSiglePageProps } from "./layout"

export default function ProductSiglePage({ params }: ProductSiglePageProps) {
  const title = params.slug
    .replace(/-/g, " ")
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  let content = {
    title: title,
    background: {
      data: null,
    },
  }

  return (
    <>
      <Introduction content={content} />
      <Container>
        <ProductSingle slug={params.slug} />
      </Container>
    </>
  )
}
