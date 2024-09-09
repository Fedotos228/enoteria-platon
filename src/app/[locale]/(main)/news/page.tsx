import Introduction from '@/components/blocks/Introduction'
import NewsGrid from '@/components/blocks/NewsGrid'
import Container from '@/components/layout/Container'
import { IParamsWithLocale } from '@/types/strapi.types'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

export default async function page({ params: { locale } }: IParamsWithLocale) {
	unstable_setRequestLocale(locale)

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
