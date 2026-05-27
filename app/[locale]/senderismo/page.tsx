'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { Mountain, Clock, Users, Sun, Wind, Compass, ArrowRight, Sparkles, Star, Shield } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useCurrency } from '@/context/CurrencyContext'

// Configuración bilingüe y de tarifas fijas para las rutas de senderismo (2026)
const hikesData = [
  {
    name: {
      es: 'Cumbre al Amanecer',
      en: 'Sunrise Summit'
    },
    difficulty: { es: 'Moderada', en: 'Moderate' },
    distance: { es: '8.3 km', en: '5.2 miles' },
    gain: { es: '365 m de desnivel', en: '1,200 ft gain' },
    duration: { es: '3 horas', en: '3 hours' },
    maxGroup: 12,
    priceMXN: 580,
    priceUSD: 35,
    memberMXN: 420,
    memberUSD: 25,
    schedule: { es: 'Cada Sábado · Salida 6:00 AM', en: 'Every Saturday · Depart 6:00 AM' },
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'Nuestra ruta insignia. Sincronizamos el ascenso para coronar la cumbre exactamente con el primer rayo de sol, un momento eterno de quietud absoluta. Incluye meditación guiada de 20 minutos y servicio de cacao ceremonial caliente en la cima del monte.',
      en: 'Our signature hike. We time our ascent to arrive at the summit for the first ray of sunrise — a timeless moment of absolute stillness. Includes a 20-minute guided meditation and hot ceremonial cacao served at the peak.'
    },
    highlights: {
      es: ['Meditación en la cumbre', 'Cacao sagrado en la cima', 'Baño de bosque al descender', 'Escritura integrativa'],
      en: ['Summit sunrise meditation', 'Ceremonial cacao at the top', 'Forest bathing on descent', 'Integration journaling']
    },
  },
  {
    name: {
      es: 'Inmersión en el Bosque (Shinrin-Yoku)',
      en: 'Forest Immersion (Shinrin-Yoku)'
    },
    difficulty: { es: 'Fácil', en: 'Easy' },
    distance: { es: '4.8 km', en: '3 miles' },
    gain: { es: '120 m de desnivel', en: '400 ft gain' },
    duration: { es: '2.5 horas', en: '2.5 hours' },
    maxGroup: 14,
    priceMXN: 480,
    priceUSD: 28,
    memberMXN: 340,
    memberUSD: 20,
    schedule: { es: 'Cada Domingo · Salida 8:00 AM', en: 'Every Sunday · Depart 8:00 AM' },
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'Una caminata pausada a través de senderos boscosos maduros, diseñada para despertar los umbrales sensoriales. Practicamos técnicas terapéuticas de Shinrin-yoku (baño de bosque), dinámicas de respiración enraizante y pausas contemplativas en arroyos.',
      en: 'A gentle amble through mature forest trails, designed to awaken your sensory thresholds. We practice Shinrin-yoku (forest bathing) therapeutic techniques, grounding breathwork, and contemplative pauses by natural streams.'
    },
    highlights: {
      es: ['Técnicas de baño de bosque', 'Apertura sensorial guiada', 'Meditación en movimiento', 'Pausa de té de herbolaria'],
      en: ['Forest bathing techniques', 'Guided sensory awareness', 'Walking meditation', 'Herbal tea break']
    },
  },
  {
    name: {
      es: 'Senderismo Bajo la Luna Llena',
      en: 'Moonlight Hiking Ritual'
    },
    difficulty: { es: 'Moderada', en: 'Moderate' },
    distance: { es: '6.4 km', en: '4 miles' },
    gain: { es: '240 m de desnivel', en: '800 ft gain' },
    duration: { es: '3 horas', en: '3 hours' },
    maxGroup: 10,
    priceMXN: 750,
    priceUSD: 45,
    memberMXN: 580,
    memberUSD: 35,
    schedule: { es: 'Mensual · Noche de Luna Llena 8:00 PM', en: 'Monthly · Full Moon Night 8:00 PM' },
    image: 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?auto=format&fit=crop&w=800&q=80',
    desc: {
      es: 'Caminar cobijados por la luz plateada de la luna es una experiencia mística transformadora. Navegamos los senderos con iluminación artificial mínima, agudizando la intuición y el oído orgánico. Concluye con un círculo de fuego sagrado y cantos medicina.',
      en: 'Hiking sheltered under the silver glow of the moon is a transformative mystical experience. We navigate paths with minimal artificial light, sharpening intuition and organic hearing. Concludes with a sacred fire circle and medicine live music.'
    },
    highlights: {
      es: ['Navegación nocturna lunar', 'Meditación bajo las estrellas', 'Ceremonia de fuego central', 'Círculo de integración'],
      en: ['Full moon navigation', 'Starry sky meditation', 'Sacred fire ceremony', 'Integration sharing circle']
    },
  },
]

