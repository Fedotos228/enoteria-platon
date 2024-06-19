import { news } from '@/constants/data'
import NewsCard from '../cards/NewsCard'
import Grid from '../elements/Grid'
import SectionHeader from '../elements/SectionHeader'

export default function NewsGrid({
	sectionTitle,
	sectionLink,
	className,
}: {
	sectionTitle?: string
	sectionLink?: string
	className?: string
}) {
	return (
		<section className={className}>
			<SectionHeader title={sectionTitle} link={sectionLink} />

			<Grid>
				{news.slice(0, 8).map(item => (
					<NewsCard key={item.slug} {...item} />
				))}
			</Grid>
		</section>
	)
}
