"use client"

import { useActions } from "@/hooks/useActions"
import { Link } from '@/i18n/routing'
import { MediaType, cn, imageStrapUrl } from "@/lib/utils"
import { CirclePercent } from "lucide-react"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"
import { Card, CardFooter } from "../ui/card"

type ProductCardProps = {
  product: any
  type: "product" | "merch" | "inShop"
}

export default function ProductCard({ product, type }: ProductCardProps) {
  const t = useTranslations()
  const { addToCart } = useActions()
  if (!product) return null

  const { title, price_mdl, thumbnail, discount, slug } = product.attributes

  const price = discount ? price_mdl - (price_mdl * discount) / 100 : price_mdl

  //   const handleItemsCount = (id: string) => {
  // 	const item = productsInCart.find((item: any) => item._id === id)
  // 	if (item) {
  // 		return `(${item.quantity})`
  // 	}
  // }

  const linkType = (slug: string) => {
    switch (type) {
      case ("product"):
        return `/shop/${slug}`
      case ("merch"):
        return `/shop/merch/${slug}`
      case ("inShop"):
        return `/${slug}`
    }
  }

  return (
    <Card className="relative shadow transition-transform duration-300 hover:scale-[1.02]">
      <div
        className="relative flex h-[230px] w-full items-center justify-center overflow-hidden rounded-t-lg md:h-[280px]"
      >
        {thumbnail?.data?.attributes?.url && (
          <Image
            src={imageStrapUrl(thumbnail, MediaType.Single)}
            alt={title}
            width={320}
            height={350}
            className='h-[250px] w-full object-contain pb-2 border-b border-b-1 border-gray-200'
          />
        )}
        {discount && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-red-500/70 px-2 py-1">
            <CirclePercent color="white" opacity="70" />
            <p className="text-sm text-white">{discount}% reducere</p>
          </div>
        )}
      </div>
      <Link
        href={type === "merch" ? `/shop/merch/${slug}` : `/shop/${slug}`}
        className="after:absolute after:inset-0"
      >
        <h6 className="m-4">{title}</h6>
      </Link>
      <CardFooter className="flex-wrap justify-between gap-2">
        <div className="flex gap-1 font-semibold">
          {price_mdl && (
            <>
              {discount && <p className="text-bordo">{Math.round(price)} {t('currency')}</p>}

              <p className={`${discount && "line-through opacity-50"}`}>
                {discount ? price_mdl : Math.round(price)} lei
              </p>
            </>
          )}
        </div>
        {
          type === 'product' ?
            price_mdl ? (
              <Button
                className="relative z-10 ml-auto"
                onClick={() => addToCart(product.attributes)}
              >
                {t("productCard.addToCart")}
              </Button>
            ) : (
              <Link
                href="/contacts"
                className={`${cn(
                  buttonVariants({
                    variant: "default",
                  }),
                )} relative z-10`}
              >
                {t("productCard.seePrice")}
              </Link>
            )
            : null
        }
        {/* <Button className='bg-green-700'>Adauga (5) {handleItemsCount(product._id)}</Button> */}
      </CardFooter>
    </Card>
  )
}
