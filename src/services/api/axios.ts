import axios from 'axios'
import { getContentType } from './api.helper'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const axiosOptions = {
  baseURL: BASE_URL,
  headers: getContentType(),
}

export const instance = axios.create(axiosOptions)

instance.interceptors.request.use(config => {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN

  if (config && config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
