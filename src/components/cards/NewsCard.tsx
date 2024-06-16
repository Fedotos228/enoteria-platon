import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { INews } from '../../types/data.types'

export default function NewsCard(news: INews) {
	return (
		<Link href='/'>
			<Card className='border-0 shadow-xl hover:scale-105 transition-transform duration-300'>
				<Image
					src={news.image}
					alt={news.slug}
					width={280}
					height={190}
					className='rounded-t-lg w-full'
				/>
				<CardContent className='mt-4 p-3 pt-0'>
					<h6 className='mb-3'>{news.title}</h6>
					<p className='trucate line-clamp-3'>{news.description}</p>
				</CardContent>
			</Card>
		</Link>
	)
}
