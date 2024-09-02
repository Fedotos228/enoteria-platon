import { Card, CardContent } from "@/components/ui/card"
import { localeUrl } from '@/lib/lang'
import { MediaType, imageStrapUrl } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function NewsCard({ post }: any) {
  if (!post) return null

  const { title, slug, body, image } = post

  const description = body[0]?.children[0]?.text

  return (
    <Link href={localeUrl(`news/article/${slug}`)}>
      <Card className="h-[360px] border-0 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
        {image && (
          <Image
            src={imageStrapUrl(image, MediaType.Single)}
            alt={slug}
            width={280}
            height={190}
            className="h-[190px] w-full rounded-t-lg object-cover"
          />
        )}
        <CardContent className="mt-4 p-3 pt-0">
          <h6 className="mb-3 font-semibold">{title}</h6>
          <p className="line-clamp-3">{description}</p>
        </CardContent>
      </Card>
    </Link >
  )
}
