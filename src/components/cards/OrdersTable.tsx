import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useGetOrders from "@/hooks/queries/useGetOrders"
import { dateFormater, formatMDLPrice } from "@/lib/utils"
import { useState } from "react"
import Loader from "../elements/Loader"

import OrderCard from './OrderCard'

export function OrdersTable() {
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null)
  const { data, isLoading } = useGetOrders()

  const getOrder = (id: number) => {
    setSelectedOrder(id)
  }

  if (isLoading) return <Loader loading={isLoading} />

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
          {selectedOrder && <OrderCard selectedOrder={selectedOrder} />}
        </main>
      </div>
    </div>
  )
}
