'use client'

import { useLocale } from 'next-intl'
import { Sparkles, ShieldCheck, Database, Layers, CheckCircle2 } from 'lucide-react'

export default function AdminOverviewHub() {
  const activeLocale = useLocale()

  return (
    <div className="space-y-8 max-w-5xl">
      
      {/* Welcome Block */}
      <div className="bg-gradient-to-br from-[#121412] to-transparent border border-white/5 p-8 rounded-2xl relative overflow-hidden text-left shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5C158]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158] rounded text-[10px] uppercase font-bold tracking-widest mb-4">
          <Sparkles size={10} /> {activeLocale === 'en' ? 'System Armed' : 'Sistema Listo'}
        </div>
        <h2 className="font-display text-3xl text-white font-light tracking-wide">
          {activeLocale === 'en' ? 'Welcome to your Sanctuary Shell' : 'Bienvenido al Núcleo de Fullness'}
        </h2>
        <p className="text-xs text-white/40 max-w-xl mt-2 leading-relaxed font-light">
          {activeLocale === 'en' 
            ? 'This structural multi-page infrastructure handles individual view modifications. Select any item from the left panel to execute safe, targeted database updates.'
            : 'Esta estructura multi-página aísla los componentes del sitio. Elige cualquier módulo del panel izquierdo para realizar modificaciones directas y seguras sin alterar el diseño.'}
        </p>
      </div>

      {/* Real-time System Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { title: 'Database Integration', status: 'Connected', desc: 'Supabase secure client handshake active.', icon: Database, color: 'text-emerald-400' },
          { title: 'Internationalization', status: 'Bilingual Engine', desc: 'Next-intl asset strings localized.', icon: Layers, color: 'text-[#E5C158]' },
          { title: 'Access Control', status: 'Encrypted Guard', desc: 'Protected by middleware authorization rules.', icon: ShieldCheck, color: 'text-amber-400' },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="p-6 bg-[#121412]/60 border border-white/5 rounded-2xl flex flex-col justify-between text-left shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                  <Icon size={14} />
                </div>
                <span className={`text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 ${stat.color}`}>
                  {stat.status}
                </span>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide uppercase">{stat.title}</h4>
                <p className="text-[11px] text-white/30 mt-1 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
      </div>

    </div>
  )
}