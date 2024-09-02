"use client"

import useScreenSize from "@/hooks/useScreenSize"
import { merchService } from "@/services/merch/merch.service"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from 'next-intl'
import { useEffect, useState } from "react"
import ProductCard from "../cards/ProductCard"
import Grid from "../elements/Grid"
import Loader from "../elements/Loader"
import SectionHeader from "../elements/SectionHeader"

interface IMerchGrid {
  gridSize: number
  merchNumber: number
}

export default function MerchGrid() {
  const t = useTranslations()
  const [merchGrid, setMerchGrid] = useState<IMerchGrid>({
    gridSize: 4,
    merchNumber: 4,
  })
  const { data: merch, isLoading } = useQuery({
    queryKey: ["merch"],
    queryFn: () => merchService.getHomeMerch(),
    select: (data) => data.data.data,
  })
  const { width } = useScreenSize()

  useEffect(() => {
    if (width > 992) {
      setMerchGrid({
        gridSize: 4,
        merchNumber: 4,
      })
    }

    if (width < 992) {
      setMerchGrid({
        gridSize: 3,
        merchNumber: 3,
      })
    }

    if (width < 768) {
      setMerchGrid({
        gridSize: 2,
        merchNumber: 4,
      })
    }

    if (width < 430) {
      setMerchGrid({
        gridSize: 1,
        merchNumber: 4,
      })
    }
  }, [width])

  if (isLoading) return <Loader loading={isLoading} />

  return (
    <section>
      <SectionHeader title={t("SectionTitle.merch")} link="/" />
      <Grid gridSize={merchGrid.gridSize}>
        {merch
          ?.slice(0, merchGrid.merchNumber)
          .map((merch: any) => (
            <ProductCard
              key={merch.attributes.slug}
              product={merch}
              type="merch"
            />
          ))}
      </Grid>
    </section>
  )
}
