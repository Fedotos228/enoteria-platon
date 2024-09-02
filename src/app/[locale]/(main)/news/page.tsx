'use client'

import Introduction from '@/components/blocks/Introduction'
import NewsGrid from '@/components/blocks/NewsGrid'
import Container from '@/components/layout/Container'
import { useTranslations } from 'next-intl'


export default function page() {
	const t = useTranslations()
	let content = {
		title: t("SectionTitle.news"),
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
