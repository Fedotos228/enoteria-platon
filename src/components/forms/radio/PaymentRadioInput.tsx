import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import useGetPayments from '@/hooks/queries/useGetPayment'
import { Label } from "@radix-ui/react-label"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { useTranslations } from 'next-intl'

interface IPaymentMethods {
  id: number,
  title: string
}

export default function PaymentRadioInput({ form }: any) {
  const { data: payments } = useGetPayments()
  const t = useTranslations('Checkout.form')

  return (
    <FormField
      control={form.control}
      name="paymentMethod"
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
                  payments && payments.map((item: IPaymentMethods) => (
                    <div key={item.id} className="flex items-center">
                      <RadioGroupItem
                        value={item.id.toString()}
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
    />)
}