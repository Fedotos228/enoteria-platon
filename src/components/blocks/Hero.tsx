import { MediaType, imageStrapUrl } from '@/lib/utils'
import { BlocksContent } from '@strapi/blocks-react-renderer'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import BlockRendererClient from './BlockRendererClient'
import { Link } from '@/i18n/routing'

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
	const t = useTranslations()
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
						{t("heroButton")}
					</Link>
				</Button>
			</div>
		</div>
	)
}
