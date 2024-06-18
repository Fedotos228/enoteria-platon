'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Loading({ loading }: { loading: boolean }) {
  useEffect(() => {
    if (loading) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  })

  return (
    <div className="absolute inset-0 flex justify-center items-center h-screen z-50 w-full bg-background">
      <Image
        className="aspect-auto animate-pulse"
        src="/logos/logoBlack.svg"
        width={156}
        height={60}
        alt="logo"
        priority
      />
    </div>
  )
}