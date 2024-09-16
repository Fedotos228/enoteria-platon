import qs from 'qs'

const slugQuery = qs.stringify({
  fields: ['title', 'slug'],
})

export async function fetchSlugForMeta(req: string, slug: string, locale: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${req}/${slug}?${slugQuery}&locale=${locale}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data for meta")
  }

  return res.json()
}