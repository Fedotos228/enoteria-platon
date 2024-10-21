import { crmService } from '@/services/crm/crm.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetPayments() {
  return useQuery({
    queryKey: ['payments'],
    queryFn: () => crmService.getPaymentMethods(7),
    select: (data) => data.data,
  })
}