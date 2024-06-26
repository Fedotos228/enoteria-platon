import { Card, CardContent } from '../ui/card'

export default function NewsLetter() {
  return (
    <Card>
      <CardContent>
        <h2>Abonați-vă pentru actualizările ofertei</h2>
        <p>Get the latest news and updates from our team</p>
        <form>
          <input type='email' placeholder='Enter your email' />
          <button type='submit'>Subscribe</button>
        </form>
      </CardContent>
    </Card>
  )
}