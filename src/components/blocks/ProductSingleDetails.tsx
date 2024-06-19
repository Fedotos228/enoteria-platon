'use client'

import {
  type BlocksContent,
} from "@strapi/blocks-react-renderer"
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
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
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1)
    }
  }

  return (
    <div>
      <h4 className='mb-2'>{title}</h4>
      <h5 className='mb-3'>{price} lei</h5>
      <p className='text-sm text-gray-400'>In stock</p>
      <div className='flex items-center justify-between my-7'>
        <div className='flex items-center gap-3 w-fit border py-1 px-4 border-gray-300 rounded-full'>
          <button className='text-base' onClick={decrement}>
            <Minus size={16} />
          </button>
          <p className='w-4 text-center'>{quantity}</p>
          <button className='text-base' onClick={increment}>
            <Plus size={16} />
          </button>
        </div>
        <Button>
          Adaugă în coș
        </Button>
      </div>
      <BlockRendererClient
        description={description}
      />
      {/* <ul>
        {subcategories?.data?.map((category: any) => (
          <li key={category?.attributes.slug}>{category.attributes.title}</li>
        ))}
      </ul> */}
    </div>
  )
}
