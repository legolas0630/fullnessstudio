import SiteLayout from '@/components/SiteLayout'
import Link from 'next/link'
import { Check, Star } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membresías',
  description: 'Encuentra el plan de membresía que apoye tu práctica. Desde pases sueltos hasta membresías ilimitadas para fundadores.',
}

const plans = [
  {
    name: 'Drop-In',
    tagline: 'Try before you commit',
    priceLabel: '$25',
    priceSub: 'per class',
    annualLabel: null,
    highlight: false,
    features: ['Single class access', 'All class styles', 'Mat rental included', 'No commitment'],
  },
  {
    name: 'Explorer',
    tagline: 'For the beginning practitioner',
    priceLabel: '$89',
    priceSub: '/month',
    annualLabel: '$890/year (save $178)',
    highlight: false,
    features: ['4 classes per month', 'All class styles', 'Mat rental included', 'Online class library', '10% retail discount'],
  },
  {
    name: 'Devotee',
    tagline: 'For the dedicated practitioner',
    priceLabel: '$149',
    priceSub: '/month',
    annualLabel: '$1,490/year (save $298)',
    highlight: true,
    badge: 'Most Popular',
    features: ['12 classes per month', 'All class styles', 'Mat & props included', 'Full online library', '15% retail discount', 'One guest pass/month'],
  },
  {
    name: 'Unlimited',
    tagline: 'Immerse yourself fully',
    priceLabel: '$199',
    priceSub: '/month',
    annualLabel: '$1,990/year (save $398)',
    highlight: false,
    features: ['Unlimited classes', 'All class styles', 'All props included', 'Full online library', '20% retail discount', 'Two guest passes/month', 'Priority booking'],
  },
  {
    name: 'Founding Member',
    tagline: 'Membresía fundadora — cupos limitados',
    priceLabel: '$159',
    priceSub: '/month',
    annualLabel: '$1,590/year',
    highlight: false,
    badge: 'Limited',
    features: ['Unlimited classes', 'All class styles', 'All props included', 'Full online library', '25% retail discount', '4 guest passes/month', 'Priority booking', 'Founding member events', 'Name on studio wall'],
  },
]

const faqs = [
  {
    q: '¿Puedo pausar mi membresía?',
    a: 'Sí — los miembros pueden pausar su membresía hasta 30 días al año con 7 días de anticipación. También hay pausas médicas extendidas disponibles.',
  },
  {
    q: '¿Cómo cancelo?',
    a: 'Las membresías mensuales requieren 30 días de aviso para cancelar. Las membresías anuales no son reembolsables, pero pueden transferirse a otra persona.',
  },
  {
    q: '¿Las clases se acumulan?',
    a: 'Las clases del plan Explorer se acumulan hasta 30 días. Las clases del plan Devotee se acumulan hasta 60 días. Las clases no usadas más allá de esos plazos expiran.',
  },
  {
    q: '¿Hay descuento para estudiantes o personas mayores?',
    a: 'Sí — ofrecemos 15% de descuento en todas las membresías para estudiantes a tiempo completo y personas mayores de 65 años. Por favor trae identificación válida al estudio.',
  },
]

export default function MembershipsPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--parchment)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--stone)] font-light mb-4">Únete a nosotros</p>
          <h1 className="font-display text-6xl md:text-7xl text-[var(--stone-dark)] font-light mb-6">
            Tu práctica,<br />
            <em className="italic text-[var(--sage)]">tu plan</em>
          </h1>
          <p className="font-body font-light text-[var(--stone)] text-lg max-w-xl mx-auto">
            Cada plan incluye acceso completo al estudio, una comunidad cálida y las herramientas que necesitas para ser constante.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-pad bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-6 border transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-[var(--sage-dark)] text-white border-[var(--sage-dark)] shadow-xl scale-[1.02]'
                    : 'bg-white border-[var(--sage-light)]/20 hover:border-[var(--sage-light)]/50 hover:shadow-md'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] tracking-widest uppercase font-medium ${
                    plan.highlight ? 'bg-[var(--gold)] text-white' : 'bg-[var(--terracotta)] text-white'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`font-display text-2xl font-light mb-1 ${plan.highlight ? 'text-white' : 'text-[var(--stone-dark)]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs font-light ${plan.highlight ? 'text-white/60' : 'text-[var(--stone)]'}`}>
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`font-display text-4xl font-light ${plan.highlight ? 'text-white' : 'text-[var(--stone-dark)]'}`}>
                      {plan.priceLabel}
                    </span>
                    <span className={`text-xs font-light ${plan.highlight ? 'text-white/60' : 'text-[var(--stone)]'}`}>
                      {plan.priceSub}
                    </span>
                  </div>
                  {plan.annualLabel && (
                    <p className={`text-xs mt-1 font-light ${plan.highlight ? 'text-[var(--sage-light)]' : 'text-[var(--sage)]'}`}>
                      {plan.annualLabel}
                    </p>
                  )}
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={14} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-[var(--sage-light)]' : 'text-[var(--sage)]'}`} strokeWidth={2} />
                      <span className={`text-xs font-light ${plan.highlight ? 'text-white/80' : 'text-[var(--stone)]'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/auth/register"
                  className={`block text-center py-3 text-sm tracking-widest uppercase font-light transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-white text-[var(--sage-dark)] hover:bg-[var(--cream)]'
                      : 'border border-[var(--sage)] text-[var(--sage)] hover:bg-[var(--sage)] hover:text-white'
                  }`}
                >
                  Comenzar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison note */}
      <section className="py-12 bg-[var(--parchment)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <Star size={16} className="text-[var(--gold)]" fill="var(--gold)" />
            <p className="font-display text-xl text-[var(--stone-dark)] font-light">Todas las membresías incluyen</p>
            <Star size={16} className="text-[var(--gold)]" fill="var(--gold)" />
          </div>
          <p className="text-sm font-light text-[var(--stone)]">
            Free workshop access once per month · Community events · Digital class library previews · 
            New student orientation · Access to our mobile app
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-[var(--cream)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="pb-6 border-b border-[var(--sage-light)]/20 last:border-0">
                <h3 className="font-display text-xl text-[var(--stone-dark)] font-light mb-2">{faq.q}</h3>
                <p className="text-sm font-light text-[var(--stone)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
