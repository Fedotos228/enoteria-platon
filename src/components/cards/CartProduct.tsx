"use client";

import { useActions } from "@/hooks/useActions";
import { MediaType, formatMDLPrice, imageStrapUrl } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CartProduct({ product }: any) {
  const { removeProduct, increaseQuantity, decreaseQuantity } = useActions();
  const price = product.discount
    ? product.price_mdl - (product.price_mdl * product.discount) / 100
    : product.price_mdl;

  return (
    <li className="flex gap-4 py-6">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 xs:h-24 xs:w-24">
        <Image
          src={imageStrapUrl(product.thumbnail, MediaType.Single)}
          alt={product.slug}
          className="h-full w-full object-cover object-center"
          width={80}
          height={80}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between gap-2 font-medium">
          <Link href={"/" + product.slug}>{product.title}</Link>
          <p>{formatMDLPrice(price)}</p>
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
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
}
