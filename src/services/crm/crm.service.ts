import { crmInstance } from '../api/axios'

class CRMService {
  async getDeliveryMethods() {
    return await crmInstance({
      url: '/delivery-methods',
      method: 'GET'
    })
  }
  async getPaymentMethods(company_id: number) {
    return await crmInstance({
      url: '/payment-methods',
      method: 'GET',
      params: {
        company_id
      }
    })
  }
}

export const crmService = new CRMService()