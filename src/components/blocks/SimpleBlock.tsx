import { MediaType, imageStrapUrl } from '@/lib/utils'
import Image from 'next/image'
import Container from '../layout/Container'
import BlockRendererClient from './BlockRendererClient'

export default function SimpleBlock({ content }: any) {
  const { title, description, image } = content

  return (
    <Container>
      <div className='flex items-center gap-5'>
        {image && <Image
          src={imageStrapUrl(image, MediaType.Single)}
          alt={title}
          width={500}
          height={300}
        />}
        <div>
          <BlockRendererClient content={description} />
        </div>
      </div>
    </Container>
  )
}