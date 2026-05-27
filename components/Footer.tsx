'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="bg-[#0A0A0A] text-white/60 font-light border-t border-[#E5C158]/10 pt-20 pb-8 px-6 selection:bg-[#E5C158]/30 selection:text-[#E5C158] relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
        
        {/* Columna 1: Brand Info Real Metadata */}
        <div className="lg:col-span-4 flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3 select-none">
            <div className="w-9 h-9 border border-[#E5C158]/20 rounded-full flex items-center justify-center bg-black/40">
              <span className="font-display text-lg text-[#E5C158] tracking-wide">F</span>
            </div>
            <div>
              <span className="block font-display text-xl text-white tracking-wider leading-none">Fullness</span>
              <span className="block text-[8px] tracking-[0.3em] uppercase text-white/40 mt-1 font-body">Studio</span>
            </div>
          </div>
          
          <p className="font-display text-base text-white/50 italic max-w-sm leading-relaxed">
            "{t('slogan')}"
          </p>

          <div className="flex flex-col gap-3 text-xs tracking-wide text-white/70 mt-2">
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-[#E5C158] shrink-0 mt-0.5" />
              <span>Camino Antiguo 50, col. Marfil<br />Guanajuato City, Gto. 36250</span>
            </div>
            <a href="https://wa.me/524731721773" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#E5C158] transition-colors group w-max">
              <Phone size={14} className="text-[#E5C158] shrink-0" />
              <span className="group-hover:underline underline-offset-4">+52 (473) 172 1773</span>
            </a>
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-[#E5C158] shrink-0" />
              <span>contacto@fullnessstudio.com</span>
            </div>
          </div>

          {/* Social Links Area */}
          <div className="flex items-center gap-4 mt-2 text-white/40">
            <a href="https://instagram.com/fullnessstudio" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5C158] transition-colors p-1.5 bg-white/5 rounded-full border border-white/5 hover:border-[#E5C158]/30">
              <Instagram size={15} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5C158] transition-colors p-1.5 bg-white/5 rounded-full border border-white/5 hover:border-[#E5C158]/30">
              <Facebook size={15} />
            </a>
            <a href="https://wa.me/524731721773" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5C158] transition-colors p-1.5 bg-white/5 rounded-full border border-white/5 hover:border-[#E5C158]/30">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>

        {/* Columna 2: Experiencias Link Maps */}
        <div className="lg:col-span-2 text-left md:pl-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E5C158] font-medium mb-5">{t('col1')}</p>
          <ul className="space-y-3 text-xs tracking-wider uppercase font-light">
            <li><Link href="/experiencias" className="hover:text-[#E5C158] transition-colors">{t('c1_yoga')}</Link></li>
            <li><Link href="/pilates" className="hover:text-[#E5C158] transition-colors">{t('c1_pilates')}</Link></li>
            <li><Link href="/sonoterapia" className="hover:text-[#E5C158] transition-colors">{t('c1_sonido')}</Link></li>
            <li><Link href="/ceremonia-cacao" className="hover:text-[#E5C158] transition-colors">{t('c1_cacao')}</Link></li>
            <li><Link href="/senderismo" className="hover:text-[#E5C158] transition-colors">{t('c1_senderos')}</Link></li>
          </ul>
        </div>

        {/* Columna 3: Estudio Navigation Maps */}
        <div className="lg:col-span-2 text-left md:pl-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E5C158] font-medium mb-5">{t('col2')}</p>
          <ul className="space-y-3 text-xs tracking-wider uppercase font-light">
            <li><Link href="/calendario" className="hover:text-[#E5C158] transition-colors">{t('c2_cal')}</Link></li>
            <li><Link href="/eventos" className="hover:text-[#E5C158] transition-colors">{t('c2_ev')}</Link></li>
            <li><Link href="/membresias" className="hover:text-[#E5C158] transition-colors">{t('c2_mem')}</Link></li>
          </ul>
        </div>

        {/* Columna 4: Newsletter Premium Block */}
        <div className="lg:col-span-4 text-left">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E5C158] font-medium mb-4">{t('col3')}</p>
          <p className="text-xs text-white/50 leading-relaxed mb-4">{t('col3Sub')}</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white/5 border border-white/10 rounded-sm overflow-hidden focus-within:border-[#E5C158]/50 transition-colors w-full">
            <input 
              type="email" 
              placeholder={t('placeholder')} 
              className="bg-transparent border-none text-xs text-white placeholder-white/20 p-3.5 outline-none flex-1 font-body tracking-wider"
              required 
            />
            <button type="submit" className="bg-[#E5C158] text-black h-full px-5 py-4 hover:bg-[#F3D782] transition-colors active:scale-95 transform shrink-0">
              <ArrowRight size={14} />
            </button>
          </form>
        </div>

      </div>

      {/* Franja Legal Baja / Reloj del Servidor */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-widest uppercase text-white/30">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span>Lun — Vie 6am — 9pm</span>
          <span>Sábado 7am — 7pm</span>
          <span>Domingo 8am — 6pm</span>
        </div>
        <div className="flex items-center gap-6">
          <span>&copy; 2026 Fullness Studio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}