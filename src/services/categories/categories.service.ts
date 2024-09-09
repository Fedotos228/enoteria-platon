import { instance } from '../api/axios'
import { categorieQuery } from './categories.qs'

class CategorieService {
  async getCategories(locale: string) {
    return instance.get(`/categories?${categorieQuery}$locale=${locale}`)
  }
}

export const categoriesService = new CategorieService()