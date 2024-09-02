import { useTranslations } from 'next-intl'
import Link from 'next/link'

type FooterColumnProps = {
  title: string
  items: string[],
  translation?: string
}

export default function FooterColumn({ title, items, translation }: FooterColumnProps) {
  const t = useTranslations(translation)
  if (!items) return null

  return (
    <div>
      <h6 className='text-red-500/70 font-semibold'>{title}</h6>
      <ul className='flex flex-col gap-1 mt-4 space-y-2'>
        {
          translation ? (
            items.map((item, index) => (
              <Link key={index} href={t(`${item}.href`)} className='text-gray-300'>
                {t(`${item}.title`)}
              </Link>
            ))
          ) : (
            items.map((item: any, index) => (
              <Link key={index} href={item.href} className='text-gray-300'>
                {item.title}
              </Link>
            ))
          )
        }
      </ul>
    </div>
  )
}
