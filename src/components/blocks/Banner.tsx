
type PageHeroProps = {
  title?: string
}

const bannerBackground = {
  backgroundImage: 'url(/images/Banner.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

export default function Banner({ title }: PageHeroProps) {
  return (
    <div style={bannerBackground} className='relative w-full h-44 rounded-2xl mt-5 mb-8'>
      <div className='absolute inset-0 rounded-2xl w-full h-full bg-[#22202499]/40'>
        <h3 className='top-1/2 -translate-y-1/2 text-center max-w-full text-white'>{title}</h3>
      </div>
    </div>
  )
}
