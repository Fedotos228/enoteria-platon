import React from "react";
import { OrderSiglePageProps } from "./layout";
import Container from "@/components/layout/Container";
import OrderSingle from "@/components/single/OrderSingle";

export default function page({ params }: OrderSiglePageProps) {
	const { id } = params;

	return (
		<Container>
			<OrderSingle id={id} />
		</Container>
	);
}
