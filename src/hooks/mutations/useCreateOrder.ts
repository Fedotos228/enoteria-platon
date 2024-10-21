import { CheckoutFormSchemaType } from '@/components/forms/schemas/CheckoutFormSchema'
import { ordersService } from '@/services/orders/orders.service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export default function useCreateOrder() {
  return useMutation({
    mutationKey: ['createOrder'],
    mutationFn: (order: CheckoutFormSchemaType) => ordersService.createOrder(order),
    onSuccess() {
      toast.success("Comanda a fost plasată cu succes!", {
        position: "top-center",
      })
    },
    onError(error) {
      toast.error(`Comanda a putut fi trimisă - ${error.message}`, {
        position: "top-center",
      })
    }
  })

}
