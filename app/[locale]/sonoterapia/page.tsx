'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { Clock, Users, ArrowRight, Sparkles, Shield, Star } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useCurrency } from '@/context/CurrencyContext'

// Configuración bilingüe y multidivisa exclusiva para Terapias con Cuencos Tibetanos
const sessionsData = [
  {
    name: {
      es: 'Masaje Acústico e Individual',
      en: 'Individual Acoustic Massage'
    },
    level: {
      es: 'Terapia Personalizada',
      en: 'Personalized Therapy'
    },
    duration: '60 min',
    max: 1,
    dropInMXN: 850,
    dropInUSD: 50,
    memberMXN: 700,
    memberUSD: 40,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'Una sesión individual donde los cuencos tibetanos martillados a mano se colocan directamente sobre el cuerpo (centros energéticos y cadenas musculares). La vibración física viaja a través de tus fluidos corporales, realizando un micromasaje celular profundo que descompresiona el estrés físico.',
      en: 'A one-on-one session where hand-hammered Tibetan bowls are placed directly on the body (energy centers and muscle chains). The physical vibration travels through your body fluids, performing a deep cellular micro-massage that decompresses physical stress.'
    },
    schedule: {
      es: ['Previa Cita (Lun a Sáb)', 'Solo con reserva previa'],
      en: ['By Appointment (Mon to Sat)', 'Advance booking required']
    },
  },
  {
    name: {
      es: 'Baño de Sonido Ancestral Grupal',
      en: 'Group Ancestral Sound Bath'
    },
    level: {
      es: 'Todos los niveles',
      en: 'All levels'
    },
    duration: '75 min',
    max: 15,
    dropInMXN: 280,
    dropInUSD: 16,
    memberMXN: 200,
    memberUSD: 12,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'Un viaje meditativo y colectivo en completa inmovilidad. Rodeado por una orquesta armónica de múltiples metales tibetanos de diferentes aleaciones, tus ondas cerebrales se ralentizan de forma natural, induciendo un estado de meditación profunda o sueño consciente reparador.',
      en: 'A collective meditative journey in complete stillness. Surrounded by a harmonic orchestra of multiple Tibetan metals of different alloys, your brainwaves slow down naturally, inducing a state of deep meditation or restful conscious sleep.'
    },
    schedule: {
      es: ['Mié 7:30 PM', 'Vier 6:00 PM', 'Sáb 10:00 AM'],
      en: ['Wed 7:30 PM', 'Fri 6:00 PM', 'Sat 10:00 AM']
    },
  },
  {
    name: {
      es: 'Sincronización & Pranayama Terapéutico',
      en: 'Synchronization & Therapeutic Pranayama'
    },
    level: {
      es: 'Intermedio / Meditación',
      en: 'Intermediate / Meditation'
    },
    duration: '60 min',
    max: 10,
    dropInMXN: 250,
    dropInUSD: 15,
    memberMXN: 180,
    memberUSD: 10,
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'Clase enfocada en el control de la respiración rítmica guiada por los pulsos y batimentos de los cuencos tibetanos. Aprendemos a usar los armónicos metálicos estables para ecualizar el ritmo cardíaco, expandir la capacidad pulmonar y anclar la atención errática.',
      en: 'A class focused on rhythmic breath control guided by the pulses and beats of Tibetan bowls. Learn to use stable metal harmonics to equalize heart rate, expand lung capacity, and anchor erratic attention.'
    },
    schedule: {
      es: ['Mar 8:00 AM', 'Jue 8:00 AM'],
      en: ['Tue 8:00 AM', 'Thu 8:00 AM']
    },
  },
]

// Beneficios enfocados estrictamente en la física vibracional de los cuencos de metal
const benefitsData = [
  { 
    title: { es: 'Ralentización de Ondas Cerebrales', en: 'Brainwave Entrainment' }, 
    desc: { es: 'Los batimentos armónicos guían al cerebro desde el estado Beta (alerta/estrés) hacia ondas Alfa y Theta, induciendo una meditación espontánea.', en: 'The harmonic beats guide the brain from the Beta state (alertness/stress) into Alpha and Theta waves, inducing spontaneous meditation.' } 
  },
  { 
    title: { es: 'Efecto Piezoeléctrico y Óseo', en: 'Piezoelectric & Bone Resonance' }, 
    desc: { es: 'La vibración sónica viaja con alta eficiencia a través de la estructura ósea, estimulando la relajación de fascias y tejidos profundos.', en: 'Sonic vibration travels with high efficiency through the bone structure, stimulating the relaxation of fascias and deep tissues.' } 
  },
  { 
    title: { es: 'Armonización Simpática', en: 'Sympathetic Harmonization' }, 
    desc: { es: 'Desactiva de inmediato el sistema nervioso simpático (lucha o huida) y enciende el parasimpático para permitir la autorreparación orgánica.', en: 'Immediately deactivates the sympathetic nervous system (fight or flight) and ignites the parasympathetic to allow organic self-repair.' } 
  },
]

