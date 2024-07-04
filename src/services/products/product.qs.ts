import qs from 'qs'

export const homeProductQuery = qs.stringify(
  {
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
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
)

export const productSlugQuery = qs.stringify({
  fields: ['title', 'slug']
})

export const productBySlugQuery = qs.stringify(
  {
    fields: ['title', 'slug', 'price_mdl', 'discount', 'description'],
    populate: {
      thumbnail: {
        fields: ['url'],
      },
      gallery: {
        fields: ['id', 'url'],
      },
      subcategories: {
        fields: ['title', 'slug'],
      },
      details: {
        fields: ['title', 'desc'],
      }
    },
    encodeValuesOnly: true,
  },
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
      subcategories: {
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