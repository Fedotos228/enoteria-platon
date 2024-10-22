

export interface IPagination {
  page: number
  pageCount: number
  pageSize: number
  total: number
} 

export interface IParamsWithSlug {
  params: {
    slug: string
  }
}

export interface IParamsWithLocale {
  params: {
    locale: string
  }
}