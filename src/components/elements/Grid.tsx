import React from 'react'

export default function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-4 gap-5'>
      {children}
    </div>
  )
}
