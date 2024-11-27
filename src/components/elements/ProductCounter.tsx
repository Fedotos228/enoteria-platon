'use client'

import { IPagination } from '@/types/strapi.types'
import { useTranslations } from 'next-intl'

type ProductCounterProps = {
  pagination?: IPagination
}

export default function ProductCounter({ pagination }: ProductCounterProps) {
  const t = useTranslations("Shop")

  return (
    <>
      {pagination && pagination.pageCount > 1 && (
        <p>
          {t("pagination", { total: pagination?.total, pageSize: pagination?.pageSize })}
        </p>
      )}
    </>
  )
}
