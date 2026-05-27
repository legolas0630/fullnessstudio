'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [mounted, setMounted] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // 1. Let the beautiful breathing cycle run for 2.6 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 2600)
    
    // 2. Completely remove the node component from DOM layout after transition completes
    const removeTimer = setTimeout(() => setMounted(false), 3200)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!mounted) return null

  return (
    <div 
      className={`fixed inset-0 bg-[#0F100F] z-[100] flex flex-col items-center justify-center transition-all duration-700 ease-in-out select-none pointer-events-none ${
        fadeOut ? 'opacity-0 scale-105' : 'opacity-100'
      }`}
    >
      {/* THE SOUND WAVE / AURA EMITTER STACK */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        
        {/* WAVE 1: Outer Lowest Intensity Deep Gold Aura */}
        <div 
          className="absolute inset-0 rounded-full border border-[#9A7B36]/20 animate-aura-wave"
          style={{ animationDelay: '0s' }}
        />

        {/* WAVE 2: Mid-Outer Muted Metallic Gold Wave */}
        <div 
          className="absolute w-[85%] h-[85%] rounded-full border border-[#C9A96E]/30 animate-aura-wave"
          style={{ animationDelay: '1.2s' }}
        />

        {/* WAVE 3: Core-Adjacent Premium Solid Gold Intensity */}
        <div 
          className="absolute w-[65%] h-[65%] rounded-full border border-[#E5C158]/40 animate-aura-wave"
          style={{ animationDelay: '2.4s' }}
        />

        {/* WAVE 4: Inner Intense Luminescent Vibrational Wave */}
        <div 
          className="absolute w-[45%] h-[45%] rounded-full border border-[#F3D782]/60 animate-aura-wave"
          style={{ animationDelay: '3.6s' }}
        />

        {/* CENTRAL BREATHING COMPONENT CORE */}
        <div className="absolute w-24 h-24 rounded-full bg-black/40 border border-[#E5C158]/30 flex items-center justify-center animate-breath-core shadow-2xl backdrop-blur-sm z-10">
          <div className="w-16 h-16 relative">
            <Image 
              src="/icon.png"
              alt="Fullness Studio Brand Asset"
              width={64}
              height={64}
              className="object-contain opacity-90"
              priority
            />
          </div>
        </div>

      </div>

      {/* REVERB STUDIO NAME CAPTION */}
      <div 
        className={`mt-4 text-center transition-all duration-1000 transform delay-200 ${
          fadeOut ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        <h2 className="font-display text-2xl text-[#E5C158] tracking-widest font-light">
          FULLNESS
        </h2>
        <p className="text-[9px] tracking-[0.4em] uppercase text-white/40 font-body font-light mt-1.5">
          Estudio de Bienestar
        </p>
      </div>

    </div>
  )
}