"use client"

import Cart from "@/components/elements/Cart"
import Language from '@/components/elements/Language'
import { Button } from "@/components/ui/button"
import useScreenSize from "@/hooks/useScreenSize"
import useScrollPosition from "@/hooks/useScrollPosition"
import { Menu } from "lucide-react"
import { useLocale } from 'next-intl'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"
import Navigation from "../../elements/navigation/Navigation"
import Container from "../Container"
import styles from "./header.module.scss"

export default function Header() {
  const locale = useLocale()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLDivElement | null>(null)
  const scrolPosition = useScrollPosition()
  const { width, height } = useScreenSize()
  const scrolledHeader = scrolPosition > headerRef.current?.offsetHeight!
  const isHome = pathname === `/${locale}`

  function handleScroll() {
    if (headerRef.current) {
      if (isHome) {
        if (scrolPosition > headerRef.current?.offsetHeight!) {
          return styles.headerWhite
        } else {
          return styles.header
        }
      } else {
        return styles.headerWhite
      }
    }
  }

  return (
    <header
      ref={headerRef}
      className={handleScroll()}
    >
      <Container className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={
              scrolledHeader || !isHome
                ? "/logos/logoBlack.svg"
                : "/logos/logoWhite.svg"
            }
            alt="Logo"
            width={width > 992 ? 175 : 145}
            height={height > 992 ? 32 : 32}
          />
        </Link>
        <Navigation
          isOpen={menuOpen}
          setIsOpen={setMenuOpen}
          screenWidth={width}
        />
        <div className="flex items-center gap-3">
          <Language />
          <Cart menuOpen={menuOpen} scrolledHeader={scrolledHeader} />
          {width <= 767 && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-background hover:bg-accent/10 hover:text-accent md:hidden`}
            >
              <Menu size={24} />
            </Button>
          )}
        </div>
      </Container>
    </header>
  )
}
