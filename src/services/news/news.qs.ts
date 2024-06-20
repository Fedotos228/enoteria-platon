import qs from 'qs'

export const articlesQuery = qs.stringify({
  fields: ['body', 'title', 'slug', 'publishedAt'],
  populate: {
    image: {
      fields: ['url'],
    }
  }
})

export const articlesQueryOnlySlugAndTitle = qs.stringify({
  fields: ['title', 'slug'],
})

export const articlesQueryBySlug = qs.stringify({
  fields: ['body', 'title', 'slug', 'publishedAt'],
  populate: {
    image: {
      fields: ['url'],
    }
  }
})