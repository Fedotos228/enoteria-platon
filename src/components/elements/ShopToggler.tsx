'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { slug: 'vinuri', title: 'Vinuri', href: '/shop' },
  { slug: 'merch', title: 'Merchandise', href: '/shop/merch' },
]

export default function ShopToggler() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-4">
      {
        links.map((link, i) => (
          <div key={link.slug} className='flex gap-4'>
            <h5 className={`cursor-pointer text-black ${pathname !== link.href && 'opacity-40'}`}>
              <Link href={link.href}>
                {link.title}
              </Link>
            </h5>
            {i === 0 && <span>|</span>}
          </div>
        ))
      }
    </div>
  )
}
