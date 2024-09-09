import { productsService } from '@/services/products/products.service'
import { useAppSelector } from '@/store/store'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

export default function useGetFilteredProducts() {
  const filter = useAppSelector(state => state.filter.subcategory)
  const locale = useLocale()

  return useQuery({
    queryKey: ['filteredProducts', filter],
    queryFn: () => productsService.getProductsByCategory(filter, locale),
    select: data => data.data,
    placeholderData: keepPreviousData,
  })
}
