'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useCurrency } from '@/context/CurrencyContext'

// Arreglo de eventos adaptado a la identidad mística de Fullness Studio
const eventsData = [
  {
    id: 1,
    date: '7 de Junio, 2026',
    day: 'Sábado',
    time: '7:00 PM',
    name: 'Ceremonia de Cacao Luna Nueva',
    description: 'Reúnete bajo la luna nueva para un ritual ancestral de cacao que abre el corazón. Caminaremos juntos a través de meditación guiada, respiración somática, círculos de palabra y música medicina sagrada.',
    location: 'Fullness Studio — Sala del Alma',
    capacity: 16,
    spotsLeft: 6,
    priceMXN: 1100,
    priceUSD: 65,
    category: 'Ceremonia',
    featured: true,
  },
  {
    id: 2,
    date: '14 de Junio, 2026',
    day: 'Sábado',
    time: '6:00 AM',
    name: 'Senderismo Consciente al Amanecer',
    description: 'Una caminata guiada de 3 horas hacia la cumbre de Marfil, diseñada para sincronizar con el primer rayo de sol. Pausaremos para pranayama, una breve meditación de enraizamiento y cacao compartido.',
    location: 'Punto de encuentro — Falda de la Montaña (Carpool desde el estudio)',
    capacity: 12,
    spotsLeft: 4,
    priceMXN: 750,
    priceUSD: 45,
    category: 'Senderismo',
    featured: false,
  },
  {
    id: 3,
    date: '21 de Junio, 2026',
    day: 'Sábado',
    time: '3:00 PM',
    name: 'Viaje Sonoro de Solsticio de Verano',
    description: 'Celebra la máxima luz del año con un baño de sonido inmersivo de 2 horas. Frecuencias armónicas con cuencos de cristal de cuarzo, gongs planetarios, cajas shruti y cuerdas místicas en vivo.',
    location: 'Fullness Studio — Santuario Principal',
    capacity: 30,
    spotsLeft: 11,
    priceMXN: 950,
    priceUSD: 55,
    category: 'Terapia Sonora',
    featured: true,
  },
  {
    id: 4,
    date: '28 de Junio, 2026',
    day: 'Sábado',
    time: '9:00 AM',
    name: 'Masterclass de Alineación & Pilates',
    description: 'Profundiza en la inteligencia de tu core. Un taller anatómico y práctico diseñado para deconstruir los movimientos clave, perfeccionar la postura y prevenir lesiones.',
    location: 'Fullness Studio — Sala de Precisión',
    capacity: 12,
    spotsLeft: 7,
    priceMXN: 1450,
    priceUSD: 85,
    category: 'Taller',
    featured: false,
  },
  {
    id: 5,
    date: '12–14 de Julio, 2026',
    day: 'Fin de Semana',
    time: 'Retiro Completo',
    name: 'Retiro de Inmersión en la Montaña',
    description: 'Tres días de desconexión absoluta. Prácticas de yoga dos veces al día, baños de sonido nocturnos, ceremonias de fuego sagrado, caminatas conscientes y alimentación orgánica de la granja a la mesa.',
    location: 'Santuario de la Sierra — Guanajuato, MX',
    capacity: 18,
    spotsLeft: 3,
    priceMXN: 11000,
    priceUSD: 650,
    category: 'Retiro',
    featured: true,
  },
  {
    id: 6,
    date: '19 de Julio, 2026',
    day: 'Sábado',
    time: '7:00 PM',
    name: 'Baño de Sonido Nocturno & Luna Llena',
    description: 'Encuentro mensual de transmutación. Libera tensiones profundas del sistema nervioso con las vibraciones de cuencos himalayos y gongs. Incluye ceremonia de té integrativa.',
    location: 'Fullness Studio — Sala del Alma',
    capacity: 25,
    spotsLeft: 16,
    priceMXN: 750,
    priceUSD: 45,
    category: 'Terapia Sonora',
    featured: false,
  },
]

// Paleta de colores etéreos adaptada al lienzo negro profundo (Obsidian)
const categoryStyles: Record<string, string> = {
  'Ceremonia': 'border-[#E5C158]/30 text-[#E5C158] bg-[#E5C158]/5',
  'Senderismo': 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5',
  'Terapia Sonora': 'border-purple-500/30 text-purple-400 bg-purple-500/5',
  'Taller': 'border-blue-500/30 text-blue-400 bg-blue-500/5',
  'Retiro': 'border-rose-500/30 text-rose-400 bg-rose-500/5',
}

