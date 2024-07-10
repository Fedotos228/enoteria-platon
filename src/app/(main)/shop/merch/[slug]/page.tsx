"use client"

import Introduction from "@/components/blocks/Introduction"
import Container from "@/components/layout/Container"
import { ProductSiglePageProps } from "./layout"
import MerchSingle from '@/components/single/MerchSingle'

export default function MerchSiglePage({ params }: ProductSiglePageProps) {
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
        <MerchSingle slug={params.slug} />
      </Container>
    </>
  )
}
