"use client"

import Introduction from "@/components/blocks/Introduction"
import MerchGrid from '@/components/blocks/MerchGrid'
import MerchShopGrid from '@/components/blocks/MerchShopGrid'
import ShopGrid from "@/components/blocks/ShopGrid"
import ProductCard from '@/components/cards/ProductCard'
import Container from "@/components/layout/Container"
import { blocksService } from "@/services/blocks/blocks.service"
import { useQuery } from "@tanstack/react-query"

export default function MerchPage() {
  const { data } = useQuery({
    queryKey: ["shop"],
    queryFn: () => blocksService.getPage("merch"),
    select: (data) => data.data.data.attributes,
  })

  return (
    <>
      <Introduction content={data?.introdunction} />
      <Container>
        <div className="mb-20 mt-10">
          <MerchShopGrid />
        </div>
      </Container>
    </>
  )
}
