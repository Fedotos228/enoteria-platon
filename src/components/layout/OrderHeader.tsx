'use client'

import { removeToken } from '@/lib/localStorage'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export default function OrderHeader() {
  const pathname = usePathname()
  const { replace } = useRouter()
  const handleLogout = () => {
    removeToken('token')
    replace('/orders/auth')
  }

  return (
    <header className='flex items-center justify-between p-6 bg-white'>
      <Link href='/'>
        <Image
          src="/logos/logoBlack.svg"
          alt='logo'
          width={175}
          height={32}
        />
      </Link>
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
