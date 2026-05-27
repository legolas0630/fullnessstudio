'use client'

import { useState } from 'react'
import { Zap, Save, Upload, ImageIcon, CheckCircle2 } from 'lucide-react'

export default function AdminPilatesPage() {
  const [showToast, setShowToast] = useState(false)
  
  const [pilatesData, setPilatesData] = useState({
    titleEs: 'Pilates de Alta Precisión',
    titleEn: 'High-Precision Pilates',
    subEs: 'Fortalecimiento interno profundo, alineación postural milimétrica y desarrollo de estabilidad funcional a través del método clásico.',
    subEn: 'Deep core strengthening, precise postural alignment, and functional stability built through the classical method.',
    heroImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    focusEs: 'Control de Core, Alineación Postural, Tonificación, Flexibilidad Dinámica',
    focusEn: 'Core Control, Postural Alignment, Toning, Dynamic Flexibility'
  })

  return (
    <div className="space-y-8 max-w-5xl text-left">
      {showToast && (
        <div className="fixed top-24 right-6 z-[10000] flex items-center gap-3 bg-emerald-950/90 text-emerald-400 px-6 py-4 rounded-xl shadow-2xl">
          <CheckCircle2 size={16} />
          <span className="text-xs font-medium">¡Contenido de Pilates actualizado con éxito!</span>
        </div>
      )}

      <div className="border-b border-white/5 pb-4">
        <h2 className="font-display text-2xl text-white font-light flex items-center gap-2">
          <Zap size={20} className="text-[#E5C158]" /> Editor: Pilates de Precisión
        </h2>
        <p className="text-xs text-white/40 font-light mt-1">Configura las descripciones del core, los eslóganes comerciales y las tomas de estudio.</p>
      </div>

      <div className="bg-black/20 border border-white/5 p-6 rounded-2xl space-y-4">
        <h3 className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider flex items-center gap-1.5"><ImageIcon size={12} /> Fotografía de Portada (Pilates Hero)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <img src={pilatesData.heroImg} className="aspect-video bg-neutral-900 border border-white/10 rounded-xl object-cover" />
          <div className="md:col-span-2 space-y-2">
            <input type="text" value={pilatesData.heroImg} onChange={(e) => setPilatesData({ ...pilatesData, heroImg: e.target.value })} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-mono" />
            <button onClick={() => setPilatesData({...pilatesData, heroImg: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80'})} className="bg-white/5 border text-white px-4 py-2 text-xs uppercase font-semibold rounded-lg"><Upload size={12} /> Cargar Nueva Imagen</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/10 p-6 rounded-2xl border border-white/5">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Título del Módulo (ES)</label>
          <input type="text" value={pilatesData.titleEs} onChange={(e) => setPilatesData({...pilatesData, titleEs: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Título del Módulo (EN)</label>
          <input type="text" value={pilatesData.titleEn} onChange={(e) => setPilatesData({...pilatesData, titleEn: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Bloque Textual (ES)</label>
          <textarea rows={3} value={pilatesData.subEs} onChange={(e) => setPilatesData({...pilatesData, subEs: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Bloque Textual (EN)</label>
          <textarea rows={3} value={pilatesData.subEn} onChange={(e) => setPilatesData({...pilatesData, subEn: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
        </div>
      </div>

      <div className="pt-2 flex justify-end">
        <button onClick={() => setShowToast(true)} className="bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-lg shadow-md">
          <Save size={13} /> Guardar Módulo Pilates
        </button>
      </div>
    </div>
  )
}