import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Await the incoming locale parameter safely
  let locale = await requestLocale;
 
  // 2. Validate it against your supported locales, fallback to default if invalid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});