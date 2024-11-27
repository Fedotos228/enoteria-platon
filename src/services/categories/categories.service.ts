import { ICategory } from '@/types/data.types'
import { IStrapiArrayResponse } from '@/types/strapi.types'
import { instance } from '../api/axios'
import { categorieQuery } from './categories.qs'

class CategorieService {
  async getCategories(locale: string) {
    return instance<IStrapiArrayResponse<ICategory>>({
      url: `/categories?${categorieQuery}&locale=${locale}`,
      method: 'GET',
    })
  }
}

export const categoriesService = new CategorieService()