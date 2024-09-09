import { Toaster } from "@/components/ui/sonner"
import { importMetadata } from '@/constants/metadata'
import { routing } from '@/i18n/routing'
import type { Metadata } from "next"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { Onest } from "next/font/google"
import './globals.css'
import Providers from "./provider"

const onest = Onest({ subsets: ["latin"] })

export const metadata: Metadata = importMetadata

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode,
  params: {locale: string};
}>) {
  unstable_setRequestLocale(locale);
 
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${onest.className} overflow-x-hidden`}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="toaster">
              <Toaster richColors position="top-center" theme="light" />
            </div>
            <div className="flex min-h-screen flex-col">
              {children}
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
