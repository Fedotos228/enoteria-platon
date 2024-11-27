export interface IStrapiObjectResponse<T> {
  data: {
    id: number
    attributes: T
  }
  meta: {
    pagination?: IPagination
  }
}

export interface IStrapiMappedResponse<T> {
  id: number
  attributes: T
}

export interface IStrapiArrayResponse<T> {
  data: Array<{
    id: number
    attributes: T
  }>
  meta?: {
    pagination: IPagination
  }
}

export interface IPagination {
  page: number
  pageSize: number
  pageCount: number
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