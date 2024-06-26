import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Input } from '../ui/input'

export default function NewsLetter() {
  return (
    <Card>
      <CardContent className='py-10'>
        <h2 className='mb-3'>Abonați-vă pentru <br /> actualizările ofertei</h2>
        <p className='mb-5'>Get the latest news and updates from our team</p>
        <form className='flex gap-2 max-w-[40%]'>
          <Input type='email' placeholder='Enter your email' />
          <Button type='submit'>Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  )
}