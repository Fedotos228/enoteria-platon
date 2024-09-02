"use client"

import { formatMDLPrice } from "@/lib/utils"
import { selectCartTotal } from "@/store/slices/cart.slice"
import { useAppSelector } from "@/store/store"
<<<<<<< HEAD
import { useTranslations } from 'next-intl'
=======
>>>>>>> 0c0f928efc3b434eec09bc40d0103e0fa1137f92
import { useSelector } from "react-redux"
import CartProduct from "../cards/CartProduct"

export default function CartInfoCard() {
  const t = useTranslations("Checkout.summary")
  const { products, shipping } = useAppSelector((state) => state.cart)

  const total = useSelector(selectCartTotal)

  const calculateTotalPrice = (subtotal: number, shipping: number) => {
    return subtotal > 0 ? subtotal + shipping : 0
  }

  return (
    <>
      <div className="border-b-2 pb-4">
        <h2 className="text-lg font-bold uppercase text-bordo">{t("title")}</h2>
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
                {t("empty")}
              </p>
            )}
          </ul>
        </div>
      </div>
      <div className="mt-4 grid gap-4 border-b-2 pb-4">
        <div className="flex w-full justify-between font-light">
<<<<<<< HEAD
          <p>{t("subtotal")}</p>
          <p>{formatMDLPrice(total)}</p>
=======
          <p>Sub-total</p>
          <p>{formatMDLPrice(Math.round(total))}</p>
>>>>>>> 0c0f928efc3b434eec09bc40d0103e0fa1137f92
        </div>
        <div className="flex w-full justify-between font-light">
          <p>{t("shipping")}</p>
          <p>{formatMDLPrice(shipping)}</p>
        </div>
      </div>
      <div className="mt-4 border-b-2 pb-4">
        <div className="flex w-full justify-between text-base font-bold uppercase text-bordo">
<<<<<<< HEAD
          <p>{t("total")}</p>
          <p>{formatMDLPrice(calculateTotalPrice(total, shipping))}</p>
=======
          <p>Total</p>
          <p>{formatMDLPrice(calculateTotalPrice(Math.round(total), shipping))}</p>
>>>>>>> 0c0f928efc3b434eec09bc40d0103e0fa1137f92
          {/* <p>{formatRONPrice(2452)}</p> */}
        </div>
      </div>
    </>
  )
}
