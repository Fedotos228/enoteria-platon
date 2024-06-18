import qs from 'qs'

export const homeProductQuery = qs.stringify(
  {
    fields: ['title', 'slug', 'price_mdl', 'discount'],
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

export const productBySlugQuery = qs.stringify(
  {
    fields: ['title', 'slug', 'price_mdl', 'discount', 'description'],
    populate: {
      thumbnail: {
        fields: ['url'],
      },
      gallery: {
        fields: ['url'],
      },
    },
    encodeValuesOnly: true,
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
)

export const productByCategoryQuery = (categories: string[]) => qs.stringify(
  {
    fields: ['title', 'slug', 'price_mdl', 'discount'],
    populate: {
      thumbnail: {
        fields: ['url'],
      },
      subcategory: {
        fields: ['title', 'slug'],
      }
    },
    filters: {
      subcategory: {
        slug: {
          $eq: categories
        }
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
)