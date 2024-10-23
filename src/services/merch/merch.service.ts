import { instance } from '../api/axios'
import { allMerchQuery, homeMerchQuery, merchSlugQuery } from './merch.qs'

class MerchService {
  async getHomeMerch() {
    return await instance({
      url: `/merchandises?${homeMerchQuery}`,
      method: 'GET'
    })
  }

  async getAllMerch() {
    return await instance({
      url: `/merchandises?${allMerchQuery}`,
      method: 'GET'
    })
  }

  async getMerchBySlug(slug: string, lang: string) {
    return await instance({
      url: `/merchandises/${slug}?${merchSlugQuery}&locale=${lang}`,
      method: 'GET'
    })
  }
}

export const merchService = new MerchService()