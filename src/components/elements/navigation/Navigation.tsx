import { Button } from "@/components/ui/button"
import { NAVIGATION_ITEMS } from "@/constants/navigation"
import { X } from "lucide-react"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from "next/navigation"

interface INavigationProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  screenWidth: number
}

export default function Navigation({
  isOpen,
  setIsOpen,
  screenWidth,
}: INavigationProps) {
  const t = useTranslations("Navigation")
  const pathname = usePathname()

  return (
    <>
      {screenWidth < 767 && (
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-opacity-75 backdrop-blur-md transition-all duration-300 md:hidden ${isOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
        ></div>
      )}
      <nav
        className={`fixed inset-y-0 flex h-full w-full max-w-lg flex-col items-start justify-start gap-6 bg-background pl-10 pt-14 transition-all duration-300 md:relative md:inset-0 md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0 ml:gap-8 ${isOpen ? "right-0" : "-right-full"
          }`}
      >
        {screenWidth < 767 && (
          <Button
            className="absolute right-4 top-[1.4rem] md:hidden"
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
          >
            <X size={24} />
          </Button>
        )}
        {NAVIGATION_ITEMS.map(
          (item, i) =>
            <Link
              href={t(`${item}.href`)}
              onClick={() => setIsOpen(false)}
              key={i}
              className={`text-lg text-foreground transition-colors duration-300 hover:text-bordo-hover md:text-base md:text-background md:text-white ${pathname === t(`${item}.href`) ? "font-semibold !text-bordo" : ""
                }`}
            >
              {t(`${item}.title`)}
            </Link>
        )}
      </nav>
    </>
  )
}
