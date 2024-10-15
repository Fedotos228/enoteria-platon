import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export enum MediaType {
  Single,
  Multiple,
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isClient = typeof window !== "undefined"

export function imageStrapUrl(image: any, type: MediaType) {
  if (!image) return ""

  console.log(process.env.NODE_ENV)

  if(process.env.NODE_ENV === 'development') {
    switch (type) {
      case MediaType.Single:
        return process.env.NEXT_PUBLIC_BASE_URL + image?.data?.attributes?.url
      case MediaType.Multiple:
        return process.env.NEXT_PUBLIC_BASE_URL + image?.attributes?.url
    }
  }

  if(process.env.NODE_ENV === 'production') {}{
    switch (type) {
      case MediaType.Single:
        return image?.data?.attributes?.url
      case MediaType.Multiple:
        return image?.attributes?.url
    }
  }
}
export const formatRONPrice = (price: number) => {
  if (!price) return null
  return price.toLocaleString("ro-RO", {
    style: "currency",
    currency: "RON",
    minimumFractionDigits: 0,
  })
}

export const formatMDLPrice = (price: number) => {
  if (!price) return null
  return price.toLocaleString("ro-RO", {
    style: "currency",
    currency: "MDL",
    minimumFractionDigits: 0,
  })
}

export function dateFormater(data: string) {
  const date = new Date(data)

  const year = date.getUTCFullYear()
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2)
  const day = ("0" + date.getUTCDate()).slice(-2)
  return `${day}.${month}.${year}`
}
