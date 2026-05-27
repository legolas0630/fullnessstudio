'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { Check, Star, HelpCircle, ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useCurrency } from '@/context/CurrencyContext'

// Configuración de planes bilingües con montos reales y balanceados para México
const plansData = [
  {
    name: 'Drop-In',
    tagline: 'Prueba antes de comprometerte',
    priceMXN: 220,
    priceUSD: 12,
    priceSub: 'sesión',
    annualMXN: null,
    annualUSD: null,
    highlight: false,
    features: ['Acceso a una sesión individual', 'Válido para cualquier estilo', 'Préstamo de mat incluido', 'Sin contratos ni plazos'],
  },
  {
    name: 'Explorer',
    tagline: 'Para practicantes iniciales',
    priceMXN: 780,
    priceUSD: 45,
    priceSub: 'mes',
    annualMXN: 'Aportación anual: $7,800 MXN',
    annualUSD: 'Annual package: $450 USD',
    highlight: false,
    features: ['4 sesiones al mes', 'Válido para cualquier estilo', 'Préstamo de mat incluido', 'Acceso a videoteca digital', '10% desc. en talleres especiales'],
  },
  {
    name: 'Devotee',
    tagline: 'Para practicantes dedicados',
    priceMXN: 1450,
    priceUSD: 85,
    priceSub: 'mes',
    annualMXN: 'Aportación anual: $14,500 MXN',
    annualUSD: 'Annual package: $850 USD',
    highlight: true,
    badge: 'Más Popular',
    features: ['12 sesiones al mes', 'Válido para cualquier estilo', 'Mat y utilería fija incluidos', 'Videoteca digital ilimitada', '15% desc. en talleres especiales', '1 pase de invitado al mes'],
  },
  {
    name: 'Unlimited',
    tagline: 'Inmersión profunda total',
    priceMXN: 1950,
    priceUSD: 115,
    priceSub: 'mes',
    annualMXN: 'Aportación anual: $19,500 MXN',
    annualUSD: 'Annual package: $1,150 USD',
    highlight: false,
    features: ['Sesiones ilimitadas', 'Acceso total a disciplinas', 'Toda la utilería incluida', 'Videoteca digital ilimitada', '20% desc. en talleres especiales', '2 pases de invitado al mes', 'Reservas prioritarias'],
  },
  {
    name: 'Founding Member',
    tagline: 'Membresía Fundadora — Cupos Limitados',
    priceMXN: 1650,
    priceUSD: 98,
    priceSub: 'mes',
    annualMXN: 'Aportación anual: $16,500 MXN',
    annualUSD: 'Annual package: $980 USD',
    highlight: false,
    badge: 'Exclusivo',
    features: ['Sesiones ilimitadas', 'Acceso total a disciplinas', 'Toda la utilería incluida', 'Videoteca digital ilimitada', '25% desc. en talleres especiales', '4 pases de invitado al mes', 'Reservas prioritarias', 'Eventos privados para fundadores', 'Nombre en el muro de honor'],
  },
]

const faqsData = [
  {
    q: '¿Puedo pausar mi membresía?',
    a: 'Por supuesto. Los miembros recurrentes pueden pausar su plan hasta por 30 días naturales por año calendario, notificando con 7 días de anticipación. También disponemos de pausas extendidas justificadas por temas de salud.',
  },
  {
    q: '¿Cómo funciona el proceso de cancelación?',
    a: 'Los planes de renovación mensual requieren un aviso de cancelación de 30 días. Los paquetes anuales preferenciales cuentan con un descuento único y no son reembolsables, pero pueden transferirse legalmente a otra persona sin costo.',
  },
  {
    q: '¿Las sesiones no usadas se acumulan para el siguiente mes?',
    a: 'En el plan Explorer, las sesiones tienen una vigencia extendida de hasta 30 días adicionales. En el plan Devotee se acumulan hasta por 60 días. Las clases no agendadas fuera de esos periodos expiran para mantener la fluidez de las salas.',
  },
  {
    q: '¿Ofrecen tarifas especiales para estudiantes o comunidad Senior?',
    a: 'Sí, nos encanta apoyar tu constancia. Ofrecemos un 15% de descuento en membresías recurrentes para estudiantes de tiempo completo y adultos mayores de 65 años. Solo presenta una identificación oficial válida en la recepción de nuestro estudio.',
  },
]

