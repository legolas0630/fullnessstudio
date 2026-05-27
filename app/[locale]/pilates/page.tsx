'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { Clock, Users, ArrowRight, Activity, Star } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useCurrency } from '@/context/CurrencyContext'

// Configuración bilingüe y multidivisa unificada para las clases
const classesData = [
  {
    name: {
      es: 'Pilates Mat — Fundamentos',
      en: 'Pilates Mat — Foundations'
    },
    level: {
      es: 'Principiante / Intermedio',
      en: 'Beginner / Intermediate'
    },
    duration: '55 min',
    max: 12,
    dropInMXN: 220,
    dropInUSD: 12,
    memberMXN: 160,
    memberUSD: 9,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'El punto de partida ideal. Conéctate con los seis principios esenciales de la Contrología clásica: centralización, concentración, control, precisión, respiración y fluidez consciente. Diseñado para construir bases sólidas sobre el mat utilizando tu propia resistencia corporal.',
      en: 'The ideal starting point. Connect with the six essential principles of classical Contrology: centering, concentration, control, precision, breath, and conscious flow. Designed to build solid foundations on the mat using your own body resistance.'
    },
    schedule: {
      es: ['Lun 12:00 PM', 'Mié 9:00 AM', 'Vie 10:00 AM'],
      en: ['Mon 12:00 PM', 'Wed 9:00 AM', 'Fri 10:00 AM']
    },
  },
  {
    name: {
      es: 'Pilates Core & Centro Profundo',
      en: 'Pilates Core & Deep Center'
    },
    level: {
      es: 'Todos los niveles',
      en: 'All levels'
    },
    duration: '55 min',
    max: 12,
    dropInMXN: 250,
    dropInUSD: 15,
    memberMXN: 180,
    memberUSD: 10,
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'Una sesión de alta ingeniería corporal enfocada en activar los estabilizadores más profundos del abdomen, el suelo pélvico y la movilidad descompresiva de la columna vertebral. El complemento anatómico perfecto para cualquier otra modalidad de movimiento.',
      en: 'A high-engineered body session focused on activating the deepest core stabilizers, pelvic floor, and decompressive spinal mobility. The perfect anatomical complement to any other movement modality.'
    },
    schedule: {
      es: ['Mar 6:00 PM', 'Jue 6:00 PM', 'Sáb 12:00 PM'],
      en: ['Tue 6:00 PM', 'Thu 6:00 PM', 'Sat 12:00 PM']
    },
  },
  {
    name: {
      es: 'Pilates Express Dinámico',
      en: 'Dynamic Pilates Express'
    },
    level: {
      es: 'Intermedio / Avanzado',
      en: 'Intermediate / Advanced'
    },
    duration: '45 min',
    max: 10,
    dropInMXN: 200,
    dropInUSD: 12,
    memberMXN: 140,
    memberUSD: 8,
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'Eficiente, retador y enfocado. Una sesión condensada y de ritmo continuo estructurada específicamente para practicantes que dominan los fundamentos y buscan un estímulo de alta calidad muscular y precisión en medio de su jornada laboral.',
      en: 'Efficient, challenging, and focused. A condensed and continuous-tempo session specifically structured for practitioners who master the foundations and seek a high-quality muscular and precision stimulus in the middle of their workday.'
    },
    schedule: {
      es: ['Mié 12:00 PM', 'Vie 12:00 PM'],
      en: ['Wed 12:00 PM', 'Fri 12:00 PM']
    },
  },
  {
    name: {
      es: 'Alquimia: Pilates & Yoga Fusión',
      en: 'Alchemy: Pilates & Yoga Fusion'
    },
    level: {
      es: 'Todos los niveles',
      en: 'All levels'
    },
    duration: '75 min',
    max: 14,
    dropInMXN: 300,
    dropInUSD: 18,
    memberMXN: 220,
    memberUSD: 13,
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'Lo mejor de ambos mundos en perfecta sincronía. Iniciamos la primera mitad esculpiendo e integrando la fuerza inteligente de tu centro mediante secuencias controladas de Pilates, para luego transicionar hacia aperturas somáticas y estiramientos profundos de Yoga.',
      en: 'The best of both worlds in perfect synchronicity. We begin the first half sculpting and integrating the intelligent strength of your core through controlled Pilates sequences, then transition to somatic openings and deep Yoga stretches.'
    },
    schedule: {
      es: ['Lun 6:00 PM', 'Dom 9:00 AM'],
      en: ['Mon 6:00 PM', 'Sun 9:00 AM']
    },
  },
]

