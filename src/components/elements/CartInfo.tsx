"use client"

import { formatMDLPrice } from "@/lib/utils"
import { selectCartTotal } from "@/store/slices/cart.slice"
import { useAppSelector } from "@/store/store"
import { useSelector } from "react-redux"
import CartProduct from "../cards/CartProduct"

export default function CartInfoCard() {
  const { products, shipping } = useAppSelector((state) => state.cart)

  const total = useSelector(selectCartTotal)

  const calculateTotalPrice = (subtotal: number, shipping: number) => {
    return subtotal > 0 ? subtotal + shipping : 0
  }

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
        <div className="flex w-full justify-between font-light">
          <p>Sub-total</p>
          <p>{formatMDLPrice(Math.round(total))}</p>
        </div>
        <div className="flex w-full justify-between font-light">
          <p>Livrare</p>
          <p>{formatMDLPrice(shipping)}</p>
        </div>
      </div>
      <div className="mt-4 border-b-2 pb-4">
        <div className="flex w-full justify-between text-base font-bold uppercase text-bordo">
          <p>Total</p>
          <p>{formatMDLPrice(calculateTotalPrice(Math.round(total), shipping))}</p>
          {/* <p>{formatRONPrice(2452)}</p> */}
        </div>
      </div>
    </>
  )
}
