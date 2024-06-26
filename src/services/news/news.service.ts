import { instance } from '../api/axios'
import { articlesQuery, articlesQueryBySlug } from './news.qs'

class NewsService {
  async getNews() {
    return await instance.get(`/news?${articlesQuery}`)
  }
  async getNewsBySlug(slug: string) {
    return await instance.get(`/news/${slug}?${articlesQueryBySlug}`)
  }
}

export const newsService = new NewsService()