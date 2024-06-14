import { contacts, navigation } from '@/constants/navigation'
import Image from 'next/image'
import FooterColumn from '../elements/FooterColumn'
import Socials from '../elements/Socials'
import Container from './Container'

export default function Footer() {
  return (
    <div className='bg-[#222024] sm:p-14'>
      <Container>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col justify-between gap-5'>
            <Image
              src={'/logos/logoWhite.svg'}
              alt='logo'
              width={174}
              height={32}
            />
            <Socials />
          </div>
          <div className='flex gap-14'>
            <FooterColumn title='Navigatie' items={navigation} />
            <FooterColumn title='Contacte' items={contacts} />
          </div>
        </div>
        <p className='text-gray-300 text-sm text-center mt-10'>&copy; 2022 Enoteria Platon. Toate drepturile rezervate.</p>
      </Container>
    </div>
  )
}
