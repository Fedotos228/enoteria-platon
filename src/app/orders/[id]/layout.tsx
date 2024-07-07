import { fetchGenerateParams } from "@/lib/fetchGenerateParams";
import type { PropsWithChildren } from "react";

export type OrderSiglePageProps = {
  params: {
    id: number;
  };
};
export async function generateStaticParams() {
  const { data } = await fetchGenerateParams("orders");

  return data.map((order: any) => ({
    slug: order.id,
  }));
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return children;
}
