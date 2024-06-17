import { productsService } from '@/services/products/products.service'
import { useQuery } from '@tanstack/react-query'

export default function useProductBySlug(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => productsService.getProductBySlug(slug),
    select: (data) => data.data
  })
}
