import OrderHeader from '@/components/layout/OrderHeader'
import "../globals.css"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex-1">
      <OrderHeader />
      {children}
    </main>
  )
}