const whatToBringData = {
  es: ['Calzado de senderismo o botas con buen agarre', 'Ropa en capas (las mañanas en la montaña son frías)', 'Agua (mínimo 1.5 a 2 litros)', 'Snack ligero o fruta', 'Bitácora / cuaderno personal y bolígrafo', 'Protección solar y sombrero', 'Lámpara frontal (exclusivo caminata nocturna)', 'Un corazón abierto y dispuesto'],
  en: ['Sturdy hiking shoes or boots with deep traction', 'Layered clothing (mountain mornings are cold)', 'Water (1.5–2 liters minimum)', 'Light snack or fruit', 'Personal journal and a pen', 'Sun protection and a hat', 'Headlamp (exclusive for moonlight ritual)', 'An open and willing heart']
}

const upcomingHikesData = [
  { date: { es: 'Sáb, Jun 6, 2026', en: 'Sat, Jun 6, 2026' }, name: { es: 'Cumbre al Amanecer', en: 'Sunrise Summit' }, spots: 5, time: '6:00 AM' },
  { date: { es: 'Dom, Jun 7, 2026', en: 'Sun, Jun 7, 2026' }, name: { es: 'Inmersión en el Bosque', en: 'Forest Immersion' }, spots: 10, time: '8:00 AM' },
  { date: { es: 'Sáb, Jun 13, 2026', en: 'Sat, Jun 13, 2026' }, name: { es: 'Cumbre al Amanecer', en: 'Sunrise Summit' }, spots: 8, time: '6:00 AM' },
  { date: { es: 'Dom, Jun 14, 2026', en: 'Sun, Jun 14, 2026' }, name: { es: 'Inmersión en el Bosque', en: 'Forest Immersion' }, spots: 7, time: '8:00 AM' },
  { date: { es: 'Vie, Jun 26, 2026', en: 'Fri, Jun 26, 2026' }, name: { es: 'Caminata Bajo la Luna Llena', en: 'Moonlight Hiking Ritual' }, spots: 3, time: '8:00 PM' },
]

