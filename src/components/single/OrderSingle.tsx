"use client";

import useGetOrderById from "@/hooks/queries/useGetOrderById";
import OrderProductCard from "../cards/OrderProductCard";
import Grid from "../elements/Grid";
import Loader from "../elements/Loader";

export default function OrderSingle({ id }: { id: number }) {
  const { data, isLoading } = useGetOrderById(id, { enabled: true });

  if (isLoading) return <Loader loading={isLoading} />;

  console.log(data);
  return (
    <div className="my-5">
      <h1>
        {data?.attributes.firstName} {data?.attributes.lastName}
      </h1>
      <p>Adresa: {data?.attributes.address}</p>
      <p>Orasul: {data?.attributes.city}</p>
      <p>Tara: {data?.attributes.country}</p>
      <p>Telefon: {data?.attributes.phone}</p>
      <p>Suma: {data?.attributes.subTotalPrice}</p>
      <p>Metoda de plata: {data?.attributes.paymentMethod}</p>
      <Grid className="mt-4">
        {data?.attributes.products.map((product: any, index: number) => (
          <OrderProductCard key={index} product={product} />
        ))}
      </Grid>
    </div>
  );
}
