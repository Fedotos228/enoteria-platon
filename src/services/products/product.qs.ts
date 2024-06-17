import qs from 'qs'

export const homeProductQuery = qs.stringify(
  {
    fields: ['title', 'slug'],
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