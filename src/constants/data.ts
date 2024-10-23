import {
	ICategory,
	IFounders,
	ISocials,
} from '@/types/data.types'


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
