import { merchService } from '@/services/merch/merch.service'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import ProductCard from '../cards/ProductCard'
import Loader from '../elements/Loader'
import ProductCounter from '../elements/ProductCounter'
import ShopToggler from '../elements/ShopToggler'

export default function MerchShopGrid() {
  const { data: merch, isLoading } = useQuery({
    queryKey: ['merch'],
    queryFn: () => merchService.getAllMerch(),
    select: (data) => data.data,
  })
  const pagination = merch?.meta?.pagination
  const t = useTranslations("Shop")

  if (isLoading) return <Loader loading={isLoading} />

  return (
    <div>
      <div className="mb-8 flex flex-col items-center justify-between gap-3 xs:flex-row">
        <ShopToggler />
        <ProductCounter pagination={pagination}/>
      </div>
      <div>

      </div>
      {
        merch?.data.length === 0 ? (
          <h3 className="max-w-full text-center font-medium">
            {t("noProductFound")}
          </h3>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
            {merch?.data.map((product: any) => (
              <ProductCard key={product.attributes.slug} product={product} type='merch' />
            ))}
          </div>
        )
      }
    </div>
  )
}
