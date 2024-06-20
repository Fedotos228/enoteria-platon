import { instance } from '../api/axios'
import { articlesQuery, articlesQueryBySlug, articlesQueryOnlySlugAndTitle } from './news.qs'

class NewsService {
  async getNews() {
    return await instance.get(`/news?${articlesQuery}`)
  }
  async getOnlySlugAnTitleNews() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news?${articlesQueryOnlySlugAndTitle}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
      }
    })

    if (!res.ok) {
      throw new Error('getOnlySlugAnTitleNews Failed to fetch')
    }

    return res.json()
  }
  async getNewsBySlug(slug: string) {
    return await instance.get(`/news/${slug}?${articlesQueryBySlug}`)
  }

  async getNewsBySlugFetch(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${slug}?${articlesQueryBySlug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
      }
    })

    if (!res.ok) {
      throw new Error('getOnlySlugAnTitleNews Failed to fetch')
    }

    return res.json()
  }
}

export const newsService = new NewsService()