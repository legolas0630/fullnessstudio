import SiteLayout from '@/components/SiteLayout'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eventos y Talleres',
  description: 'Eventos especiales, talleres, retiros y ceremonias en Sanctuary Studio.',
}

const events = [
  {
    id: 1,
    date: '7 de junio de 2025',
    day: 'Sábado',
    time: '7:00 PM',
    name: 'Ceremonia de cacao Luna Nueva',
    description: 'Reúnete bajo la luna nueva para un ritual de cacao que abre el corazón. Caminaremos juntos con meditación, respiración, círculos de compartir y música sagrada.',
    location: 'El Sanctuary — Estudio Principal',
    capacity: 16,
    spotsLeft: 6,
    price: '$65',
    category: 'Ceremonia',
    featured: true,
  },
  {
    id: 2,
    date: '14 de junio de 2025',
    day: 'Sábado',
    time: '6:00 AM',
    name: 'Caminata al amanecer',
    description: 'Una caminata guiada de 3 horas a una cumbre cercana, diseñada para llegar al amanecer. Pausaremos para respiración, una breve meditación y cacao compartido en la cima.',
    location: 'Punto de encuentro — Bear Peak (carpool desde el estudio)',
    capacity: 12,
    spotsLeft: 4,
    price: '$45',
    category: 'Senderismo',
    featured: false,
  },
  {
    id: 3,
    date: '21 de junio de 2025',
    day: 'Sábado',
    time: '3:00 PM',
    name: 'Viaje sonoro del solsticio',
    description: 'Celebra el día más largo del año con un baño de sonido inmersivo de 2 horas con cuencos de cristal, gongs, cajas shruti y guitarra acústica en vivo.',
    location: 'El Sanctuary — Estudio Principal',
    capacity: 30,
    spotsLeft: 11,
    price: '$55',
    category: 'Terapia sonora',
    featured: true,
  },
  {
    id: 4,
    date: '28 de junio de 2025',
    day: 'Sábado',
    time: '9:00 AM',
    name: 'Taller de anatomía de Pilates',
    description: 'Profundiza en el "por qué" de Pilates. Elena Rossi te guiará a través de los fundamentos anatómicos de los movimientos clave.',
    location: 'El Sanctuary — Estudio 2',
    capacity: 12,
    spotsLeft: 7,
    price: '$85',
    category: 'Taller',
    featured: false,
  },
  {
    id: 5,
    date: '12–14 de julio de 2025',
    day: 'Fin de semana',
    time: 'Fin de semana completo',
    name: 'Retiro de yoga en la montaña',
    description: 'Tres días en la montaña — yoga dos veces al día, meditaciones guiadas, ceremonia de cacao, caminata al amanecer y comidas de la granja a la mesa.',
    location: 'Elk Springs Ranch — Estes Park, CO',
    capacity: 18,
    spotsLeft: 3,
    price: '$650 (compartido) / $850 (privado)',
    category: 'Retiro',
    featured: true,
  },
  {
    id: 6,
    date: '19 de julio de 2025',
    day: 'Sábado',
    time: '7:00 PM',
    name: 'Baño de sonido Luna Llena',
    description: 'Encuentro mensual de luna llena. Libera lo que ya no te sirve con las frecuencias sanadoras de cuencos de cristal y gongs. Incluye ceremonia de té y círculo de compartir.',
    location: 'El Sanctuary — Estudio Principal',
    capacity: 25,
    spotsLeft: 16,
    price: '$45',
    category: 'Terapia sonora',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  Ceremony: 'bg-amber-50 text-amber-800 border-amber-200',
  Hiking: 'bg-blue-50 text-blue-800 border-blue-200',
  'Sound Therapy': 'bg-purple-50 text-purple-800 border-purple-200',
  Workshop: 'bg-[var(--sage)]/10 text-[var(--sage)] border-[var(--sage)]/20',
  Retreat: 'bg-rose-50 text-rose-800 border-rose-200',
}

export default function EventsPage() {
  const featured = events.filter((e) => e.featured)
  const regular = events.filter((e) => !e.featured)

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--stone-dark)] to-[var(--stone-800)] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light mb-4">Reúnete</p>
          <h1 className="font-display text-6xl md:text-7xl font-light mb-6">
            Eventos y<br /><em className="italic text-[var(--sage-light)]">Talleres</em>
          </h1>
          <p className="font-body font-light text-white/60 text-lg max-w-xl mx-auto">
            Encuentros especiales, talleres inmersivos y ceremonias sagradas — momentos que permanecen contigo.
          </p>
        </div>
      </section>

      {/* Featured events */}
      <section className="section-pad bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--stone)] font-light mb-8">Destacados</p>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {featured.map((event) => (
              <div key={event.id} className="group bg-white border border-[var(--sage-light)]/20 hover:border-[var(--sage-light)]/50 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-2 bg-gradient-to-r from-[var(--sage)] to-[var(--sage-light)]" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] px-2.5 py-0.5 border rounded-full tracking-wider uppercase font-light ${categoryColors[event.category] || ''}`}>
                      {event.category}
                    </span>
                    <span className="font-display text-lg text-[var(--stone-dark)]">{event.price}</span>
                  </div>
                  <h3 className="font-display text-2xl text-[var(--stone-dark)] font-light mb-3 leading-snug">{event.name}</h3>
                  <p className="text-sm font-light text-[var(--stone)] leading-relaxed mb-5 flex-1">{event.description}</p>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-xs text-[var(--stone)] font-light">
                      <Calendar size={13} strokeWidth={1.5} className="text-[var(--sage)]" />
                      {event.day}, {event.date} · {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--stone)] font-light">
                      <MapPin size={13} strokeWidth={1.5} className="text-[var(--sage)]" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-light">
                      <Users size={13} strokeWidth={1.5} className="text-[var(--sage)]" />
                      <span className={event.spotsLeft <= 4 ? 'text-[var(--terracotta)]' : 'text-[var(--stone)]'}>
                          {event.spotsLeft} de {event.capacity} lugares disponibles
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/auth/register"
                    className="flex items-center justify-center gap-2 py-3 bg-[var(--sage)] text-white text-sm tracking-widest uppercase font-light hover:bg-[var(--sage-dark)] transition-colors"
                  >
                    Reserva tu lugar <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Regular events */}
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--stone)] font-light mb-6">Todos los eventos</p>
          <div className="space-y-4">
            {regular.map((event) => (
              <div key={event.id} className="grid md:grid-cols-4 gap-4 p-6 bg-white border border-[var(--sage-light)]/20 hover:border-[var(--sage-light)]/50 hover:shadow-sm transition-all duration-200">
                <div>
                  <p className="font-display text-lg text-[var(--stone-dark)]">{event.date}</p>
                  <p className="text-xs text-[var(--stone)] font-light">{event.time}</p>
                  <span className={`inline-block text-[10px] px-2.5 py-0.5 border rounded-full tracking-wider uppercase font-light mt-2 ${categoryColors[event.category] || ''}`}>
                    {event.category}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-display text-xl text-[var(--stone-dark)] font-light mb-1">{event.name}</h3>
                  <p className="text-sm font-light text-[var(--stone)] leading-relaxed line-clamp-2">{event.description}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-[var(--stone)] font-light">
                    <span className="flex items-center gap-1"><MapPin size={11} strokeWidth={1.5} /> {event.location.split(' — ')[0]}</span>
                    <span className="flex items-center gap-1"><Users size={11} strokeWidth={1.5} /> {event.spotsLeft} spots left</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end justify-between gap-3">
                  <span className="font-display text-2xl text-[var(--stone-dark)]">{event.price}</span>
                  <Link
                    href="/auth/register"
                    className="text-xs tracking-widest uppercase px-5 py-2 border border-[var(--sage)] text-[var(--sage)] hover:bg-[var(--sage)] hover:text-white transition-colors"
                  >
                    Reservar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
