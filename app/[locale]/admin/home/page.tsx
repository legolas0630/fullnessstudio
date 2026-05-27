'use client'

import { useState } from 'react'
import { FileText, Save, Upload, ImageIcon, CheckCircle2, DollarSign } from 'lucide-react'

export default function AdminHomePage() {
  const [showToast, setShowToast] = useState(false)
  const [homeData, setHomeData] = useState({
    heroTitleEs: 'Encuentra tu Plenitud', heroTitleEn: 'Find your Fullness',
    heroSubEs: 'Un espacio sagrado para yoga, pilates, sanación sonora y comunidad con alma.', heroSubEn: 'A sacred space for yoga, pilates, sound healing, and soul community.',
    heroImg: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    bentoYogaPrice: '$312 MXN', bentoYogaImg: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80',
    bentoPilatesPrice: '$381 MXN', bentoPilatesImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
  })

  const triggerUpload = (keyName: string) => {
    setHomeData({ ...homeData, [keyName]: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80' })
  }

  return (
    <div className="space-y-8 max-w-5xl text-left">
      {showToast && (
        <div className="fixed top-24 right-6 z-[10000] flex items-center gap-3 bg-emerald-950/90 text-emerald-400 px-6 py-4 rounded-xl border border-emerald-500/30">
          <CheckCircle2 size={16} /> <span className="text-xs font-medium">¡Página de Inicio optimizada!</span>
        </div>
      )}

      <div className="border-b border-white/5 pb-4">
        <h2 className="font-display text-2xl text-white font-light flex items-center gap-2"><FileText size={20} className="text-[#E5C158]" /> Configuración de Página de Inicio</h2>
        <p className="text-xs text-white/40 font-light mt-1">Personaliza el mensaje principal de bienvenida y las imágenes clave de la portada.</p>
      </div>

      {/* Hero Content block */}
      <div className="bg-black/20 border border-white/5 p-6 rounded-2xl space-y-4">
        <h3 className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider flex items-center gap-1.5"><ImageIcon size={12} /> Imagen Principal del Hero</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <img src={homeData.heroImg} className="aspect-video bg-neutral-900 border border-white/10 rounded-xl object-cover" />
          <div className="md:col-span-2 space-y-2">
            <input type="text" value={homeData.heroImg} onChange={(e) => setHomeData({ ...homeData, heroImg: e.target.value })} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-mono" />
            <button onClick={() => triggerUpload('heroImg')} className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 text-xs uppercase font-semibold rounded-lg"><Upload size={12} /> Cargar Imagen</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" value={homeData.heroTitleEs} onChange={(e) => setHomeData({...homeData, heroTitleEs: e.target.value})} className="w-full bg-[#0F100F] border border-white/5 p-3 text-xs text-white rounded-xl" placeholder="Título ES" />
        <input type="text" value={homeData.heroTitleEn} onChange={(e) => setHomeData({...homeData, heroTitleEn: e.target.value})} className="w-full bg-[#0F100F] border border-white/5 p-3 text-xs text-white rounded-xl" placeholder="Título EN" />
      </div>

      <div className="pt-4 flex justify-end">
        <button onClick={() => setShowToast(true)} className="bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg shadow-md">Guardar Cambios de Portada</button>
      </div>
    </div>
  )
}