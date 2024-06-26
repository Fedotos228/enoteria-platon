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
  async getFounder() {
    return await instance.get(`/founder?${foundersQuery}`)
  }
  async getPage(page: string) {
    return await instance.get(`/${page}?populate=deep`)
  }
}

export const blocksService = new BlocksService()