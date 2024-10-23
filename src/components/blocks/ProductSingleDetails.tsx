"use client"

import { useActions } from "@/hooks/useActions"
import { Link } from '@/i18n/routing'
import { cn, formatMDLPrice } from "@/lib/utils"
import { IProduct } from '@/types/data.types'
import { BlocksContent } from '@strapi/blocks-react-renderer'
import { Minus, Plus } from "lucide-react"
import { useTranslations } from 'next-intl'
import { useState } from "react"
import { Button, buttonVariants } from "../ui/button"
import BlockRendererClient from "./BlockRendererClient"


export default function ProductSingleDetails({
  product,
}: {
  product: IProduct
}) {
  const {
    title,
    price_mdl,
    description,
    details,
    stock,
    discount,
  } = product

  const t = useTranslations()
  const { addToCart } = useActions()
  const [quantity, setQuantity] = useState(1)

  const increment = () => quantity < 999 && setQuantity((prev) => prev + 1)

  const decrement = () => quantity > 1 && setQuantity((prev) => prev - 1)

  const price = product.discount
    ? product.price_mdl - (product.price_mdl * product.discount) / 100
    : product.price_mdl


  if (!product) return null

  return (
    <div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <h4 className="mb-2">{title}</h4>
        <h5
          className={`mb-3 flex items-end gap-1 text-xl ${discount ? "text-bordo" : "text-foreground"}`}
        >
          {price_mdl && (
            <>
              {discount ? (
                <>
                  {formatMDLPrice(price)}
                  <p
                    className={`${discount && "text-lg text-foreground line-through opacity-50"}`}
                  >
                    {formatMDLPrice(discount ? price_mdl : price)}
                  </p>
                </>
              ) : (
                formatMDLPrice(price_mdl)
              )}
            </>
          )}
        </h5>
      </div>
      {
        stock ?
          <span className="text-sm text-red-500">Indisponibil</span>
          :
          <span className="text-sm text-green-500">În stock</span>
      }
      {/* <span className="text-sm text-destructive">Out of stock</span> */}
      <div className="my-7 flex items-center justify-between">
        <div className="flex w-fit items-center gap-2 rounded-md border">
          <Button
            size="icon"
            variant="ghost"
            className="text-base"
            onClick={decrement}
          >
            <Minus size={16} />
          </Button>
          <p className="w-6 text-center">{quantity}</p>
          <Button
            size="icon"
            variant="ghost"
            className="text-base"
            onClick={increment}
          >
            <Plus size={16} />
          </Button>
        </div>
        {
          price_mdl ? (
            <Button
              onClick={() =>
                quantity > 1
                  ? addToCart({ ...product, quantity })
                  : addToCart(product)
              }
            >
              Adaugă în coș
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
        }
      </div>
      <div>
        <h5 className="mb-5">Descriere</h5>
        {details &&
          details.map((details) => (
            <div key={details.id} className="mb-3 flex gap-1">
              <h6 className="w-full max-w-48">{details.title}</h6>
              <p>{details.desc}</p>
            </div>
          ))}
      </div>
      <BlockRendererClient content={description || {} as BlocksContent} />
      {/* <ul>
        {subcategories?.data?.map((category: any) => (
          <li key={category?.attributes.slug}>{category.attributes.title}</li>
        ))}
      </ul> */}
    </div>
  )
}
