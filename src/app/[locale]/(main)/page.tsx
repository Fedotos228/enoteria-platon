"use client"

import About from "@/components/blocks/About"
import Founders from "@/components/blocks/Founders"
import Hero from "@/components/blocks/Hero"
import MerchGrid from "@/components/blocks/MerchGrid"
import NewsGrid from "@/components/blocks/NewsGrid"
import NewsLetter from "@/components/blocks/NewsLetter"
import ProductsGrid from "@/components/blocks/ProductsGrid"
import Loader from "@/components/elements/Loader"
import Container from "@/components/layout/Container"
import { blocksService } from "@/services/blocks/blocks.service"
import { useQuery } from "@tanstack/react-query"
import { useLocale, useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('SectionTitle')
  const locale = useLocale()
  const { data, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: () => blocksService.getPage("home", locale),
    select: (data) => data.data.data.attributes,
  })

  if (isLoading) return <Loader loading={isLoading} />

  return (
    <>
      <Hero content={data?.hero} />
      <Container>
        <About content={data?.simpleBlock} />
        <ProductsGrid />
        <Founders />
        <NewsGrid sectionTitle={t("news")} sectionLink='/news' />
        <NewsLetter />
        <MerchGrid />
      </Container>
    </>
  )
}
