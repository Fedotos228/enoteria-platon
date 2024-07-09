import { productsService } from '@/services/products/products.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => await productsService.getProducts(),
    select: (data) => data.data.data
  })
}