import { BlocksContent } from '@strapi/blocks-react-renderer'
import { IStrapiArrayResponse } from './strapi.types'

type StrapiWithoutMetaType = Omit<IStrapiArrayResponse<{ id: number, url: string }>, 'meta'>

type SubcategoryType = {
  title: string,
  slug: string,
  category: IStrapiArrayResponse<SubcategoryType>
}

export interface IProduct {
  title: string
  slug: string
  description?: BlocksContent
  discount?: number
  price_mdl: number
  price_ron: number
  stock: boolean
  thumbnail: string
  barcode: string
  gallery?: StrapiWithoutMetaType
  subcategories: SubcategoryType
  details: Array<{
    id: string,
    title: string,
    desc: string
  }>



  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface IArticle {
  slug: string,
  title: string,
  body: BlocksContent
  image: string,
  publishedAt: string
  gallery: StrapiWithoutMetaType
}

export interface IMerch {
  slug: string,
  title: string,
  price: number,
  image: string,
  discount?: number,
}

export interface ISocials {
  icon: string,
  link: string,
  alt: string,
}

export interface IFounders {
  name: string,
  position: string,
  image: string,
}

export interface ICategory {
  slug: string,
  title: string
  subcategories: {
    slug: string,
    name: string
  }[]
}