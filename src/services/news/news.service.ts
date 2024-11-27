import { IArticle } from '@/types/data.types'
import { IStrapiArrayResponse, IStrapiObjectResponse } from '@/types/strapi.types'
import { instance } from '../api/axios'
import { articlesQuery, articlesQueryBySlug } from './news.qs'

class NewsService {
  async getNews(locale: string) {
    return await instance<IStrapiArrayResponse<IArticle>>({
      url: `/news?${articlesQuery}&locale=${locale}`,
      method: "GET",
    })
  }
  async getNewsBySlug(slug: string, locale: string) {
    return await instance<IStrapiObjectResponse<IArticle>>({
      url: `/news/${slug}?${articlesQueryBySlug}&locale=${locale}`,
      method: "GET",
    })
  }
}

export const newsService = new NewsService()