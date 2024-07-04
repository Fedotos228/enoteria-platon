"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useAppSelector } from "@/store/store";
import { useActions } from "@/hooks/useActions";
import CartProduct from "./CartProduct";
import { formatMDLPrice } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";

export default function CartInfoCard() {
  const { products, total, shipping } = useAppSelector((state) => state.cart);
  const { calculateTotal, addShippingTax } = useActions();

  const cards = [
    {
      name: "MasterCard",
      img: "https://placehold.co/30x30",
      href: "https://www.mastercard.com",
    },
    {
      name: "Visa",
      img: "https://placehold.co/30x30",
      href: "https://www.visa.com",
    },
    {
      name: "American Express",
      img: "https://placehold.co/30x30",
      href: "https://www.americanexpress.com",
    },
    {
      name: "Discover",
      img: "https://placehold.co/30x30",
      href: "https://www.discover.com",
    },
    {
      name: "PayPal",
      img: "https://placehold.co/30x30",
      href: "https://www.paypal.com",
    },
  ];

  useEffect(() => {
    calculateTotal();
    addShippingTax();
  }, [products, calculateTotal, addShippingTax]);

  const calculateTotalPrice = (subtotal: number, shipping: number) => {
    return subtotal > 0 ? subtotal + shipping : 0;
  };

  return (
    <>
      <div className="border-b-2 pb-4">
        <h2 className="text-lg font-bold uppercase text-bordo">In Coș</h2>
      </div>
      <div className="mt-4 border-b-2 pb-4">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.length > 0 ? (
              products?.map((product) => (
                <CartProduct key={product.slug} product={product} />
              ))
            ) : (
              <p className="mt-4 pb-4 text-center text-muted-foreground">
                Coșul este gol
              </p>
            )}
          </ul>
        </div>
      </div>
      <div className="mt-4 grid gap-4 border-b-2 pb-4">
        <div className="flex w-full flex-col gap-2 text-xs font-light">
          <p className="text-gray-500">Acceptam</p>
          <ul className="flex gap-2">
            {cards?.map((card, index) => (
              <li key={index}>
                <Link href={card.href} target="_blank">
                  <Image src={card.img} alt="Logo" width={30} height={30} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full justify-between font-light">
          <p>Sub-total</p>
          <p>{formatMDLPrice(total)}</p>
          {/* <p>{formatRONPrice(2452)}</p> */}
        </div>
        <div className="flex w-full justify-between font-light">
          <p>Livrare</p>
          <p>{formatMDLPrice(shipping)}</p>
        </div>
      </div>
      <div className="mt-4 border-b-2 pb-4">
        <div className="flex w-full justify-between text-base font-bold uppercase text-bordo">
          <p>Total</p>
          <p>{formatMDLPrice(calculateTotalPrice(total, shipping))}</p>
          {/* <p>{formatRONPrice(2452)}</p> */}
        </div>
      </div>
    </>
  );
}
