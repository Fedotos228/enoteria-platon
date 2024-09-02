'use client'

import { useTranslations } from 'next-intl'
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"

const background = {
  backgroundImage: "url(/images/White.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

export default function NewsLetter() {
  const t = useTranslations("NewsLetter")

  return (
    <Card style={background}>
      <CardContent className="flex flex-col items-start justify-between gap-5 py-11 md:flex-row md:items-center">
        <div>
          <h2 className="mb-3 leading-[130%] md:mb-5" dangerouslySetInnerHTML={{ __html: t.raw('title') }}></h2>
          <p>{t("description")}</p>
        </div>
        <form className="flex w-full max-w-full flex-col gap-2 xxs:flex-row md:max-w-[50%]">
          <Input type="email" placeholder={t('email')} />
          <Button type="submit">{t('subscribe')}</Button>
        </form>
      </CardContent>
    </Card>
  )
}
