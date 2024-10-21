import { useActions } from "@/hooks/useActions"
import { formatMDLPrice } from "@/lib/utils"
import { useTranslations } from 'next-intl'
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "../ui/button"
import {
  ColorTypes,
  ISelectedOptions,
  MerchSingleDetailsProps,
} from "./models/merchSingle.types"

export default function MerchSingleDetails({
  merch,
}: {
  merch: MerchSingleDetailsProps
}) {
  const merchTranslations = useTranslations("Toast.Merch")
  const cartTranslations = useTranslations("Toast.Cart")
  const [selectedOptions, setSelectedOptions] = useState<ISelectedOptions>({
    color: undefined,
    size: undefined,
  })
  const { addToCart } = useActions()

  const handleOptionChange = (type: string, value: any) => {
    setSelectedOptions((prev) => ({ ...prev, [type]: value }))
  }

  const handleAddToCart = () => {
    if (!selectedOptions.color) {
      return toast.warning(merchTranslations("selectColor"))
    }

    if (!selectedOptions.size) {
      return toast.warning(merchTranslations("selectSize"))
    }


    if (selectedOptions.color && selectedOptions.size) {
      const merchOrder = { ...merch, ...selectedOptions }
      addToCart(merchOrder)
      setSelectedOptions({ color: undefined, size: undefined })
      return toast.success(cartTranslations("added"))
    }
  }

  return (
    <div>
      <h4 className="mb-2">{merch.title}</h4>
      <h5 className="mb-6">{formatMDLPrice(Number(merch.price_mdl))}</h5>

      <div className="mb-8">
        <h6 className="mb-3 text-bordo">Culoare</h6>

        <div className="flex flex-wrap items-center gap-3">
          {merch.colors &&
            merch.colors.map((color: ColorTypes) => (
              <div
                key={color.hex}
                onClick={() => handleOptionChange("color", color)}
                style={{ backgroundColor: color.hex }}
                className={`h-12 w-12 cursor-pointer rounded border ring-offset-1 transition-all duration-300 hover:scale-105 ${selectedOptions.color?.id === color.id && "ring-2 ring-bordo"}`}
              ></div>
            ))}
        </div>
      </div>
      <div className="mb-12">
        <h6 className="mb-3 text-bordo">Mărime</h6>
        <div className="flex flex-wrap items-center gap-3">
          {merch.sizes &&
            merch.sizes.map((size) => (
              <div
                key={size.id}
                onClick={() => handleOptionChange("size", size)}
                className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded border p-2 font-semibold transition-all hover:scale-105 ${selectedOptions.size?.id === size.id && "border-bordo bg-bordo text-white"}`}
              >
                {size.name}
              </div>
            ))}
        </div>
      </div>
      <Button onClick={handleAddToCart} size={"lg"}>
        Adaugă în coș
      </Button>
    </div>
  )
}
