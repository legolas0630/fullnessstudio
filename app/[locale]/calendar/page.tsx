'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Clock, Users, Calendar, ChevronRight } from 'lucide-react'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// Sample schedule data - All teachers updated to Katya natively
const classes: Record<string, { time: string; name: string; teacher: string; duration: string; spots: number; type: string }[]> = {
  'Mon': [
    { time: '7:00 AM', name: 'Sunrise Vinyasa', teacher: 'Katya', duration: '60 min', spots: 4, type: 'yoga' },
    { time: '9:30 AM', name: 'Gentle Hatha', teacher: 'Katya', duration: '75 min', spots: 12, type: 'yoga' },
    { time: '12:00 PM', name: 'Pilates Core', teacher: 'Katya', duration: '55 min', spots: 8, type: 'pilates' },
    { time: '6:00 PM', name: 'Vinyasa Flow', teacher: 'Katya', duration: '60 min', spots: 6, type: 'yoga' },
    { time: '7:30 PM', name: 'Yin Yoga', teacher: 'Katya', duration: '75 min', spots: 14, type: 'yoga' },
  ],
  'Tue': [
    { time: '7:00 AM', name: 'Pilates Mat', teacher: 'Katya', duration: '55 min', spots: 10, type: 'pilates' },
    { time: '9:00 AM', name: 'Hatha Flow', teacher: 'Katya', duration: '75 min', spots: 18, type: 'yoga' },
    { time: '6:00 PM', name: 'Pilates Core', teacher: 'Katya', duration: '55 min', spots: 2, type: 'pilates' },
    { time: '7:30 PM', name: 'Yin & Restore', teacher: 'Katya', duration: '75 min', spots: 9, type: 'yoga' },
  ],
  'Wed': [
    { time: '7:00 AM', name: 'Morning Hatha', teacher: 'Katya', duration: '75 min', spots: 16, type: 'yoga' },
    { time: '12:00 PM', name: 'Pilates Express', teacher: 'Katya', duration: '45 min', spots: 6, type: 'pilates' },
    { time: '6:00 PM', name: 'Vinyasa Flow', teacher: 'Katya', duration: '60 min', spots: 11, type: 'yoga' },
    { time: '7:30 PM', name: 'Restorative', teacher: 'Katya', duration: '75 min', spots: 8, type: 'yoga' },
  ],
  'Thu': [
    { time: '7:00 AM', name: 'Sunrise Vinyasa', teacher: 'Katya', duration: '60 min', spots: 7, type: 'yoga' },
    { time: '9:30 AM', name: 'Gentle Hatha', teacher: 'Katya', duration: '75 min', spots: 13, type: 'yoga' },
    { time: '6:00 PM', name: 'Pilates Mat', teacher: 'Katya', duration: '55 min', spots: 5, type: 'pilates' },
    { time: '7:00 PM', name: 'Yin Yoga', teacher: 'Katya', duration: '75 min', spots: 10, type: 'yoga' },
    { time: '8:00 PM', name: 'Sound Bath', teacher: 'Katya', duration: '75 min', spots: 6, type: 'sound' },
  ],
  'Fri': [
    { time: '7:00 AM', name: 'Vinyasa Flow', teacher: 'Katya', duration: '60 min', spots: 9, type: 'yoga' },
    { time: '9:00 AM', name: 'Hatha Yoga', teacher: 'Katya', duration: '75 min', spots: 15, type: 'yoga' },
    { time: '12:00 PM', name: 'Pilates Core', teacher: 'Katya', duration: '55 min', spots: 4, type: 'pilates' },
    { time: '7:30 PM', name: 'Yoga Nidra', teacher: 'Katya', duration: '60 min', spots: 20, type: 'yoga' },
  ],
  'Sat': [
    { time: '7:00 AM', name: 'Sunrise Hike', teacher: 'Katya', duration: '3 hrs', spots: 8, type: 'hiking' },
    { time: '8:00 AM', name: 'Vinyasa Flow', teacher: 'Katya', duration: '60 min', spots: 3, type: 'yoga' },
    { time: '10:00 AM', name: 'Hatha Yoga', teacher: 'Katya', duration: '75 min', spots: 14, type: 'yoga' },
    { time: '12:00 PM', name: 'Pilates Mat', teacher: 'Katya', duration: '55 min', spots: 7, type: 'pilates' },
    { time: '4:00 PM', name: 'Sound Bath', teacher: 'Katya', duration: '75 min', spots: 12, type: 'sound' },
  ],
  'Sun': [
    { time: '8:00 AM', name: 'Gentle Hatha', teacher: 'Katya', duration: '75 min', spots: 17, type: 'yoga' },
    { time: '10:00 AM', name: 'Restorative', teacher: 'Katya', duration: '75 min', spots: 11, type: 'yoga' },
    { time: '4:00 PM', name: 'Yin Yoga', teacher: 'Katya', duration: '75 min', spots: 8, type: 'yoga' },
    { time: '6:00 PM', name: 'Yoga Nidra', teacher: 'Katya', duration: '60 min', spots: 20, type: 'yoga' },
  ],
}

