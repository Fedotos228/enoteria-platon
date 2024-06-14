'use client'

import { ArrowDown } from 'lucide-react'

export default function ScrollBottomButton() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className='absolute bottom-8 border-2 rounded-full p-1 cursor-pointer transition-all hover:scale-110'
      onClick={() => scrollToBottom()}
    >
      <ArrowDown color='white' size={24} strokeWidth={3} />
    </div>
  )
}
