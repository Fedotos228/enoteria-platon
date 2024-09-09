import { instance } from '../api/axios'
import { homeProductQuery, productByCategoryQuery, productBySlugQuery } from './product.qs'

class ProductsService {
  async getProducts(locale: string) {
    return instance.get(`/products?${homeProductQuery}&locale=${locale}`)
  }
  async getProductsBySlug(slug: string, locale: string) {
    return instance.get(`/products/${slug}&locale=${locale}`)
  }
  async getProductBySlug(slug: string, locale: string) {
    return instance.get(`/products/${slug}?${productBySlugQuery}&locale=${locale}`)
  }
  async getProductsByCategory(category: string[], locale: string) {
    return instance.get(`/products?${productByCategoryQuery(category)}&locale=${locale}`)
  }
}

export const productsService = new ProductsService()