import { ICategory } from '@/types/data.types'
import { IStrapiMappedResponse } from '@/types/strapi.types'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

type CategoryItemProps = {
  category: IStrapiMappedResponse<ICategory>
  handleSelectCategory: (slug: string) => void
}

export default function CategoryItem({ category, handleSelectCategory }: CategoryItemProps) {
  return (
    <div className="mb-7">
      <h5 className="mb-3">{category.attributes.title}</h5>

      <ul>
        {category?.attributes?.subcategories.data.map(
          (subcategory) => (
            <li
              key={subcategory.id}
              className="mb-3 flex items-center space-x-2"
            >
              <Checkbox
                id={subcategory.attributes.slug}
                className="border border-[#FFFFFF]/80 bg-[#E1D7D3]"
                onClick={() =>
                  handleSelectCategory(subcategory.attributes.slug)
                }
              />
              <Label
                htmlFor={subcategory.attributes.slug}
                className={`${category.attributes.slug === "coloare"
                  ? `circle ${subcategory.attributes.slug}`
                  : ""
                  } text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
              >
                {subcategory.attributes.title}
              </Label>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
