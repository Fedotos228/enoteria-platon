'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@radix-ui/react-select"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  Truck,
} from "lucide-react"
import { Button } from "../ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination"
import { Skeleton } from "../ui/skeleton"

import useGetOrderById from '@/hooks/queries/useGetOrderById'
import { formatMDLPrice } from '@/lib/utils'
import { formatDate } from "date-fns"
import { useEffect } from 'react'
import { toast } from 'sonner'

export default function OrderCard({ selectedOrder }: { selectedOrder: number }) {
  const {
    data: order,
    isLoading,
    refetch
  } = useGetOrderById(selectedOrder!, { enabled: false })

  useEffect(() => {
    if (selectedOrder) {
      refetch()
    }
  }, [selectedOrder, refetch])

  if (isLoading) return <Skeleton className="h-[680px] w-full" />

  const copyOrderID = (id: number) => {
    navigator.clipboard.writeText(id.toString())
    toast.success("Id-ul comenzii a fost copiat în clipboard.")
  }

  return (
    <div>
      <Card
        className="overflow-hidden"
        x-chunk="dashboard-05-chunk-4"
      >
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              ID Comandă: {order?.id}
              <Button
                className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
                onClick={() => copyOrderID(order?.id)}
                variant="outline"
                size="icon"
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>
              Data:{" "}

              {order?.attributes?.createdAt && formatDate(
                new Date(order.attributes.createdAt),
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
              {
                order?.attributes?.products.map((product: any) => (
                  <li key={product.slug} className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {product?.title} x <span>{product?.quantity}</span>
                    </span>
                    <span>{formatMDLPrice(product.price_mdl)}</span>
                  </li>
                ))
              }
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Subtotal
                </span>
                <span>{formatMDLPrice(order?.attributes?.subTotalPrice)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Shipping
                </span>
                <span>{formatMDLPrice(50)}</span>
              </li>
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>{formatMDLPrice(order?.attributes?.totalPrice)}</span>
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
                <span>{order?.attributes?.address}</span>
                <span>{order?.attributes?.city}</span>
                <span>{order?.attributes?.country}</span>
              </address>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd>{order?.attributes?.firstName + " " + order?.attributes?.lastName}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">{order?.attributes?.email}</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">{order?.attributes?.phone}</a>
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
              {order?.attributes?.paymentMethod === "cash" ? (
                <Truck className="h-5 w-5" />
              ) : (
                <CreditCard className="h-5 w-5" />
              )}

              {order?.attributes?.paymentMethod}
            </dl>
          </div>
        </CardContent>
        <CardFooter className="mb-0 flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Modificat:{" "}
            <time
              dateTime={order?.attributes?.updatedAt && formatDate(
                new Date(order.attributes.updatedAt),
                "yyyy-MM-dd",
              )}
            >
              {order?.attributes?.updatedAt && formatDate(
                new Date(order.attributes.updatedAt),
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
    </div>
  )
}
