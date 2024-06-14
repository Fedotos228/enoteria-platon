import { founders } from '@/constants/data'
import Image from 'next/image'

export default function Founders() {
  return (
    <>
      <h2 className='mx-auto text-center mb-6'>Echipa</h2>
      <div className='grid grid-cols-2 gap-5'>
        {
          founders.map(founders => (
            <div className='flex items-center flex-col gap-4 bg-white rounded-2xl p-4 shadow-lg' key={founders.name}>
              <Image
                src={founders.image}
                alt={founders.name}
                width={550}
                height={350}
              />
              <h2>{founders.name}</h2>
              <p>{founders.position}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
