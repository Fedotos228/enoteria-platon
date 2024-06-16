import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const isClient = typeof window !== 'undefined'

export const formatRONPrice = (price: number) => {
	return price.toLocaleString('ro-RO', {
		style: 'currency',
		currency: 'RON',
	})
}

export const formatMDLPrice = (price: number) => {
	return price.toLocaleString('ro-RO', {
		style: 'currency',
		currency: 'MDL',
	})
}
