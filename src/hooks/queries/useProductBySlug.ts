import { productsService } from '@/services/products/products.service'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

export default function useProductBySlug(slug: string) {
  const locale = useLocale()

  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => productsService.getProductBySlug(slug, locale),
    select: (data) => data.data.data
  })
}
