"use client"

import Introduction from "@/components/blocks/Introduction"
import Container from "@/components/layout/Container"
import MerchSingle from '@/components/single/MerchSingle'
import { IParamsWithSlug } from '@/types/strapi.types'

export default function MerchSiglePage({ params }: IParamsWithSlug) {
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
