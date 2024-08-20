export default async function sitemap() {
  const getProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    },
  );

  const { data } = await getProducts.json();

  const products = data.map((product: any) => {
    return {
      url: `${process.env.NEXT_PUBLIC_URL}/shop/${product.attributes.slug}`,
      lastModified: product.attributes.updatedAt,
    };
  });

  return [
    {
      url: process.env.NEXT_PUBLIC_URL,
      route: "/",
      payload: {},
      lastModified: new Date(),
    },
    ...products,
  ];
}
