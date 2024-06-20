'use client'


import useGetNews from '@/hooks/queries/useGetNews'
import { usePathname } from 'next/navigation'
import NewsCard from '../cards/NewsCard'
import Grid from '../elements/Grid'
import Loader from '../elements/Loader'
import PaginationComponent from '../elements/PaginationComponent'
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
	const pathname = usePathname()
	const { data, isLoading } = useGetNews()
	const { data: news, meta } = data || {}
	const { pagination } = meta || {}

	if (isLoading) return <Loader loading={isLoading} />

	if (pathname.includes('/news')) {
		// fa control ca pe home sa apara doar 4 si pe /news mai multe
	}

	if (!news) return null

	return (
		<section className={className}>
			<SectionHeader title={sectionTitle} link={sectionLink} />

			<Grid>
				{news?.slice(0, 8).map((item: any) => (
					<NewsCard key={item?.attributes?.slug} post={item?.attributes} />
				))}
			</Grid>

			<PaginationComponent />
		</section>
	)
}
