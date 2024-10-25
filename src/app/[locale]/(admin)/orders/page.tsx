"use client"

import { OrdersTable } from "@/components/cards/OrdersTable"
import { getToken } from "@/lib/localStorage"
import { useLocale } from 'next-intl'
import { useRouter } from "next/navigation"

export default function OrdersPage() {
  const locale = useLocale()
  const token = getToken()
  const { replace } = useRouter()

  if (!token) {
    replace(`${locale}/orders/auth`)
  } else {
    return <OrdersTable />
  }
}
