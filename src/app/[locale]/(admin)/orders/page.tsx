"use client"

import { OrdersTable } from "@/components/cards/OrdersTable"
import { getToken } from "@/lib/localStorage"
import { useRouter } from "next/navigation"

export default function OrdersPage() {
  const token = getToken()
  const { replace } = useRouter()

  if (!token) {
    replace("/orders/auth")
  } else {
    return <OrdersTable />
  }

  return
}
