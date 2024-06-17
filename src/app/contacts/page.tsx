import Introduction from '@/components/blocks/Introduction'
import Container from '@/components/layout/Container'
import { Card, CardContent } from '@/components/ui/card'

export default function page() {
	return (
		<div>
			<Introduction background='/images/Banner.png'>
				<h1 className='text-3xl text-white text-center leading-[160%]'>
					Contacte
				</h1>
			</Introduction>

			<Container>
				<Card>
					<CardContent className='flex flex-row'></CardContent>
				</Card>
			</Container>
		</div>
	)
}
