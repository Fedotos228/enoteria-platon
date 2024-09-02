import qs from 'qs'
import { instance } from '../api/axios'

const foundersQuery = qs.stringify(
  {
    populate: {
      image: {
        fields: ['url']
      }
    }
  }
)

class BlocksService {
  async getFounder(lang: string) {
    return await instance.get(`/founder?${foundersQuery}&locale=${lang}`)
  }
  async getPage(page: string, lang: string) {
    return await instance.get(`/${page}?populate=deep&locale=${lang}`)
  }
}

export const blocksService = new BlocksService()