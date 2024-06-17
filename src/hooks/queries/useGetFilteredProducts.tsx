import { productsService } from '@/services/products/products.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetFilteredProducts(filter: string[]) {
  return useQuery({
    queryKey: ['filteredProducts', filter],
    queryFn: () => productsService.getProductsByCategory(filter),
    select: data => data.data.data
  })
}
