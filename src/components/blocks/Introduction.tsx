import { MediaType, imageStrapUrl } from '@/lib/utils'
import Container from '../layout/Container'

import { Damion } from 'next/font/google'

const damion = Damion({
	weight: '400',
	subsets: ['latin'],
})

type Props = {
	title: string,
	background: {
		data: {
			url: string
		} | null
	}
}

export default function Introduction({
	content
}: {
	content: Props
}) {
	if (!content) return null

	const { background, title } = content

	return (
		<Container>
			<div
				style={{
					background: `url(${background.data ? imageStrapUrl(background, MediaType.Single) : '/images/Banner.png'
						}) 50% 50% / cover no-repeat`,
				}}
				className='flex flex-col items-center justify-center py-16 mt-5 mb-8 rounded-xl w-full bg-cover bg-center'
			>
				<IntroductionTitle>
					{title}
				</IntroductionTitle>
			</div>
		</Container>
	)
}



function IntroductionTitle({
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

