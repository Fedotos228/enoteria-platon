import {
	ICategory,
	IFounders,
	INews,
	IProduct,
	ISocials,
} from '@/types/data.types'

export const news: INews[] = [
	{
		slug: '1-an-de-prezenta-pe-piata-vinurilor',
		title: '1 an de prezență pe piața vinurilor',
		image: '/images/news-img.png',
		description:
			'Astăzi, 5 Octombrie, împlinim 1 an de prezenta pe piața vinurilor. După 1 an de activitate, avem și rezultate: Prezenta pe piața României Prezenta pe piața Austriei Colaborări în Germania Colaborări in Luxemburg 8 vinuri premium 3 medalii internaționale Dar, cel mai important, ATU Winery și-a găsit atâția prieteni noi, încât nu încap intr-o lista! Va mulțumim ca ați crezut in noi și ne susțineți necondiționat!',
	},
	{
		slug: '2-an-de-prezenta-pe-piata-vinurilor',
		title: '2 an de prezență pe piața vinurilor',
		image: '/images/news-img.png',
		description:
			'Astăzi, 5 Octombrie, împlinim 1 an de prezenta pe piața vinurilor. După 1 an de activitate, avem și rezultate: Prezenta pe piața României Prezenta pe piața Austriei Colaborări în Germania Colaborări in Luxemburg 8 vinuri premium 3 medalii internaționale Dar, cel mai important, ATU Winery și-a găsit atâția prieteni noi, încât nu încap intr-o lista! Va mulțumim ca ați crezut in noi și ne susțineți necondiționat!',
	},
]

export const products: IProduct[] = [
	{
		slug: 'enoteria-platon-rosu',
		title: 'Enoteria platon rosu',
		price: 150,
		thumbnail: '/images/wine.png',
		gallery: [
			{
				id: 1,
				url: '/images/swiper1.png',
			},
			{
				id: 2,
				url: '/images/swiper1.png',
			},
			{
				id: 3,
				url: '/images/swiper1.png',
			},
			{
				id: 4,
				url: '/images/swiper1.png',
			},
			{
				id: 5,
				url: '/images/swiper1.png',
			},
			{
				id: 6,
				url: '/images/swiper1.png',
			},
			{
				id: 7,
				url: '/images/swiper1.png',
			},
		],
		discount: 10,
		category: 'rosu',
		description:
			'12 luni și 21 de zile au fost necesare pentru a crea acest sepaj din 3 soiuri de același Calibru: Fetească Neagră, Merlot și Cabernet Sauvignon. Stejarul românesc accentuează stilul autentic urmărit de vinificator- un vin intens, cu arome de vișine coapte, afine, coacăză neagră, simțite în gust și în postgust, completate de ciocolată neagră, piper negru și nuanțe de tabac.',
	},
	{
		slug: 'wine-2',
		title: 'Enoteria platon cuvée rosé',
		price: 50,
		thumbnail: '/images/wine.png',
		category: 'rosé',
	},
	{
		slug: 'wine-3',
		title: 'Château Margaux',
		price: 200,
		thumbnail: '/images/wine.png',
		discount: 5,
		category: 'rosu',
	},
	{
		slug: 'wine-4',
		title: 'Domaine de la Romanée-Conti',
		price: 1500,
		thumbnail: '/images/wine.png',
		discount: 15,
		category: 'rosu',
	},
	{
		slug: 'wine-5',
		title: 'Penfolds Grange',
		price: 850,
		thumbnail: '/images/wine.png',
		category: 'alb',
	},
	{
		slug: 'wine-6',
		title: 'Screaming Eagle Cabernet Sauvignon',
		price: 3000,
		thumbnail: '/images/wine.png',
		discount: 20,
		category: 'rosu',
	},
	{
		slug: 'wine-7',
		title: 'Domaine Leroy Musigny Grand Cru',
		price: 1200,
		thumbnail: '/images/wine.png',
		category: 'alb',
	},
	{
		slug: 'wine-8',
		title: 'Harlan Estate',
		price: 750,
		thumbnail: '/images/wine.png',
		category: 'rosu',
	},
	{
		slug: 'wine-9',
		title: 'Opus One',
		price: 350,
		thumbnail: '/images/wine.png',
		discount: 10,
		category: 'alb',
	},
	{
		slug: 'wine-10',
		title: 'Château Latour',
		price: 600,
		thumbnail: '/images/wine.png',
		category: 'rosu',
	},
]

export const socials: ISocials[] = [
	{
		icon: `/logos/facebook.svg`,
		link: 'https://www.facebook.com',
		alt: 'facebook',
	},
	{
		icon: '/logos/insta.svg',
		link: 'https://www.instagram.com',
		alt: 'instagram',
	},
	{
		icon: '/logos/youtube.svg',
		link: 'https://www.youtube.com',
		alt: 'youtube',
	},
	{
		icon: '/logos/twitter.svg',
		link: 'https://www.twitter.com',
		alt: 'twitter',
	},
]

export const founders: IFounders[] = [
	{
		name: 'Ion Popescu',
		position: 'CEO',
		image: '/images/founder.png',
	},
	{
		name: 'Mihai Ionescu',
		position: 'CTO',
		image: '/images/founder.png',
	},
]

export const categorie: ICategory[] = [
	{
		slug: 'culoare',
		title: 'Coloare',
		subcategories: [
			{
				slug: 'rosu',
				name: 'Roșu',
			},
			{
				slug: 'rosé',
				name: 'Rosé',
			},
			{
				slug: 'alb',
				name: 'Alb',
			},
		],
	},
	{
		slug: 'struguri',
		title: 'Struguri',
		subcategories: [
			{
				slug: 'cabernet-sauvignon',
				name: 'Cabernet Sauvignon',
			},
			{
				slug: 'chardonnay',
				name: 'Chardonnay',
			},
			{
				slug: 'feteasca-neagra',
				name: 'Feteasca Neagra',
			},
			{
				slug: 'feteasca-alba',
				name: 'Feteasca Alba',
			},
			{
				slug: 'feteasca-regala',
				name: 'Feteasca Regala',
			},
			{
				slug: 'merlot',
				name: 'Merlot',
			},
			{
				slug: 'rara-neagra',
				name: 'Rara Neagra',
			},
			{
				slug: 'saperavi',
				name: 'Saperavi',
			},
			{
				slug: 'sauvignon-blanc',
				name: 'Sauvignon Blanc',
			},
			{
				slug: 'viorica',
				name: 'Viorica',
			},
		],
	},
]
