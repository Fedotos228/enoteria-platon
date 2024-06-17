import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isClient = typeof window !== 'undefined'

export function imageStrapUrl(image: any) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${image?.data?.attributes?.url}`
}