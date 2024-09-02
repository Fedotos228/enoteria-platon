import Introduction from '@/components/blocks/Introduction'
import NewsGrid from '@/components/blocks/NewsGrid'
import Container from '@/components/layout/Container'
import { getTranslations } from 'next-intl/server'

export default async function page() {
	const t = await getTranslations()
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
