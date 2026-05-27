import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { CurrencyProvider } from '@/context/CurrencyContext'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import FloatingControls from '@/components/FloatingControls'
import Footer from '@/components/Footer'
import './globals.css'

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

// Dynamic Metadata Generation to synchronize browser tab titles perfectly
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Hero' })
  
  return {
    title: `Fullness Studio | ${locale === 'es' ? 'Plenitud' : t('tituloEm')}`,
    description: t('subtitulo'),
    icons: {
      icon: '/icon.png', // Explicitly forces your gold icon to override old cached favicons
    }
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className="antialiased bg-[#0F100F] text-white">
        <NextIntlClientProvider messages={messages}>
          <CurrencyProvider>
            <Preloader />
            <FloatingControls />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}