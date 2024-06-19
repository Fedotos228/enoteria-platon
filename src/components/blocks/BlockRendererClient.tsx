
"use client"
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer"
import Link from 'next/link'

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent
}) {
  if (!content) return null
  return <BlocksRenderer
    content={content}
    blocks={{
      paragraph: ({ children }) => <p className="max-w-prose">{children}</p>,
      heading: ({ children, level }) => {
        switch (level) {
          case 1:
            return <h1>{children}</h1>
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
    }}
    modifiers={{
      bold: ({ children }) => <strong>{children}</strong>,
      italic: ({ children }) => <span className="italic">{children}</span>,
    }}
  />
}