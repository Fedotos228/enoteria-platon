import { MediaType, imageStrapUrl } from '@/lib/utils'
import Image from 'next/image'
import Container from '../layout/Container'
import BlockRendererClient from './BlockRendererClient'

export default function SimpleBlock({ content }: any) {
  const { title, description, image } = content

  if (!content) return null

  return (
    <Container>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 place-items-center'>
        {image && <Image
          src={imageStrapUrl(image, MediaType.Single)}
          alt={title}
          width={600}
          height={300}
          className='md:w-full'
        />}
        <div>
          <BlockRendererClient content={description} />
        </div>
      </div>
    </Container>
  )
}
