
"use client"
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer"

export default function BlockRendererClient({
  description,
}: {
  readonly description: BlocksContent
}) {
  if (!description) return null
  return <BlocksRenderer content={description} />
}