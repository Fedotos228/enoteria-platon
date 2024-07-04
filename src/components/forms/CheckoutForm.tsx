"use client";

import { useActions } from '@/hooks/useActions'
import { useAppSelector } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { toast } from "sonner";

import { AddressForm } from "./blocks/AddressForm";
import { PaymentForm } from "./blocks/PaymentForm";
import { Form } from "@/components/ui/form";
import { Button } from "../ui/button";
import {
  FormSchema,
  FormSchemaType,
  PaymentFormSchemaType,
  AddressFormSchemaType,
} from "./schemas/CheckoutFormSchema";

export function CheckoutForm() {
  const { products } = useAppSelector((state) => state.cart);
  const { clearCart } = useActions();
  
  const defaultValues: FormSchemaType = {
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


  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });


  function onSubmit(data: FormSchemaType) {
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
        {/* unknown - permite evitarea problemelor de tipuri și asigură că tipul este compatibil cu cel așteptat de AddressForm si PaymentForm */}
        <AddressForm
          control={form.control as unknown as Control<AddressFormSchemaType>}
        />
        <PaymentForm
          control={form.control as unknown as Control<PaymentFormSchemaType>}
        />
        <Button className="ml-auto inline-block px-6" type="submit" size="sm">
          Achită
        </Button>
      </form>
    </Form>
  );
}
