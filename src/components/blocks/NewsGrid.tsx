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
	const newsPage = pathname.includes('/news')
	const { data, isLoading } = useGetNews()
	const { data: news, meta } = data || {}
	const { pagination } = meta || {}

	if (isLoading) return <Loader loading={isLoading} />

	let slicedNewsGrid = news?.slice(0, 4)


	if (pathname.includes('/news')) {
		slicedNewsGrid = news
	}

	if (!news) return null

	return (
		<section className={className}>
			<SectionHeader title={sectionTitle} link={sectionLink} />

			<Grid>
				{slicedNewsGrid.map((item: any) => (
					<NewsCard key={item?.attributes?.slug} post={item?.attributes} />
				))}
			</Grid>

			{newsPage && news.lenght > 8 && <PaginationComponent />}
		</section>
	)
}
