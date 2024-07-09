'use client'

import { newsService } from '@/services/news/news.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: () => newsService.getNews(),
    select: data => data.data
  })
}
