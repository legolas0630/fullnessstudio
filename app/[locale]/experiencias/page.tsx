'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { ArrowRight, Sparkles, Heart, Activity, Waves, Flame, Compass } from 'lucide-react'
import { useTranslations } from 'next-intl'

const experiencesList = [
  {
    id: 'yoga',
    name: 'Yoga Somático & Hatha',
    tagline: 'Unión, presencia y fluidez consciente',
    description: 'Prácticas diseñadas para restaurar el flujo de energía vital. Desde la intensidad meditativa del Hatha tradicional hasta la suavidad integrativa del Yoga Restaurativo y Somático, creando un espacio para habitar el cuerpo en absoluta calma.',
    href: '/experiencias/yoga',
    icon: Heart,
    accent: 'from-[#E5C158]/20 to-transparent',
    details: ['Hatha Tradicional', 'Vinyasa Flow', 'Yoga Somático & Nidra'],
  },
  {
    id: 'pilates',
    name: 'Pilates de Alta Precisión',
    tagline: 'Fuerza interna, control y alineación simétrica',
    description: 'Desarrolla una estructura corporal inteligente. Enfocado en la activación profunda del core, la descompresión de la columna y el control muscular milimétrico para moverte con gracia, potencia y total libertad en tu día a día.',
    href: '/pilates',
    icon: Activity,
    accent: 'from-blue-500/10 to-transparent',
    details: ['Control de Core', 'Alineación Postural', 'Flexibilidad Funcional'],
  },
  {
    id: 'sonoterapia',
    name: 'Sonoterapia & Baños de Sonido',
    tagline: 'Alineación vibracional y descanso celular',
    description: 'Sincroniza tus ondas cerebrales con frecuencias de sanación profunda. A través de cuencos de cristal de cuarzo, gongs planetarios e instrumentos ancestrales, disolvemos bloqueos de estrés acumulado para recalibrar tu sistema nervioso.',
    href: '/sonoterapia',
    icon: Waves,
    accent: 'from-purple-500/10 to-transparent',
    details: ['Cuencos de Cuarzo', 'Gongs Planetarios', 'Armonización Energética'],
  },
  {
    id: 'ceremonia-cacao',
    name: 'Ceremonias de Cacao Sagrado',
    tagline: 'Rituales de apertura, reconexión y medicina del corazón',
    description: 'Espacios circulares de alquimia comunitaria. Honramos el uso ancestral del cacao puro de grado ceremonial como un puente tierno para profundizar en la introspección, la meditación, la expresión auténtica y la música medicina.',
    href: '/ceremonia-cacao',
    icon: Flame,
    accent: 'from-rose-500/10 to-transparent',
    details: ['Rituales de Luna', 'Círculos de Palabra', 'Música Medicina'],
  },
  {
    id: 'senderismo',
    name: 'Senderismo Consciente',
    tagline: 'Meditación en movimiento y ecología interna',
    description: 'Caminatas silenciosas y guiadas por los senderos y cumbres místicas de Guanajuato. Diseñadas para reconectar con los ciclos de la naturaleza a través del enraizamiento físico, pranayama al aire libre y contemplación activa.',
    href: '/senderismo',
    icon: Compass,
    accent: 'from-emerald-500/10 to-transparent',
    details: ['Baños de Bosque (Shinrin-yoku)', 'Meditación de Cumbre', 'Enraizamiento'],
  },
]

export default function ExperiencesHubPage() {
  const [animate, setAnimate] = useState(false)
  const t = useTranslations('Header') // Reutilizamos el contexto bilingüe

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="bg-[#0F100F] min-h-screen text-white/80 font-light selection:bg-[#E5C158]/30 selection:text-[#E5C158]">
      
      {/* --- HERO DE LUJO --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#E5C158]/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={14} className="text-[#E5C158] animate-pulse" />
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-medium">Nuestros Pilares</p>
          </div>
          <h1 className={`font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 transition-all duration-1000 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Espacios de <br /><em className="italic text-[#E5C158] font-serif not-italic">Transformación</em>
          </h1>
          <p className="font-body text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explora nuestras disciplinas sagradas y terapéuticas. Cada una ha sido estructurada como un portal exclusivo para cultivar balance integral, silencio mental y maestría corporal en Fullness Studio.
          </p>
        </div>
      </section>

      {/* --- RECORRIDO DE DISCIPLINAS PREMIUM --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {experiencesList.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <div 
                key={exp.id}
                className="group relative bg-[#161816]/40 backdrop-blur-md border border-white/5 hover:border-[#E5C158]/20 rounded-2xl p-8 md:p-10 transition-all duration-500 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center"
              >
                {/* Iluminación trasera de acento dinámico en Hover */}
                <div className={`absolute -inset-px bg-gradient-to-br ${exp.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Contenedor del Icono */}
                <div className="w-14 h-14 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center text-white/60 group-hover:text-[#E5C158] group-hover:border-[#E5C158]/40 shadow-inner shrink-0 transition-all duration-500 transform group-hover:scale-105">
                  <IconComponent size={24} strokeWidth={1.2} />
                </div>

                {/* Textos y Cuerpo Informativo */}
                <div className="flex-1 relative z-10 text-left">
                  <div className="mb-3">
                    <h2 className="font-display text-2xl md:text-3xl text-white font-light group-hover:text-[#E5C158] transition-colors duration-300">
                      {exp.name}
                    </h2>
                    <p className="text-xs text-[#E5C158]/80 font-medium tracking-wide mt-0.5">
                      {exp.tagline}
                    </p>
                  </div>
                  
                  <p className="text-sm font-light text-white/50 leading-relaxed mb-5 max-w-3xl">
                    {exp.description}
                  </p>

                  {/* Micro-etiquetas de especialidades */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {exp.details.map((detail) => (
                      <span key={detail} className="text-[10px] tracking-wide px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-white/40">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón de Entrada de Enlace Seguro */}
                <div className="w-full md:w-auto shrink-0 relative z-10 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                  <Link
                    href={exp.href as any}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 text-xs tracking-widest uppercase px-6 py-3.5 border border-[#E5C158]/30 text-[#E5C158] hover:bg-[#E5C158] hover:text-black transition-all duration-300 rounded-sm font-medium active:scale-95 transform shadow-md"
                  >
                    Explorar <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

    </div>
  )
}