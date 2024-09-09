import { Link } from '@/i18n/routing'
import { MediaType, imageStrapUrl } from "@/lib/utils"
import { type BlocksContent } from "@strapi/blocks-react-renderer"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import { Button } from "../ui/button"
import BlockRendererClient from "./BlockRendererClient"

type Props = {
  content: {
    id: number
    title: string
    description: BlocksContent
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
  const t = useTranslations()
  if (!content) return null
  const { title, description, image } = content

  return (
    <section className="grid items-center gap-5 grid-cols-[520px_1fr]">
      <Image
        src={imageStrapUrl(image, MediaType.Single)}
        alt="Vineyard"
        width={580}
        height={580}
        className="w-max max-w-[520px]"
      />
      <div>
        <h2 className="mb-5">{title}</h2>
        <BlockRendererClient content={description} />
        <Button>
          <Link href="/about">
            {t("aboutButton")}
          </Link>
        </Button>
      </div>
    </section>
  )
}
