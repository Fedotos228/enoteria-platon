import { instance } from '@/services/api/axios'
import { homeProductQuery } from '@/services/products/product.qs'
import { useQuery } from '@tanstack/react-query'

export default function useGetProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => await instance.get(`/products?${homeProductQuery}`),
    select: (data) => data.data.data
  })
}