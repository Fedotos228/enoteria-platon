import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetOrders from "@/hooks/queries/useGetOrders";
import Loader from "../elements/Loader";
import { dateFormater } from "@/lib/utils";
import Link from "next/link";
export default function OrdersTable() {
  const { data, isLoading } = useGetOrders()

  if(isLoading) return <Loader loading={isLoading} />

  return (
    <Table className="my-5">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Data</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Nume Prenume</TableHead>
          <TableHead className="text-right">Suma</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((order: any) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{dateFormater(order.attributes.createdAt)} </TableCell>
            <TableCell>achitat</TableCell>
            <TableCell>{order.attributes.firstName} {order.attributes.lastName}</TableCell>
            <TableCell className="text-right">{order.attributes.subTotalPrice}</TableCell>
            <TableCell>
              <Link href={`orders/${order.id}`}>
                spre prod
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
