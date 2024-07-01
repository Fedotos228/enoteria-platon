import qs from 'qs'

export const homeMerchQuery = qs.stringify({
  fields: ['title', 'slug', 'price_mdl', 'discount'],
  populate: {
    thumbnail: {
      fields: ['url'],
    },
  },
  pagination: {
    page: 1,
    pageSize: 4
  }
})

export const allMerchQuery = qs.stringify({
  fields: ['title', 'slug', 'price_mdl', 'discount'],
  populate: {
    thumbnail: {
      fields: ['url'],
    },
  }
})

export const merchSlugQuery = qs.stringify({
  fields: ['title', 'slug', 'price_mdl', 'discount'],
  populate: {
    thumbnail: {
      fields: ['url'],
    },
    gallery: {
      fields: ['id', 'url'],
    },
    colors: '*',
    sizes: '*',
  },
  encodeValuesOnly: true,
})