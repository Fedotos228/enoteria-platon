import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'
 
export const routing = defineRouting({
  locales: ['ro', 'en'],
 
  defaultLocale: 'ro'
});
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);