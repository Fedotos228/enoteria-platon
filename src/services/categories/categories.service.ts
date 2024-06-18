import { instance } from '../api/axios'
import { categorieQuery } from './categories.qs'

class CategorieService {
  async getCategories() {
    return instance.get(`/categories?${categorieQuery}`)
  }
}

export const categoriesService = new CategorieService()