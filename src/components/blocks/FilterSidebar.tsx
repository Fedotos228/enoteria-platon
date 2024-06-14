'use client'
import { categorie } from '@/constants/data'
import { useState } from 'react'
import { Checkbox } from '../ui/checkbox'

export default function FilterSidebar() {
  const [selected, setSelected] = useState<string[]>([])

  const handleSelectCategory = (slug: string) => {
    if (selected.includes(slug)) {
      setSelected(selected.filter((item) => item !== slug))
    } else {
      setSelected([...selected, slug])
    }
  }

  return (
    <div>
      <h4 className='mb-4'>Filtre</h4>
      <div>
        {
          categorie.map((categorie) => (
            <div key={categorie.slug} className='mb-7'>
              <h5 className='mb-3'>{categorie.title}</h5>

              <ul>
                {
                  categorie.subcategories.map((subcategory) => (
                    <li key={subcategory.slug} className="flex items-center space-x-2 mb-3">
                      <Checkbox id={subcategory.slug} className='bg-[#E1D7D3] border border-[#FFFFFF]/80' onClick={() => handleSelectCategory(subcategory.slug)} />
                      <label
                        htmlFor={subcategory.slug}
                        className={`${categorie.slug === 'culoare' ? `circle ${subcategory.slug}` : ''} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                      >
                        {subcategory.name}
                      </label>
                    </li>
                  ))
                }
              </ul >
            </div>
          ))
        }
      </div>
    </div>
  )
}


{/* <li
  className={` checkbox-control mb-2`}
  key={subcategory.slug}

>
  <input type='checkbox' id={subcategory.slug} onClick={() => handleSelectCategory(subcategory.slug)} />
  <label className={` text-sm`} htmlFor={subcategory.slug}>{subcategory.name}</label>
</li> */}