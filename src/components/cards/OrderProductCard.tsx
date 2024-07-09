import React from "react"
import { Card, CardFooter } from "../ui/card"
import { imageStrapUrl, MediaType } from "@/lib/utils"
import { CirclePercent } from "lucide-react"
import Image from "next/image"

export default function OrderProductCard({ product }: { product: any }) {
  if (!product) return null
  const { title, price_mdl, thumbnail, discount, quantity } = product
  const price = discount ? price_mdl - (price_mdl * discount) / 100 : price_mdl

  return (
    <Card className="relative shadow transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative flex h-[230px] w-full items-center justify-center rounded-t-lg md:h-[280px]">
        {thumbnail?.data?.attributes?.url && (
          <Image
            src={imageStrapUrl(thumbnail, MediaType.Single)}
            alt={title}
            width={320}
            height={350}
          />
        )}
        {discount && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-red-500/70 px-2 py-1">
            <CirclePercent color="white" opacity="70" />
            <p className="text-sm text-white">{discount}% reducere</p>
          </div>
        )}
      </div>
      <h6 className="m-4">{title}</h6>
      <CardFooter className="flex-wrap justify-between gap-2">
        <p>Cantitate: {quantity}</p>
        <div className="flex gap-1 font-semibold">
          {price_mdl && (
            <>
              {discount && <p className="text-bordo">{price} lei</p>}

              <p className={`${discount && "line-through opacity-50"}`}>
                {discount ? price_mdl : price} lei
              </p>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
