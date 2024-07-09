import qs from 'qs'

export const categorieQuery = qs.stringify({
  fields: ['title', 'slug'],
  populate: {
    subcategories: {
      fields: ['title', 'slug']
    }
  }
})