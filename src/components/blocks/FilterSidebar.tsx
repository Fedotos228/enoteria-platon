'use client'
import useGetCategories from '@/hooks/queries/useGetCategories'
import { useActions } from '@/hooks/useActions'
import { Checkbox } from '../ui/checkbox'

export default function FilterSidebar() {
	const { data: category } = useGetCategories()
	const { toggleCategory, setFilters } = useActions()

	const handleSelectCategory = (slug: string) => {
		toggleCategory(slug)
	}

	console.log(category)

	return (
		<div>
			<h4 className='mb-4'>Filtre</h4>
			<div>
				{category?.map((categorie: any) => (
					<div key={categorie.attributes.slug} className='mb-7'>
						<h5 className='mb-3'>{categorie.attributes.title}</h5>

						<ul>
							{categorie?.attributes?.subcategories.data.map(
								(subcategory: any) => (
									<li
										key={subcategory.attributes.slug}
										className='flex items-center space-x-2 mb-3'
									>
										<Checkbox
											id={subcategory.attributes.slug}
											className='bg-[#E1D7D3] border border-[#FFFFFF]/80'
											onClick={() =>
												handleSelectCategory(
													subcategory.attributes.slug,
												)
											}
										/>
										<label
											htmlFor={
												subcategory.attributes.slug
											}
											className={`${
												categorie.attributes.slug ===
												'coloare'
													? `circle ${subcategory.attributes.slug}`
													: ''
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
