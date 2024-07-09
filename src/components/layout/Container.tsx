import { cn } from '@/lib/utils'
import React from 'react'

export default function Container({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div className={cn('max-w-[1200px] mx-auto px-4 w-full', className)}>
			{children}
		</div>
	)
}
