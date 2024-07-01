import { merchService } from '@/services/merch/merch.service'
import { IPagination } from '@/types/strapi.types'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../cards/ProductCard'
import Loader from '../elements/Loader'
import ShopToggler from '../elements/ShopToggler'
import { Skeleton } from '../ui/skeleton'

export default function MerchShopGrid() {
  const { data: merch, isLoading } = useQuery({
    queryKey: ['merch'],
    queryFn: () => merchService.getAllMerch(),
    select: (data) => data.data,
  })
  const pagination: IPagination = merch?.meta?.pagination

  if (isLoading) return <Loader loading={isLoading} />

  return (
    <div>
      <div className="mb-8 flex flex-col items-center justify-between gap-3 xs:flex-row">
        <ShopToggler />
        {
          pagination ? (
            <p>
              Afișez {pagination?.total} din {pagination?.pageSize} de produse
            </p>
          ) : (
            <Skeleton className="h-6 w-48" />
          )
        }
      </div>
      <div>

      </div>
      {
        merch?.data.length === 0 ? (
          <h3 className="max-w-full text-center font-medium">
            Nu am găsit niciun produs
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
