import ScrollBottomButton from '../elements/ScrollBottomButton'

const heroBackground = {
  backgroundImage: 'url(/images/hero.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

export default function Hero() {
  return (
    <div style={heroBackground} className='flex items-center justify-center h-screen w-full'>
      <h1 className='text-4xl text-white'>
        A traditional winery & vineyard, <br />
        enjoy the experience
      </h1>
      <ScrollBottomButton />
    </div>
  )
}