// Configuración bilingüe para la sección de beneficios
const benefitsData = [
  { 
    title: { es: 'Fuerza Central Real', en: 'Real Core Strength' }, 
    desc: { es: 'Despierta los estabilizadores abdominales y lumbares internos que el ejercicio tradicional suele ignorar.', en: 'Awaken the deep abdominal and spinal stabilizers most traditional exercises miss.' } 
  },
  { 
    title: { es: 'Alineación Postural', en: 'Postural Alignment' }, 
    desc: { es: 'Reconfigura los patrones posturales mecánicos diarios que detonan contracturas, fatiga y dolor.', en: 'Realign habitual daily postural patterns that trigger contractures, tension, and pain.' } 
  },
  { 
    title: { es: 'Flexibilidad Alargada', en: 'Lengthened Flexibility' }, 
    desc: { es: 'Incrementa el espacio articular y elonga las cadenas musculares sin sobreestirar ligamentos.', en: 'Increase joint space and elongate muscle chains without overstretching ligaments.' } 
  },
  { 
    title: { es: 'Conciencia Somática', en: 'Somatic Awareness' }, 
    desc: { es: 'Desarrolla un mapa mental e intuitivo de cómo se mueve tu cuerpo, perfeccionando tu control motriz.', en: 'Develop an intuitive mental map of how your body moves, perfecting your motor control.' } 
  },
  { 
    title: { es: 'Prevención Biomecánica', en: 'Biomechanical Prevention' }, 
    desc: { es: 'Construye un núcleo balanceado y simétrico que protege tu espalda y articulaciones de lesiones futuras.', en: 'Build a balanced, symmetrical core that protects your back and joints from future injuries.' } 
  },
  { 
    title: { es: 'Liberación de Estrés', en: 'Stress Relief' }, 
    desc: { es: 'El movimiento preciso y enfocado aquieta el flujo de pensamientos con la misma efectividad que la meditación.', en: 'Focused, precise movement quiets the mind as effectively as traditional meditation.' } 
  },
]

