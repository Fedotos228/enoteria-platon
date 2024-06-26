import qs from 'qs'

const slugQuery = qs.stringify({
  fields: ['title', 'slug']
})

export async function fetchSlugForMeta(req: string, slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${req}/${slug}?${slugQuery}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}