export default function HikingPage() {
  const [animate, setAnimate] = useState(false)
  const activeLocale = useLocale() as 'es' | 'en'
  const { currency } = useCurrency()

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="bg-[#0F100F] min-h-screen text-white/80 font-light selection:bg-[#E5C158]/30 selection:text-[#E5C158]">
      
      {/* --- HERO SECTION CON VIBRA DE NATURALEZA OBSIDIAN --- */}
      <section className="relative pt-36 pb-24 overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#0F100F] via-emerald-950/5 to-[#0F100F]">
        {/* Aura elíptica combinada: Oro y Esmeralda */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none opacity-50" />
        <div className="absolute top-20 left-1/3 w-[400px] h-[200px] bg-[#E5C158]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full border border-emerald-500/20 bg-emerald-950/20 flex items-center justify-center text-[#E5C158] shadow-2xl">
              <Mountain size={20} strokeWidth={1.2} />
            </div>
          </div>
          <p className={`font-accent text-[#E5C158] text-2xl mb-3 transition-all duration-1000 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {activeLocale === 'en' ? 'Nature as a Sacred Teacher' : 'La Naturaleza como Maestra'}
          </p>
          <h1 className={`font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 transition-all duration-1000 delay-150 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {activeLocale === 'en' ? <>Mindful & Somatic <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">Hiking</em></> : <>Senderismo <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">Consciente</em></>}
          </h1>
          <p className="font-body text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            {activeLocale === 'en'
              ? 'The trail is far more than a physical path; it is a landscape for deep inner transmutación. We infuse intention, somática breathwork, and meditative presence into the primal ritual of walking through ancient wild places.'
              : 'El sendero es mucho más que un trayecto físico; es un lienzo vivo para la transmutación interna. Integramos intención, respiración somática y presencia meditativa al ritual ancestral de caminar espacios salvajes.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#routes"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-sm hover:opacity-90 active:scale-95 transition-all shadow-lg w-full sm:w-auto"
            >
              {activeLocale === 'en' ? 'Explore Routes' : 'Explorar Rutas'}
            </a>
            <a 
              href="#calendar-section"
              className="inline-flex items-center justify-center border border-white/10 text-white/80 hover:bg-white/5 px-8 py-3.5 text-xs uppercase tracking-widest font-light rounded-sm transition-all w-full sm:w-auto"
            >
              {activeLocale === 'en' ? 'Upcoming Dates' : 'Próximas Fechas'}
            </a>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN SEGUNDA: ENFOQUE TERAPÉUTICO (ELEGANT GRID CON TRANSIZIÓN AMBIENTAL) --- */}
      <section className="py-24 relative z-10 transition-all duration-700">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Compass size={14} className="text-emerald-400" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-emerald-400 font-medium">Ecología Interna</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-light tracking-wide">
              {activeLocale === 'en' ? <>More than a <em className="italic text-[#E5C158] font-serif not-italic">walk in the woods</em></> : <>Mucho más que una <em className="italic text-[#E5C158] font-serif not-italic">caminata común</em></>}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Sun, 
                title: { es: 'Movimiento Intencional', en: 'Intentional Movement' }, 
                desc: { es: 'Cada pisada es un anclaje al presente. Regulamos el paso para habitar el cuerpo, agudizar la atención periférica y escuchar la sinfonía natural.', en: 'Every footprint is an anchor to the present. We pace our stride to inhabit the body, sharpen peripheral attention, and listen to the natural symphony.' } 
              },
              { 
                icon: Wind, 
                title: { es: 'Pranayama en Sendero', en: 'Breathwork on Trail' }, 
                desc: { es: 'Estructuramos técnicas de respiración rítmica acopladas a la topografía: pasos vigorizantes en el ascenso y exhalaciones de liberación en el descenso.', en: 'Specific rhythmic breathing techniques adapted to the topography: invigorating pulses on the ascent and soft releasing breaths on downhill segments.' } 
              },
              { 
                icon: Compass, 
                title: { es: 'Meditación de Landmark', en: 'Landmark Meditation' }, 
                desc: { es: 'Pausamos en santuarios naturales clave —un ojo de agua, un claro de encinos centenarios— para realizar micro-meditaciones de enraizamiento profundo.', en: 'We pause at key natural sanctuaries —a freshwater spring, a clearing of centennial oak trees— for short, profound grounding meditations.' } 
              },
            ].map((item) => {
              const IconComponent = item.icon
              return (
                <div 
                  key={item.title[activeLocale]} 
                  className="p-8 bg-[#161816]/30 border border-white/5 hover:border-emerald-500/20 rounded-2xl transition-all duration-300 text-left backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg border border-white/5 bg-black/30 flex items-center justify-center text-[#E5C158] mb-5 shadow-inner">
                    <IconComponent size={18} strokeWidth={1.2} />
                  </div>
                  <h3 className="font-display text-lg text-white font-light mb-3">{item.title[activeLocale]}</h3>
                  <p className="text-xs font-light text-white/40 leading-relaxed">{item.desc[activeLocale]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN TERCERA: FILAS DE RUTAS (FOTOGRAFÍAS REALES PREMIUM) --- */}
      <section id="routes" className="py-20 border-t border-white/5 relative z-10 bg-[#161816]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium mb-2">Cartografía del Alma</p>
            <h2 className="font-display text-3xl text-white font-light tracking-wide">
              {activeLocale === 'en' ? 'Choose Your Sanctuary Trail' : 'Selecciona tu Sendero'}
            </h2>
          </div>

          <div className="space-y-8">
            {hikesData.map((hike) => {
              return (
                <div 
                  key={hike.name[activeLocale]} 
                  className="group grid grid-cols-1 lg:grid-cols-12 bg-[#161816]/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#E5C158]/20 shadow-2xl items-center"
                >
                  {/* Bloque Izquierdo: Fotografía Real de Paisaje místico de Unsplash */}
                  <div className="lg:col-span-4 relative h-60 lg:h-full min-h-[250px] w-full bg-black/20 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                    <img 
                      src={hike.image} 
                      alt={hike.name[activeLocale]} 
                      className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 brightness-[0.6] contrast-[1.02]"
                      loading="lazy"
                    />
                    {/* Filtro degradado verde y negro para fundido místico */}
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#161816]/95 via-transparent to-transparent opacity-95" />
                  </div>

                  {/* Bloque Central: Datos Anatómicos e Informativos */}
                  <div className="lg:col-span-5 p-8 sm:p-10 text-left">
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className={`text-[8px] tracking-[0.15em] px-2.5 py-0.5 rounded-md uppercase font-semibold border ${
                        hike.difficulty.en === 'Easy' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' : 'text-[#E5C158] border-[#E5C158]/20 bg-[#E5C158]/5'
                      }`}>
                        {hike.difficulty[activeLocale]}
                      </span>
                      <span className="text-[11px] text-white/40 font-light">
                        {hike.distance[activeLocale]} · {hike.gain[activeLocale]}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-white font-light mb-3 group-hover:text-[#E5C158] transition-colors duration-300">
                      {hike.name[activeLocale]}
                    </h3>
                    <p className="text-xs font-light text-white/45 leading-relaxed mb-5">{hike.desc[activeLocale]}</p>
                    
                    {/* Microetiquetas de highlights */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {hike.highlights[activeLocale].map((hl) => (
                        <span key={hl} className="text-[9px] tracking-wide px-2.5 py-1 bg-white/5 border border-white/5 text-white/40 rounded-md">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bloque Derecho: Conversión Contable y Horarios */}
                  <div className="lg:col-span-3 p-8 sm:p-10 bg-black/10 h-full flex flex-col justify-between gap-6 border-t lg:border-t-0 border-white/5 text-left lg:text-right lg:items-end">
                    <div className="flex gap-6 lg:justify-end">
                      <div>
                        <p className="font-display text-2xl text-white font-light">
                          {currency === 'MXN' ? `$${hike.priceMXN} MXN` : `$${hike.priceUSD} USD`}
                        </p>
                        <p className="text-[10px] text-white/30 tracking-wider uppercase mt-0.5 font-light">
                          {activeLocale === 'en' ? 'Drop-in' : 'Pase Externo'}
                        </p>
                      </div>
                      <div className="w-[1px] h-10 bg-white/5 lg:hidden" />
                      <div>
                        <p className="font-display text-2xl text-[#E5C158] font-light">
                          {currency === 'MXN' ? `$${hike.memberMXN} MXN` : `$${hike.memberUSD} USD`}
                        </p>
                        <p className="text-[10px] text-[#E5C158]/50 tracking-wider uppercase mt-0.5 font-medium">
                          {activeLocale === 'en' ? 'Members' : 'Miembros'}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 text-left lg:text-right border-t border-b border-white/5 py-3 w-full lg:w-auto">
                      <p className="text-[11px] text-white/60 font-light flex items-center gap-2 lg:justify-end"><Clock size={12} className="text-[#E5C158]" /> {hike.duration[activeLocale]}</p>
                      <p className="text-[11px] text-white/60 font-light flex items-center gap-2 lg:justify-end"><Users size={12} className="text-[#E5C158]" /> Máx {hike.maxGroup} {activeLocale === 'en' ? 'explorers' : 'exploradores'}</p>
                    </div>

                    <p className="text-[10px] text-white/40 font-medium tracking-wide leading-relaxed">
                      {hike.schedule[activeLocale]}
                    </p>

                    <Link 
                      href="/auth/register"
                      className="w-full lg:w-auto text-center text-[10px] tracking-widest uppercase px-5 py-2.5 border border-[#E5C158]/40 text-[#E5C158] hover:bg-[#E5C158] hover:text-black transition-all rounded-sm font-semibold active:scale-95"
                    >
                      {activeLocale === 'en' ? 'Book Route' : 'Reservar Ruta'}
                    </Link>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN CUARTA: CALENDARIO DE SALIDAS & EQUIPAMIENTO (CON ACABADO PREMIUM) --- */}
      <section id="calendar-section" className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Cronograma Corto */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium text-left mb-6">Próximos Despegues</p>
            {upcomingHikesData.map((h, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-5 bg-[#161816]/30 border border-white/5 rounded-xl hover:border-white/10 transition-all text-left"
              >
                <div>
                  <p className="text-[11px] font-light text-white/40 mb-0.5">{h.date[activeLocale]} · {h.time}</p>
                  <p className="font-display text-base sm:text-lg text-white font-light group-hover:text-[#E5C158]">{h.name[activeLocale]}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className={`text-[11px] font-light ${h.spots <= 4 ? 'text-rose-400 font-normal animate-pulse' : 'text-white/30'}`}>
                    {activeLocale === 'en' ? `${h.spots} spaces left` : `${h.spots} lugares`}
                  </span>
                  <Link 
                    href="/auth/register"
                    className="text-[9px] tracking-widest uppercase px-4 py-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black font-semibold rounded-sm shadow-md"
                  >
                    {activeLocale === 'en' ? 'Join' : 'Unirse'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Columna Derecha: Bitácora de Equipamiento */}
          <div className="lg:col-span-5 p-8 bg-[#161816]/40 border border-white/5 rounded-2xl backdrop-blur-md text-left relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl rounded-full" />
            <h3 className="font-display text-xl text-white font-light mb-5 flex items-center gap-2.5">
              <Shield size={14} className="text-[#E5C158]" /> {activeLocale === 'en' ? 'What to bring' : 'Qué debes traer'}
            </h3>
            <div className="space-y-3.5">
              {whatToBringData[activeLocale].map((item) => (
                <div key={item} className="flex items-start gap-3 text-xs font-light text-white/50 leading-relaxed">
                  <Star size={11} className="text-[#E5C158] shrink-0 mt-0.5" fill="#E5C158" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}