import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header/Header'
import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'
import Providers from './provider'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Enoteria Platon',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${onest.className} overflow-x-hidden`}>
				<Providers>
					<div className='flex flex-col min-h-screen'>
						<Header />
						<main className='flex-1'>{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	)
}
