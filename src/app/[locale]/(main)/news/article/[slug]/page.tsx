import Container from '@/components/layout/Container'
import ArticleSingle from '@/components/single/ArticleSingle'

type ArticleSingleProps = {
	params: {
		slug: string
	}
}

export default function ArticleSinglePage({ params }: ArticleSingleProps) {
	return (
		<Container className='max-w-[980px]'>
			<ArticleSingle slug={params.slug} />
		</Container>
	)
}
