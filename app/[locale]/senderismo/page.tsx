import SiteLayout from '@/components/SiteLayout'
import Link from 'next/link'
import { Mountain, Clock, Users, Sun, Wind, Compass } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mindful Hiking',
  description: 'Guided sunrise hikes combining mindful walking, breathwork, and nature meditation.',
}

const hikes = [
  {
    name: 'Sunrise Summit',
    difficulty: 'Moderate',
    distance: '5.2 miles',
    gain: '1,200 ft',
    duration: '3 hours',
    maxGroup: 12,
    price: 35,
    memberPrice: 25,
    schedule: 'Every Saturday · Depart 6:00 AM',
    desc: 'Our signature hike. We time our ascent to arrive at the summit for sunrise — a moment that consistently leaves participants speechless. Includes a 20-minute guided meditation at the top and ceremonial cacao at the summit.',
    highlights: ['Summit sunrise meditation', 'Cacao at the top', 'Forest bathing on descent', 'Integration journaling'],
  },
  {
    name: 'Forest Immersion',
    difficulty: 'Easy',
    distance: '3 miles',
    gain: '400 ft',
    duration: '2.5 hours',
    maxGroup: 14,
    price: 28,
    memberPrice: 20,
    schedule: 'Every Sunday · Depart 8:00 AM',
    desc: 'A gentle amble through old-growth forest, stopping frequently to practice Shinrin-yoku (forest bathing), sensory awareness exercises, and walking meditation. Perfect for beginners or anyone craving deep nature connection.',
    highlights: ['Forest bathing techniques', 'Sensory awareness practices', 'Walking meditation', 'Herbal tea break'],
  },
  {
    name: 'Moonlight Hike',
    difficulty: 'Moderate',
    distance: '4 miles',
    gain: '800 ft',
    duration: '3 hours',
    maxGroup: 10,
    price: 45,
    memberPrice: 35,
    schedule: 'Monthly — Full Moon',
    desc: 'Hiking by moonlight is an experience unlike any other. We navigate with minimal artificial light, using the moon as our guide. Ends with a group fire, tea, and sharing circle under the stars.',
    highlights: ['Full moon navigation', 'Night sky meditation', 'Group fire ceremony', 'Star-gazing'],
  },
]

const whatToBring = [
  'Sturdy hiking shoes or boots',
  'Layers (mornings can be cold)',
  'Water (1.5–2 liters minimum)',
  'Light snack',
  'Journal & pen',
  'Sunscreen & hat',
  'Headlamp (moonlight hike)',
  'An open heart',
]

const upcomingHikes = [
  { date: 'Sat, Jun 8', name: 'Sunrise Summit', spots: 5, time: '6:00 AM' },
  { date: 'Sun, Jun 9', name: 'Forest Immersion', spots: 10, time: '8:00 AM' },
  { date: 'Sat, Jun 15', name: 'Sunrise Summit', spots: 8, time: '6:00 AM' },
  { date: 'Sun, Jun 16', name: 'Forest Immersion', spots: 7, time: '8:00 AM' },
  { date: 'Fri, Jun 20', name: 'Moonlight Hike', spots: 3, time: '8:00 PM' },
]

