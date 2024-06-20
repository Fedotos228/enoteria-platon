import { productsService } from '@/services/products/products.service'
import { useAppSelector } from '@/store/store'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export default function useGetFilteredProducts() {
  const filter = useAppSelector(state => state.filter.subcategory)

  return useQuery({
    queryKey: ['filteredProducts', filter],
    queryFn: () => productsService.getProductsByCategory(filter),
    select: data => data.data,
    placeholderData: keepPreviousData,
  })
}
