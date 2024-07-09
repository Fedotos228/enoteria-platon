"use client"
import useGetCategories from "@/hooks/queries/useGetCategories"
import useGetFilteredProducts from "@/hooks/queries/useGetFilteredProducts"
import { useActions } from "@/hooks/useActions"
import useScreenSize from "@/hooks/useScreenSize"
import { useAppSelector } from '@/store/store'
import { SlidersHorizontal, TextSearch } from "lucide-react"
import { useState } from 'react'
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet"

export default function FilterSidebar() {
  const { data: category } = useGetCategories()
  const { toggleCategory } = useActions()
  const subcategory = useAppSelector(state => state.filter.subcategory)
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

  const handleSelectedCategory = (slug: string) => {
    return subcategory.includes(slug) as boolean
  }

  return width > 767 ? (
    <div>
      <h4 className="mb-4">Filtre</h4>
      <div>
        {category?.map((categorie: any) => (
          <div key={categorie.attributes.slug} className="mb-7">
            <h5 className="mb-3">{categorie.attributes.title}</h5>

            <ul>
              {categorie?.attributes?.subcategories.data.map(
                (subcategory: any) => (
                  <li
                    key={subcategory.attributes.slug}
                    className="mb-3 flex items-center space-x-2"
                  >
                    <Checkbox
                      id={subcategory.attributes.slug}
                      className="border border-[#FFFFFF]/80 bg-[#E1D7D3]"
                      onClick={() =>
                        handleSelectCategory(subcategory.attributes.slug)
                      }
                    />
                    <label
                      htmlFor={subcategory.attributes.slug}
                      className={`${categorie.attributes.slug === "coloare"
                        ? `circle ${subcategory.attributes.slug}`
                        : ""
                        } text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                    >
                      {subcategory.attributes.title}
                    </label>
                  </li>
                ),
              )}
            </ul>
          </div>
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
            Filtre
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="flex-1">
            {category?.map((categorie: any) => (
              <div key={categorie.attributes.slug} className="mb-7">
                <h5 className="mb-3">{categorie.attributes.title}</h5>

                <ul>
                  {categorie?.attributes?.subcategories.data.map(
                    (subcategory: any) => (
                      <li
                        key={subcategory.attributes.slug}
                        className="mb-3 flex items-center space-x-2"
                      >
                        <Checkbox
                          id={subcategory.attributes.slug}
                          className="border border-[#FFFFFF]/80 bg-[#E1D7D3]"
                          onClick={() =>
                            toggleCategory(subcategory.attributes.slug)
                          }
                          checked={handleSelectedCategory(subcategory.attributes.slug)}
                        />
                        <label
                          htmlFor={subcategory.attributes.slug}
                          className={`${categorie.attributes.slug === "coloare"
                            ? `circle ${subcategory.attributes.slug}`
                            : ""
                            } text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                        >
                          {subcategory.attributes.title}
                        </label>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
          <SheetFooter className="sticky bottom-0 flex-row gap-2">
            <Button className="flex-1" onClick={() => handleMobileSelectCategory()}>
              <TextSearch size={20} />
              Caută
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

{
  /* <li
  className={` checkbox-control mb-2`}
  key={subcategory.slug}

>
  <input type='checkbox' id={subcategory.slug} onClick={() => handleSelectCategory(subcategory.slug)} />
  <label className={` text-sm`} htmlFor={subcategory.slug}>{subcategory.name}</label>
</li> */
}
