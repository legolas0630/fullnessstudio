'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { Calendar, Users, Clock, Heart, Sparkles, HelpCircle, ChevronDown, ArrowRight } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useCurrency } from '@/context/CurrencyContext'

// Configuración bilingüe de los elementos ceremoniales
const ceremonialElements = [
  { 
    title: { es: 'Cacao Sagrado Ancestral', en: 'Sacred Ancestral Cacao' }, 
    desc: { es: 'Seleccionamos cacao criollo puro de grado ceremonial cultivado de forma ética y sostenible, preparado artesanalmente con intención, rezos y hierbas medicinales.', en: 'We select pure ceremonial-grade heirloom cacao, ethically and sustainably grown, crafted by hand with intention, prayers, and medicinal herbs.' } 
  },
  { 
    title: { es: 'Círculo de Apertura & Altar', en: 'Opening Circle & Altar' }, 
    desc: { es: 'Iniciamos honrando las direcciones, compartiendo intenciones individuales e introduciendo una meditación de enraizamiento para crear un contenedor seguro de presencia.', en: 'We begin by honoring the directions, sharing personal intentions, and introducing a grounding meditation to build a secure space of presence.' } 
  },
  { 
    title: { es: 'Trabajo de Respiración Somática', en: 'Somatic Breathwork' }, 
    desc: { es: 'Prácticas guiadas de pranayama y respiración consciente para activar la circulación, amplificar las bondades del cacao y abrir tu campo energético.', en: 'Guided pranayama and conscious breathing practices to activate circulation, amplify the cacaos benefits, and open your energy field.' } 
  },
  { 
    title: { es: 'Música Medicina & Viaje', en: 'Medicine Music & Journey' }, 
    desc: { es: 'Cantos sagrados, frecuencias e instrumentación en vivo (gong, tambor y flauta) acompañan al grupo a través de olas de liberación emocional, claridad y alegría interior.', en: 'Sacred chants, frequencies, and live instrumentation (gong, drum, and flute) guide the group through waves of emotional release, clarity, and inner joy.' } 
  },
  { 
    title: { es: 'Círculo de Palabra', en: 'Sharing Circle' }, 
    desc: { es: 'Un espacio sostenido y amoroso para expresar los movimientos internos y revelaciones surgidas durante el trance, siendo atestiguado y honrado por la comunidad.', en: 'A supportive, loving space to express the inner movements and insights that arose during the trance, witnessed and honored by the community.' } 
  },
  { 
    title: { es: 'Integración Somática', en: 'Somatic Integration' }, 
    desc: { es: 'Movimientos anatómicos muy suaves y una sesión de escritura intuitiva (journaling) para aterrizar y anclar firmemente la experiencia en tu cuerpo y mente.', en: 'Gentle anatomical movements and intuitive journaling to ground and firmly anchor the experience into your body and mind.' } 
  },
]

// Fechas ajustadas estrictamente al año 2026 con montos fijos balanceados
const upcomingMeetings = [
  { day: '7', month: { es: 'Junio', en: 'June' }, theme: { es: 'Luna Nueva — Siembra de intenciones y nuevos comienzos', en: 'New Moon — Setting intentions and new beginnings' }, spots: 6, total: 16, priceMXN: 650, memberMXN: 450, priceUSD: 40, memberUSD: 28 },
  { day: '21', month: { es: 'Junio', en: 'June' }, theme: { es: 'Solsticio de Verano — Celebración de la abundancia y luz', en: 'Summer Solstice — Celebration of abundance and light' }, spots: 10, total: 16, priceMXN: 650, memberMXN: 450, priceUSD: 40, memberUSD: 28 },
  { day: '5', month: { es: 'Julio', en: 'July' }, theme: { es: 'Luna Nueva — Alquimia de liberación y renovación', en: 'New Moon — Alchemy of release and renewal' }, spots: 14, total: 16, priceMXN: 650, memberMXN: 450, priceUSD: 40, memberUSD: 28 },
  { day: '19', month: { es: 'Julio', en: 'July' }, theme: { es: 'Luna Llena — Cosecha espiritual y plenitud del ser', en: 'Full Moon — Spiritual harvest and fullness of being' }, spots: 8, total: 16, priceMXN: 650, memberMXN: 450, priceUSD: 40, memberUSD: 28 },
]

