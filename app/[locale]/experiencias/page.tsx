'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { useCurrency } from '@/context/CurrencyContext'
import { Clock, Users, ChevronRight, Award, CheckCircle2, ShieldCheck } from 'lucide-react'

const classesData = [
  {
    nameKey: 'hathaName',
    descKey: 'hathaDesc',
    duration: '75 min',
    levelKey: 'lvlTodos',
    maxStudents: 20,
    baseUsdDropIn: 25,
    baseUsdMember: 18,
    schedule: ['Lun 9:30', 'Mié 7:00', 'Vie 9:00', 'Sáb 10:00'],
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    nameKey: 'vinyasaName',
    descKey: 'vinyasaDesc',
    duration: '60 min',
    levelKey: 'lvlInter',
    maxStudents: 18,
    baseUsdDropIn: 25,
    baseUsdMember: 18,
    schedule: ['Lun 7:00', 'Mar 18:00', 'Jue 7:00', 'Sáb 8:00'],
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  },
  {
    nameKey: 'yinName',
    descKey: 'yinDesc',
    duration: '75 min',
    levelKey: 'lvlTodos',
    maxStudents: 20,
    baseUsdDropIn: 25,
    baseUsdMember: 18,
    schedule: ['Mar 19:30', 'Jue 19:00', 'Dom 16:00'],
    img: 'https://images.unsplash.com/photo-1510894347580-fc4d0ff4e39b?auto=format&fit=crop&w=800&q=80'
  },
  {
    nameKey: 'restorativeName',
    descKey: 'restorativeDesc',
    duration: '75 min',
    levelKey: 'lvlTodos',
    maxStudents: 16,
    baseUsdDropIn: 25,
    baseUsdMember: 18,
    schedule: ['Mié 19:30', 'Dom 10:00'],
    img: 'https://images.unsplash.com/photo-1573599222222-38d5d5d5d5d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    nameKey: 'nidraName',
    descKey: 'nidraDesc',
    duration: '60 min',
    levelKey: 'lvlTodos',
    maxStudents: 20,
    baseUsdDropIn: 20,
    baseUsdMember: 15,
    schedule: ['Vie 19:30', 'Dom 18:00'],
    img: 'https://images.unsplash.com/photo-1603233015219-c187b79dccd7?auto=format&fit=crop&w=800&q=80'
  }
]

