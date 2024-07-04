"use client";

import { AddressForm } from "./blocks/AddressForm";
import { PaymentForm } from "./blocks/PaymentForm";
import { Form } from "@/components/ui/form";
import { Button } from "../ui/button";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import {
  FormSchema,
  FormSchemaType,
  PaymentFormSchemaType,
  AddressFormSchemaType,
} from "./schemas/CheckoutFormSchema";
import { useAppSelector } from "@/store/store";

export function CheckoutForm() {
  const { products, total, shipping } = useAppSelector((state) => state.cart);
  
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
    shipping: shipping,
    subTotalPrice: total,
    totalPrice: total + shipping,
  }

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultValues,
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
    console.log(data); // Aici se poate de adaugat logica cu trimite data
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
