'use client'

import OrdersList from '@/components/blocks/OrdersList'
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
      <OrdersList />
    </Container>
  )
}
