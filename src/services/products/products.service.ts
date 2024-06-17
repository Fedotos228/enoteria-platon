import { instance } from '../api/axios'
import { productSlugQuery } from './product.qs'

class ProductsService {
  async getProducts() {
    return ''
  }
  async getProductsBySlug(slug: string) {
    return instance.get(`/products/${slug}`)
  }
  async getProductsByFetch() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products?${productSlugQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
      }
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res.json()
  }
  async getProductBySlug(slug: string) {
    return instance.get(`/products/${slug}`)
  }
}

export const productsService = new ProductsService()