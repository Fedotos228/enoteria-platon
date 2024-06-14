import { navigation } from '@/constants/navigation'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='flex items-center gap-5' >
      {navigation.map((nav, i) => (
        <Link href={nav.url} key={i} className='text-white'>
          {nav.title}
        </Link>
      ))}
    </nav>
  )
}
