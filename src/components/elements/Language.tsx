'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Loader from './Loader'

interface ILanguages {
  lang: string
  title: string
}

const langs: ILanguages[] = [
  {
    lang: 'ro',
    title: 'RO'
  },
  {
    lang: 'en',
    title: 'EN'
  },
  {
    lang: 'ru',
    title: 'RU'
  }
]

export default function Language() {
  const { replace } = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleLanguage = (lang: string) => {
    const splitedPathname = pathname.split('/')
    splitedPathname[1] = lang

    const newPathname = splitedPathname.join('/')

    replace(newPathname)
  }

  useEffect(() => {
    setTimeout(() => {
      return <Loader />
    }, 2000)
  }, [locale])

  return (
    <>
      {
        langs.map(item => (
          <button
            key={item.lang}
            onClick={() => handleLanguage(item.lang)}
            className={`text-white ${locale === item.lang ? 'font-bold' : 'font-normal'}`}
          >
            {item.title}
          </button>
        ))
      }
    </>
  )
}
