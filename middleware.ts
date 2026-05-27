import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
 
export default createMiddleware({
  ...routing,
  localeDetection: false // Prevents browser settings from forcing /en automatically
});
 
export const config = {
  matcher: ['/', '/(es|en)/:path*']
};