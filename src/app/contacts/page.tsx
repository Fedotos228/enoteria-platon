import Introduction from '@/components/blocks/Introduction'
import Container from '@/components/layout/Container'
import { Card, CardContent } from '@/components/ui/card'

export default function page() {
	return (
		<div>
			<Introduction background='/images/Banner.png' title='Contacte' />

			<Container>
				<Card>
					<CardContent className='flex flex-row'></CardContent>
				</Card>
			</Container>
		</div>
	)
}
