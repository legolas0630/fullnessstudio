'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Wind, Save, Upload, ImageIcon, CheckCircle2, Sliders } from 'lucide-react'

export default function AdminYogaPage() {
  const activeLocale = useLocale() as 'es' | 'en'
  const [showToast, setShowToast] = useState(false)
  
  const [yogaData, setYogaData] = useState({
    titleEs: 'Yoga Somático & Hatha',
    titleEn: 'Somatic Yoga & Hatha',
    subEs: 'Conecta con la quietud, la integración corporal y el flujo consciente de tu respiración elemental.',
    subEn: 'Connect with stillness, bodily integration, and the conscious flow of your elemental breath.',
    heroImg: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    focusEs: 'Alineación Postural, Vinyasa Flow, Yoga Nidra, Integración Somática',
    focusEn: 'Postural Alignment, Vinyasa Flow, Yoga Nidra, Somatic Integration'
  })

  const triggerUpload = () => {
    setYogaData({ ...yogaData, heroImg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80' })
  }

  return (
    <div className="space-y-8 max-w-5xl text-left">
      {showToast && (
        <div className="fixed top-24 right-6 z-[10000] flex items-center gap-3 bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md">
          <CheckCircle2 size={16} />
          <span className="text-xs font-medium">¡Sección de Yoga guardada de forma segura!</span>
        </div>
      )}

      <div className="border-b border-white/5 pb-4">
        <h2 className="font-display text-2xl text-white font-light flex items-center gap-2">
          <Wind size={20} className="text-[#E5C158]" /> Editor: Yoga & Somática
        </h2>
        <p className="text-xs text-white/40 font-light mt-1">Modifica la narrativa, enfoques técnicos e imágenes de la página de Yoga.</p>
      </div>

      {/* Media Block */}
      <div className="bg-black/20 border border-white/5 p-6 rounded-2xl space-y-4">
        <h3 className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider flex items-center gap-1.5"><ImageIcon size={12} /> Imagen de Cabecera (Yoga Hero)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <img src={yogaData.heroImg} className="aspect-video bg-neutral-900 border border-white/10 rounded-xl object-cover shadow-inner" />
          <div className="md:col-span-2 space-y-2">
            <input type="text" value={yogaData.heroImg} onChange={(e) => setYogaData({ ...yogaData, heroImg: e.target.value })} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white/60 font-mono focus:outline-none focus:border-[#E5C158]/30" />
            <button onClick={triggerUpload} className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 text-xs uppercase font-semibold rounded-lg hover:bg-white/10 transition-all"><Upload size={12} /> Reemplazar Fotografía</button>
          </div>
        </div>
      </div>

      {/* Text Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/10 p-6 rounded-2xl border border-white/5 space-y-2 md:space-y-0">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Título de la Página (ES)</label>
          <input type="text" value={yogaData.titleEs} onChange={(e) => setYogaData({...yogaData, titleEs: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Page Title (EN)</label>
          <input type="text" value={yogaData.titleEn} onChange={(e) => setYogaData({...yogaData, titleEn: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Introducción Textual (ES)</label>
          <textarea rows={3} value={yogaData.subEs} onChange={(e) => setYogaData({...yogaData, subEs: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Introducción Textual (EN)</label>
          <textarea rows={3} value={yogaData.subEn} onChange={(e) => setYogaData({...yogaData, subEn: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
        </div>
      </div>

      {/* Focus / Tags Specialisation */}
      <div className="bg-black/20 border border-white/5 p-6 rounded-2xl space-y-4">
        <h3 className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider flex items-center gap-1.5"><Sliders size={12} /> Especialidades del Módulo (Separadas por comas)</h3>
        <div className="space-y-3">
          <input type="text" value={yogaData.focusEs} onChange={(e) => setYogaData({...yogaData, focusEs: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" placeholder="Enfoques en Español" />
          <input type="text" value={yogaData.focusEn} onChange={(e) => setYogaData({...yogaData, focusEn: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" placeholder="Focus in English" />
        </div>
      </div>

      <div className="pt-2 flex justify-end">
        <button onClick={() => setShowToast(true)} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-lg shadow-lg hover:opacity-95 transition-all">
          <Save size={13} /> Guardar Cambios de Yoga
        </button>
      </div>
    </div>
  )
}