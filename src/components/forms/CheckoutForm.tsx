"use client";

import { useActions } from '@/hooks/useActions'
import { useAppSelector } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from 'react';

import { AddressForm } from "./blocks/AddressForm";
import { PaymentForm } from "./blocks/PaymentForm";
import { Form } from "@/components/ui/form";
import { Button } from "../ui/button";
import {
  CheckoutFormSchema,
  CheckoutFormSchemaType,
  // PaymentFormSchemaType,
  // AddressFormSchemaType,
} from "./schemas/CheckoutFormSchema";

export function CheckoutForm() {
  const { products, total, shipping } = useAppSelector((state) => state.cart);
  const { clearCart } = useActions();
  
  const defaultValues: CheckoutFormSchemaType = {
    firstname: "",
    lastname: "",
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
  });


  useEffect(() => {
    const totalPrice = total + shipping;
    form.setValue('totalPrice', totalPrice);
    form.setValue('shipping', shipping);
    form.setValue('subTotalPrice', total);
  }, [form, total, shipping]);

  function onSubmit(data: CheckoutFormSchemaType) {
    if(products.length === 0) {
      toast.error("Nu există produse în coșul de cumpărături!", {
        position: "top-center",
      });
    } else {
      toast.success("Comanda a fost plasată cu succes!", {
        position: "top-center",
      });
    }
    // Add logic to send data here
    console.log(data); 
    clearCart();
    form.reset(defaultValues);
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full grid-cols-1 py-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <AddressForm control={form.control}/>
        <PaymentForm control={form.control} />
        <Button className="ml-auto inline-block px-6" type="submit" size="sm">
          Achită
        </Button>
      </form>
    </Form>
  );
}
