"use client"
import useGetCategories from "@/hooks/queries/useGetCategories"
import useGetFilteredProducts from "@/hooks/queries/useGetFilteredProducts"
import { useActions } from "@/hooks/useActions"
import useScreenSize from "@/hooks/useScreenSize"
import { SlidersHorizontal, TextSearch } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import CategoryItem from '../elements/CategoryItem'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '../ui/sheet'

export default function FilterSidebar() {
  const t = useTranslations("Shop")
  const { data: category } = useGetCategories()
  const { toggleCategory } = useActions()
  const { width } = useScreenSize()
  const { refetch } = useGetFilteredProducts()
  const [openSheet, setOpenSheet] = useState(false)

  const handleSelectCategory = (slug: string) => {
    toggleCategory(slug)

    if (width > 767) refetch()
  }

  const handleMobileSelectCategory = () => {
    refetch()
    setOpenSheet(prev => !prev)
  }

  return width > 767 ? (
    <div>
      <h4 className="mb-4">
        {t("filter")}
      </h4>
      <div>
        {category?.map((categorie) => (
          <CategoryItem key={categorie.id} category={categorie} handleSelectCategory={handleSelectCategory} />
        ))}
      </div>
    </div>
  ) : (
    <>
      <span></span>
      <Sheet open={openSheet} onOpenChange={() => setOpenSheet(prev => !prev)}>
        <SheetTrigger asChild>
          <Button variant="outline" className="gap-3 md:hidden">
            <SlidersHorizontal size={20} />
            {t("filter")}
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="flex-1">
            {category?.map((categorie) => (
              <CategoryItem key={categorie.id} category={categorie} handleSelectCategory={handleSelectCategory} />
            ))}
          </div>
          <SheetFooter className="sticky bottom-0 flex-row gap-2">
            <Button className="flex-1" onClick={() => handleMobileSelectCategory()}>
              <TextSearch size={20} />
              {t("find")}
            </Button>
            {/* <Button variant="outline" size="icon" onClick={clearFilters}>
            <ListRestart size={20} />
          </Button> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
