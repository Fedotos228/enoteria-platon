import { getToken } from '@/lib/localStorage'
import axios from 'axios'
import { errorCatch, getContentType } from './api.helper'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const axiosOptions = {
  baseURL: BASE_URL,
  headers: getContentType(),
}

export const instance = axios.create(axiosOptions)

export const axiosClassic = axios.create(axiosOptions)

instance.interceptors.request.use(config => {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN

  if (config && config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export const loginInstance = axios.create(axiosOptions)

loginInstance.interceptors.request.use(config => {
  const token = getToken()

  if (config && config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

loginInstance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'Logheazăe-te pentru a accesa această resursă' ||
        errorCatch(error) === 'token invalid') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      try {
        return loginInstance.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === 'Token-ul de actualizare nu este valid') {
          console.log('Token-ul de actualizare nu este valid')
          window.location.href = '/'
        }
      }
    }
  },
)

