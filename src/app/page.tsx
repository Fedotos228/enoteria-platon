'use client'
import About from '@/components/blocks/About'
import Founders from '@/components/blocks/Founders'
import Hero from '@/components/blocks/Hero'
import NewsGrid from '@/components/blocks/NewsGrid'
import ProductsGrid from '@/components/blocks/ProductsGrid'
import Container from '@/components/layout/Container'

export default function Home() {
	return (
		<>
			<Hero />
			<Container>
				<About />
				<Founders />
				<ProductsGrid />
				<NewsGrid />
			</Container>
		</>
	)
}
