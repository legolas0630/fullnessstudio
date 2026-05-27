'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown, Instagram, Facebook, Youtube, Globe, Coins } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { useCurrency } from '@/context/CurrencyContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  const t = useTranslations('Header')
  const activeLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const { currency, setCurrency } = useCurrency()

  const navLinks = [
    {
      label: t('experiencias'),
      href: '/experiencias',
      id: 'experiences',
      children: [
        { label: t('yoga'), href: '/experiencias' },
        { label: t('pilates'), href: '/pilates' },
        { label: t('terapiaSonora'), href: '/sound-therapy' },
        { label: t('cacao'), href: '/cacao-ceremony' },
        { label: t('senderismo'), href: '/hiking' },
      ],
    },
    { label: t('calendario'), href: '/calendario' },
    { label: t('eventos'), href: '/eventos' },
    { label: t('membresias'), href: '/membresias' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileDropdownOpen(false)
  }, [pathname])

  const handleLocaleChange = (nextLocale: 'en' | 'es') => {
    router.replace(pathname, { locale: nextLocale })
  }

  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 selection:bg-[#E5C158]/30 selection:text-[#E5C158] ${
        transparent 
          ? 'bg-transparent' 
          : 'bg-[#0F100F]/90 backdrop-blur-md shadow-2xl border-b border-[#E5C158]/10 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:pl-10 lg:pr-40">
          <div className="flex items-center justify-between h-20">

            {/* Logo de la Marca */}
            <Link href="/" className="flex items-center gap-3 group py-2 active:scale-98 transition-transform duration-150 select-none">
              <div className="w-11 h-11 relative rounded-full overflow-hidden flex items-center justify-center border border-[#E5C158]/20 bg-black/50 shadow-lg group-hover:border-[#E5C158] group-hover:shadow-[0_0_20px_rgba(229,193,88,0.35)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E5C158]/0 via-[#E5C158]/5 to-[#E5C158]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                <Image 
                  src="/icon.png" 
                  alt="Fullness Studio Logo" 
                  width={42} 
                  height={42}
                  className="object-contain transform group-hover:scale-105 transition-all duration-500"
                  priority
                />
              </div>
              <div>
                <span className={`block font-display text-xl tracking-wide leading-none transition-colors duration-300 ${
                  transparent ? 'text-white' : 'text-[#E5C158]'
                }`}>
                  Fullness
                </span>
                <span className={`block text-[9px] tracking-[0.25em] uppercase font-body font-light mt-1 transition-colors duration-300 ${
                  transparent ? 'text-white/60' : 'text-white/40'
                }`}>
                  Studio
                </span>
              </div>
            </Link>

            {/* Menú de Navegación de Escritorio */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative" onMouseEnter={() => setOpenDropdown(link.id)} onMouseLeave={() => setOpenDropdown(null)}>
                    {/* Protegido con as any */}
                    <Link href={link.href as any} className={`text-xs tracking-widest uppercase font-light transition-colors duration-200 flex items-center gap-1.5 py-3 select-none active:text-[#E5C158] ${
                      transparent ? 'text-white/80 hover:text-white' : 'text-white/70 hover:text-[#E5C158]'
                    }`}>
                      {link.label}
                      <ChevronDown size={12} className="transition-transform duration-300" style={{ transform: openDropdown === link.id ? 'rotate(180deg)' : 'none', color: openDropdown === link.id ? '#E5C158' : 'currentColor' }} />
                    </Link>
                    {openDropdown === link.id && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-56">
                        <div className="bg-[#121412]/95 border border-[#E5C158]/20 shadow-2xl rounded-lg overflow-hidden backdrop-blur-md animate-fadeIn">
                          {link.children.map((child) => (
                            /* Protegido con as any */
                            <Link key={child.href} href={child.href as any} className="block px-6 py-3.5 text-xs tracking-wider text-white/80 hover:text-[#E5C158] hover:bg-[#E5C158]/5 transition-all duration-150 border-b border-white/5 last:border-0 font-light uppercase active:bg-[#E5C158]/10">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Protegido con as any */
                  <Link key={link.label} href={link.href as any} className={`text-xs tracking-widest uppercase font-light transition-colors duration-200 py-3 active:scale-95 transform ${
                    transparent ? 'text-white/80 hover:text-white' : 'text-white/70 hover:text-[#E5C158]'
                  } ${pathname === link.href ? 'text-[#E5C158] font-normal border-b border-[#E5C158]/40' : ''}`}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Acciones de Escritorio */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/auth/login" className={`text-xs tracking-widest uppercase font-light transition-colors duration-200 active:scale-95 transform ${
                transparent ? 'text-white/80 hover:text-white' : 'text-white/70 hover:text-[#E5C158]'
              }`}>
                {t('iniciarSesion')}
              </Link>
              <Link href="/auth/register" className={`text-xs tracking-widest uppercase px-6 py-3 border transition-all duration-300 rounded-sm active:scale-95 transform ${
                transparent 
                  ? 'border-white/40 text-white hover:bg-white hover:text-black' 
                  : 'border-[#E5C158]/40 text-[#E5C158] hover:bg-[#E5C158] hover:text-black hover:border-[#E5C158] hover:shadow-[0_0_15px_rgba(229,193,88,0.2)]'
              }`}>
                {t('comenzar')}
              </Link>
            </div>

            {/* Botón de Menú Móvil */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="lg:hidden text-white hover:text-[#E5C158] transition-colors duration-200 p-2 active:scale-90 transform"
            >
              {mobileOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú Lateral Móvil */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        
        <div className={`absolute right-0 top-0 h-full w-85 bg-[#0F100F]/95 backdrop-blur-xl border-l border-[#E5C158]/10 shadow-2xl transition-transform duration-500 flex flex-col justify-between ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          <div className="p-8 pt-24 overflow-y-auto flex-1 selection:bg-[#E5C158]/30 selection:text-[#E5C158]">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="border-b border-white/5 pb-2 mb-2">
                    <div className="w-full flex items-center justify-between text-left">
                      {/* Protegido con as any */}
                      <Link 
                        href={link.href as any}
                        className="py-3 font-display text-xl text-white/90 active:text-[#E5C158] tracking-wide uppercase flex-1"
                      >
                        {link.label}
                      </Link>
                      <button 
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="py-3 px-4 text-[#E5C158] active:scale-90 transform transition-transform"
                      >
                        <ChevronDown size={18} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    
                    <div className={`transition-all duration-300 overflow-hidden ${mobileDropdownOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-black/30 border-l border-[#E5C158]/30 rounded-r-md ml-1 pl-4 flex flex-col gap-1.5">
                        {link.children.map((child) => (
                          /* Protegido con as any */
                          <Link key={child.href} href={child.href as any} className="block py-2.5 text-sm font-light text-white/70 active:text-[#E5C158] active:translate-x-1 transform transition-all uppercase tracking-widest">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Protegido con as any */
                  <Link key={link.label} href={link.href as any} className="block py-3.5 font-display text-xl text-white hover:text-[#E5C158] active:text-[#E5C158] active:translate-x-1 transform transition-all border-b border-white/5 uppercase tracking-wide">
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Área de Control Inferior Reestructurada con Iconos Premium */}
          <div className="p-8 bg-[#0A0A0A]/90 border-t border-[#E5C158]/10 backdrop-blur-md flex flex-col gap-6">
            <div className="flex items-center justify-around bg-black/40 py-3.5 rounded-xl border border-white/5 text-xs tracking-widest text-white/80 shadow-inner px-4">
              <div className="flex items-center gap-2.5">
                <Globe size={14} className="text-[#E5C158]/80" strokeWidth={1.5} />
                <button onClick={() => handleLocaleChange(activeLocale === 'es' ? 'en' : 'es')} className="font-medium underline underline-offset-4 uppercase text-white/90 active:scale-90 transform transition-transform">{activeLocale}</button>
              </div>
              <div className="w-[1px] h-4 bg-white/10" />
              <div className="flex items-center gap-2.5">
                <Coins size={14} className="text-[#E5C158]/80" strokeWidth={1.5} />
                <button onClick={() => setCurrency(currency === 'MXN' ? 'USD' : 'MXN')} className="font-medium underline underline-offset-4 text-white/90 active:scale-90 transform transition-transform">{currency}</button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/auth/login" className="text-center py-3.5 border border-white/20 rounded-sm text-xs tracking-widest uppercase text-white font-light hover:border-white active:bg-white/5 transition-all">
                {t('iniciarSesion')}
              </Link>
              <Link href="/auth/register" className="text-center py-3.5 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black font-semibold rounded-sm text-xs tracking-widest uppercase hover:opacity-90 active:scale-98 transform transition-all shadow-[0_4px_20px_rgba(229,193,88,0.25)]">
                {t('comenzar')}
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 pt-2 text-white/40">
              <a href="https://instagram.com/fullnessstudio" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5C158] active:scale-90 transform transition-all p-1">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5C158] active:scale-90 transform transition-all p-1">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="https://wa.me/524731721773" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5C158] active:scale-90 transform transition-all p-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}