'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Button } from "../ui/button"

type Props = {
  title?: string
  link?: string
}

export default function SectionHeader({ title, link }: Props) {
  const t = useTranslations()
  return (
    title && (
      <div className="mb-5 flex items-center justify-between gap-3">
        <h4 className="text-2xl">{title}</h4>
        {link && (
          <Button>
            <Link href={link}>{t('viewMore')}</Link>
          </Button>
        )}
      </div>
    )
  )
}
