"use client";

import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useCreateOrder from "@/hooks/mutations/useCreateOrder";

import {
  CheckoutFormSchema,
  CheckoutFormSchemaType,
} from "./schemas/CheckoutFormSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { selectCartTotal } from "@/store/slices/cart.slice";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";

export function CheckoutForm() {
  const {
    mutate: createOrder,
    isPending,
    isSuccess,
    isError,
  } = useCreateOrder();
  const { products, shipping } = useAppSelector((state) => state.cart);
  const total = useSelector(selectCartTotal);
  const { clearCart } = useActions();

  const defaultValues: CheckoutFormSchemaType = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "moldova",
    paymentMethod: "card",
    shipping: 0,
    subTotalPrice: 0,
    totalPrice: 0,
  };

  const form = useForm<CheckoutFormSchemaType>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues,
  });

  useEffect(() => {
    const totalPrice = total + shipping;
    form.setValue("totalPrice", totalPrice);
    form.setValue("shipping", shipping);
    form.setValue("subTotalPrice", total);
  }, [form, total, shipping]);

  function onSubmit(data: CheckoutFormSchemaType) {
    if (products.length === 0) {
      toast.error("Nu există produse în coșul de cumpărături!", {
        position: "top-center",
      });
      return; // Oprirea funcției onSubmit dacă nu există produse în coș
    }
    // Add logic to send data here
    let order = { ...data, products };
    console.log(order);
    createOrder(order);

    if (isSuccess) {
      clearCart();
      form.reset(defaultValues);
    }
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
              Adresa Poștala
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Numele <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      placeholder="ex. Popescu"
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
              control={form.control}
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
              control={form.control}
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
              control={form.control}
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
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Oraș <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      placeholder="ex. Chișinău"
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
                  <FormLabel>Țară</FormLabel>
                  <FormControl>
                    <RadioGroup
                      className="flex gap-3"
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="moldova"
                          id="Moldova"
                          className="me-1 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                        />
                        <Label htmlFor="Moldova" className="cursor-pointer">
                          Moldova
                        </Label>
                        <RadioGroupItem
                          value="romania"
                          id="Romania"
                          className="me-1 ms-8 h-4 w-4 rounded-full border border-black/70 ring-offset-2 ring-offset-black transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640]"
                        />
                        <Label htmlFor="Romania" className="cursor-pointer">
                          Romania
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Modalitatea de plata</FormLabel>
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
                          <Label htmlFor="card" className="cursor-pointer">
                            Card de credit/debit
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <RadioGroupItem
                            value="paypal"
                            id="paypal"
                            className="me-1 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640] sm:ms-8"
                          />
                          <Label htmlFor="paypal" className="cursor-pointer">
                            Paypal
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <RadioGroupItem
                            value="cash"
                            id="cash"
                            className="me-1 h-4 w-4 rounded-full border border-black/70 bg-origin-content transition-all data-[state=checked]:border-[white] data-[state=checked]:bg-[#3B3640] sm:ms-8"
                          />
                          <Label htmlFor="cash" className="cursor-pointer">
                            Cash
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button className="ml-auto inline-block px-6" type="submit" size="sm">
          {isPending ? "Se procesează..." : "Achită"}
        </Button>
      </form>
    </Form>
  );
}
