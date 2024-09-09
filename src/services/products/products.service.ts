import { instance } from '../api/axios'
import { homeProductQuery, productByCategoryQuery, productBySlugQuery } from './product.qs'

class ProductsService {
  async getProducts() {
    return instance.get(`/products?${homeProductQuery}`)
  }
  async getProductsBySlug(slug: string) {
    return instance.get(`/products/${slug}`)
  }
  async getProductBySlug(slug: string, locale: string) {
    return instance.get(`/products/${slug}?${productBySlugQuery}&locale=${locale}`)
  }
  async getProductsByCategory(category: string[]) {
    return instance.get(`/products?${productByCategoryQuery(category)}`)
  }
}

export const productsService = new ProductsService()