"use client"

import useProductBySlug from "@/hooks/queries/useProductBySlug"
import { MediaType, imageStrapUrl } from "@/lib/utils"
import Image from "next/image"
import ProductSingleDetails from "../blocks/ProductSingleDetails"
import ProductsGrid from "../blocks/ProductsGrid"
import Loader from "../elements/Loader"
import ProductGallery from "../elements/ProductGallery"
import { Card } from "../ui/card"

export default function ProductSingle({ slug }: { slug: string }) {
  const { data: product, isLoading } = useProductBySlug(slug)
  if (isLoading) return <Loader loading={isLoading} />

  const { title, gallery, thumbnail } = product?.attributes

  const galleryImages = [
    ...(thumbnail ? [imageStrapUrl(thumbnail, MediaType.Single)] : []),
    ...(gallery?.data ? gallery.data.map((image: any) => imageStrapUrl(image, MediaType.Multiple)) : [])
  ]

  return (
    <Card className="p-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {gallery.data !== null ? (
          <ProductGallery gallery={galleryImages} />
        ) : (
          thumbnail && (
            <Image
              src={imageStrapUrl(thumbnail, MediaType.Single)}
              alt={title}
              width={580}
              height={590}
              className='rounded-[6px] h-[280px] sm:h-[500px] w-full object-contain'
            />
          )
        )}
        <ProductSingleDetails
          product={product?.attributes}
        />
      </div>
      <ProductsGrid sectionTitle="Produse asemănătoare" />
      {/* If you have related products, you can pass them as props */}
      {/* <ProductsGrid products={relatedProducts} sectionTitle='Produse asemănătoare'/> */}
    </Card>
  )
}