export default function EventsPage() {
  const [animate, setAnimate] = useState(false)
  const t = useTranslations('Calendar') // Reutilizamos llaves de traducción del calendario
  const { currency, formatPrice } = useCurrency()

  useEffect(() => {
    setAnimate(true)
  }, [])

  const featuredEvents = eventsData.filter((e) => e.featured)
  const regularEvents = eventsData.filter((e) => !e.featured)

  return (
    <div className="bg-[#0F100F] min-h-screen text-white/80 font-light selection:bg-[#E5C158]/30 selection:text-[#E5C158]">
      
      {/* --- HERO SECTION DE LUJO --- */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/5">
        {/* Aura Dorada de Fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#E5C158]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <p className={`font-accent text-[#E5C158] text-2xl mb-3 transition-all duration-1000 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Reúnete en comunidad
          </p>
          <h1 className={`font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 transition-all duration-1000 delay-150 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Eventos & <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">Inmersiones</em>
          </h1>
          <p className={`font-body text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Talleres intensivos, ceremonias místicas y retiros sagrados creados con intención para expandir tu camino de bienestar.
          </p>
        </div>
      </section>

      {/* --- EVENTOS DESTACADOS (TARJETAS BENTO PREMIUM) --- */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Sparkles size={14} className="text-[#E5C158]" />
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-medium">Experiencias Destacadas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {featuredEvents.map((event) => {
              const currentPrice = currency === 'MXN' ? event.priceMXN : event.priceUSD;
              return (
                <div 
                  key={event.id} 
                  className="group bg-[#161816]/60 backdrop-blur-md border border-white/5 hover:border-[#E5C158]/30 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col shadow-2xl hover:shadow-[0_10px_40px_rgba(229,193,88,0.05)]"
                >
                  {/* Línea dorada superior reflectiva en Hover */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#E5C158]/20 via-[#F3D782] to-[#E5C158]/20 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-[9px] px-3 py-1 border rounded-md tracking-widest uppercase font-medium ${categoryStyles[event.category] || ''}`}>
                        {event.category}
                      </span>
                      <span className="font-display text-xl text-[#E5C158] font-light">
                        {formatPrice(currentPrice)}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-white font-light mb-3 leading-snug group-hover:text-[#E5C158] transition-colors duration-300">
                      {event.name}
                    </h3>
                    
                    <p className="text-xs font-light text-white/40 leading-relaxed mb-6 flex-1">
                      {event.description}
                    </p>

                    <div className="space-y-3 border-t border-white/5 pt-5 mb-6 text-[11px] text-white/60">
                      <div className="flex items-center gap-3 font-light">
                        <Calendar size={13} strokeWidth={1.5} className="text-[#E5C158]" />
                        <span>{event.day}, {event.date} · {event.time}</span>
                      </div>
                      <div className="flex items-start gap-3 font-light">
                        <MapPin size={13} strokeWidth={1.5} className="text-[#E5C158] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 font-light">
                        <Users size={13} strokeWidth={1.5} className="text-[#E5C158]" />
                        <span className={event.spotsLeft <= 4 ? 'text-rose-400 font-normal animate-pulse' : 'text-white/40'}>
                          {event.spotsLeft} de {event.capacity} lugares disponibles
                        </span>
                      </div>
                    </div>

                    {/* Enlace protegido contra tipado estricto */}
                    <Link
                      href="/auth/register"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black text-xs tracking-widest uppercase font-semibold rounded-sm hover:opacity-90 active:scale-98 transform transition-all shadow-[0_4px_20px_rgba(229,193,88,0.15)]"
                    >
                      Reserva tu lugar <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* --- LISTADO COMPLETO (FILAS ESTILO CRISTAL) --- */}
          <div className="flex items-center gap-3 mb-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium">Cronograma Completo</p>
          </div>

          <div className="space-y-4">
            {regularEvents.map((event) => {
              const currentPrice = currency === 'MXN' ? event.priceMXN : event.priceUSD;
              return (
                <div 
                  key={event.id} 
                  className="group grid grid-cols-1 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-[#161816]/30 backdrop-blur-sm border border-white/5 hover:border-white/10 rounded-xl transition-all duration-300 items-center"
                >
                  <div className="flex flex-col gap-2">
                    <p className="font-display text-lg text-white group-hover:text-[#E5C158] transition-colors duration-300">{event.date}</p>
                    <p className="text-[11px] text-white/40 font-light flex items-center gap-1.5"><Clock size={11} /> {event.time}</p>
                    <span className={`w-max text-[8px] px-2.5 py-0.5 border rounded-md tracking-widest uppercase font-medium mt-1 ${categoryStyles[event.category] || ''}`}>
                      {event.category}
                    </span>
                  </div>

                  <div className="md:col-span-2 text-left">
                    <h3 className="font-display text-xl text-white font-light mb-1.5">{event.name}</h3>
                    <p className="text-xs font-light text-white/40 leading-relaxed line-clamp-2 mb-3 md:mb-0">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[11px] text-white/30 font-light">
                      <span className="flex items-center gap-1.5"><MapPin size={11} strokeWidth={1.5} className="text-[#E5C158]" /> {event.location.split(' — ')[0]}</span>
                      <span className="flex items-center gap-1.5"><Users size={11} strokeWidth={1.5} className="text-[#E5C158]" /> {event.spotsLeft} lugares restantes</span>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                    <span className="font-display text-2xl text-white font-light">{formatPrice(currentPrice)}</span>
                    <Link
                      href="/auth/register"
                      className="text-[10px] tracking-widest uppercase px-5 py-2.5 border border-[#E5C158]/40 text-[#E5C158] hover:bg-[#E5C158] hover:text-black transition-all duration-300 rounded-sm font-medium active:scale-95"
                    >
                      {t('btnReservar')}
                    </Link>
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