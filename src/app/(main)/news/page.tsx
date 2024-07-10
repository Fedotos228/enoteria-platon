'use client'

import Introduction from '@/components/blocks/Introduction'
import NewsGrid from '@/components/blocks/NewsGrid'
import Container from '@/components/layout/Container'


export default function page() {
	let content = {
		title: 'Noutati',
		background: {
			data: null
		}
	}
	return (
		<>
			<Introduction content={content} />

			<Container className='mb-20'>
				<NewsGrid className='mb-14' />
			</Container>
		</>
	)
}
