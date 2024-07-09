import { INavigation } from '@/constants/navigation'
import Link from 'next/link'

type FooterColumnProps = {
  title: string
  items: INavigation[]
}

export default function FooterColumn({ title, items }: FooterColumnProps) {
  if (!items) return null
  return (
    <div>
      <h6 className='text-red-500/70 font-semibold'>{title}</h6>
      <ul className='flex flex-col gap-1 mt-4 space-y-2'>
        {items.map((item, index) => (
          <Link key={index} href={item.href} className='text-gray-300'>
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