export default function MembershipsPage() {
  const [animate, setAnimate] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const { currency } = useCurrency()

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="bg-[#0F100F] min-h-screen text-white/80 font-light selection:bg-[#E5C158]/30 selection:text-[#E5C158]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#E5C158]/35 blur-[140px] rounded-full pointer-events-none opacity-20" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className={`font-accent text-[#E5C158] text-2xl mb-3 transition-all duration-1000 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Comienza tu camino
          </p>
          <h1 className={`font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 transition-all duration-1000 delay-150 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Tu Espacio, <br className="sm:hidden" /><em className="italic text-[#E5C158] font-serif not-italic">tu ritmo</em>
          </h1>
          <p className={`font-body text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Cada membresía representa un compromiso con tu bienestar. Disfruta de un entorno diseñado para la evolución física, mental y espiritual.
          </p>
        </div>
      </section>

      {/* --- CUADRÍCULA DE PLANES DE ALTA GAMA --- */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
            {plansData.map((plan) => {
              const annualLabel = currency === 'MXN' ? plan.annualMXN : plan.annualUSD;

              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-500 shadow-2xl backdrop-blur-md ${
                    plan.highlight
                      ? 'bg-[#1c1912] border-[#E5C158]/50 shadow-[0_15px_40px_rgba(229,193,88,0.08)] scale-[1.03] z-10'
                      : 'bg-[#161816]/60 border-white/5 hover:border-[#E5C158]/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  {/* Etiqueta flotante superior */}
                  {plan.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[9px] tracking-[0.2em] uppercase font-semibold rounded-md shadow-md ${
                      plan.highlight ? 'bg-[#E5C158] text-black' : 'bg-white/10 text-white/90 border border-white/10 backdrop-blur-sm'
                    }`}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Cabecera del plan */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-light text-white mb-1.5 group-hover:text-[#E5C158] transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-xs font-light text-white/40 leading-relaxed min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Desglose de precios estáticos e inmunes a la doble conversión */}
                  <div className="mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`font-display text-4xl font-light tracking-tight ${plan.highlight ? 'text-[#E5C158]' : 'text-white'}`}>
                        {currency === 'MXN' ? `$${plan.priceMXN} MXN` : `$${plan.priceUSD} USD`}
                      </span>
                      <span className="text-xs font-light text-white/30">
                        /{plan.priceSub}
                      </span>
                    </div>
                    {annualLabel && (
                      <p className="text-[10px] mt-2 font-medium tracking-wide text-emerald-400/80">
                        {annualLabel}
                      </p>
                    )}
                  </div>

                  {/* Listado de características */}
                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={13} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-[#E5C158]' : 'text-[#E5C158]/60'}`} strokeWidth={2.5} />
                        <span className="text-xs font-light text-white/70 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón interactivo protegido contra tipado estricto */}
                  <Link
                    href="/auth/register"
                    className={`w-full block text-center py-3.5 text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm active:scale-98 transform ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black shadow-[0_4px_20px_rgba(229,193,88,0.2)]'
                        : 'border border-[#E5C158]/40 text-[#E5C158] hover:bg-[#E5C158] hover:text-black hover:border-[#E5C158]'
                    }`}
                  >
                    Comenzar
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- CINTILLO COLECTIVO DE INCLUSIONES GENERALES --- */}
      <section className="py-14 border-t border-b border-white/5 bg-[#161816]/20 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-5">
            <Star size={13} className="text-[#E5C158]" fill="#E5C158" />
            <p className="font-display text-lg tracking-wider text-white font-light">Todas las membresías corporativas incluyen</p>
            <Star size={13} className="text-[#E5C158]" fill="#E5C158" />
          </div>
          <p className="text-xs font-light text-white/50 leading-relaxed max-w-2xl mx-auto tracking-wide">
            Acceso libre a un taller especial al mes · Eventos y ceremonias comunitarias exclusivas · Vistas previas en la videoteca digital · Sesión personalizada de orientación somática · Uso preferente de nuestra app móvil corporativa.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DE PREGUNTAS FRECUENTES (ACORDEÓN PREMIUM) --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-2.5 justify-center mb-12">
            <HelpCircle size={16} className="text-[#E5C158]/80" />
            <h2 className="font-display text-3xl text-white font-light tracking-wide">Preguntas frecuentes</h2>
          </div>
          
          <div className="space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={faq.q} 
                  className="bg-[#161816]/30 border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <h3 className="font-display text-lg text-white/90 font-light group-hover:text-[#E5C158] transition-colors duration-200 pr-4">
                      {faq.q}
                    </h3>
                    <ChevronDown 
                      size={16} 
                      className={`text-[#E5C158] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="p-6 text-xs text-white/50 font-light leading-relaxed bg-black/10">
                      {faq.a}
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