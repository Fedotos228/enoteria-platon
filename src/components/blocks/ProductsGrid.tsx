"use client"

import useGetProducts from "@/hooks/queries/useGetProducts"
import useScreenSize from "@/hooks/useScreenSize"
import { useEffect, useState } from "react"
import ProductCard from "../cards/ProductCard"
import Grid from "../elements/Grid"
import SectionHeader from "../elements/SectionHeader"

interface IProductGrid {
  gridSize: number
  productsNumber: number
}

export default function ProductsGrid({
  products,
  sectionTitle,
  sectionLink,
  type
}: {
  products?: any[]
  sectionTitle?: string
  sectionLink?: string
  type?: 'similar' | 'usual'
}) {
  const [productsGrid, setProductsGrid] = useState<IProductGrid>({
    gridSize: 4,
    productsNumber: 4,
  })
  const { data } = useGetProducts()
  const { width } = useScreenSize()

  useEffect(() => {
    if (width > 992) {
      setProductsGrid({
        gridSize: 4,
        productsNumber: 4,
      })
    }

    if (width < 992) {
      setProductsGrid({
        gridSize: 3,
        productsNumber: 3,
      })
    }

    if (width < 768) {
      setProductsGrid({
        gridSize: 2,
        productsNumber: 4,
      })
    }

    if (width < 430) {
      setProductsGrid({
        gridSize: 1,
        productsNumber: 4,
      })
    }
  }, [width])

  return products && products.length ? (
    <section>
      <SectionHeader
        title={sectionTitle || "Vinurile noastre"}
        link={sectionLink}
      />

      <Grid gridSize={productsGrid.gridSize}>
        {products
          ?.slice(0, productsGrid.productsNumber)
          .map((product: any) => (
            <ProductCard
              key={product.attributes.slug}
              product={product}
              type="product"
            />
          ))}
      </Grid>
    </section>
  ) : (
    data && data.length && (
      <section>
        <SectionHeader
          title={sectionTitle || "Vinurile noastre"}
          link={sectionLink}
        />

        <Grid gridSize={productsGrid.gridSize}>
          {data
            ?.slice(0, productsGrid.productsNumber)
            .map((product: any) => (
              <ProductCard
                key={product.attributes.slug}
                product={product}
                type="product"
              />
            ))}
        </Grid>
      </section>
    )
  )
}
