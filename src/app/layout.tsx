import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { Onest } from "next/font/google"
import './[locale]/globals.css'
import Providers from "./[locale]/provider"

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
