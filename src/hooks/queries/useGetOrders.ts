import { ordersService } from "@/services/orders/orders.service";
import { useQuery } from "@tanstack/react-query";

export default function useGetOrders() {
  return useQuery({
		queryKey: ['orders'],
		queryFn: () => ordersService.getOrders(),
		select: data => data.data.data
	})
}