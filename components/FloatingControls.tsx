'use client'

import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { useCurrency } from '@/context/CurrencyContext'

export default function FloatingControls() {
  const [langOpen, setLangOpen] = useState(false)
  const [currencyOpen, setCurrencyOpen] = useState(false)

  const activeLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const { currency, setCurrency } = useCurrency()

  const handleLocaleChange = (nextLocale: 'en' | 'es') => {
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <div className="fixed top-5 right-6 z-[60] hidden lg:flex items-center gap-3 bg-[#121412]/80 backdrop-blur-md border border-[#E5C158]/20 px-3 py-1.5 rounded-full shadow-lg text-[10px] tracking-widest uppercase font-light text-white/80">
      
      {/* Language Toggle Swapper */}
      <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
        <button className="flex items-center gap-1.5 py-0.5 px-2 hover:text-[#E5C158] transition-colors">
          <Globe size={12} className="text-[#E5C158]/70" strokeWidth={1.5} />
          <span>{activeLocale}</span>
        </button>
        {langOpen && (
          <div className="absolute right-0 top-full pt-2 w-16">
            <div className="bg-[#121412] border border-[#E5C158]/20 rounded-md overflow-hidden text-center shadow-2xl">
              <button onClick={() => handleLocaleChange('es')} className="block w-full py-1.5 text-white hover:bg-[#E5C158]/10 hover:text-[#E5C158] transition-colors">ES</button>
              <button onClick={() => handleLocaleChange('en')} className="block w-full py-1.5 text-white hover:bg-[#E5C158]/10 hover:text-[#E5C158] transition-colors">EN</button>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Minimal Divider */}
      <div className="w-[1px] h-3 bg-white/10" />

      {/* Currency Toggle Swapper */}
      <div className="relative" onMouseEnter={() => setCurrencyOpen(true)} onMouseLeave={() => setCurrencyOpen(false)}>
        <button className="py-0.5 px-2 hover:text-[#E5C158] transition-colors font-medium">
          {currency}
        </button>
        {currencyOpen && (
          <div className="absolute right-0 top-full pt-2 w-20">
            <div className="bg-[#121412] border border-[#E5C158]/20 rounded-md overflow-hidden text-center shadow-2xl">
              <button onClick={() => setCurrency('MXN')} className="block w-full py-1.5 text-white hover:bg-[#E5C158]/10 hover:text-[#E5C158] transition-colors">MXN ($)</button>
              <button onClick={() => setCurrency('USD')} className="block w-full py-2 text-white hover:bg-[#E5C158]/10 hover:text-[#E5C158] transition-colors">USD ($)</button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}