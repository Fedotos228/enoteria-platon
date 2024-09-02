"use client"

import Introduction from "@/components/blocks/Introduction"
import MerchShopGrid from '@/components/blocks/MerchShopGrid'
import Container from "@/components/layout/Container"
import { blocksService } from "@/services/blocks/blocks.service"
import { useQuery } from "@tanstack/react-query"
import { useLocale } from 'next-intl'

export default function MerchPage() {
  const locale = useLocale()
  const { data } = useQuery({
    queryKey: ["shop"],
    queryFn: () => blocksService.getPage("merch", locale),
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
