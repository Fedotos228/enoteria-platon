import { categoriesService } from '@/services/categories/categories.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => categoriesService.getCategories(),
    select: data => data.data.data
  })
}
