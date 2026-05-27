import SiteLayout from '@/components/SiteLayout'
import Link from 'next/link'
import { Calendar, Users, Clock, Heart } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ceremonia de cacao',
  description: 'Encuentros sagrados de cacao ceremonial para apertura del corazón, sanación y conexión comunitaria.',
}

const ceremonialElements = [
  { title: 'Cacao sagrado', desc: 'Seleccionamos cacao ceremonial puro de agricultores indígenas de Guatemala, preparado con intención y oración.' },
  { title: 'Círculo de apertura', desc: 'Comenzamos con presentaciones, intenciones y una meditación enraizante para crear un contenedor de seguridad y presencia.' },
  { title: 'Trabajo de respiración', desc: 'Prácticas guiadas de pranayama amplifican el efecto del cacao y abren el corazón y el campo energético.' },
  { title: 'Música de viaje', desc: 'Música en vivo y curada acompaña al grupo a través de olas de liberación, claridad y alegría.' },
  { title: 'Círculo de compartir', desc: 'Un espacio sostenido para decir lo que surgió — testimoniado, honrado y celebrado por la comunidad.' },
  { title: 'Integración', desc: 'Movimiento suave y escritura para anclar la experiencia en el cuerpo y la mente.' },
]

const upcoming = [
  { day: '7', month: 'Junio', theme: 'Luna nueva — Nuevos comienzos', spots: 6, total: 16 },
  { day: '21', month: 'Junio', theme: 'Solsticio de verano — Gratitud y luz', spots: 10, total: 16 },
  { day: '5', month: 'Julio', theme: 'Luna nueva — Soltar y renovar', spots: 14, total: 16 },
  { day: '19', month: 'Julio', theme: 'Luna llena — Abundancia y plenitud', spots: 8, total: 16 },
]

const faqs = [
  { q: '¿Es seguro?', a: 'El cacao ceremonial es un alimento — no un psicodélico. Es seguro para la mayoría de los adultos. Las principales contraindicaciones son MAOIs (antidepresivos), condiciones cardíacas graves y embarazo. Por favor informa sobre cualquier medicamento o condición al registrarte.' },
  { q: '¿Qué sentiré?', a: 'El cacao contiene teobromina, que abre suavemente el corazón y eleva la energía sin ansiedad. La mayoría siente calor, euforia suave, apertura emocional y sentidos más agudos. Algunos lloran, otros ríen, y otros se sienten profundamente en paz.' },
  { q: '¿Necesito experiencia?', a: 'Ninguna. Nuestras ceremonias reciben tanto a principiantes como a personas con experiencia. Nuestros facilitadores crean un contenedor de seguridad profunda e inclusión.' },
  { q: '¿Qué debería traer?', a: 'Ropa cómoda, un cuaderno, una manta o cojín si lo deseas, y un corazón abierto. Nosotros proveemos colchonetas, apoyos y el cacao.' },
  { q: '¿Cómo debo prepararme?', a: 'Recomendamos comer liviano 3–4 horas antes de la ceremonia, evitar alcohol el día anterior y venir con una intención clara o una pregunta que quieras explorar.' },
]

export default function CacaoCeremonyPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1a0a04] to-[#3d2010] text-[var(--cream)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 800 800" className="w-full h-full">
            <circle cx="400" cy="400" r="300" fill="none" stroke="#c9a96e" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="200" fill="none" stroke="#c9a96e" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="100" fill="none" stroke="#c9a96e" strokeWidth="0.5" />
            <path d="M100,400 Q400,100 700,400 Q400,700 100,400" fill="none" stroke="#c9a96e" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Heart size={32} className="text-[var(--gold)]" strokeWidth={1} fill="var(--gold)" />
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]/60 font-light mb-4">Medicina vegetal</p>
          <h1 className="font-display text-6xl md:text-7xl font-light mb-6 leading-tight">
            Ceremonia de cacao
          </h1>
          <p className="font-body font-light text-[var(--cream)]/60 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Un antiguo ritual de apertura del corazón. Una reunión sagrada moderna. Ven con tus preguntas, 
            tus dolores, tu gratitud — y deja que el cacao haga el resto.
          </p>
          <Link href="#upcoming" className="btn-outline border-[var(--gold)]/40 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#1a0a04]">
            Ver ceremonias próximas
          </Link>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-pad bg-[var(--parchment)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">
              Qué <em className="italic text-amber-800">esperar</em>
            </h2>
            <p className="font-light text-[var(--stone)] mt-4 max-w-xl mx-auto">
              Cada ceremonia es única, pero cada reunión recorre estos elementos sagrados.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ceremonialElements.map((el, i) => (
              <div key={el.title} className="p-7 bg-white border border-amber-100">
                <span className="font-display text-4xl text-amber-200 font-light mb-3 block">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl text-[var(--stone-dark)] font-light mb-2">{el.title}</h3>
                <p className="text-sm font-light text-[var(--stone)] leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section id="upcoming" className="section-pad bg-[var(--cream)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--stone)] font-light mb-4">Reunión</p>
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">Ceremonias próximas</h2>
          </div>
          <div className="space-y-4">
            {upcoming.map((c) => (
              <div key={`${c.month}-${c.day}`} className="flex items-center justify-between p-6 bg-white border border-[var(--sage-light)]/20 hover:border-amber-200 hover:shadow-sm transition-all group">
                <div className="flex items-center gap-6">
                  <div className="text-center w-16">
                    <p className="font-display text-2xl text-amber-800 font-light leading-none">{c.day}</p>
                    <p className="text-[10px] tracking-wider text-[var(--stone)] uppercase font-light">{c.month}</p>
                  </div>
                  <div>
                    <p className="font-display text-lg text-[var(--stone-dark)]">{c.theme}</p>
                    <div className="flex items-center gap-3 text-xs text-[var(--stone)] font-light mt-1">
                      <span className="flex items-center gap-1"><Clock size={12} strokeWidth={1.5} /> 7:00 PM · 2 horas</span>
                      <span className="flex items-center gap-1"><Users size={12} strokeWidth={1.5} />
                        <span className={c.spots <= 4 ? 'text-[var(--terracotta)]' : ''}>{c.spots} lugares disponibles</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="font-display text-xl text-[var(--stone-dark)]">$65</p>
                    <p className="text-xs text-amber-700 font-light">$45 miembros</p>
                  </div>
                  <Link href="/auth/register" className="text-xs tracking-widest uppercase px-5 py-2 bg-amber-800 text-white hover:bg-amber-900 transition-colors shrink-0">
                    Unirse
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#1a0a04] text-[var(--cream)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-light text-[var(--cream)]">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="pb-6 border-b border-white/10 last:border-0">
                <h3 className="font-display text-xl font-light text-[var(--gold)] mb-2">{faq.q}</h3>
                <p className="text-sm font-light text-[var(--cream)]/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
