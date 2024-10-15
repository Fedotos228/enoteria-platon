"use client"

import useCreateOrder from "@/hooks/mutations/useCreateOrder"
import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/store/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { errorCatch } from '@/services/api/api.helper'
import { selectCartTotal } from "@/store/slices/cart.slice"
import { Label } from "@radix-ui/react-label"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { useTranslations } from 'next-intl'
import { Button } from "../ui/button"
import DeliveryRadioInput from './radio/DeliveryRadioInput'
import PaymentRadioInput from './radio/PaymentRadioInput'
import {
  CheckoutFormSchemaType,
  createCheckoutFormSchema,
} from "./schemas/CheckoutFormSchema"

export function CheckoutForm() {
  const t = useTranslations("Checkout.form")
  const {
    mutate: createOrder,
    isPending,
    isSuccess,
    isError,
    error
  } = useCreateOrder()
  const { products, shipping } = useAppSelector((state) => state.cart)
  const total = useSelector(selectCartTotal)
  const { clearCart } = useActions()
  const CheckoutFormSchema = createCheckoutFormSchema(t)

  const defaultValues: CheckoutFormSchemaType = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "moldova",
    paymentMethod: "15",
    shipping: 0,
    subTotalPrice: 0,
    totalPrice: 0,
    deliveryMethod: "1",
  }

  const form = useForm<CheckoutFormSchemaType>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues,
  })

  useEffect(() => {
    const totalPrice = total + shipping
    form.setValue("totalPrice", totalPrice)
    form.setValue("shipping", shipping)
    form.setValue("subTotalPrice", total)
  }, [form, total, shipping])

  function onSubmit(data: CheckoutFormSchemaType) {
    if (products.length === 0) {
      toast.error("Nu există produse în coșul de cumpărături!", {
        position: "top-center",
      })
      return
    }
    if (isError) {
      toast.error(`A apărut o eroare la plasarea comenzii! ${errorCatch(error)}`, {
        position: "top-center",
      })
      return
    }

    let order = { ...data, products, status: 'pre-order' }
    createOrder(order)

    toast.success("Comanda a fost plasată cu succes!", {
      position: "top-center",
    })
    // clearCart()
    // form.reset(defaultValues)
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full grid-cols-1 py-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="mb-8">
          <div className="col-span-2 mb-8">
            <h2 className="text-lg font-bold uppercase text-bordo">
              {t("title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("firstName.label")} <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      placeholder={t("firstName.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("lastName.label")} <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="h-12" placeholder={t("lastName.placeholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("email.label")} <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      inputMode="email"
                      type="email"
                      placeholder={t("email.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("phone.label")} <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      inputMode="tel"
                      type="tel"
                      placeholder={t("phone.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("address.label")} <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      placeholder={t("address.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("city.label")} <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      placeholder={t("city.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>{t("country.title")}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      className="flex gap-3"
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="moldova"
                          id="moldova"
                          className="me-1 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                        />
                        <Label htmlFor="Moldova" className="cursor-pointer">
                          {t("country.moldova")}
                        </Label>
                        <RadioGroupItem
                          value="romania"
                          id="momania"
                          className="me-1 ms-8 h-4 w-4 rounded-full border border-black/70 ring-offset-2 ring-offset-black transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                        />
                        <Label htmlFor="Romania" className="cursor-pointer">
                          {t("country.romania")}
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <DeliveryRadioInput form={form} />
            <PaymentRadioInput form={form} />
          </div>
        </div>
        <Button className="ml-auto inline-block px-6" type="submit" size="sm">
          {isPending ? "Se procesează..." : "Achită"}
        </Button>
      </form>
    </Form>
  )
}
