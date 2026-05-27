import SiteLayout from '@/components/SiteLayout'
import Link from 'next/link'
import { Clock, Users, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pilates',
  description: 'Clases de Pilates centradas en el núcleo en grupos pequeños. Construye fuerza, alineación y conciencia corporal.',
}

const classes = [
  {
    name: 'Pilates Mat — Foundations',
    level: 'Beginner',
    duration: '55 min',
    max: 12,
    dropIn: 30,
    member: 22,
    desc: 'Comienza aquí. Aprende los seis principios fundamentales de Pilates — centrado, concentración, control, precisión, respiración y fluidez — mediante ejercicios clásicos en colchoneta. No se necesita equipo.',
    schedule: ['Mon 12:00pm', 'Wed 9:00am', 'Fri 10:00am'],
  },
  {
    name: 'Pilates Core',
    level: 'All levels',
    duration: '55 min',
    max: 12,
    dropIn: 30,
    member: 22,
    desc: 'A targeted session focusing on deep core stabilizers, pelvic floor, and spinal mobility. Perfect as a standalone practice or complement to any other movement modality.',
    schedule: ['Tue 6:00pm', 'Thu 6:00pm', 'Sat 12:00pm'],
  },
  {
    name: 'Pilates Express',
    level: 'Intermediate',
    duration: '45 min',
    max: 10,
    dropIn: 25,
    member: 18,
    desc: 'Efficient and effective — a condensed session designed for practitioners who know the basics and want a high-quality midday or lunchtime practice.',
    schedule: ['Wed 12:00pm', 'Fri 12:00pm'],
  },
  {
    name: 'Pilates & Yoga Fusion',
    level: 'All levels',
    duration: '75 min',
    max: 14,
    dropIn: 32,
    member: 24,
    desc: 'Lo mejor de ambos mundos. La primera mitad trabaja la inteligencia del núcleo con Pilates; la segunda mitad abre y alarga con yoga. Una práctica bellamente completa.',
    schedule: ['Mon 6:00pm', 'Sun 9:00am'],
  },
]

const benefits = [
  { title: 'Core Strength', desc: 'Deep abdominal and spinal stabilizers most exercise misses.' },
  { title: 'Posture', desc: 'Realign habitual patterns that create tension and pain.' },
  { title: 'Flexibility', desc: 'Lengthen tight muscles without overstretching.' },
  { title: 'Body Awareness', desc: 'Understand how your body moves — and why.' },
  { title: 'Injury Prevention', desc: 'Build the foundation that keeps you moving safely.' },
  { title: 'Stress Relief', desc: 'Focused movement quiets the mind as effectively as meditation.' },
]

export default function PilatesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#3d1a0a] to-[var(--terracotta)] text-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full border border-white/5 translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-light mb-4">La práctica</p>
          <h1 className="font-display text-6xl md:text-7xl font-light mb-6 leading-tight">
            Pilates
          </h1>
          <p className="font-body font-light text-white/70 text-lg max-w-xl leading-relaxed mb-8">
            Joseph Pilates lo llamó "Contrología" — el arte del control completo de tu propio cuerpo. 
            Grupos pequeños. Instrucción precisa. Resultados reales.
          </p>
          <Link href="/calendar" className="btn-outline border-white/40 text-white hover:bg-white hover:text-[var(--terracotta)]">
            Reserva una clase
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-[var(--parchment)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">
              Por qué Pilates lo cambia <em className="italic text-[var(--terracotta)]">todo</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 bg-white border border-[var(--parchment)]">
                <h3 className="font-display text-xl text-[var(--stone-dark)] font-light mb-2">{b.title}</h3>
                <p className="text-sm font-light text-[var(--stone)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="section-pad bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--stone)] font-light mb-4">Lo que ofrecemos</p>
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">Nuestras clases de Pilates</h2>
          </div>
          <div className="space-y-6">
            {classes.map((cls) => (
              <div key={cls.name} className="grid lg:grid-cols-3 gap-6 p-7 bg-white border border-[var(--sage-light)]/20 hover:shadow-md transition-shadow duration-200">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--terracotta)] font-light">{cls.level}</span>
                  </div>
                  <h3 className="font-display text-2xl text-[var(--stone-dark)] font-light mb-3">{cls.name}</h3>
                  <p className="text-sm font-light text-[var(--stone)] leading-relaxed mb-4">{cls.desc}</p>
                  <div className="flex gap-4 text-sm text-[var(--stone)] font-light">
                    <span className="flex items-center gap-1.5"><Clock size={14} strokeWidth={1.5} /> {cls.duration}</span>
                    <span className="flex items-center gap-1.5"><Users size={14} strokeWidth={1.5} /> Max {cls.max}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-6">
                    <div>
                      <p className="font-display text-2xl text-[var(--stone-dark)]">${cls.dropIn}</p>
                      <p className="text-xs text-[var(--stone)] font-light">Clase suelta</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl text-[var(--terracotta)]">${cls.member}</p>
                      <p className="text-xs text-[var(--stone)] font-light">Miembros</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cls.schedule.map((s) => (
                      <span key={s} className="text-[11px] px-3 py-1 border border-[var(--terracotta)]/30 text-[var(--stone)] font-light">{s}</span>
                    ))}
                  </div>
                  <Link href="/calendar" className="flex items-center gap-2 text-sm text-[var(--terracotta)] tracking-widest uppercase font-light hover:gap-3 transition-all">
                    Book <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--terracotta)] text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">¿Listo para encontrar tu centro?</h2>
          <p className="font-light text-white/70 mb-8">Tu primera clase está a un clic. Todos los niveles son bienvenidos — no se necesita experiencia.</p>
          <Link href="/auth/register" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--terracotta)]">
            Reserva tu primera clase
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
