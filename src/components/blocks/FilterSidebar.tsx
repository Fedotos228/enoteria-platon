"use client"
import useGetCategories from "@/hooks/queries/useGetCategories"
import useGetFilteredProducts from "@/hooks/queries/useGetFilteredProducts"
import { useActions } from "@/hooks/useActions"
import useScreenSize from "@/hooks/useScreenSize"
import { SlidersHorizontal, TextSearch } from "lucide-react"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet"

export default function FilterSidebar() {
  const { data: category } = useGetCategories()
  const { toggleCategory, setFilters } = useActions()
  const { width } = useScreenSize()
  const { refetch } = useGetFilteredProducts()

  const handleSelectCategory = (slug: string) => {
    toggleCategory(slug)
    refetch()
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
      <Sheet>
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
            <Button className="flex-1" onClick={() => refetch()}>
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
