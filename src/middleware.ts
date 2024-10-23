import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { routing } from './i18n/routing'
 

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get('x-your-custom-locale') || 'ro';
 
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);
 
  response.headers.set('x-your-custom-locale', defaultLocale);
 
  return response;
}
 
export const config = {
  matcher: ['/', '/(ro|en|ru)/:path*']
};
