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
    '/calendario': {
      es: '/calendario',
      en: '/calendar'
    },
    '/senderismo': {
      es: '/senderismo',
      en: '/hiking'
    },
    '/membresias': {
      es: '/membresias',
      en: '/memberships'
    },
    '/sonoterapia': {
      es: '/sonoterapia',
      en: '/sound-therapy'
    },
    '/ceremonia-cacao': {
      es: '/ceremonia-cacao',
      en: '/cacao-ceremony'
    },
    '/eventos': {
      es: '/eventos',
      en: '/events'
    },
    '/auth/login': '/auth/login',
    '/auth/register': '/auth/register'
  }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);