export default function SoundTherapyPage() {
  const [animate, setAnimate] = useState(false)
  const activeLocale = useLocale() as 'es' | 'en'
  const { currency } = useCurrency()

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="bg-[#0F100F] min-h-screen text-white/80 font-light selection:bg-[#E5C158]/30 selection:text-[#E5C158]">
      
      {/* --- HERO SECTION DE LUJO --- */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[320px] bg-[#E5C158]/5 blur-[140px] rounded-full pointer-events-none opacity-40" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <p className={`font-accent text-[#E5C158] text-2xl mb-3 transition-all duration-1000 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {activeLocale === 'en' ? 'Vibrational Resonance' : 'Resonancia Vibracional'}
          </p>
          <h1 className={`font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 transition-all duration-1000 delay-150 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {activeLocale === 'en' ? <>Tibetan Sound <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">Bowls Therapy</em></> : <>Sonoterapia con <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">Cuencos Tibetanos</em></>}
          </h1>
          <p className="font-body text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {activeLocale === 'en' 
              ? 'We honor the exclusive acoustic medicine of hand-hammered metals from the Himalayas. No synthesizers, no digital tracks — only pure, raw vibration recalibrating your cellular structure.'
              : 'Honramos en exclusiva la medicina acústica de los metales martillados a mano en el Himalaya. Sin sintetizadores, ni pistas digitales — pura vibración física e intencional recalibrando tu estructura celular.'}
          </p>
          <Link 
            href="/calendario"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-sm hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            {activeLocale === 'en' ? 'Book a session' : 'Agendar una sesión'}
          </Link>
        </div>
      </section>

      {/* --- SECCIÓN DE BENEFICIOS ACÚSTICOS --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles size={14} className="text-[#E5C158]" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-medium">
                {activeLocale === 'en' ? 'Acoustic Science' : 'Ciencia Acústica'}
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-light tracking-wide">
              {activeLocale === 'en' ? <>The power of metal <em className="italic text-[#E5C158] font-serif not-italic">resonance</em></> : <>El poder resonante del <em className="italic text-[#E5C158] font-serif not-italic">metal</em></>}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsData.map((benefit) => (
              <div 
                key={benefit.title[activeLocale]} 
                className="p-8 bg-[#161816]/40 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-[#E5C158]/20 transition-all duration-300 text-left"
              >
                <h3 className="font-display text-lg text-white font-light mb-3 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#E5C158] rounded-full shrink-0" />
                  {benefit.title[activeLocale]}
                </h3>
                <p className="text-xs font-light text-white/40 leading-relaxed">{benefit.desc[activeLocale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE SERVICIOS (TARJETAS EDITORIALES CON FOTO REAL) --- */}
      <section className="py-20 border-t border-white/5 relative z-10 bg-[#161816]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium mb-2">
              {activeLocale === 'en' ? 'Our Sanctuary Modalities' : 'Modalidades del Santuario'}
            </p>
            <h2 className="font-display text-3xl text-white font-light tracking-wide">
              {activeLocale === 'en' ? 'Vibrational Formats' : 'Formatos de Armonización'}
            </h2>
          </div>

          <div className="space-y-8">
            {sessionsData.map((cls) => (
              <div 
                key={cls.name[activeLocale]} 
                className="group grid grid-cols-1 lg:grid-cols-12 bg-[#161816]/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#E5C158]/20 shadow-2xl items-center"
              >
                {/* Bloque de imagen de Unsplash */}
                <div className="lg:col-span-4 relative h-60 lg:h-full min-h-[240px] w-full bg-black/20 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                  <img 
                    src={cls.image} 
                    alt={cls.name[activeLocale]} 
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 brightness-[0.7] contrast-[0.95]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#161816]/95 via-transparent to-transparent opacity-90" />
                </div>

                {/* Bloque central de descripción */}
                <div className="lg:col-span-5 p-8 sm:p-10 text-left">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#E5C158] bg-[#E5C158]/5 border border-[#E5C158]/20 px-2.5 py-0.5 rounded-md font-medium">
                    {cls.level[activeLocale]}
                  </span>
                  <h3 className="font-display text-2xl text-white font-light mt-4 mb-3 group-hover:text-[#E5C158] transition-colors duration-300">
                    {cls.name[activeLocale]}
                  </h3>
                  <p className="text-xs font-light text-white/45 leading-relaxed mb-5">{cls.desc[activeLocale]}</p>
                  
                  <div className="flex gap-5 text-xs text-white/40 font-light border-t border-white/5 pt-4">
                    <span className="flex items-center gap-2"><Clock size={13} strokeWidth={1.5} className="text-[#E5C158]" /> {cls.duration}</span>
                    <span className="flex items-center gap-2">
                      <Users size={13} strokeWidth={1.5} className="text-[#E5C158]" /> 
                      {activeLocale === 'en' 
                        ? (cls.max === 1 ? 'Private session' : `Max capacity: ${cls.max} spaces`)
                        : (cls.max === 1 ? 'Sesión individual' : `Cupo máx: ${cls.max} espacios`)}
                    </span>
                  </div>
                </div>

                {/* Bloque derecho de tarifas */}
                <div className="lg:col-span-3 p-8 sm:p-10 bg-black/10 h-full flex flex-col justify-between gap-6 border-t lg:border-t-0 border-white/5 text-left lg:text-right lg:items-end">
                  <div className="flex gap-6 lg:justify-end">
                    <div>
                      <p className="font-display text-2xl text-white font-light">
                        {currency === 'MXN' ? `$${cls.dropInMXN} MXN` : `$${cls.dropInUSD} USD`}
                      </p>
                      <p className="text-[10px] text-white/30 tracking-wider uppercase mt-0.5 font-light">
                        {activeLocale === 'en' ? 'Drop-In' : 'Sesión Suelta'}
                      </p>
                    </div>
                    <div className="w-[1px] h-10 bg-white/5 lg:hidden" />
                    <div>
                      <p className="font-display text-2xl text-[#E5C158] font-light">
                        {currency === 'MXN' ? `$${cls.memberMXN} MXN` : `$${cls.memberUSD} USD`}
                      </p>
                      <p className="text-[10px] text-[#E5C158]/50 tracking-wider uppercase mt-0.5 font-medium">
                        {activeLocale === 'en' ? 'Members' : 'Miembros'}
                      </p>
                    </div>
                  </div>

                  {/* Horarios fluidos */}
                  <div className="flex flex-col gap-1 lg:items-end max-w-xs">
                    {cls.schedule[activeLocale].map((s) => (
                      <span key={s} className="text-[9px] px-2.5 py-1 bg-white/5 border border-white/5 text-white/50 rounded-sm font-light tracking-wide w-max">
                        {s}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href="/calendario"
                    className="inline-flex items-center gap-2 text-xs text-[#E5C158] tracking-widest uppercase font-medium group/link hover:text-white transition-colors"
                  >
                    {activeLocale === 'en' ? 'Book Session' : 'Reservar Sesión'} <ArrowRight size={13} className="transform group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CINTILLO RITUAL DE AMENIDADES --- */}
      <section className="py-14 border-t border-b border-white/5 bg-[#161816]/30 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-5">
            <Star size={12} className="text-[#E5C158]" fill="#E5C158" />
            <p className="font-display text-lg tracking-wider text-white font-light">
              {activeLocale === 'en' ? 'The Vibrational Setup Includes' : 'El Entorno Vibracional Incluye'}
            </p>
            <Star size={12} className="text-[#E5C158]" fill="#E5C158" />
          </div>
          <p className="text-xs font-light text-white/50 leading-relaxed max-w-2xl mx-auto tracking-wide">
            {activeLocale === 'en'
              ? 'Authentic 7-metal hand-hammered Himalayan bowls · Comfort kit (plush organic cotton eye pillows filled with local lavender, memory foam under-knee bolsters, and pure wool therapeutic blankets) · Post-session warm integration tea ritual.'
              : 'Instrumental auténtico de aleación de 7 metales martillados a mano en Nepal · Kit de confort clínico (almohadillas oculares de lavanda orgánica, bolsters ergonómicos bajo rodillas y mantas térmicas de lana pura) · Servicio de té tibetano herbolario caliente para la integración post-vibracional.'}
          </p>
        </div>
      </section>

    </div>
  )
}