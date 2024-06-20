import { instance } from '../api/axios'
import { articlesQuery, articlesQueryBySlug, articlesQueryOnlySlugAndTitle } from './news.qs'

class NewsService {
  async getNews() {
    return await instance.get(`/articles?${articlesQuery}`)
  }
  async getOnlySlugAnTitleNews() {
    return await instance.get(`/articles?${articlesQueryOnlySlugAndTitle}`)
  }
  async getNewsBySlug(slug: string) {
    return instance.get(`/articles/${slug}?${articlesQueryBySlug}`)
  }
}

export const newsService = new NewsService()