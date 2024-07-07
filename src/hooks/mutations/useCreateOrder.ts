import { CheckoutFormSchemaType } from '@/components/forms/schemas/CheckoutFormSchema'
import { errorCatch } from '@/services/api/api.helper'
import { ordersService } from '@/services/orders/orders.service'
import { useMutation } from '@tanstack/react-query'

export default function useCreateOrder() {
  return useMutation({
    mutationKey: ['createOrder'],
    mutationFn: (order: CheckoutFormSchemaType) => ordersService.createOrder(order),
    onSuccess(data) {
      console.log(data)
    },
    onError(error) {
      alert(errorCatch(error))
    }
  })
}
