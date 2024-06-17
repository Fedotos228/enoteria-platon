import qs from 'qs'

export const homeProductQuery = qs.stringify(
  {
    fields: ['title', 'slug', 'price', 'discount'],
    populate: {
      thumbnail: {
        fields: ['url'],
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
)

export const productSlugQuery = qs.stringify({
  fields: ['slug']
})

export const productBySlugQuery = qs.stringify({
  fields: ['title', 'slug', 'price', 'discount', 'description'],
  populate: {
    thumbnail: {
      fields: ['url'],
    },
    gallery: {
      fields: ['url'],
    },
  },
  encodeValuesOnly: true,
})