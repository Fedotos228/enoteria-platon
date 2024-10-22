import { CheckoutFormSchemaType } from '@/components/forms/schemas/CheckoutFormSchema'
import { ordersService } from '@/services/orders/orders.service'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

export default function useCreateOrder() {
  const t = useTranslations("Toast.Checkout")

  return useMutation({
    mutationKey: ['createOrder'],
    mutationFn: (order: CheckoutFormSchemaType) => ordersService.createOrder(order),
    onSuccess() {
      toast.success(t('success'), {
        position: "top-center",
      })
    },
    onError(error) {
      toast.error(`${t('error')} - ${error.message}`, {
        position: "top-center",
      })
    }
  })

}
