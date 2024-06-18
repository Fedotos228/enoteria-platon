import Container from '../layout/Container'

export default function Introduction({
	children,
	background,
}: Readonly<{
	children: React.ReactNode
	background?: string
}>) {
	return (
		<Container>
			<div
				style={
					background
						? {
								background: `url(${background}) 50% 50% / cover no-repeat`,
						  }
						: {
								backgroundColor: `#A33939`,
						  }
				}
				className='flex flex-col items-center justify-center py-10 md:py-16 mt-5 mb-8 rounded-xl w-full bg-cover bg-center'
			>
				{children}
			</div>
		</Container>
	)
}
