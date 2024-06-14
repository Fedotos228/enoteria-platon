export interface INavigation {
  title: string
  url: string
}

export const navigation: INavigation[] = [
  {
    title: 'Acasă',
    url: '/'
  },
  {
    title: 'Despre noi',
    url: '/about'
  },
  {
    title: 'Shop',
    url: '/shop'
  },
  {
    title: 'Noutăți',
    url: '/news'
  },
  {
    title: 'Contacte',
    url: '/contact'
  }
]

export const contacts: INavigation[] = [
  {
    title: '+373 6515211',
    url: 'tel:+3736515211'
  },
  {
    title: 'hello@enoteriaplaton.com',
    url: 'mailto:hello@enoteriaplaton.com',
  },
  {
    title: 'str. Mihai Eminescu 12, Chișinău',
    url: 'https://goo.gl/maps/6b9vWmzZ8zJ2'
  }
]

