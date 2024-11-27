"use client"

import Container from "@/components/layout/Container"
import ProductSingle from "@/components/single/ProductSingle"
import { IParamsWithSlug } from '@/types/strapi.types'

export default function ProductSiglePage({ params }: IParamsWithSlug) {
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

  console.log(content)

  return (
    <>
      {/* <Introduction content={content} /> */}
      <Container>
        <ProductSingle slug={params.slug} />
      </Container>
    </>
  )
}
