export function localeUrl() {
  const pathname = window.location.pathname
  const locale = pathname.split('/')[1]

  return locale
}