"use client"

import { useActions } from '@/hooks/useActions'
import { useAppSelector } from "@/store/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Form } from "@/components/ui/form"
import useCreateOrder from '@/hooks/mutations/useCreateOrder'
import { Button } from "../ui/button"
import { AddressForm } from "./blocks/AddressForm"
import { PaymentForm } from "./blocks/PaymentForm"
import {
  CheckoutFormSchema,
  CheckoutFormSchemaType,
} from "./schemas/CheckoutFormSchema"
import { useSelector } from 'react-redux'
import { selectCartTotal } from '@/store/slices/cart.slice'

export function CheckoutForm() {
  const { mutate: createOrder, isPending, isSuccess, isError } = useCreateOrder()
  const { products, shipping } = useAppSelector((state) => state.cart)
  const total = useSelector(selectCartTotal)
  const { clearCart } = useActions()

  const defaultValues: CheckoutFormSchemaType = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "moldova",
    paymentMethod: "card",
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    shipping: 0,
    subTotalPrice: 0,
    totalPrice: 0,
  }

  const form = useForm<CheckoutFormSchemaType>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues,
  })


  useEffect(() => {
    const totalPrice = total + shipping
    form.setValue('totalPrice', totalPrice)
    form.setValue('shipping', shipping)
    form.setValue('subTotalPrice', total)
  }, [form, total, shipping])

  function onSubmit(data: CheckoutFormSchemaType) {
    if (products.length === 0) {
      toast.error("Nu există produse în coșul de cumpărături!", {
        position: "top-center",
      })
    }
    // Add logic to send data here
    let order = { ...data, products }

    createOrder(order)

    if (isSuccess) {
      clearCart()
      form.reset(defaultValues)
    }

  }

  return (
    <Form {...form}>
      <form
        className="grid w-full grid-cols-1 py-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <AddressForm control={form.control} />
        <PaymentForm control={form.control} />
        <Button className="ml-auto inline-block px-6" type="submit" size="sm">
          {
            isPending ? 'Se procesează...' : 'Achită'
          }

        </Button>
      </form>
    </Form>
  )
}
