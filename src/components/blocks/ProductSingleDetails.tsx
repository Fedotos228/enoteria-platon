"use client";

import { formatMDLPrice } from "@/lib/utils";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import BlockRendererClient from "./BlockRendererClient";

type ProductSingleDetailsProps = {
  title: string;
  price: number;
  description: BlocksContent;
  subcategories: any;
};

export default function ProductSingleDetails({
  title,
  price,
  description,
  subcategories,
}: ProductSingleDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => quantity < 999 && setQuantity((prev) => prev + 1);

  const decrement = () => quantity > 1 && setQuantity((prev) => prev - 1);

  return (
    <div>
      <h4 className="mb-2">{title}</h4>
      <h5 className="mb-3">{formatMDLPrice(price)}</h5>
      <span className="text-sm text-green-500">In stock</span>
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
        <Button>Adaugă în coș</Button>
      </div>
      <BlockRendererClient content={description} />
      {/* <ul>
        {subcategories?.data?.map((category: any) => (
          <li key={category?.attributes.slug}>{category.attributes.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