const typeColors: Record<string, string> = {
  yoga: 'bg-[#587d4e]/10 border-[#587d4e]/30 text-[#c2d2b8]',
  pilates: 'bg-amber-600/10 border-amber-600/30 text-amber-500',
  sound: 'bg-[#E5C158]/10 border-[#E5C158]/30 text-[#E5C158]',
  hiking: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
}

export default function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState('Mon')
  const [filter, setFilter] = useState('all')
  
  const t = useTranslations('Calendar')

  const filteredClasses = (classes[selectedDay] || []).filter(
    (c) => filter === 'all' || c.type === filter
  )

  return (
    <div className="w-full bg-[#0F100F] min-h-screen text-white">
      {/* Hero Banner Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#161816] to-[#0F100F] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-left">
          <div className="flex items-center gap-2 text-[#E5C158] mb-3">
            <Calendar size={14} strokeWidth={1.5} />
            <p className="text-[10px] tracking-[0.3em] uppercase font-light">{t('seccion')}</p>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-light mb-4">{t('titulo')}</h1>
          <p className="font-body font-light text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
            {t('subtitulo')}
          </p>
        </div>
      </section>

      {/* Calendar Interactive Container */}
      <section className="py-16 bg-[#0F100F]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Luxury Day Picker Pills */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-3 scrollbar-none select-none">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-shrink-0 px-6 py-3 text-xs tracking-widest uppercase font-medium rounded-sm border transition-all duration-300 active:scale-95 ${
                  selectedDay === day
                    ? 'bg-[#E5C158] text-black border-[#E5C158] shadow-[0_4px_15px_rgba(229,193,88,0.25)]'
                    : 'bg-[#161816] border-white/5 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {t(`day_${day}`)}
              </button>
            ))}
          </div>

          {/* Asymmetrical Category Filters Row */}
          <div className="flex flex-wrap gap-2 mb-10 select-none">
            {['all', 'yoga', 'pilates', 'sound', 'hiking'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-[10px] tracking-widest uppercase font-light border rounded-full transition-all duration-300 active:scale-95 ${
                  filter === f
                    ? 'bg-white/10 text-[#E5C158] border-[#E5C158]/50 shadow-inner'
                    : 'border-white/5 bg-[#161816]/40 text-white/50 hover:text-white hover:border-white/10'
                }`}
              >
                {f === 'all' ? t('filtroTodas') : t(`tipo_${f}`)}
              </button>
            ))}
          </div>

          {/* Premium Obsidian Class List Grid */}
          <div className="space-y-3">
            {filteredClasses.length === 0 ? (
              <div className="py-20 bg-[#161816]/40 border border-white/5 rounded-2xl text-center backdrop-blur-sm">
                <p className="font-display text-2xl text-white/40 font-light italic">{t('noClases')}</p>
              </div>
            ) : (
              filteredClasses.map((cls, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-[#161816] border border-white/5 rounded-xl hover:border-[#E5C158]/30 hover:shadow-2xl transition-all duration-300 items-center text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium tracking-wider text-white/50 bg-black/30 px-3 py-1.5 rounded border border-white/5 min-w-[90px] text-center">{cls.time}</span>
                    <span className={`text-[9px] px-2.5 py-1 border rounded-full tracking-widest uppercase font-medium ${typeColors[cls.type]}`}>
                      {t(`tipo_${cls.type}`)}
                    </span>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="font-display text-xl text-white group-hover:text-[#E5C158] transition-colors duration-300">{cls.name}</h3>
                    <p className="text-xs text-white/40 font-light mt-0.5">{t('con')} <span className="text-white/70 font-normal">{cls.teacher}</span></p>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-6 border-t border-white/5 md:border-0 pt-4 md:pt-0">
                    <div className="flex gap-4 text-xs text-white/50 font-light">
                      <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#E5C158]/60" /> {cls.duration}</span>
                      <span className={`flex items-center gap-1.5 ${cls.spots <= 3 ? 'text-amber-500 font-medium' : ''}`}>
                        <Users size={13} className="text-[#E5C158]/60" /> {cls.spots} {t('lugares')}
                      </span>
                    </div>
                    <Link
                      href="/auth/register"
                      className="text-xs tracking-widest uppercase px-5 py-2.5 bg-transparent border border-[#E5C158]/40 text-[#E5C158] hover:bg-[#E5C158] hover:text-black transition-all rounded-sm font-medium active:scale-95"
                    >
                      {t('btnReservar')}
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Premium Bento Priority Box */}
          <div className="mt-14 p-8 md:p-12 bg-gradient-to-br from-[#161816] to-[#0F100F] border border-[#E5C158]/10 rounded-2xl text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full border border-[#E5C158]/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            
            <p className="font-display text-2xl md:text-3xl text-white font-light mb-3">
              {t('ctaTitulo')}
            </p>
            <p className="text-sm font-light text-white/60 mb-6 max-w-xl leading-relaxed">
              {t('ctaSubtitulo')}
            </p>
            <Link href="/memberships" className="inline-flex items-center justify-center bg-[#E5C158] text-black px-8 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#F3D782] active:scale-95 transition-all shadow-lg">
              {t('ctaBtn')}
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}