export default function HikingPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a1628] via-[#1a2d1a] to-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M0,400 L200,200 L400,350 L600,150 L800,300 L1000,100 L1200,250 L1200,600 L0,600 Z" fill="#1a3d1a" />
            <path d="M0,500 L300,300 L500,450 L700,250 L900,400 L1100,200 L1200,350 L1200,600 L0,600 Z" fill="#0f2a0f" opacity="0.6" />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Mountain size={40} strokeWidth={1} className="mx-auto mb-6 text-[var(--sage-light)] opacity-60" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light mb-4">Nature as Teacher</p>
          <h1 className="font-display text-6xl md:text-7xl font-light mb-6 leading-tight">
            Mindful Hiking
          </h1>
          <p className="font-body font-light text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            The trail has always been a place of transformation. We bring intention, breath, and 
            presence to the ancient practice of walking through wild places.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#hikes" className="btn-primary bg-[var(--sage)] hover:bg-[var(--sage-dark)]">
              See Our Hikes
            </Link>
            <Link href="/events" className="btn-outline border-white/30 text-white hover:bg-white/10">
              Upcoming Dates
            </Link>
          </div>
        </div>
      </section>

      {/* Why hike with us */}
      <section className="section-pad bg-[var(--parchment)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">
              More than a <em className="italic text-[var(--sage)]">walk in the woods</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Sun, title: 'Intentional Movement', desc: 'Every step is an opportunity to practice presence. We walk slowly, breathe deeply, and notice what\'s around us.' },
              { icon: Wind, title: 'Breathwork on Trail', desc: 'Specific breathing techniques timed to the terrain — energizing on the ascent, releasing on the descent.' },
              { icon: Compass, title: 'Guided Meditation', desc: 'We pause at natural landmarks for short meditations — a viewpoint, a stream, a clearing of old trees.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="p-8 bg-white border border-[var(--sage-light)]/20">
                  <Icon size={24} className="text-[var(--sage)] mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-[var(--stone-dark)] font-light mb-3">{item.title}</h3>
                  <p className="text-sm font-light text-[var(--stone)] leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hikes */}
      <section id="hikes" className="section-pad bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--stone)] font-light mb-4">Our Routes</p>
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">Choose your trail</h2>
          </div>
          <div className="space-y-8">
            {hikes.map((hike) => (
              <div key={hike.name} className="grid lg:grid-cols-3 gap-6 p-8 bg-white border border-[var(--sage-light)]/20 hover:shadow-md transition-shadow">
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full tracking-wider uppercase font-light border ${
                      hike.difficulty === 'Easy' ? 'text-green-700 border-green-200 bg-green-50' : 'text-amber-700 border-amber-200 bg-amber-50'
                    }`}>{hike.difficulty}</span>
                    <span className="text-xs text-[var(--stone)] font-light">{hike.distance} · {hike.gain} gain</span>
                  </div>
                  <h3 className="font-display text-2xl text-[var(--stone-dark)] font-light mb-3">{hike.name}</h3>
                  <p className="text-sm font-light text-[var(--stone)] leading-relaxed mb-4">{hike.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {hike.highlights.map((h) => (
                      <span key={h} className="text-[11px] px-3 py-1 bg-[var(--parchment)] text-[var(--stone)] font-light">{h}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-sm font-light text-[var(--stone)]">
                    <div className="flex items-center gap-2"><Clock size={14} strokeWidth={1.5} className="text-[var(--sage)]" /> {hike.duration}</div>
                    <div className="flex items-center gap-2"><Users size={14} strokeWidth={1.5} className="text-[var(--sage)]" /> Max {hike.maxGroup}</div>
                  </div>
                  <p className="text-xs text-[var(--stone)] font-light">{hike.schedule}</p>
                  <div className="flex gap-6">
                    <div>
                      <p className="font-display text-2xl text-[var(--stone-dark)]">${hike.price}</p>
                      <p className="text-xs text-[var(--stone)] font-light">Drop-in</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl text-[var(--sage)]">${hike.memberPrice}</p>
                      <p className="text-xs text-[var(--stone)] font-light">Members</p>
                    </div>
                  </div>
                  <Link href="/auth/register" className="block text-center py-2.5 border border-[var(--sage)] text-[var(--sage)] text-xs tracking-widest uppercase hover:bg-[var(--sage)] hover:text-white transition-colors">
                    Book This Hike
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming dates */}
      <section className="section-pad bg-[var(--parchment)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">Upcoming hikes</h2>
          </div>
          <div className="space-y-3 mb-8">
            {upcomingHikes.map((h, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white border border-[var(--sage-light)]/20">
                <div>
                  <p className="text-sm font-light text-[var(--stone)]">{h.date} · {h.time}</p>
                  <p className="font-display text-lg text-[var(--stone-dark)]">{h.name}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-light ${h.spots <= 4 ? 'text-[var(--terracotta)]' : 'text-[var(--stone)]'}`}>
                    {h.spots} spots left
                  </span>
                  <Link href="/auth/register" className="text-xs tracking-widest uppercase px-4 py-2 bg-[var(--sage)] text-white hover:bg-[var(--sage-dark)] transition-colors">
                    Join
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* What to bring */}
          <div className="p-8 bg-white border border-[var(--sage-light)]/20">
            <h3 className="font-display text-2xl text-[var(--stone-dark)] font-light mb-5">What to bring</h3>
            <div className="grid grid-cols-2 gap-2">
              {whatToBring.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-light text-[var(--stone)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--sage)] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
