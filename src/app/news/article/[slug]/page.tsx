import ArticleSingle from '@/components/single/ArticleSingle'
import Container from '@/components/layout/Container'

type ArticleSingleProps = {
	params: {
		slug: string
	}
}

export default function ArticleSinglePage({ params }: ArticleSingleProps) {
	return (
		<Container className='max-w-[800px]'>
			<ArticleSingle
				slug={params.slug}
			/>
		</Container>
	)
}
