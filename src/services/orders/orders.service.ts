import { CheckoutFormSchemaType } from '@/components/forms/schemas/CheckoutFormSchema'
import { instance, loginInstance } from '../api/axios'
import { ordersQuery } from './orders.qs'

class OrdersService {
  async createOrder(order: CheckoutFormSchemaType) {
    return instance.post('/orders', {
      data: {
        ...order
      }
    })
  }
  async getOrders() {
    return loginInstance.get(`/orders?${ordersQuery}`)
  }
  async getOrderById(id: number) {
    return loginInstance.get(`/orders/${id}?populate=deep`)
  } 
}

export const ordersService = new OrdersService()