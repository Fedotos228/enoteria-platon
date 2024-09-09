import { instance } from '../api/axios'
import { allMerchQuery, homeMerchQuery, merchSlugQuery } from './merch.qs'

class MerchService {
  async getHomeMerch() {
    return await instance.get(`/merchandises?${homeMerchQuery}`)
  }

  async getAllMerch() {
    return await instance.get(`/merchandises?${allMerchQuery}`)
  }

  async getMerchBySlug(slug: string, lang: string) {
    return await instance.get(`/merchandises/${slug}?${merchSlugQuery}&locale=${lang}`)
  }
}

export const merchService = new MerchService()