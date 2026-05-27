'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { useCurrency } from '@/context/CurrencyContext'
import {
  Wind, Music, Leaf, Mountain, Circle, ChevronRight, ArrowRight, Star,
  Clock, Users, Play
} from 'lucide-react'

// --- HERO SECTION -----------------------------------------------------------
function Hero() {
  const [visible, setVisible] = useState(false)
  const t = useTranslations('Hero')

  useEffect(() => { 
    const timer = setTimeout(() => setVisible(true), 100) 
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F100F]">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c2b18]/40 via-[#0F100F] to-[#0F100F] z-0" />

      {/* CENTRAL PULSATING GOLD AURA SOUND WAVES */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none z-0 mix-blend-screen opacity-60">
        <div className="absolute inset-0 rounded-full border border-[#9A7B36]/15 animate-aura-wave" style={{ animationDelay: '0s' }} />
        <div className="absolute w-[80%] h-[80%] top-[10%] left-[10%] rounded-full border border-[#C9A96E]/20 animate-aura-wave" style={{ animationDelay: '1.5s' }} />
        <div className="absolute w-[60%] h-[60%] top-[20%] left-[20%] rounded-full border border-[#E5C158]/25 animate-aura-wave" style={{ animationDelay: '3s' }} />
        <div className="absolute w-[40%] h-[40%] top-[30%] left-[30%] rounded-full border border-[#F3D782]/30 animate-aura-wave" style={{ animationDelay: '4.5s' }} />
      </div>

      {/* Central Breathing Geometries */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-breathe z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#E5C158]/10 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center select-none">
        <p
          className={`font-accent text-[var(--gold)] text-2xl mb-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0ms' }}
        >
          {t('bienvenido')}
        </p>

        <h1
          className={`font-display text-6xl md:text-8xl text-white font-light leading-none mb-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '200ms' }}
        >
          {t('tituloStart')}<br />
          <em className="italic text-[#E5C158] font-serif not-italic">{t('tituloEm')}</em>
        </h1>

        <p
          className={`font-body font-light text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '400ms' }}
        >
          {t('subtitulo')}
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <Link
            href="/auth/register"
            className="inline-flex items-center gap-2 bg-[#E5C158] text-black px-8 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-[#F3D782] active:scale-95 transition-all shadow-[0_4px_20px_rgba(229,193,88,0.2)]"
          >
            {t('btnComenzar')} <ArrowRight size={14} />
          </Link>
          <Link
            href="/calendario"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 text-xs tracking-widest uppercase font-light hover:bg-white/5 active:scale-95 transition-all"
          >
            {t('btnClases')}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/30 font-light">{t('explorar')}</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}

// --- INTRO / PHILOSOPHY BENTO -----------------------------------------------
function Intro() {
  const t = useTranslations('Intro')
  return (
    <section className="py-24 md:py-32 bg-[#0F100F] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bento Text Card */}
          <div className="lg:col-span-7 bg-[#161816] border border-white/5 rounded-2xl p-8 md:p-14 flex flex-col justify-center text-left transition-all hover:border-[#E5C158]/20 duration-500">
            <div className="mb-6 flex items-center gap-3 text-[#E5C158]">
              <span className="text-xs tracking-widest uppercase font-light">{t('filosofia')}</span>
              <div className="w-12 h-[1px] bg-[#E5C158]/30" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6 leading-tight">
              {t('tituloStart')} <em className="italic text-[#E5C158] not-italic">{t('tituloEm')}</em>
            </h2>
            <p className="font-body font-light text-white/60 text-base md:text-lg leading-relaxed">
              {t('descripcion')}
            </p>
          </div>

          {/* Bento Media Image Card */}
          <div className="lg:col-span-5 relative min-h-[320px] rounded-2xl overflow-hidden border border-white/5 group shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
              alt="Meditation Zen Setting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <p className="font-display text-xl text-[#E5C158] italic">Fullness Studio</p>
              <p className="text-[10px] tracking-widest text-white/40 uppercase mt-1">Conexión Interior • México</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// --- ASYMMETRICAL OFFERINGS BENTO GRID --------------------------------------
const offeringsData = [
  { icon: Leaf, labelKey: 'yoga', descKey: 'yogaDesc', href: '/experiencias', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80', span: 'lg:col-span-8', baseUsdPrice: 18 },
  { icon: Circle, labelKey: 'pilates', descKey: 'pilatesDesc', href: '/pilates', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80', span: 'lg:col-span-4', baseUsdPrice: 22 },
  { icon: Music, labelKey: 'terapia', descKey: 'terapiaDesc', href: '/sonoterapia', img: 'https://images.unsplash.com/photo-1603233015219-c187b79dccd7?auto=format&fit=crop&w=800&q=80', span: 'lg:col-span-4', baseUsdPrice: 25 },
  { icon: Wind, labelKey: 'cacao', descKey: 'cacaoDesc', href: '/cacao-ceremony', img: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80', span: 'lg:col-span-4', baseUsdPrice: 35 },
  { icon: Mountain, labelKey: 'senderismo', descKey: 'senderismoDesc', href: '/hiking', img: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80', span: 'lg:col-span-4', baseUsdPrice: 25 },
]

function Offerings() {
  const t = useTranslations('Offerings')
  const { formatPrice } = useCurrency()

  return (
    <section className="py-24 bg-[#121412] px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-left mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-light mb-3">{t('seccion')}</p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light">
            {t('tituloStart')} <em className="italic text-[#E5C158] not-italic">{t('tituloEm')}</em>
          </h2>
        </div>

        {/* Dynamic Bento Grid Layout System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {offeringsData.map((o) => {
            const Icon = o.icon
            return (
             <Link
  key={o.labelKey}
  href={o.href as any} // 👈 Agregamos 'as any' para calmar al validador de TypeScript
  className={`group relative flex flex-col justify-end min-h-[380px] bg-[#161816] rounded-2xl overflow-hidden border border-white/5 hover:border-[#E5C158]/30 transition-all duration-500 shadow-xl ${o.span}`}
>
                {/* Visual Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={o.img}
                    alt={o.labelKey}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-45 group-hover:opacity-55 mix-blend-luminosity group-hover:mix-blend-normal brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F100F] via-[#0F100F]/40 to-transparent z-10" />
                </div>

                {/* Card Elements Body */}
                <div className="relative z-20 p-8 text-left w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-black/40 border border-white/10 rounded-full backdrop-blur-md group-hover:border-[#E5C158]/40 transition-colors duration-300">
                      <Icon size={18} className="text-[#E5C158]" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs bg-[#E5C158]/10 text-[#E5C158] px-3 py-1 rounded-full tracking-wide font-light border border-[#E5C158]/20">
                      {t('desde')} {formatPrice(o.baseUsdPrice)}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl text-white font-light mb-2">{t(o.labelKey)}</h3>
                  <p className="font-body font-light text-white/60 text-sm leading-relaxed mb-5 max-w-xl opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 ease-in-out">{t(o.descKey)}</p>
                  
                  <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#E5C158] group-hover:gap-3 transition-all duration-300">
                    <span>{t('explorar')}</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}

// --- YOGA PREMIUM SPLIT PANEL -----------------------------------------------
function YogaSection() {
  const t = useTranslations('YogaSection')
  return (
    <section className="py-24 md:py-32 bg-[#0F100F] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Asymmetrical Frame Left Block */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#161816]">
              <Image 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Yoga Session"
                fill
                className="object-cover brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Absolute badge overlay */}
            <div className="absolute -bottom-6 -right-6 bg-[#161816]/95 backdrop-blur-md p-6 shadow-2xl border border-[#E5C158]/20 max-w-[240px] rounded-xl text-left">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#E5C158" className="text-[#E5C158]" />
                ))}
              </div>
              <p className="font-display text-xs text-white/90 italic leading-relaxed">"{t('testimonio')}"</p>
              <p className="text-[9px] tracking-wider text-white/40 uppercase mt-2 font-light">— Sarah M.</p>
            </div>
          </div>

          {/* Descriptive Content Layout Panel */}
          <div className="lg:col-span-7 text-left">
            <div className="mb-6 flex items-center gap-3 text-[#E5C158]">
              <span className="text-xs tracking-widest uppercase font-light">{t('tag')}</span>
              <div className="w-12 h-[1px] bg-[#E5C158]/30" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6 leading-tight">
              {t('tituloStart')}<br /><em className="italic text-[#E5C158] not-italic">{t('tituloEm')}</em>
            </h2>
            <p className="font-body font-light text-white/60 leading-relaxed text-base md:text-lg mb-8 max-w-xl">{t('descripcion')}</p>
            <ul className="space-y-4 mb-10 max-w-md">
              {[t('item1'), t('item2'), t('item3')].map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-sm text-white/80 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E5C158] mt-2 shrink-0 shadow-[0_0_8px_#E5C158]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/experiencias" className="inline-flex items-center justify-center bg-[#E5C158] text-black px-8 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#F3D782] active:scale-95 transition-all">{t('btnHorario')}</Link>
              <Link href="/membresias" className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3.5 text-xs uppercase tracking-widest font-light hover:bg-white/5 active:scale-95 transition-all">{t('btnMembresias')}</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// --- PILATES REFORMER MULTI-CARD PANEL --------------------------------------
function PilatesSection() {
  const t = useTranslations('PilatesSection')
  return (
    <section className="py-24 bg-[#121412] px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="order-2 lg:order-1 lg:col-span-7 text-left">
            <div className="mb-6 flex items-center gap-3 text-[#E5C158]">
              <span className="text-xs tracking-widest uppercase font-light">{t('tag')}</span>
              <div className="w-12 h-[1px] bg-[#E5C158]/30" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6 leading-tight">
              {t('tituloStart')}<br /><em className="italic text-[#E5C158] not-italic">{t('tituloEm')}</em>
            </h2>
            <p className="font-body font-light text-white/60 leading-relaxed text-base md:text-lg mb-8 max-w-xl">{t('descripcion')}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl">
              {[
                { icon: Users, label: t('stat1'), sub: t('stat1Sub') },
                { icon: Clock, label: t('stat2'), sub: t('stat2Sub') },
              ].map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="p-5 bg-[#161816] border border-white/5 rounded-xl transition-colors hover:border-white/10">
                    <Icon size={18} className="text-[#E5C158] mb-3" strokeWidth={1.5} />
                    <p className="text-sm font-normal text-white mb-1">{stat.label}</p>
                    <p className="text-xs text-white/40 font-light">{stat.sub}</p>
                  </div>
                )
              })}
            </div>
            <Link href="/pilates" className="inline-flex items-center justify-center bg-transparent border border-[#E5C158] text-[#E5C158] px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#E5C158] hover:text-black active:scale-95 transition-all">
              {t('btn')}
            </Link>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80"
                alt="Mindful Pilates Form"
                fill
                className="object-cover brightness-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// --- COSMIC SOUND THERAPY EXPERIENCES ---------------------------------------
function SoundSection() {
  const t = useTranslations('SoundSection')
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A] px-6 border-b border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F100F] via-[#0A0A0A] to-[#121c2e]/20 z-0" />
      
      {/* Structural Sound Vector Graphics */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0 pointer-events-none">
        <svg width="800" height="400" viewBox="0 0 800 400" className="w-full max-w-4xl">
          {[...Array(25)].map((_, i) => (
            <ellipse key={i} cx="400" cy="200" rx={20 + i * 20} ry={10 + i * 10} stroke="white" strokeWidth="0.5" fill="none" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 text-left">
            <div className="mb-6 flex items-center gap-3 text-[#E5C158]">
              <span className="text-xs tracking-widest uppercase font-light">{t('tag')}</span>
              <div className="w-12 h-[1px] bg-[#E5C158]/30" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6 leading-tight">
              {t('tituloStart')}<br /><em className="italic text-[#E5C158] not-italic">{t('tituloEm')}</em>
            </h2>
            <p className="font-body font-light text-white/60 leading-relaxed text-base md:text-lg mb-8 max-w-xl">{t('descripcion')}</p>
            <Link href="/sonoterapia" className="inline-flex items-center gap-4 group active:scale-98 transition-transform">
              <div className="w-14 h-14 rounded-full border border-[#E5C158]/30 flex items-center justify-center bg-black/40 group-hover:border-[#E5C158] group-hover:shadow-[0_0_15px_rgba(229,193,88,0.2)] transition-all duration-300">
                <Play size={18} className="text-[#E5C158] ml-1" fill="#E5C158" />
              </div>
              <span className="text-xs tracking-widest uppercase text-white/70 group-hover:text-white transition-colors border-b border-white/10 pb-0.5">{t('btnMuestra')}</span>
            </Link>
          </div>

          {/* Interactive Stack Tracklist Panels */}
          <div className="lg:col-span-6 space-y-3 w-full">
            {[t('item1'), t('item2'), t('item3'), t('item4')].map((item, i) => (
              <div key={item} className="flex items-center gap-4 p-5 border border-white/5 bg-[#121412]/60 backdrop-blur-md rounded-xl hover:border-[#E5C158]/20 hover:bg-[#161816]/80 transition-all duration-300 group cursor-pointer text-left">
                <div className="w-9 h-9 rounded-full border border-[#E5C158]/20 flex items-center justify-center shrink-0 bg-black/30 group-hover:border-[#E5C158]/40 transition-colors">
                  <Music size={14} className="text-[#E5C158]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-light text-sm tracking-wide uppercase text-xs">{item}</p>
                  <div className="mt-2.5 h-[2px] bg-white/5 rounded-full overflow-hidden w-full">
                    <div className="h-full bg-gradient-to-r from-[#E5C158] to-transparent rounded-full transition-all duration-500" style={{ width: `${55 + i * 12}%` }} />
                  </div>
                </div>
                <Play size={12} className="text-white/20 group-hover:text-[#E5C158] transform group-hover:scale-110 transition-all" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// --- MYSTICAL CACAO CEREMONY BLOCK ------------------------------------------
function CacaoSection() {
  const t = useTranslations('CacaoSection')
  return (
    <section className="py-28 relative overflow-hidden bg-[#241309] text-white px-6">
      {/* Decorative dark thematic imagery wrapper layers */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image 
          src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1400&q=80" 
          alt="Raw Botanical Cacao Background" 
          fill 
          className="object-cover filter contrast-125"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#241309] to-black/40 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="mb-6">
          <span className="font-accent text-[#E5C158] text-3xl tracking-wide">{t('tag')}</span>
        </div>
        <h2 className="font-display text-5xl md:text-6xl font-light mb-6 leading-tight max-w-2xl">
          {t('tituloStart')}<br /><em className="italic text-[#E5C158] not-italic">{t('tituloEm')}</em>
        </h2>
        <p className="font-body font-light text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{t('descripcion')}</p>
        
        <div className="grid grid-cols-3 gap-6 md:gap-12 w-full max-w-lg mx-auto mb-12 border-y border-white/10 py-6">
          <div>
            <p className="font-display text-3xl text-[#E5C158] font-light">2h</p>
            <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-light mt-1.5">{t('stat1')}</p>
          </div>
          <div className="border-x border-white/5">
            <p className="font-display text-3xl text-[#E5C158] font-light">16</p>
            <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-light mt-1.5">{t('stat2')}</p>
          </div>
          <div>
            <p className="font-display text-3xl text-[#E5C158] font-light">{t('stat3Val')}</p>
            <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-light mt-1.5">{t('stat3')}</p>
          </div>
        </div>

        <Link href="/cacao-ceremony" className="inline-flex items-center justify-center border border-[#E5C158] text-[#E5C158] px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#E5C158] hover:text-black active:scale-95 transition-all">
          {t('btn')}
        </Link>
      </div>
    </section>
  )
}

// --- SUNRISE HIKING CARDS ---------------------------------------------------
function HikingSection() {
  const t = useTranslations('HikingSection')
  return (
    <section className="py-24 md:py-32 bg-[#0F100F] px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-video lg:aspect-[4/5] relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1000&q=80"
                alt="Epic Mountain Trail Peak View"
                fill
                className="object-cover filter brightness-90 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 text-left">
            <div className="mb-6 flex items-center gap-3 text-[#E5C158]">
              <span className="text-xs tracking-widest uppercase font-light">{t('tag')}</span>
              <div className="w-12 h-[1px] bg-[#E5C158]/30" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6 leading-tight">
              {t('tituloStart')}<br /><em className="italic text-[#E5C158] not-italic">{t('tituloEm')}</em>
            </h2>
            <p className="font-body font-light text-white/60 leading-relaxed text-base md:text-lg mb-8 max-w-xl">{t('descripcion')}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-10 max-w-xl">
              {[t('item1'), t('item2'), t('item3'), t('item4')].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/80 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_6px_#E5C158] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/hiking" className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-black active:scale-95 transition-all">
              {t('btn')}
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

// --- INTERACTIVE TIMELINE WEEKLY SCHEDULE -----------------------------------

// --- SCHEDULE DATA SYSTEM ---
const upcomingClassesData = [
  { time: 'Lun 7:00 AM', nameKey: 'c1Name', teacher: 'Katya', spots: 4 },
  { time: 'Lun 9:30 AM', nameKey: 'c2Name', teacher: 'Katya', spots: 12 },
  { time: 'Mar 6:00 PM', nameKey: 'c3Name', teacher: 'Katya', spots: 2 },
  { time: 'Mié 7:30 AM', nameKey: 'c4Name', teacher: 'Katya', spots: 8 },
  { time: 'Jue 8:00 PM', nameKey: 'c5Name', teacher: 'Katya', spots: 6 },
]
function Schedule() {
  const t = useTranslations('Schedule')
  return (
    <section className="py-24 bg-[#121412] px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-light mb-3">{t('seccion')}</p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light">{t('titulo')}</h2>
        </div>

        <div className="space-y-3 mb-10">
          {upcomingClassesData.map((cls) => (
            <div key={cls.time + cls.nameKey} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-[#161816] border border-white/5 rounded-xl hover:border-[#E5C158]/30 transition-all duration-300 group text-left gap-4">
              <div className="flex items-center gap-6">
                <span className="text-xs tracking-widest uppercase text-[#E5C158] font-medium bg-black/40 px-3 py-1.5 rounded border border-[#E5C158]/10 text-center min-w-[120px] shrink-0">{cls.time}</span>
                <div>
                  <p className="font-display text-xl text-white group-hover:text-[#E5C158] transition-colors">{t(cls.nameKey)}</p>
                  <p className="text-xs text-white/40 font-light mt-0.5">{t('con')} {cls.teacher}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6 border-t border-white/5 sm:border-0 pt-4 sm:pt-0">
                <span className={`text-xs font-light tracking-wide ${cls.spots <= 3 ? 'text-amber-500 font-medium' : 'text-white/50'}`}>
                  {cls.spots} {t('lugares')}
                </span>
                <Link
                  href="/calendar"
                  className="text-xs tracking-widest uppercase text-[#E5C158] sm:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium"
                >
                  {t('reservar')} <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/calendario" className="inline-flex items-center justify-center border border-white/10 text-white px-8 py-4 text-xs uppercase tracking-widest font-light hover:bg-white/5 active:scale-95 transition-all">
            {t('btn')}
          </Link>
        </div>

      </div>
    </section>
  )
}

// --- CALL TO ACTION MEMBERSHIPS CARD ----------------------------------------
function MembershipCTA() {
  const t = useTranslations('MembershipCTA')
  return (
    <section className="py-24 md:py-32 bg-[#0F100F] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#E5C158]/20 bg-gradient-to-br from-[#161816] via-[#0F100F] to-[#121c10]/40 p-8 md:p-20 text-center flex flex-col items-center shadow-2xl">
          
          {/* Visual Ambient Decorative Rings */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#E5C158]/5 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-[#E5C158]/5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="mb-6">
            <span className="font-accent text-[#E5C158] text-3xl tracking-wide">{t('tag')}</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light mb-6 leading-tight max-w-2xl">
            {t('tituloStart')}<br />
            <em className="italic text-[#E5C158] not-italic">{t('tituloEm')}</em>
          </h2>
          <p className="font-body font-light text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">{t('descripcion')}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
            <Link href="/membresias" className="inline-flex items-center justify-center bg-[#E5C158] text-black px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#F3D782] active:scale-95 transition-all w-full shadow-lg">
              {t('btn1')}
            </Link>
            <Link href="/auth/register" className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 text-xs uppercase tracking-widest font-light hover:bg-white/5 active:scale-95 transition-all w-full">
              {t('btn2')}
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

// --- MAIN HOME LAYOUT UNIFICATION ------------------------------------------
export default function HomePage() {
  return (
    <div className="w-full bg-[#0F100F]">
      <Hero />
      <Intro />
      <Offerings />
      <YogaSection />
      <PilatesSection />
      <SoundSection />
      <CacaoSection />
      <HikingSection />
      <Schedule />
      <MembershipCTA />
    </div>
  )
}