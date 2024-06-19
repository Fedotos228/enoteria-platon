import { Damion } from 'next/font/google'

const damion = Damion({
	weight: '400',
	subsets: ['latin']
})


export default function Introduction({
	background,
	title
}: Readonly<{
	background?: string,
	title: string
}>) {
	return (
		<div
			style={{
				background: `url(${background ? background : "/images/Banner.png"}) 50% 50% / cover no-repeat`,
			}}
			className='flex flex-col items-center justify-center py-16 mt-5 mb-8 rounded-xl w-full bg-cover bg-center'
		>
			<h1 className={`${damion.className} text-3xl text-white text-center leading-[160%]`}>
				{title}
			</h1>
		</div>
	)
}
