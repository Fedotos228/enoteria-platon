import { MediaType, imageStrapUrl } from '@/lib/utils'
import {
	type BlocksContent,
} from "@strapi/blocks-react-renderer"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import BlockRendererClient from './BlockRendererClient'

type Props = {
	content: {
		id: number,
		title: string,
		description: BlocksContent,
		image: {
			data: {
				attributes: {
					url: string
				}
			}
		}
	}
}

export default function About({ content }: Props) {
	if (!content) return null
	const { title, description, image } = content

	return (
		<section className='grid grid-cols-[480px_1fr] items-center gap-5'>
			<Image
				src={imageStrapUrl(image, MediaType.Single)}
				alt='Vineyard'
				width={580}
				height={580}
				className='max-w-[580px] w-full'
			/>
			<div>
				<h2 className='mb-5'>
					{title}
				</h2>
				<p className='mb-5'>
					<BlockRendererClient content={description} />
				</p>
				<Button>
					<Link href='/about'>Despre noi</Link>
				</Button>
			</div>
		</section>
	)
}
