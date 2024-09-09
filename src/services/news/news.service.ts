import { instance } from '../api/axios'
import { articlesQuery, articlesQueryBySlug } from './news.qs'

class NewsService {
  async getNews(locale: string) {
    return await instance.get(`/news?${articlesQuery}&locale=${locale}`)
  }
  async getNewsBySlug(slug: string, locale: string) {
    return await instance.get(`/news/${slug}?${articlesQueryBySlug}&locale=${locale}`)
  }
}

export const newsService = new NewsService()