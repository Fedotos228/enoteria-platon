import { productsService } from '@/services/products/products.service'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

export default function useGetProducts() {
  const locale = useLocale()
  
  return useQuery({
    queryKey: ['products'],
    queryFn: () => productsService.getProducts(locale),
    select: (data) => data.data.data
  })
}