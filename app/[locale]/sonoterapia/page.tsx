'use client'

import { useState } from 'react'
import SiteLayout from '@/components/SiteLayout'
import Link from 'next/link'
import { Play, Pause, Music, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'

const instruments = [
  { name: 'Crystal Singing Bowls', desc: 'Made of pure quartz crystal, these bowls produce overtone-rich frequencies that resonate with the body\'s energy centers.', icon: '🔮' },
  { name: 'Himalayan Singing Bowls', desc: 'Hand-hammered in Nepal from seven metals, each bowl carries the memory of thousands of years of healing tradition.', icon: '🎵' },
  { name: 'Gong Bath', desc: 'The gong\'s vast frequency spectrum washes over the body, releasing deep-held tension and shifting brainwave states.', icon: '🥁' },
  { name: 'Tuning Forks', desc: 'Precise frequencies applied to the body and energy field for targeted vibrational healing and nervous system support.', icon: '🎶' },
  { name: 'Shruti Box & Drone', desc: 'Sustained tones that create a meditative container, slowing the mind and opening the heart.', icon: '🎸' },
]

const sessions = [
  { name: 'Community Sound Bath', duration: '75 min', price: 35, memberPrice: 25, max: 25, schedule: ['Thu 8:00pm', 'Sat 4:00pm'] },
  { name: 'Full Moon Journey', duration: '90 min', price: 45, memberPrice: 35, max: 25, schedule: ['Monthly — Full Moon'] },
  { name: 'Private Sound Session', duration: '60 min', price: 120, memberPrice: 95, max: 1, schedule: ['By appointment'] },
  { name: 'Couples Sound Healing', duration: '75 min', price: 180, memberPrice: 150, max: 2, schedule: ['By appointment'] },
]

const samples = [
  { title: 'Crystal Bowl — F note (Heart)', duration: '2:34', instrument: 'Crystal Bowl' },
  { title: 'Himalayan Bowl Meditation', duration: '3:12', instrument: 'Himalayan Bowl' },
  { title: 'Gong Bath Opening', duration: '1:58', instrument: 'Gong' },
  { title: 'Full Moon Ceremony Preview', duration: '4:01', instrument: 'Mixed' },
]

export default function SoundTherapyPage() {
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-[#0d0d2b] to-[#1a0a3d] text-white">
        {/* Concentric rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white/5"
              style={{ width: `${100 + i * 80}px`, height: `${100 + i * 80}px` }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light mb-4">Vibrational Healing</p>
          <h1 className="font-display text-6xl md:text-7xl font-light mb-6 leading-tight">
            Sound Therapy
          </h1>
          <p className="font-body font-light text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Lie back. Close your eyes. Let the resonant frequencies of ancient instruments 
            carry you into states of deep healing rest — where the body remembers how to restore itself.
          </p>
          <Link href="/calendar" className="btn-outline border-white/30 text-white hover:bg-white/10">
            Reserve Your Spot
          </Link>
        </div>
      </section>

      {/* What is it */}
      <section className="section-pad bg-[var(--parchment)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light mb-6">
            What is a <em className="italic text-purple-700">Sound Bath?</em>
          </h2>
          <p className="font-body font-light text-[var(--stone)] text-lg leading-relaxed mb-6">
            A sound bath is an immersive meditative experience in which participants lie comfortably 
            on mats while a practitioner plays a variety of instruments. Rather than "listening" to music, 
            you are bathed in sound waves that interact with your brainwaves, nervous system, and cellular structure.
          </p>
          <p className="font-body font-light text-[var(--stone)] leading-relaxed">
            Research shows that sound healing can reduce cortisol, lower blood pressure, ease anxiety and depression, 
            improve sleep, and induce deep meditative states even in those who find traditional meditation difficult.
          </p>
        </div>
      </section>

      {/* Instruments */}
      <section className="section-pad bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">The instruments</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {instruments.map((inst) => (
              <div key={inst.name} className="p-7 bg-white border border-[var(--sage-light)]/20 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">{inst.icon}</span>
                <h3 className="font-display text-xl text-[var(--stone-dark)] font-light mb-2">{inst.name}</h3>
                <p className="text-sm font-light text-[var(--stone)] leading-relaxed">{inst.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio samples */}
      <section className="section-pad bg-gradient-to-br from-[#0d0d2b] to-[#1a0a3d] text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light mb-4">Listen</p>
            <h2 className="font-display text-4xl font-light">Preview samples</h2>
            <p className="font-light text-white/50 mt-3 text-sm">Short previews — full recordings available to members</p>
          </div>
          <div className="space-y-3">
            {samples.map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                <button
                  onClick={() => setPlaying(playing === i ? null : i)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors shrink-0"
                >
                  {playing === i
                    ? <Pause size={16} strokeWidth={1.5} />
                    : <Play size={16} strokeWidth={1.5} className="ml-0.5" />}
                </button>
                <div className="flex-1">
                  <p className="text-sm text-white font-light">{s.title}</p>
                  <p className="text-xs text-white/40 font-light">{s.instrument}</p>
                  {playing === i && (
                    <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--gold)] rounded-full animate-pulse" style={{ width: '35%' }} />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Music size={14} className="text-white/30" strokeWidth={1.5} />
                  <span className="text-xs text-white/40 font-light">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/auth/register" className="text-sm text-[var(--gold)] hover:underline font-light">
              Sign up to access full recordings →
            </Link>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="section-pad bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light">Sessions & pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {sessions.map((s) => (
              <div key={s.name} className="p-7 bg-white border border-[var(--sage-light)]/20 hover:shadow-md transition-shadow">
                <h3 className="font-display text-2xl text-[var(--stone-dark)] font-light mb-4">{s.name}</h3>
                <div className="flex gap-6 mb-4">
                  <div>
                    <p className="font-display text-2xl text-[var(--stone-dark)]">${s.price}</p>
                    <p className="text-xs text-[var(--stone)] font-light">Drop-in</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-purple-700">${s.memberPrice}</p>
                    <p className="text-xs text-[var(--stone)] font-light">Members</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.schedule.map((sch) => (
                    <span key={sch} className="text-[11px] px-3 py-1 border border-purple-200 text-purple-700 font-light">{sch}</span>
                  ))}
                </div>
                <Link href="/calendar" className="flex items-center gap-2 text-sm text-purple-700 tracking-widest uppercase font-light hover:gap-3 transition-all">
                  Book <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
