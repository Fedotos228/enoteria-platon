"use client"

import { useActions } from "@/hooks/useActions"
import { Link } from '@/i18n/routing'
import { MediaType, formatMDLPrice, imageStrapUrl } from "@/lib/utils"
import { Minus, Plus } from "lucide-react"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import { Button } from "../ui/button"

export default function CartProduct({ product }: any) {
  const t = useTranslations("Cart")
  const { removeProduct, increaseQuantity, decreaseQuantity } = useActions()
  const price = product.discount
    ? product.price_mdl - (product.price_mdl * product.discount) / 100
    : product.price_mdl

  return (
    <li className="flex gap-4 py-6">
      <div className="h-20 w-20 flex items-center justify-center flex-shrink-0 overflow-hidden rounded-md border border-gray-200 xs:h-24 xs:w-24">
        <Image
          src={imageStrapUrl(product.thumbnail, MediaType.Single)}
          alt={product.slug}
          className=" h-[80px] w-fit"
          width={60}
          height={60}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between gap-2 font-medium">
          <div>
            <Link href={product.slug}>{product.title}</Link>
            {
              product.size && product.color && (
                <p className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                  {product.size.name} / <span className='block w-4 h-4 rounded-full border ring-offset-1' style={{ backgroundColor: product.color.hex }}></span>
                </p>
              )
            }
          </div>
          <p>{formatMDLPrice(Number(Math.round(price)))}</p>
        </div>
        {/* <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <span className="circle rosu"></span> Roșu
        </p> */}
        <div className="flex flex-1 items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => decreaseQuantity(product.slug)}
            >
              <Minus size={20} />
            </Button>
            <p className="select-none">{product.quantity}</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => increaseQuantity(product.slug)}
            >
              <Plus size={20} />
            </Button>
          </div>

          <Button
            variant="link"
            className="!text-bordo"
            onClick={() => removeProduct(product.slug)}
          >
            {t("remove")}
          </Button>
        </div>
      </div>
    </li>
  )
}
