import { newsService } from '@/services/news/news.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetArticleBySlug(slug: string) {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => newsService.getNewsBySlug(slug),
    select: data => data.data.data
  })
}
