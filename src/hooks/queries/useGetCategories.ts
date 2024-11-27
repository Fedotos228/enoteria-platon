import { categoriesService } from '@/services/categories/categories.service'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

export default function useGetCategories() {
  const locale = useLocale()

  return useQuery({
    queryKey: ['categories'],
    queryFn: () => categoriesService.getCategories(locale),
    select: data => data.data.data
  })
}
