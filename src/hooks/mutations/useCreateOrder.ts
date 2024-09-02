import { CheckoutFormSchemaType } from '@/components/forms/schemas/CheckoutFormSchema'
import { ordersService } from '@/services/orders/orders.service'
import { useMutation } from '@tanstack/react-query'

export default function useCreateOrder() {
  return useMutation({
    mutationKey: ['createOrder'],
    mutationFn: (order: CheckoutFormSchemaType) => ordersService.createOrder(order),
  })
}
