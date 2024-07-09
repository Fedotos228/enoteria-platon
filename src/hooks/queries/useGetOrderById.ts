import { ordersService } from "@/services/orders/orders.service";
import { useQuery } from "@tanstack/react-query";

export default function useGetOrderById(
  id: number,
  { enabled }: { enabled: boolean },
) {
  return useQuery({
    queryKey: ["order id:", id],
    queryFn: () => ordersService.getOrderById(id),
    select: (data) => data.data.data,
    enabled,
  });
}
