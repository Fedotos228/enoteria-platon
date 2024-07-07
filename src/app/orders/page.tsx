'use client'

import OrdersTable from '@/components/cards/OrdersTable'
import Container from '@/components/layout/Container'
import { getToken } from '@/lib/localStorage'
import { useRouter } from 'next/navigation'

export default function OrdersPage() {
  const token = getToken()
  const { replace } = useRouter()

  if (!token) {
    replace('/orders/auth')
  }

  return (
    <Container>
      <OrdersTable />
    </Container>
  )
}
