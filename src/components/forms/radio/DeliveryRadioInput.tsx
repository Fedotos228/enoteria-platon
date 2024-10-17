"use client"

import Loader from '@/components/elements/Loader'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import useGetDelivery from '@/hooks/queries/useGetDelivery'
import { RadioGroup } from "@radix-ui/react-radio-group"
import { useTranslations } from 'next-intl'

interface IDeliveryMethods {
  id: number
  title: string
}

export default function DeliveryRadioInput({ form }: any) {
  const { data: delivery, isLoading } = useGetDelivery()
  const t = useTranslations('Checkout.form')

  console.log(delivery?.data)

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
                  delivery.data && delivery.data.map((item: IDeliveryMethods) => (
                    <div key={item.id} className="flex items-center">
                      <RadioGroupItem
                        value={item.title}
                        id={item.id.toString()}
                        className="me-1 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                      />
                      <Label htmlFor="card" className="cursor-pointer">
                        {item.title}
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