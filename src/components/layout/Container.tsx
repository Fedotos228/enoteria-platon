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
		<div className={cn('max-w-[1180px] mx-auto px-4', className)}>
			{children}
		</div>
	)
}
