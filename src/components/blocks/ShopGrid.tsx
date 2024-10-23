"use client"

import useGetFilteredProducts from "@/hooks/queries/useGetFilteredProducts"
import { useTranslations } from 'next-intl'
import ProductCard from "../cards/ProductCard"
import PaginationComponent from "../elements/PaginationComponent"
import ShopToggler from "../elements/ShopToggler"
import { Skeleton } from "../ui/skeleton"

export default function ShopGrid() {
  const { data, isLoading, isFetched } = useGetFilteredProducts()
  const t = useTranslations("Shop")
  const pagination = data?.meta?.pagination
  const productsData = data?.data

  const loading = isLoading || !isFetched

  const loadingSkeleton = (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-[400px] w-full" />
      ))}
    </div>
  )

  const productsMap = (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
      {productsData?.map((product: any) => (
        <ProductCard
          key={product.attributes.slug}
          product={product}
          type="product"
        />
      ))}
    </div>
  )

  const productsNotFound = (
    <h3 className="mt-14 max-w-full text-center font-medium">
      {t("noProductFound")}
    </h3>
  )

  let content

  if (productsData?.length === 0) {
    content = productsNotFound
  } else if (loading) {
    content = loadingSkeleton
  } else {
    content = productsMap
  }

  return (
    <section className="mt-0">
      <div className="mb-8 flex flex-col items-center justify-between gap-3 xs:flex-row">
        <ShopToggler />
        {pagination ? (
          <p>
            {t("pagination", { total: pagination?.total, pageSize: pagination?.pageSize })}
          </p>
        ) : (
          <Skeleton className="h-6 w-48" />
        )}
      </div>

      {content}

      {content !== productsNotFound && productsData && productsData.length > 8 && (
        <PaginationComponent />
      )}
    </section>
  )
}
