import { Damion } from 'next/font/google'

const damion = Damion({
	weight: '400',
	subsets: ['latin'],
})

export default function IntroductionTitle({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<h1
			className={`${damion.className} text-2xl xs:text-4xl md:text-4xl text-white text-center font-semibold leading-[160%] ${className}`}
		>
			{children}
		</h1>
	)
}
