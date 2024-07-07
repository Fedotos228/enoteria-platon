import { CheckoutFormSchemaType } from '@/components/forms/schemas/CheckoutFormSchema'
import { instance } from '../api/axios'

class OrdersService {
  async createOrder(order: CheckoutFormSchemaType) {
    return instance.post('/orders', {
      data: {
        ...order
      }
    })
  }
}

export const ordersService = new OrdersService()