export default function ExperienciasPage() {
  const t = useTranslations('Experiencias')
  const { formatPrice } = useCurrency()

  return (
    <div className="w-full bg-[#0F100F] min-h-screen text-white select-none">
      
      {/* Premium Hero Section with Pulsating Sound Waves */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-[#121412] to-[#0F100F] border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none mix-blend-screen opacity-30 z-0">
          <div className="absolute inset-0 rounded-full border border-[#E5C158]/20 animate-aura-wave" style={{ animationDelay: '0s' }} />
          <div className="absolute w-[70%] h-[70%] top-[15%] left-[15%] rounded-full border border-[#E5C158]/30 animate-aura-wave" style={{ animationDelay: '2.5s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-light mb-4">{t('heroTag')}</p>
          <h1 className="font-display text-5xl md:text-7xl text-white font-light mb-6 tracking-wide">{t('heroTitulo')}</h1>
          <p className="font-body font-light text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitulo')}
          </p>
        </div>
      </section>

      {/* Classes Bento Grid / Elegant Card Layout */}
      <section className="py-24 bg-[#0F100F] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {classesData.map((cls, i) => (
              <div 
                key={cls.nameKey} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pb-16 ${
                  i < classesData.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                {/* Media left block with elegant frames */}
                <div className="lg:col-span-4 relative min-h-[260px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
                  <Image 
                    src={cls.img}
                    alt={cls.nameKey}
                    fill
                    className="object-cover brightness-75 contrast-105 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Center Core Descriptive Content Panel */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] tracking-widest uppercase text-[#E5C158] font-medium bg-[#E5C158]/5 px-2.5 py-1 border border-[#E5C158]/10 rounded-sm">Yoga</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-[10px] tracking-widest uppercase text-white/40 font-light">{t(cls.levelKey)}</span>
                  </div>
                  
                  <h2 className="font-display text-3xl text-white font-light mb-4 tracking-wide group-hover:text-[#E5C158] transition-colors">{t(cls.nameKey)}</h2>
                  <p className="font-body font-light text-white/60 text-sm leading-relaxed mb-6">{t(cls.descKey)}</p>
                  
                  <div className="flex gap-5 text-xs text-white/40 font-light">
                    <span className="flex items-center gap-2"><Clock size={13} className="text-[#E5C158]/70" /> {cls.duration}</span>
                    <span className="flex items-center gap-2"><Users size={13} className="text-[#E5C158]/70" /> Max {cls.maxStudents} {t('alumnos')}</span>
                  </div>
                </div>

                {/* Right Interactive Schedule & Pricing Summary Card */}
                <div className="lg:col-span-3 flex flex-col justify-between bg-[#161816] border border-white/5 p-6 rounded-2xl shadow-xl text-left hover:border-[#E5C158]/20 transition-colors duration-300">
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-white/30 font-medium mb-3">{t('labelPrecios')}</p>
                    <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4 mb-4">
                      <div>
                        <p className="font-display text-xl text-white font-light">{formatPrice(cls.baseUsdDropIn)}</p>
                        <p className="text-[10px] text-white/40 font-light mt-0.5">{t('claseSuelta')}</p>
                      </div>
                      <div>
                        <p className="font-display text-xl text-[#E5C158] font-medium">{formatPrice(cls.baseUsdMember)}</p>
                        <p className="text-[10px] text-[#E5C158]/60 font-light mt-0.5">{t('labelMiembros')}</p>
                      </div>
                    </div>

                    <p className="text-[9px] tracking-widest uppercase text-white/30 font-medium mb-2.5">{t('labelHorarios')}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cls.schedule.map((s) => (
                        <span key={s} className="text-[10px] px-2.5 py-1 bg-black/40 border border-white/5 text-white/70 font-light rounded-sm tracking-wider">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/calendario" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#E5C158] font-medium group/btn active:translate-x-1 transition-transform">
                    {t('btnReserva')} <ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Master Guide Profile - Katya Section */}
      <section className="py-24 bg-[#121412] px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-light mb-3">{t('guideTag')}</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light">{t('guideTitulo')}</h2>
          </div>
          
          <div className="bg-[#161816] border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:border-[#E5C158]/10 transition-colors duration-500 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-[#E5C158]/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            
            {/* Elegant avatar wrapper overlay */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#E5C158] to-[#F3D782] flex items-center justify-center p-0.5 shrink-0 shadow-[0_0_20px_rgba(229,193,88,0.15)] animate-breathe">
              <div className="w-full h-full rounded-full bg-[#161816] flex items-center justify-center">
                <span className="font-display text-4xl text-[#E5C158] font-light">K</span>
              </div>
            </div>

            <div className="text-left flex-1">
              <h3 className="font-display text-2xl text-white font-light mb-1">Katya</h3>
              <p className="text-[10px] tracking-widest text-[#E5C158] uppercase font-medium mb-4 flex flex-wrap items-center gap-2">
                <Award size={12} /> {t('guideEspecialidad')} • 10 {t('guideAnos')}
              </p>
              <p className="font-body font-light text-white/60 text-sm leading-relaxed max-w-xl">
                {t('guideBio')}
              </p>
              
              {/* Trust Badge Grid Metrics indicators */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5 text-[10px] tracking-wider uppercase font-light text-white/40">
                <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#E5C158]" /> Hatha Flow</div>
                <div className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-[#E5C158]" /> Vinyasa</div>
                <div className="flex items-center gap-1.5"><Award size={12} className="text-[#E5C158]" /> Meditation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}