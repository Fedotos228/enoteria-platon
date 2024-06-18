export interface IProduct {
  createdAt?: string
  title: string
  slug: string
  description?: string
  discount?: number
  price: number
  publishedAt?: string
  thumbnail: string
  gallery?: {
    id: number
    url: string
  }[]
  category: string
}

export interface INews {
  slug: string,
  title: string,
  image: string,
  description: string,
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