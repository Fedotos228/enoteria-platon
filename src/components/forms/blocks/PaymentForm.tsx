"use client";

import { Control, useWatch } from "react-hook-form";
import { CheckoutFormSchemaType } from "../schemas/CheckoutFormSchema";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Select, SelectItem } from "@/components/ui/select";
import { generateMonths, generateYears } from "@/lib/utils";

interface PaymentFormProps {
  control: Control<CheckoutFormSchemaType>;
}

export function PaymentForm({ control }: PaymentFormProps) {
  const paymentMethod = useWatch({
    control,
    name: "paymentMethod",
  });

  const years = generateYears(1900, 2030);
  const months = generateMonths();

  return (
    <div className="my-8">
      <div className="col-span-2 mb-8">
        <h2 className="text-lg font-bold uppercase text-bordo">
          Modalitate de plata
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <FormField
          control={control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <RadioGroup
                  className="flex gap-3"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex items-center">
                        <RadioGroupItem
                        value="card"
                        id="card"
                        className="me-1 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                        />
                        <Label htmlFor="card">Card de credit/debit</Label>
                    </div>
                    <div className="flex items-center">
                        <RadioGroupItem
                        value="paypal"
                        id="paypal"
                        className="me-1 sm:ms-8 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                        />
                        <Label htmlFor="paypal">Paypal</Label>
                    </div>
                    <div className="flex items-center">
                        <RadioGroupItem
                        value="cash"
                        id="cash"
                        className="me-1 sm:ms-8 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                        />
                        <Label htmlFor="cash">Cash</Label>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {paymentMethod !== "cash" && (
          <>
            <FormField
              control={control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>CARD NUMBER<span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      placeholder="ex. 2313 3231 2333 4322"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="cardName"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>NAME ON CARD<span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      placeholder="ex. Popescu Ion"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2 grid sm:grid-cols-3 gap-4">
              <FormField
                control={control}
                name="expiryMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EXPIRY MONTH<span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        {months.map((month) => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="expiryYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EXPIRY YEAR<span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input className="h-12" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
