"use client"

import { OrdersTable } from "@/components/cards/OrdersTable"
import { getToken } from "@/lib/localStorage"
import { useRouter } from "next/navigation"
import { useEffect } from 'react'

export default function OrdersPage() {
  const token = getToken()
  const { replace } = useRouter()

  useEffect(() => {
    if (!token) {
      replace("/orders/auth")
    }
  }, [token])


  return <OrdersTable />
}
