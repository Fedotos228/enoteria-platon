import { MediaType, imageStrapUrl } from '@/lib/utils'
import { BlocksContent } from '@strapi/blocks-react-renderer'
import Link from 'next/link'
import { Button } from '../ui/button'
import BlockRendererClient from './BlockRendererClient'

type HeroProps = {
	id: number
	title: BlocksContent
	background: {
		data: {
			attributes: {
				url: string
			}
		}
	}
}

export default function Hero({ content }: { content: HeroProps }) {
	if (!content) return null

	const heroBackground = {
		backgroundImage: `url(${imageStrapUrl(content.background, MediaType.Single)})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	}

	return (
		<div
			style={heroBackground && heroBackground}
			className='flex items-center justify-center h-screen w-full'
		>
			<div className='flex flex-col gap-8'>
				<BlockRendererClient content={content && content?.title} />

				<Button className='text-base w-fit mx-auto' size='lg'>
					<Link href='/shop'>
						Vinurile noastre
					</Link>
				</Button>
			</div>
		</div>
	)
}
