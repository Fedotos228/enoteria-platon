'use client'

import useScrollPosition from '@/hooks/useScrollPosition'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import Language from '../../elements/Language'
import Navigation from '../../elements/navigation/Navigation'
import Container from '../Container'
import styles from './header.module.scss'

export default function Header() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLDivElement | null>(null)
  const scrolPosition = useScrollPosition()
  const scrolledHeader = scrolPosition > headerRef.current?.offsetHeight!
  const isHome = pathname === '/'

  return (
    <div ref={headerRef} className={isHome ? styles.header : styles.headerWhite}>
      <Container className='flex items-center justify-between'>
        <Link href="/">
          <Image
            src={scrolledHeader || !isHome ? '/logos/logoBlack.svg' : '/logos/logoWhite.svg'}
            alt='Logo'
            width={175}
            height={32}
          />
        </Link>
        <Navigation />
        <Language />
      </Container>
    </div>
  )
}