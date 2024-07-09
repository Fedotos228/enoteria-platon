export interface INavigation {
	title: string
	href: string
}

export const NAVIGATION_ITEMS: INavigation[] = [
	{
		title: 'Acasă',
		href: '/',
	},
	{
		title: 'Despre noi',
		href: '/about',
	},
	{
		title: 'Shop',
		href: '/shop',
	},
	{
		title: 'Noutăți',
		href: '/news',
	},
	{
		title: 'Contacte',
		href: '/contacts',
	},
]

export const contacts: INavigation[] = [
	{
		title: '+373 6515211',
		href: 'tel:+3736515211',
	},
	{
		title: 'hello@enoteriaplaton.com',
		href: 'mailto:hello@enoteriaplaton.com',
	},
	{
		title: 'str. Mihai Eminescu 12, Chișinău',
		href: 'https://goo.gl/maps/6b9vWmzZ8zJ2',
	},
]
