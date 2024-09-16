"use client"

import Loader from '@/components/elements/Loader'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import useGetDelivery from '@/hooks/queries/useGetDelivery'
import { Label } from "@radix-ui/react-label"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { useTranslations } from 'next-intl'

interface IDeliveryMethods {
  value: number
  label: string
}

export default function DeliveryRadioInput({ form }: any) {
  const { data: delivery, isLoading } = useGetDelivery()
  const t = useTranslations('Checkout.form')

  if (isLoading) return <Loader loading={isLoading} />

  return (
    <FormField
      control={form.control}
      name="deliveryMethod"
      render={({ field }) => (
        <FormItem className="col-span-2">
          <FormLabel>{t("payment.title")}</FormLabel>
          <FormControl>
            <RadioGroup
              className="flex gap-3"
              value={field.value}
              onValueChange={field.onChange}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                {
                  delivery && delivery.map((item: IDeliveryMethods) => (
                    <div key={item.value} className="flex items-center">
                      <RadioGroupItem
                        value={item.value.toString()}
                        id={item.value.toString()}
                        className="me-1 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                      />
                      <Label htmlFor="card" className="cursor-pointer">
                        {item.label}
                      </Label>
                    </div>
                  ))
                }
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}