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
  async getAboutBlocks() {
    return await instance.get(`/about?populate=deep`)
  }
  async getFounder() {
    return await instance.get(`/founder?${foundersQuery}`)
  }
  async getShop() {
    return await instance.get(`/shop?populate=deep`)
  }
}

export const blocksService = new BlocksService()