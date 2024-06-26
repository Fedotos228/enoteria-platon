import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Input } from '../ui/input'

export default function NewsLetter() {
  return (
    <Card>
      <CardContent className='py-11 flex justify-between items-center'>
        <div>
          <h2 className='mb-5 leading-[120%]'>Abonați-vă pentru <br /> actualizările ofertei</h2>
          <p>Get the latest news and updates from our team</p>
        </div>
        <form className='flex gap-2 w-full max-w-[50%]'>
          <Input type='email' placeholder='Enter your email' />
          <Button type='submit'>Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  )
}