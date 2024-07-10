'use client'

import { removeToken } from '@/lib/localStorage'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export default function OrderHeader() {
  const pathname = usePathname()
  const { replace } = useRouter()
  const handleLogout = () => {
    removeToken('token')
    replace('/order/auth')
  }

  return (
    <header className='flex items-center justify-between p-6 bg-white'>
      <Image
        src="/logos/logoBlack.svg"
        alt='logo'
        width={175}
        height={32}
      />
      {
        pathname === '/orders/auth'
          ? null
          : (
            <Button onClick={handleLogout}>
              Delogare
            </Button>
          )
      }
    </header>
  )
}
