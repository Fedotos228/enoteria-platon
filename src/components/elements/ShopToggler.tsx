'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ShopToggler() {
  const t = useTranslations('Shop')
  const locale = useLocale()
  const pathname = usePathname()

  const links = [
    { slug: 'vinuri', title: t('wines'), href: '/shop' },
    { slug: 'merch', title: t('merch'), href: '/shop/merch' },
  ]


  return (
    <div className="flex items-center gap-4">
      {
        links.map((link, i) => (
          <div key={link.slug} className='flex gap-4'>
            <h5 className={`cursor-pointer text-black ${pathname !== `/${locale}${link.href}` && 'opacity-40'}`}>
              <Link href={`/${locale}${link.href}`}>
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
