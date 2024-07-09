import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetOrderById from "@/hooks/queries/useGetOrderById";
import useGetOrders from "@/hooks/queries/useGetOrders";
import { dateFormater, formatMDLPrice } from "@/lib/utils";
import { Separator } from "@radix-ui/react-select";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "../elements/Loader";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import { Skeleton } from "../ui/skeleton";

import { formatDate } from "date-fns";
import { toast } from "sonner";

export function OrdersTable() {
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);
  const { data, isLoading } = useGetOrders();
  const {
    data: singleOrder,
    isLoading: orderLoading,
    refetch: fetchOrderById,
  } = useGetOrderById(selectedOrder!, { enabled: false });

  useEffect(() => {
    if (selectedOrder) {
      fetchOrderById();
    }
  }, [selectedOrder, fetchOrderById]);

  if (isLoading) return <Loader loading={isLoading} />;

  const getOrder = (id: number) => {
    setSelectedOrder(id);
  };

  console.log(singleOrder);

  const copyOrderID = (id: number) => {
    navigator.clipboard.writeText(id.toString());
    toast.success("Id-ul comenzii a fost copiat în clipboard.");
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <main
          className={`mt-10 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ${selectedOrder ? "lg:grid-cols-3 xl:grid-cols-3" : ""}`}
        >
          <div
            className={`grid auto-rows-max items-start gap-4 md:gap-8 ${selectedOrder ? "lg:col-span-2" : ""}`}
          >
            {/* TODO: EXPORT ORDERS IN CSV */}
            {/* <div className="ml-auto flex items-center gap-2">
              <Button variant="outline">
                <File size={16} />
                Export
              </Button>
            </div> */}
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Comenzi</CardTitle>
                <CardDescription>
                  Listă cu comenzile tale recente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Clientul</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Status
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Data
                      </TableHead>
                      <TableHead className="text-right">Suma</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {data?.map((order: any) => (
                      <TableRow
                        className={`cursor-pointer ${selectedOrder === order.id ? "bg-accent" : ""}`}
                        onClick={() => getOrder(order.id)}
                        key={order.id}
                      >
                        <TableCell>
                          <div className="font-medium">
                            {order.attributes.lastName}{" "}
                            {order.attributes.firstName}
                          </div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {order.attributes.email}
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant="secondary">
                            Achitat
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {dateFormater(order.attributes.createdAt)}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatMDLPrice(
                            Number(order.attributes.subTotalPrice),
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          {selectedOrder && (
            <div>
              {orderLoading && <Skeleton className="h-[680px] w-full" />}

              {singleOrder && (
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-05-chunk-4"
                >
                  <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg">
                        ID Comandă: {singleOrder.id}
                        <Button
                          className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
                          onClick={() => copyOrderID(singleOrder.id)}
                          variant="outline"
                          size="icon"
                        >
                          <Copy className="h-4 w-4" />
                          <span className="sr-only">Copy Order ID</span>
                        </Button>
                      </CardTitle>
                      <CardDescription>
                        Data:{" "}
                        {formatDate(
                          new Date(singleOrder.attributes.createdAt),
                          "dd MMMM yyyy",
                        )}
                      </CardDescription>
                    </div>
                    {/* TODO: add actions */}
                    {/* <div className="ml-auto flex items-center gap-1">
                      <Button size="sm" variant="outline" className="h-8 gap-1">
                        <Truck className="h-3.5 w-3.5" />
                        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                          Track Order
                        </span>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                          >
                            <MoreVertical className="h-3.5 w-3.5" />
                            <span className="sr-only">More</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Export</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Trash</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div> */}
                  </CardHeader>
                  <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                      <div className="font-semibold">Detaliile comenzii</div>
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Glimmer Lamps x <span>2</span>
                          </span>
                          <span>$250.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Aqua Filters x <span>1</span>
                          </span>
                          <span>$49.00</span>
                        </li>
                      </ul>
                      <Separator className="my-2" />
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Subtotal
                          </span>
                          <span>$299.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Shipping
                          </span>
                          <span>$5.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Tax</span>
                          <span>$25.00</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                          <span className="text-muted-foreground">Total</span>
                          <span>$329.00</span>
                        </li>
                      </ul>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <div className="font-semibold">
                          Shipping Information
                        </div>
                        <address className="grid gap-0.5 not-italic text-muted-foreground">
                          <span>Liam Johnson</span>
                          <span>1234 Main St.</span>
                          <span>Anytown, CA 12345</span>
                        </address>
                      </div>
                      <div className="grid auto-rows-max gap-3">
                        <div className="font-semibold">Billing Information</div>
                        <div className="text-muted-foreground">
                          Same as shipping address
                        </div>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                      <div className="font-semibold">Customer Information</div>
                      <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">Customer</dt>
                          <dd>Liam Johnson</dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">Email</dt>
                          <dd>
                            <a href="mailto:">liam@acme.com</a>
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">Phone</dt>
                          <dd>
                            <a href="tel:">+1 234 567 890</a>
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                      <div className="font-semibold">
                        Informații despre plată
                      </div>
                      {/* <dl className="flex items-center justify-between">
                        <dt className="flex items-center gap-1 text-muted-foreground">
                          <CreditCard className="h-4 w-4" />
                          Visa
                        </dt>
                        <dd>**** **** **** 4532</dd>
                      </dl> */}
                      <dl className="flex items-center gap-1 capitalize text-muted-foreground">
                        {singleOrder.attributes.paymentMethod === "cash" ? (
                          <Truck className="h-5 w-5" />
                        ) : (
                          <CreditCard className="h-5 w-5" />
                        )}

                        {singleOrder.attributes.paymentMethod}
                      </dl>
                    </div>
                  </CardContent>
                  <CardFooter className="mb-0 flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                    <div className="text-xs text-muted-foreground">
                      Modificat:{" "}
                      <time
                        dateTime={formatDate(
                          new Date(singleOrder.attributes.updatedAt),
                          "yyyy-MM-dd",
                        )}
                      >
                        {formatDate(
                          new Date(singleOrder.attributes.updatedAt),
                          "dd MMMM yyyy",
                        )}
                      </time>
                    </div>
                    <Pagination className="ml-auto mr-0 w-auto">
                      <PaginationContent>
                        <PaginationItem>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                          >
                            <ChevronLeft className="h-5 w-5" />
                            <span className="sr-only">Previous Order</span>
                          </Button>
                        </PaginationItem>
                        <PaginationItem>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                          >
                            <ChevronRight className="h-5 w-5" />
                            <span className="sr-only">Next Order</span>
                          </Button>
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </CardFooter>
                </Card>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
