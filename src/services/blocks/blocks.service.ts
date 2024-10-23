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
    return await instance({
      url: `/founder?${foundersQuery}&locale=${lang}`,
      method: 'GET'
    })
  }
  async getPage(page: string, lang: string) {
    return await instance({
      url: `/${page}?populate=deep&locale=${lang}`,
      method: 'GET'
    })
  }
}

export const blocksService = new BlocksService()