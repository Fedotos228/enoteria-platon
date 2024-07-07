import { CheckoutFormSchemaType } from '@/components/forms/schemas/CheckoutFormSchema'
import { errorCatch } from '@/services/api/api.helper'
import { ordersService } from '@/services/orders/orders.service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export default function useCreateOrder() {
  return useMutation({
    mutationKey: ['createOrder'],
    mutationFn: (order: CheckoutFormSchemaType) => ordersService.createOrder(order),
    onSuccess(data) {
      console.log(data)
      toast.success("Comanda a fost plasată cu succes!", {
        position: "top-center",
      })
    },
    onError(error) {
      toast.error(`A apărut o eroare la plasarea comenzii! ${errorCatch(error)}`, {
        position: "top-center",
      })
    }
  })
}