// Preguntas frecuentes adaptadas y clarificadas
const faqsData = [
  { 
    q: { es: '¿Es seguro consumir cacao ceremonial?', en: 'Is ceremonial cacao safe to consume?' }, 
    a: { es: 'Completamente. El cacao ceremonial puro es un súper alimento denso en nutrientes, no un compuesto psicodélico. Abre suavemente el sistema cardiovascular. Las únicas contraindicaciones relativas o dosis bajas aplican si tomas antidepresivos severos (MAOIs), padeces afecciones cardíacas graves o estás en embarazo avanzado. Infórmanos al llegar.', en: 'Completely. Pure ceremonial cacao is a nutrient-dense superfood, not a psychedelic compound. It gently opens the cardiovascular system. The only relative contraindications or low-dose recommendations apply if you take severe antidepressants (MAOIs), suffer from serious heart conditions, or are in late pregnancy. Please inform us upon arrival.' } 
  },
  { 
    q: { es: '¿Qué tipo de sensaciones experimentaré?', en: 'What will I feel during the ceremony?' }, 
    a: { es: 'El cacao contiene teobromina, un estimulante natural y tierno que eleva los niveles de dopamina y serotonina sin generar la ansiedad del café. Sentirás un sutil calor corporal, una oleada de euforia noble, expansión emocional y enfoque agudo. Puede evocar tanto el llanto catártico como la risa o una profunda y pacífica introspección.', en: 'Cacao contains theobromine, a gentle and natural stimulant that elevates dopamine and serotonin levels without the jittery anxiety of coffee. You will feel a subtle body warmth, a wave of gentle euphoria, emotional expansion, and sharp focus. It can evoke cathartic crying, laughter, or deep, peaceful introspection.' } 
  },
  { 
    q: { es: '¿Requiero experiencia previa en meditación?', en: 'Do I need any prior experience?' }, 
    a: { es: 'Ninguna. Nuestras ceremonias reciben con infinito amor tanto a buscadores que asisten por primera vez como a practicantes avanzados. Nuestros facilitadores calificados estructuran un espacio seguro, inclusivo y sumamente cuidado.', en: 'None at all. Our ceremonies welcome with infinite love both first-time seekers and advanced practitioners. Our qualified facilitators structure a safe, inclusive, and highly supported environment.' } 
  },
  { 
    q: { es: '¿Qué indumentaria u objetos debo traer?', en: 'What should I bring with me?' }, 
    a: { es: 'Te sugerimos vestir ropa cómoda y holgada que te permita sentarte en el suelo, traer un cuaderno personal para anotaciones intuitivas y un amuleto u objeto especial si deseas cargarlo en el altar. Nosotros proveemos colchonetas de felpa, cojines y la infusión ceremonial.', en: 'We suggest wearing comfortable, loose clothing suitable for sitting on the floor, bringing a personal journal for intuitive writing, and an amulet or special object if you wish to charge it on the altar. We provide plush mats, cushions, and the ceremonial infusion.' } 
  },
  { 
    q: { es: '¿Cómo debo preparar mi cuerpo previamente?', en: 'How should I prepare beforehand?' }, 
    a: { es: 'Para optimizar la asimilación del cacao, te recomendamos ingerir alimentos ligeros de 3 a 4 horas antes de la sesión, evitar el consumo de alcohol o cafeína el día de la ceremonia y venir con una intención clara o una pregunta honesta que desees explorar.', en: 'To optimize cacaos absorption, we recommend eating lightly 3 to 4 hours before the session, avoiding alcohol or caffeine on the day of the ceremony, and arriving with a clear intention or an honest question you wish to explore.' } 
  },
]

