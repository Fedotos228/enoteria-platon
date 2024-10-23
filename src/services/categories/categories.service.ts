import { instance } from '../api/axios'
import { categorieQuery } from './categories.qs'

class CategorieService {
  async getCategories(locale: string) {
    return instance({
      url: `/categories?${categorieQuery}$locale=${locale}`,
      method: 'GET',
    })
  }
}

export const categoriesService = new CategorieService()