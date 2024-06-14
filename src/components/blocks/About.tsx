import Image from 'next/image'
import { Button } from '../ui/button'

export default function About() {
  return (
    <section className='flex items-center gap-5'>
      <Image
        src='/images/about1.jpg'
        alt='Vineyard'
        width={315}
        height={315}
      />
      <div>
        <h2 className='mb-5'>Read about the amazing story behind our vineyards</h2>
        <p className='mb-5'>Immerse yourself in the enchanting narrative of our vineyards, where each grape carries a tale of passion, resilience, and dedication. Our story unfolds across generations, intertwining the artistry of winemaking with the rich tapestry of our land.</p>
        <Button>
          Despre noi
        </Button>
      </div>
    </section>
  )
}
