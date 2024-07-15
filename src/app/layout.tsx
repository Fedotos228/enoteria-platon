import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { Onest } from "next/font/google"
import "./globals.css"
import Providers from "./provider"

const onest = Onest({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Enoteria Platon",
    template: "%s | Enoteria Platon",
  },
  description: "A traditional winery & vineyard, enjoy the experience",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} overflow-x-hidden`}>
        <Providers>
          <div className="toaster">
            <Toaster richColors position="top-center" theme="light" />
          </div>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
