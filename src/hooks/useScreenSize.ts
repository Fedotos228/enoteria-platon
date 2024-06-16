'use client'

import { useEffect, useState } from 'react'

const useScreenSize = () => {
	const [isClient, setIsClient] = useState<boolean>(false)
	const [screenSize, setScreenSize] = useState<{
		width: number
		height: number
	}>({
		width: isClient ? window.innerWidth : 0,
		height: isClient ? window.innerHeight : 0,
	})

	useEffect(() => {
		setIsClient(true)

		setScreenSize({
			width: isClient ? window.innerWidth : 0,
			height: isClient ? window.innerHeight : 0,
		})

		const handleResize = () => {
			setScreenSize({
				width: isClient ? window.innerWidth : 0,
				height: isClient ? window.innerHeight : 0,
			})
		}

		if (isClient) {
			window.addEventListener('resize', handleResize)

			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [isClient])

	return { width: screenSize.width, height: screenSize.height, isClient }
}

export default useScreenSize
