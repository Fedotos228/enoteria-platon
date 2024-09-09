export function localeUrl(url: string) {
  const pathname = window.location.pathname
  const locale = pathname.split('/')[1]

  return `${url}`
}