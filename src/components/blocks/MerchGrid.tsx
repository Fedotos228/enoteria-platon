'use client'

import { merchService } from '@/services/merch/merch.service'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../cards/ProductCard'
import Grid from '../elements/Grid'
import Loader from '../elements/Loader'
import SectionHeader from '../elements/SectionHeader'

export default function MerchGrid() {
  const { data: merch, isLoading } = useQuery({
    queryKey: ['merch'],
    queryFn: () => merchService.getHomeMerch(),
    select: data => data.data.data
  })

  if (isLoading) return <Loader loading={isLoading} />

  return (
    <section>
      <SectionHeader title="Merchandiseul" link='/' />
      <Grid>
        {merch?.slice(0, 4).map((merch: any) => (
          <ProductCard key={merch.attributes.slug} product={merch} type='merch' />
        ))}
      </Grid>
    </section>
  )
}
