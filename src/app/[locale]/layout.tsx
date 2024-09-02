import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Onest } from "next/font/google"
import './globals.css'
import Providers from "./provider"

const onest = Onest({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Enoteria Platon",
    template: "%s | Enoteria Platon",
  },
  description: "A traditional winery & vineyard, enjoy the experience",
  metadataBase: new URL("https://enoteriaplaton.wine"),
  keywords: ['wine', 'winery', 'vineyard', 'experience', 'vin', 'vin traditional', 'vin rosu', 'vin alb', 'vin spumant', 'vin demisec', 'vin sec', 'vin dulce', 'vin de colectie', 'vin de soi', 'vin de casa', 'vin de calitate', 'vin de import', 'vin de export', 'vin romania', 'Platon', 'Alexandru Platon', 'Mihai Platon'],
  twitter: {
    card: "summary",
    site: "enoteriaplaton.wine",
    creator: "@enoteriaplaton",
  },
  icons: [

  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    images: [
      {
        url: "https://enoteriaplaton.wine/logos/logoPlaton.jpeg",
        width: 800,
        height: 600,
        alt: "Enoteria Platon",
      },
    ]
  },
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode,
  params: {locale: string};
}>) {
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