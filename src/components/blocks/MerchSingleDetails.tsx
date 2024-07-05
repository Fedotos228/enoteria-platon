import { formatMDLPrice } from '@/lib/utils'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

type ColorTypes = {
  id: number,
  title: string,
  hex: string
}

type MerchSingleDetailsProps = {
  title: string
  price: number
  discount: number
  colors: ColorTypes[]
  sizes: {
    id: number,
    name: string
  }[]
}

export default function MerchSingleDetails({
  title,
  price,
  discount,
  colors,
  sizes,
}: MerchSingleDetailsProps) {

  return (
    <div>
      <h4 className="mb-2">{title}</h4>
      <h5 className="mb-6">{formatMDLPrice(price)}</h5>
      <div className='mb-10'>
        <h6 className='text-bordo mb-3'>Culoare</h6>
        <RadioGroup className='flex gap-3'>
          {colors && colors.map((color: ColorTypes) => (
            <RadioGroupItem
              key={color.title}
              id={color.title}
              value={color.title}
              className={`w-6 h-6 rounded-sm text-primary-foreground border ${color.hex === '#FFF' && 'data-[state=checked]:text-black'}`}
              style={{ backgroundColor: color.hex, borderColor: color.hex === '#FFF' ? '#000' : color.hex }}
            />
          ))}
        </RadioGroup>
      </div>
      <div className='mb-12'>
        <h6 className='text-bordo mb-3'>Mărime</h6>
        <RadioGroup className='flex gap-3'>
          {sizes && sizes.map((size) => (
            <div className="flex items-center space-x-2" key={size.id}>
              <RadioGroupItem className='w-6 h-6 rounded-sm transition-all bg-[#CFCFCF] text-primary-foreground data-[state=checked]:bg-[#3B3640] border border-white/70' value={size.name} id={size.name} />
              <Label htmlFor="r1">{size.name}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Button>
        Adaugă în coș
      </Button>
    </div>
  )
}
