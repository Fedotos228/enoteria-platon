"use client";

import Introduction from "@/components/blocks/Introduction";
import Container from "@/components/layout/Container";
import CartInfoCard from "@/components/cards/CartInfoCard";
import { CheckoutForm } from "@/components/forms/CheckoutForm";
import { Card, CardContent } from "@/components/ui/card";


export default function PageCheckout() {
  let content = {
    title: "Checkout",
    background: {
      data: null,
    },
  };


  return (
    <div className="mb-20">
      <Introduction content={content} />
      <Container className="flex flex-col-reverse justify-between align-top lg:flex-row lg:gap-10">
        <Card className="w-full py-4 lg:w-[60%]">
          <CardContent>
            <CheckoutForm />
          </CardContent>
        </Card>

        <Card className="w-full self-start border-transparent bg-transparent py-8 shadow-transparent lg:w-[35%]">
          <CardContent className="p-0 lg:p-6">
            <CartInfoCard />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
