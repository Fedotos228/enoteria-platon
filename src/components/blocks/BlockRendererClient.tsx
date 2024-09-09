"use client"

import { Link } from '@/i18n/routing'
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer"
import { Damion } from 'next/font/google'
import Image from 'next/image'

const damion = Damion({
  weight: '400',
  subsets: ['latin']
})

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent,
}) {
  if (!content) return null
  return <BlocksRenderer
    content={content}
    blocks={{
      paragraph: ({ children }) => <p className="mb-3">{children}</p>,
      heading: ({ children, level }) => {
        switch (level) {
          case 1:
            return <h1 className={`${damion.className} text-4xl text-white text-center leading-[160%]`}>{children}</h1>
          case 2:
            return <h2>{children}</h2>
          case 3:
            return <h3 className='mb-3'>{children}</h3>
          case 4:
            return <h4>{children}</h4>
          case 5:
            return <h5>{children}</h5>
          case 6:
            return <h6>{children}</h6>
          default:
            return <h1>{children}</h1>
        }
      },
      link: ({ children, url }) => <Link href={url}>{children}</Link>,
      image: ({ image }) => {
        return (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alternativeText || ""}
            className='mx-auto mb-5'
          />
        )
      },
    }}
    modifiers={{
      bold: ({ children }) => <strong>{children}</strong>,
      italic: ({ children }) => <span className="italic">{children}</span>,
    }}

  />
}