import { newsService } from '@/services/news/news.service'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

export default function useGetArticleBySlug(slug: string) {
  const locale = useLocale()
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => newsService.getNewsBySlug(slug, locale),
    select: data => data.data.data
  })
}
