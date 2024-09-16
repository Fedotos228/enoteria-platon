import { crmService } from '@/services/crm/crm.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetDelivery() {
  return useQuery({
    queryKey: ['delivery'],
    queryFn: () => crmService.getDeliveryMethods(),
    select: (data) => data.data,
  })
} 