import { crmInstance } from '../api/axios'

class CRMService {
  async getDeliveryMethods() {
    return await crmInstance.get('/delivery-methods')
  }
  async getPaymentMethods(company_id: number) {
    return await crmInstance.get('/payment-methods', {
      params: {
        company_id
      }
    })
  }
}

export const crmService = new CRMService()