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

  const { title, gallery, thumbnail, subcategories, description, price_mdl, details } =
    product?.attributes

  return (
    <Card className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {gallery.data !== null ? (
          <ProductGallery gallery={gallery.data} />
        ) : (
          thumbnail && (
            <Image
              src={imageStrapUrl(thumbnail, MediaType.Single)}
              alt={title}
              width={580}
              height={590}
            />
          )
        )}
        <ProductSingleDetails
          title={title}
          price={price_mdl}
          description={description}
          subcategories={subcategories}
          details={details}
        />
      </div>
      <ProductsGrid sectionTitle="Produse asemănătoare" />
      {/* TIPA AICI ARUNCI CA PROPS PRODUSELE CARE SA SE AFISEZE */}
      {/* <ProductsGrid products={relatedProducts} sectionTitle='Produse asemănătoare'/> */}
    </Card>
  )
}
