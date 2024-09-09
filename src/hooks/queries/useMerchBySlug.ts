'use client'

import { merchService } from '@/services/merch/merch.service'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

export default function useMerchBySlug(slug: string) {
  const locale = useLocale()

  return useQuery({
    queryKey: ['merch', slug],
    queryFn: () => merchService.getMerchBySlug(slug, locale),
    select: (data) => data.data.data.attributes
  })
}
