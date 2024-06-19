import { Button } from '@/components/ui/button'
import { NAVIGATION_ITEMS } from '@/constants/navigation'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INavigationProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	screenWidth: number
}

export default function Navigation({
	isOpen,
	setIsOpen,
	screenWidth,
}: INavigationProps) {
	const pathname = usePathname()

	return (
		<>
			{screenWidth < 767 && (
				<div
					onClick={() => setIsOpen(false)}
					className={`fixed inset-0 backdrop-blur-md transition-all duration-300 bg-opacity-75 md:hidden ${
						isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
					}`}
				></div>
			)}
			<nav
				className={`flex justify-start md:justify-center transition-all duration-300 gap-6 ml:gap-8 fixed inset-y-0 md:inset-0 w-full bg-background flex-col pl-10 pt-14 md:p-0 md:items-center items-start md:flex-row md:bg-transparent h-full max-w-lg md:relative ${
					isOpen ? 'right-0' : '-right-full'
				}`}
			>
				{screenWidth < 767 && (
					<Button
						className='absolute top-4 right-4 md:hidden'
						onClick={() => setIsOpen(false)}
						variant='ghost'
						size='icon'
					>
						<X size={24} />
					</Button>
				)}
				{NAVIGATION_ITEMS.map(
					(item, i) =>
						item.url && (
							<Link
								href={item.url}
								key={i}
								className={`text-white hover:text-bordo-hover transition-colors duration-300 md:text-base text-lg md:text-background text-foreground ${
									pathname === item.url
										? 'font-semibold !text-bordo'
										: ''
								}`}
							>
								{item.title}
							</Link>
						),
				)}
			</nav>
		</>
	)
}
