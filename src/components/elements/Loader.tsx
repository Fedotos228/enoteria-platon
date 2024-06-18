'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Loader({
	loading,
	theme = 'light',
}: {
	loading: boolean
	theme?: 'light' | 'dark' | 'universal'
}) {
	useEffect(() => {
		if (loading) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}

		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	})

	return (
		<>
			{theme === 'light' && (
				<div className='fixed inset-0 flex justify-center items-center h-screen z-50 w-full bg-white'>
					<Image
						className='aspect-auto animate-pulse'
						src='/logos/logoBlack.svg'
						width={176}
						height={70}
						alt='logo'
						priority
					/>
				</div>
			)}
			{theme === 'dark' && (
				<div className='fixed inset-0 flex justify-center items-center h-screen z-50 w-full bg-gray-900'>
					<Image
						className='aspect-auto animate-pulse'
						src='/logos/logoWhite.svg'
						width={176}
						height={70}
						alt='logo'
						priority
					/>
				</div>
			)}
			{theme === 'universal' && (
				<div className='fixed inset-0 flex justify-center items-center h-screen z-50 w-full bg-bordo'>
					<Image
						className='aspect-auto animate-pulse'
						src='/logos/logoWhite.svg'
						width={176}
						height={70}
						alt='logo'
						priority
					/>
				</div>
			)}
		</>
	)
}
