'use client'

import { newsService } from '@/services/news/news.service'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

export default function useGetNews() {
  const locale = useLocale()
  return useQuery({
    queryKey: ['news'],
    queryFn: () => newsService.getNews(locale),
    select: data => data.data
  })
}
