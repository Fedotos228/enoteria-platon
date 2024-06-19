import Container from '../layout/Container'

export default function Introduction({
	background,
	children,
}: Readonly<{
	background?: string
	children?: React.ReactNode
}>) {
	return (
		<Container>
			<div
				style={{
					background: `url(${
						background ? background : '/images/Banner.png'
					}) 50% 50% / cover no-repeat`,
				}}
				className='flex flex-col items-center justify-center py-16 mt-5 mb-8 rounded-xl w-full bg-cover bg-center'
			>
				{children}
			</div>
		</Container>
	)
}
