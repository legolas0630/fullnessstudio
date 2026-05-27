import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localeDetection: false,
  
  pathnames: {
    '/': '/',
    '/experiencias': {
      es: '/experiencias',
      en: '/experiences'
    },
    '/pilates': '/pilates',
    '/calendar': '/calendar',
    '/hiking': '/hiking',
    '/memberships': '/memberships',
    '/sound-therapy': '/sound-therapy',
    '/cacao-ceremony': '/cacao-ceremony',
    '/events': '/events'
  }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);