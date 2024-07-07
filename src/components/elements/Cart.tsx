"use client"

import { useActions } from "@/hooks/useActions"
import { formatMDLPrice } from "@/lib/utils"
import { selectCartTotal } from "@/store/slices/cart.slice"
import { useAppSelector } from "@/store/store"
import { ShoppingCart, X } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import CartProduct from "../cards/CartProduct"
import { Button } from "../ui/button"

export default function Cart() {
  const { products, quantity, isCartOpen } = useAppSelector(
    (state) => state.cart,
  )
  const { clearCart, toggleCart } = useActions()
  const total = useSelector(selectCartTotal)

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isCartOpen])

  return (
    <div>
      <Button
        className={`relative text-background hover:bg-accent/10 hover:text-accent`}
        variant="ghost"
        size="icon"
        onClick={() => toggleCart()}
      >
        <ShoppingCart />
        {quantity > 0 && (
          <span className="absolute right-0 top-0 h-5 w-5 rounded-full bg-bordo text-center text-sm !text-white">
            {quantity}
          </span>
        )}
      </Button>

      <>
        <div
          onClick={() => toggleCart()}
          className={`fixed inset-0 z-30 bg-opacity-75 backdrop-blur-md transition-all duration-300 ${isCartOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
        ></div>

        <div
          className={`pointer-events-none fixed inset-y-0 z-50 flex w-full max-w-full bg-background transition-all duration-300 xs:max-w-lg ${isCartOpen ? "right-0" : "-right-full xs:-right-[512px]"
            }`}
        >
          <div className="pointer-events-auto flex h-full w-full flex-col overflow-y-scroll shadow-xl">
            <div className="flex-1 overflow-y-auto p-4 sm:px-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Coşul</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleCart()}
                >
                  <span className="sr-only">Close panel</span>

                  <X />
                </Button>
              </div>

              <div className="mt-8">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.length > 0 ? (
                    products?.map((product) => (
                      <CartProduct key={product.slug} product={product} />
                    ))
                  ) : (
                    <div className="my-auto">
                      <p className="mt-20 text-center text-xl font-medium !text-muted-foreground">
                        Coșul este gol.
                      </p>

                      <Button
                        className="mt-5 h-fit w-full px-6 py-3 text-base font-medium !text-bordo-foreground"
                        onClick={() => toggleCart()}
                      >
                        Continuă cumpărăturile
                      </Button>
                    </div>
                  )}
                </ul>
              </div>
            </div>

            {products.length > 0 && (
              <div className="border-t p-4 sm:px-6">
                <div className="flex justify-between font-medium">
                  <p>Subtotal</p>
                  <p>{formatMDLPrice(total)}</p>
                  {/* <p>{formatRONPrice(2452)}</p> */}
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Transportul și taxele calculate la finalizarea
                </p>
                <Button
                  className="mt-5 h-fit w-full px-6 py-3 text-base font-medium !text-bordo-foreground"
                  onClick={() => toggleCart()}
                >
                  <Link href="/checkout" className="!text-bordo-foreground">
                    Finalizează comanda
                  </Link>
                </Button>

                <Button
                  variant="link"
                  onClick={() => toggleCart()}
                  className="mt-3 w-full !text-bordo"
                >
                  Continuă cumpărăturile
                  <span aria-hidden="true"> &rarr;</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </>
    </div>
  )
}
