import qs from 'qs'

export const slugQuery = qs.stringify({
  fields: ['title', 'slug']
})

export async function fetchGenerateParams(req: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${req}?${slugQuery}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data to generate params")
  }

  return res.json()
}