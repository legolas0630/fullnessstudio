'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { Calendar, Clock, ArrowLeft, Shield, Sparkles, Heart, Leaf, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'

const yogaStyles = [
  {
    name: 'Ashtanga Yoga',
    focus: 'Dinamismo, fuerza interna y purificación',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    description: 'Una práctica vigorosa y estructurada que sincroniza una secuencia fija de posturas dinámicas con una respiración profunda y sonora (Ujjayi). Es un método ideal para quienes buscan desarrollar disciplina férrea, fuerza física, enfoque mental y una profunda desintoxicación corporal a través del calor sanador.',
  },
  {
    name: 'Hatha Yoga',
    focus: 'Equilibrio, alineación y presencia pura',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=800&q=80',
    description: 'El pilar fundamental de la tradición mística. Nos enfocamos en la alineación anatómica precisa a través de asanas sostenidas y ejercicios de control sutil de la energía (pranayama). Una práctica equilibrada que estabiliza las fluctuaciones de la mente y tonifica el cuerpo.',
  },
  {
    name: 'Yoga Restaurativo',
    focus: 'Liberación somática y descanso celular profunda',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80',
    description: 'Un viaje de rendición absoluta hacia la quietud. Utilizando apoyos anatómicos como bolsters, mantas y bloques, el cuerpo sostiene posturas pasivas durante largos periodos. Permite que los tejidos se suelten por completo, calmando el sistema nervioso a nivel celular.',
  },
]

export default function YogaExperiencePage() {
  const [animate, setAnimate] = useState(false)
  const t = useTranslations('Header')

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="bg-[#0F100F] min-h-screen text-white/80 font-light selection:bg-[#E5C158]/30 selection:text-[#E5C158]">
      
      {/* --- BOTÓN DE RETORNO --- */}
      <div className="max-w-7xl mx-auto px-6 pt-36">
        <Link 
          href="/experiencias"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-[#E5C158] transition-colors group"
        >
          <ArrowLeft size={13} className="transform group-hover:-translate-x-1 transition-transform" /> 
          Volver a Experiencias
        </Link>
      </div>

      {/* --- HERO DE LA DISCIPLINA --- */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#E5C158]/5 blur-[140px] rounded-full pointer-events-none opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 items-center">
          
          {/* Bloque Izquierdo Informativo */}
          <div className="lg:col-span-7 text-left relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={13} className="text-[#E5C158]" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-medium">Lienzo Corporal Interior</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              Yoga & <br /><em className="italic text-[#E5C158] font-serif not-italic">Exploración Somática</em>
            </h1>
            <p className="font-body text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
              Nuestras sesiones en Fullness Studio van más allá del ejercicio convencional; son un espacio sagrado para el movimiento con intención. Fusionamos la herencia de las escuelas orientales tradicionales con el entendimiento fisiológico occidental para ayudarte a disolver memorias de estrés corporal y regresar a tu equilibrio natural.
            </p>
            
            <div className="flex flex-wrap gap-6 text-xs text-white/60 border-t border-white/5 pt-6">
              <div className="flex items-center gap-2.5 font-light">
                <Clock size={14} className="text-[#E5C158]" /> 
                <span>Clases guiadas de 75 minutos</span>
              </div>
              <div className="flex items-center gap-2.5 font-light">
                <Shield size={14} className="text-[#E5C158]" /> 
                <span>Atención personalizada multinivel</span>
              </div>
            </div>
          </div>

          {/* Bloque Derecho (Tarjeta de Beneficios Premium) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#161816]/60 border border-white/5 p-8 sm:p-10 rounded-2xl backdrop-blur-md relative overflow-hidden shadow-2xl">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#E5C158]/5 blur-3xl rounded-full" />
              
              <h3 className="font-display text-xl text-white font-light mb-6 flex items-center gap-2.5">
                <Leaf size={15} className="text-[#E5C158]" /> Beneficios del Estudio
              </h3>
              
              <ul className="space-y-4 text-xs font-light text-white/50 border-b border-white/5 pb-6 mb-6">
                <li className="flex gap-3 items-start"><span className="text-[#E5C158] shrink-0">✦</span> Regulación profunda del eje del estrés y alivio del cortisol.</li>
                <li className="flex gap-3 items-start"><span className="text-[#E5C158] shrink-0">✦</span> Descompresión vertebral y optimización muscular profunda.</li>
                <li className="flex gap-3 items-start"><span className="text-[#E5C158] shrink-0">✦</span> Expansión del rango de quietud mental y enfoque cognitivo claro.</li>
                <li className="flex gap-3 items-start"><span className="text-[#E5C158] shrink-0">✦</span> Mayor conexión neuromuscular y modulación del sistema simpático.</li>
              </ul>

              <Link
                href="/calendario"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black text-xs tracking-widest uppercase font-semibold rounded-sm hover:opacity-90 active:scale-98 transform transition-all shadow-[0_4px_20px_rgba(229,193,88,0.15)]"
              >
                Reservar una clase <Calendar size={13} className="ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN SEGUNDA: DESGLOSE DE ESTILOS (TARJETAS DE CRISTAL E IMÁGENES REALES) --- */}
      <section className="py-20 border-t border-white/5 relative z-10 bg-[#161816]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center md:text-left mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E5C158] font-medium mb-2">Métodos Disponibles</p>
            <h2 className="font-display text-3xl text-white font-light tracking-wide">Disciplinas de Nuestra Escuela</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yogaStyles.map((style) => {
              return (
                <div 
                  key={style.name}
                  className="bg-[#161816]/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#E5C158]/20 flex flex-col group shadow-xl"
                >
                  {/* Contenedor de Imagen de Alta Gama */}
                  <div className="relative h-52 w-full overflow-hidden border-b border-white/5">
                    <img 
                      src={style.image} 
                      alt={style.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-[0.75] contrast-[0.95]"
                      loading="lazy"
                    />
                    {/* Difuminado inferior de la imagen para fundirse con la tarjeta */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161816]/90 via-transparent to-transparent" />
                  </div>

                  {/* Cuerpo de Contenido */}
                  <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 text-left relative z-10">
                    <div>
                      <h3 className="font-display text-xl text-white font-light mb-1 group-hover:text-[#E5C158] transition-colors duration-300">
                        {style.name}
                      </h3>
                      <p className="text-[10px] text-[#E5C158]/70 font-medium mb-4 tracking-wide uppercase">
                        {style.focus}
                      </p>
                      <p className="text-xs font-light text-white/45 leading-relaxed">
                        {style.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- CINTILLO RITUAL DE AMENIDADES --- */}
      <section className="py-14 border-t border-b border-white/5 bg-[#161816]/30 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-5">
            <Star size={12} className="text-[#E5C158]" fill="#E5C158" />
            <p className="font-display text-lg tracking-wider text-white font-light">Incluido en cada una de tus sesiones</p>
            <Star size={12} className="text-[#E5C158]" fill="#E5C158" />
          </div>
          <p className="text-xs font-light text-white/50 leading-relaxed max-w-2xl mx-auto tracking-wide">
            Préstamo de esterillas / mats ecológicos premium de alto agarre · Utilería terapéutica completa (bloques de corcho, mantas de algodón y zafus) · Ajustes y alineaciones posturales personalizadas respetando la biomecánica individual · Té orgánico de integración herbolaria al finalizar la sesión en nuestra sala del alma.
          </p>
        </div>
      </section>

    </div>
  )
}