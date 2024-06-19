import Introduction from '@/components/blocks/Introduction'
import NewsGrid from '@/components/blocks/NewsGrid'
import Container from '@/components/layout/Container'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'

export default function page() {

	let content = {
		title: 'Contacte',
		background: {
			data: null
		}
	}
	return (
		<>
			<Introduction content={content} />

			<Container className='mb-20'>
				<NewsGrid className='mb-14' />

				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href='#' />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink isActive href='#'>
								1
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href='#'>2</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href='#'>3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href='#'>4</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href='#' />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</Container>
		</>
	)
}