export default function CacaoCeremonyPage() {
  const [animate, setAnimate] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const activeLocale = useLocale() as 'es' | 'en'
  const { currency } = useCurrency()

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="bg-[#0F100F] min-h-screen text-white/80 font-light selection:bg-[#E5C158]/30 selection:text-[#E5C158]">
      
      {/* --- HERO SECTION DE LUJO --- */}
      <section className="relative pt-36 pb-24 overflow-hidden border-b border-white/5">
        {/* Geometría Sagrada Reflectiva de Fondo */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 800 800" className="w-[600px] h-[600px] text-[#E5C158]">
            <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M100,400 Q400,100 700,400 Q400,700 100,400" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        {/* Aura Dorada Elíptica */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#E5C158]/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-5">
            <div className="w-12 h-12 rounded-full border border-[#E5C158]/30 bg-[#E5C158]/5 flex items-center justify-center text-[#E5C158] shadow-lg animate-pulse">
              <Heart size={20} strokeWidth={1.2} fill="#E5C158" className="opacity-80" />
            </div>
          </div>
          <p className={`font-accent text-[#E5C158] text-2xl mb-3 transition-all duration-1000 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {activeLocale === 'en' ? 'Sacred Plant Medicine' : 'Medicina Vegetal'}
          </p>
          <h1 className={`font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 transition-all duration-1000 delay-150 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {activeLocale === 'en' ? <>Ceremonial <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">Cacao Ritual</em></> : <>Ceremonia de <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">Cacao Sagrado</em></>}
          </h1>
          <p className="font-body text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            {activeLocale === 'en'
              ? 'An ancient medicine for heart expansion. A modern circle of profound connection. Arrive with your questions, your transformations, or your deep gratitude — and let the spirit of Mama Cacao nurture the rest.'
              : 'Un antiguo ritual ancestral para la apertura del corazón. Un círculo moderno de profunda reconexión. Ven con tus preguntas, tus procesos o tu profunda gratitud — y permite que el espíritu de Mama Cacao sostenga el resto.'}
          </p>
          <a 
            href="#meetings"
            className="inline-flex items-center justify-center border border-[#E5C158]/40 text-[#E5C158] hover:bg-[#E5C158] hover:text-black px-8 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 shadow-lg"
          >
            {activeLocale === 'en' ? 'View Upcoming Circles' : 'Ver Próximos Encuentros'}
          </a>
        </div>
      </section>

      {/* --- SECCIÓN SEGUNDA: QUÉ ESPERAR (BENTO GRID CON IMAGEN EDITORIAL) --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-[#E5C158]" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-medium">El Itinerario Sagrado</p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white font-light tracking-wide">
                {activeLocale === 'en' ? <>What to <em className="italic text-[#E5C158] font-serif not-italic">expect</em></> : <>Qué podemos <em className="italic text-[#E5C158] font-serif not-italic">esperar</em></>}
              </h2>
              <p className="text-xs font-light text-white/40 mt-3 max-w-xl leading-relaxed">
                {activeLocale === 'en'
                  ? 'Every gathering evolves uniquely based on group resonance, but each circle is safely guided through these foundational ceremonial pillars.'
                  : 'Cada encuentro evoluciona de manera única según la vibración del círculo, pero cada sesión es guiada de forma segura a través de estos pilares ceremoniales.'}
              </p>
            </div>
            
            {/* Imagen Editorial Destacada de Unsplash */}
            <div className="lg:col-span-5 h-44 lg:h-32 w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80" 
                alt="Cacao Ritual Setup" 
                className="w-full h-full object-cover brightness-[0.5] contrast-[1.05] hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F100F] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ceremonialElements.map((el, i) => (
              <div key={el.title[activeLocale]} className="p-8 bg-[#161816]/40 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-[#E5C158]/25 transition-all duration-300 text-left">
                <span className="font-display text-3xl text-[#E5C158]/30 font-light mb-3 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg text-white font-light mb-2.5 group-hover:text-[#E5C158]">
                  {el.title[activeLocale]}
                </h3>
                <p className="text-xs font-light text-white/40 leading-relaxed">
                  {el.desc[activeLocale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN TERCERA: PRÓXIMAS FECHAS (FILAS INTEGRADAS CON DIVISAS) --- */}
      <section id="meetings" className="py-20 border-t border-white/5 relative z-10 bg-[#161816]/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium mb-2">Comunidad en Unión</p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-light tracking-wide">
              {activeLocale === 'en' ? 'Upcoming Ceremonies' : 'Próximas Ceremonias'}
            </h2>
          </div>

          <div className="space-y-4">
            {upcomingMeetings.map((c) => {
              const currentPrice = currency === 'MXN' ? c.priceMXN : c.priceUSD;
              const currentMember = currency === 'MXN' ? c.memberMXN : c.memberUSD;

              return (
                <div 
                  key={`${c.month[activeLocale]}-${c.day}`} 
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 bg-[#161816]/40 backdrop-blur-sm border border-white/5 hover:border-[#E5C158]/20 rounded-xl transition-all duration-300 items-center text-left"
                >
                  {/* Calendario Badge */}
                  <div className="md:col-span-2 flex md:flex-col items-center justify-start md:justify-center gap-3 md:gap-1 text-center border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 shrink-0">
                    <p className="font-display text-3xl text-[#E5C158] font-light leading-none">{c.day}</p>
                    <p className="text-[10px] tracking-[0.15em] text-white/40 uppercase font-semibold">{c.month[activeLocale]}</p>
                  </div>

                  {/* Detalle Temático */}
                  <div className="md:col-span-7 flex flex-col gap-1.5">
                    <h3 className="font-display text-lg sm:text-xl text-white font-light group-hover:text-[#E5C158] transition-colors">
                      {c.theme[activeLocale]}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-white/40 font-light">
                      <span className="flex items-center gap-1.5"><Clock size={12} strokeWidth={1.5} className="text-[#E5C158]" /> 7:00 PM · 2 hrs</span>
                      <span className="flex items-center gap-1.5">
                        <Users size={12} strokeWidth={1.5} className="text-[#E5C158]" />
                        <span className={c.spots <= 6 ? 'text-rose-400 font-medium animate-pulse' : ''}>
                          {activeLocale === 'en' ? `${c.spots} spaces available` : `${c.spots} lugares disponibles`}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Costos e Inscripción */}
                  <div className="md:col-span-3 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                    <div className="text-left md:text-right">
                      <p className="font-display text-2xl text-white font-light">
                        {currency === 'MXN' ? `$${currentPrice} MXN` : `$${currentPrice} USD`}
                      </p>
                      <p className="text-[10px] text-[#E5C158]/70 font-medium uppercase tracking-wider">
                        {currency === 'MXN' ? `$${currentMember} Miembros` : `$${currentMember} Members`}
                      </p>
                    </div>
                    <Link 
                      href="/auth/register"
                      className="text-[10px] tracking-widest uppercase px-5 py-2.5 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black font-semibold hover:opacity-90 active:scale-95 transition-all rounded-sm shrink-0 shadow-md"
                    >
                      {activeLocale === 'en' ? 'Join' : 'Unirse'}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN CUARTA: PREGUNTAS FRECUENTES (ACORDEÓN HERMOSO) --- */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-2.5 justify-center mb-12">
            <HelpCircle size={16} className="text-[#E5C158]/80" />
            <h2 className="font-display text-3xl text-white font-light tracking-wide">
              {activeLocale === 'en' ? 'Frequently Asked Questions' : 'Preguntas frecuentes'}
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={faq.q[activeLocale]} 
                  className="bg-[#161816]/30 border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <h3 className="font-display text-base sm:text-lg text-white/90 font-light group-hover:text-[#E5C158] transition-colors duration-200 pr-4">
                      {faq.q[activeLocale]}
                    </h3>
                    <ChevronDown 
                      size={15} 
                      className={`text-[#E5C158] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="p-6 text-xs text-white/50 font-light leading-relaxed bg-black/10">
                      {faq.a[activeLocale]}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}