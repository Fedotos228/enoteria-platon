"use client";

import { Control } from "react-hook-form";
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

interface AddressFormProps {
  control: Control<CheckoutFormSchemaType>;
}

export function AddressForm({ control }: AddressFormProps) {
  return (
    <div className="mb-8">
      <div className="col-span-2 mb-8">
        <h2 className="text-lg font-bold uppercase text-bordo">
          Adresa Poștala
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <FormField
          control={control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Numele <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="ex. Popescu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Prenumele <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="ex. Ion" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  inputMode="email"
                  type="email"
                  placeholder="ex. example@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Telefon <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  inputMode="tel"
                  type="tel"
                  placeholder="ex. +37367525214"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Adresă <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  placeholder="ex. Strada Nr., Bloc, Apartament"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Oraș <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="ex. Chișinău" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Țară</FormLabel>
              <FormControl>
                <RadioGroup className="flex gap-3" value={field.value} onValueChange={field.onChange}>
                  <div className="flex items-center">
                    <RadioGroupItem
                      value="moldova"
                      id="Moldova"
                      className="me-1 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                    />
                    <Label htmlFor="Moldova">Moldova</Label>
                    <RadioGroupItem
                      value="romania"
                      id="Romania"
                      className="me-1 ms-8 h-4 w-4 rounded-full border border-black/70 ring-offset-2 ring-offset-black transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                    />
                    <Label htmlFor="Romania">Romania</Label>
                  </div>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
