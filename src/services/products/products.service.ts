import { IProduct } from '@/types/data.types'
import { IStrapiArrayResponse, IStrapiObjectResponse } from '@/types/strapi.types'
import { instance } from '../api/axios'
import { homeProductQuery, productByCategoryQuery, productBySlugQuery } from './product.qs'

type IProductResponse = IStrapiObjectResponse<IProduct>
type IProductsResponse = IStrapiArrayResponse<IProduct>

class ProductsService {
  async getProducts(locale: string) {
    return instance<IProductsResponse>({
      url: `/products?${homeProductQuery}&locale=${locale}`,
      method: "GET",
    })
  }
  async getProductsBySlug(slug: string, locale: string) {
    return instance<IProductResponse>({
      url: `/products/${slug}&locale=${locale}`,
      method: "GET",
    })
  }
  async getProductBySlug(slug: string, locale: string) {
    return instance<IProductResponse>({
      url: `/products/${slug}?${productBySlugQuery}&locale=${locale}`,
      method: "GET",
    })
  }
  async getProductsByCategory(category: string[], locale: string) {
    return instance<IProductsResponse>({
      url: `/products?${productByCategoryQuery(category)}&locale=${locale}`,
      method: "GET",
    })
  }
}

export const productsService = new ProductsService()