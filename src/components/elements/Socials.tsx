import { socials } from '@/constants/data'
import Image from 'next/image'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className='flex gap-3'>
      {socials.map((social) => (
        <Link href={social.link} key={social.alt} className='flex items-center justify-center border rounded-full p-3 border-white/10 transition-all hover:scale-110'>
          <Image
            src={social.icon}
            alt={social.alt}
            width={19}
            height={19}
          />
        </Link>
      ))}
    </div>
  )
}