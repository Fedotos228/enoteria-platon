'use client'

import {
  type BlocksContent,
} from "@strapi/blocks-react-renderer"
import { useState } from 'react'
import BlockRendererClient from './BlockRendererClient'

type ProductSingleDetailsProps = {
  title: string,
  price: number,
  description: BlocksContent,
  subcategories: any,
}

export default function ProductSingleDetails({ title, price, description, subcategories }: ProductSingleDetailsProps) {
  const [quantity, setQuantity] = useState(0)
  const increment = () => setQuantity(prev => prev + 1)
  const decrement = () => setQuantity(prev => prev + 1)

  return (
    <div>
      <h4>{title}</h4>
      <h5>{price} lei</h5>
      <div className='flex items-center gap-2 w-fit border px-4 border-gray-300 rounded-full'>
        <button onClick={decrement}>-</button>
        <p className='w-4'>{quantity}</p>
        <button onClick={increment}>+</button>
      </div>
      <BlockRendererClient
        description={description}
      />
      <ul>
        {subcategories?.data?.map((category: any) => (
          <li key={category?.attributes.slug}>{category.attributes.title}</li>
        ))}
      </ul>
    </div>
  )
}
