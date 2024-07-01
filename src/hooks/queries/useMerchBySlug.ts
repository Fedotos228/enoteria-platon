'use client'

import { merchService } from '@/services/merch/merch.service'
import { useQuery } from '@tanstack/react-query'

export default function useMerchBySlug(slug: string) {
  return useQuery({
    queryKey: ['merch', slug],
    queryFn: () => merchService.getMerchBySlug(slug),
    select: (data) => data.data.data.attributes
  })
}