export default function PilatesPage() {
  const [animate, setAnimate] = useState(false)
  const activeLocale = useLocale() as 'es' | 'en'
  const { currency } = useCurrency()

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="bg-[#0F100F] min-h-screen text-white/80 font-light selection:bg-[#E5C158]/30 selection:text-[#E5C158]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[320px] bg-[#E5C158]/5 blur-[140px] rounded-full pointer-events-none opacity-40" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <p className={`font-accent text-[#E5C158] text-2xl mb-3 transition-all duration-1000 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {activeLocale === 'en' ? 'The science of control' : 'La ciencia del control'}
          </p>
          <h1 className={`font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 transition-all duration-1000 delay-150 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {activeLocale === 'en' ? <>High-Precision <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">Pilates</em></> : <>Pilates de <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">Alta Precisión</em></>}
          </h1>
          <p className="font-body text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {activeLocale === 'en' 
              ? 'Joseph Pilates defined his method as Contrology: the art of mastering your own body intelligently. Small groups, meticulous biomechanical instruction, and lasting results.'
              : 'Joseph Pilates definió su método como Contrología: el arte de dominar tu propio cuerpo de forma inteligente. Sesiones de cupos limitados, instrucción biomecánica meticulosa y resultados duraderos.'}
          </p>
          <Link 
            href="/calendario"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-sm hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            {activeLocale === 'en' ? 'Book a class' : 'Reserva una clase'}
          </Link>
        </div>
      </section>

      {/* --- BENEFIT SECTION --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Activity size={14} className="text-[#E5C158]" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-medium">
                {activeLocale === 'en' ? 'Anatomical Architecture' : 'Arquitectura Anatomómica'}
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-light tracking-wide">
              {activeLocale === 'en' ? <>Why Pilates changes <em className="italic text-[#E5C158] font-serif not-italic">everything</em></> : <>Por qué Pilates lo cambia <em className="italic text-[#E5C158] font-serif not-italic">todo</em></>}
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

      {/* --- CLASSES SECTION --- */}
      <section className="py-20 border-t border-white/5 relative z-10 bg-[#161816]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium mb-2">
              {activeLocale === 'en' ? 'Lines of Practice' : 'Líneas de Práctica'}
            </p>
            <h2 className="font-display text-3xl text-white font-light tracking-wide">
              {activeLocale === 'en' ? 'Classes in Our Studio' : 'Clases en Nuestro Estudio'}
            </h2>
          </div>

          <div className="space-y-8">
            {classesData.map((cls) => (
              <div 
                key={cls.name[activeLocale]} 
                className="group grid grid-cols-1 lg:grid-cols-12 bg-[#161816]/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#E5C158]/20 shadow-2xl items-center"
              >
                {/* Image block */}
                <div className="lg:col-span-4 relative h-60 lg:h-full min-h-[240px] w-full bg-black/20 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                  <img 
                    src={cls.image} 
                    alt={cls.name[activeLocale]} 
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 brightness-[0.7] contrast-[0.95]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#161816]/95 via-transparent to-transparent opacity-90" />
                </div>

                {/* Main content block */}
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
                      {activeLocale === 'en' ? `Max capacity: ${cls.max} students` : `Cupo máx: ${cls.max} alumnos`}
                    </span>
                  </div>
                </div>

                {/* Price & Schedule block */}
                <div className="lg:col-span-3 p-8 sm:p-10 bg-black/10 h-full flex flex-col justify-between gap-6 border-t lg:border-t-0 border-white/5 text-left lg:text-right lg:items-end">
                  <div className="flex gap-6 lg:justify-end">
                    <div>
                      <p className="font-display text-2xl text-white font-light">
                        {currency === 'MXN' ? `$${cls.dropInMXN} MXN` : `$${cls.dropInUSD} USD`}
                      </p>
                      <p className="text-[10px] text-white/30 tracking-wider uppercase mt-0.5 font-light">
                        {activeLocale === 'en' ? 'Drop-In' : 'Clase Suelta'}
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

                  {/* Schedule badges */}
                  <div className="flex flex-wrap gap-1.5 lg:justify-end max-w-xs">
                    {cls.schedule[activeLocale].map((s) => (
                      <span key={s} className="text-[9px] px-2.5 py-1 bg-white/5 border border-white/5 text-white/50 rounded-sm font-light tracking-wide">
                        {s}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href="/calendario"
                    className="inline-flex items-center gap-2 text-xs text-[#E5C158] tracking-widest uppercase font-medium group/link hover:text-white transition-colors"
                  >
                    {activeLocale === 'en' ? 'Book Session' : 'Agendar Sesión'} <ArrowRight size={13} className="transform group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INCLUSIONS STRIP --- */}
      <section className="py-14 border-t border-b border-white/5 bg-[#161816]/30 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-5">
            <Star size={12} className="text-[#E5C158]" fill="#E5C158" />
            <p className="font-display text-lg tracking-wider text-white font-light">
              {activeLocale === 'en' ? 'Included in your Contrology practice' : 'Incluido en tu práctica de Contrología'}
            </p>
            <Star size={12} className="text-[#E5C158]" fill="#E5C158" />
          </div>
          <p className="text-xs font-light text-white/50 leading-relaxed max-w-2xl mx-auto tracking-wide">
            {activeLocale === 'en'
              ? 'Exclusive rental of high-density non-slip mats · Complete sets of auxiliary props (elastic resistance bands, Pilates magic circles, and support blocks) · Continuous tactical postural monitoring and correction focused on joint health.'
              : 'Préstamo exclusivo de mats de alta densidad antideslizantes · Sets completos de props auxiliares (bandas de resistencia elástica, aros de Pilates o "Magic Circles", y bloques de soporte) · Monitoreo y corrección táctil postural continua enfocada en la salud articular.'}
          </p>
        </div>
      </section>

      {/* --- INVITATION CTA --- */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#E5C158]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-4">
            {activeLocale === 'en' ? 'Ready to structure your core?' : '¿Listo para estructurar tu centro?'}
          </h2>
          <p className="text-xs font-light text-white/40 mb-8 leading-relaxed">
            {activeLocale === 'en'
              ? 'Your first session is just a click away. Receive patient, intuitive guidance within a small, warm group environment.'
              : 'Tu primera sesión está a un clic de distancia. Recibe un acompañamiento paciente e intuitivo dentro de un grupo reducido y cálido.'}
          </p>
          <Link 
            href="/auth/register"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-sm hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            {activeLocale === 'en' ? 'Start your journey' : 'Comienza tu camino'}
          </Link>
        </div>
      </section>

    </div>
  )
}