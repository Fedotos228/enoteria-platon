'use client'
import { MediaType, imageStrapUrl } from '@/lib/utils'
import { blocksService } from '@/services/blocks/blocks.service'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Container from '../layout/Container'
import BlockRendererClient from './BlockRendererClient'

export default function Founders({ classname }: { classname?: string }) {
  const { data: founder } = useQuery({
    queryKey: ['founder'],
    queryFn: () => blocksService.getFounder(),
    select: data => data.data.data.attributes
  })

  return (
    <section className={classname}>
      <Container>
        <div className='flex items-center gap-5'>
          <div>
            <h3 className='mb-2'>{founder?.name}</h3>
            <p className='text-gray-500 mb-4'>{founder?.subtitle}</p>
            <BlockRendererClient content={founder?.description} />
          </div>
          {
            founder?.image && <Image
              src={imageStrapUrl(founder?.image, MediaType.Single)}
              alt={founder?.name}
              width={600}
              height={300}
            />
          }
        </div>
      </Container>
    </section>
  )
}
