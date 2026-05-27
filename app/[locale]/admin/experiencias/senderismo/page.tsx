'use client'

import { useState } from 'react'
import { Footprints, Save, Upload, ImageIcon, CheckCircle2 } from 'lucide-react'

export default function AdminSenderismoPage() {
  const [showToast, setShowToast] = useState(false)
  
  const [hikingData, setHikingData] = useState({
    titleEs: 'Senderismo Consciente',
    titleEn: 'Mindful Hiking',
    subEs: 'El camino exterior como reflejo de tu mapa interior. Caminatas meditativas, respiración en movimiento e integración profunda con el territorio sagrado.',
    subEn: 'The outer path mirroring your inner map. Meditative trekking, breathwork in motion, and deep connection with sacred land.',
    heroImg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    focusEs: 'Presencia Activa, Baños de Bosque, Meditación en Movimiento, Silencio Ritual',
    focusEn: 'Active Presence, Forest Bathing, Meditation in Motion, Ritual Silence'
  })

  return (
    <div className="space-y-8 max-w-5xl text-left">
      {showToast && (
        <div className="fixed top-24 right-6 z-[10000] flex items-center gap-3 bg-emerald-950/90 text-emerald-400 px-6 py-4 rounded-xl shadow-2xl">
          <CheckCircle2 size={16} />
          <span className="text-xs font-medium">¡Rutas de Senderismo actualizadas en el CMS!</span>
        </div>
      )}

      <div className="border-b border-white/5 pb-4">
        <h2 className="font-display text-2xl text-white font-light flex items-center gap-2">
          <Footprints size={20} className="text-[#E5C158]" /> Editor: Senderismo Consciente
        </h2>
        <p className="text-xs text-white/40 font-light mt-1">Administra los textos líricos, los pilares de la caminata y las postales de las expediciones de Fullness.</p>
      </div>

      <div className="bg-black/20 border border-white/5 p-6 rounded-2xl space-y-4">
        <h3 className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider flex items-center gap-1.5"><ImageIcon size={12} /> Toma Panorámica (Hiking Hero)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <img src={hikingData.heroImg} className="aspect-video bg-neutral-900 border border-white/10 rounded-xl object-cover" />
          <div className="md:col-span-2 space-y-2">
            <input type="text" value={hikingData.heroImg} onChange={(e) => setHikingData({ ...hikingData, heroImg: e.target.value })} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-mono" />
            <button onClick={() => setHikingData({...hikingData, heroImg: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'})} className="bg-white/5 border text-white px-4 py-2 text-xs uppercase font-semibold rounded-lg"><Upload size={12} /> Cargar Nueva Paisaje</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/10 p-6 rounded-2xl border border-white/5">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Título General (ES)</label>
          <input type="text" value={hikingData.titleEs} onChange={(e) => setHikingData({...hikingData, titleEs: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Título General (EN)</label>
          <input type="text" value={hikingData.titleEn} onChange={(e) => setHikingData({...hikingData, titleEn: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Poética del Recorrido (ES)</label>
          <textarea rows={3} value={hikingData.subEs} onChange={(e) => setHikingData({...hikingData, subEs: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Poética del Recorrido (EN)</label>
          <textarea rows={3} value={hikingData.subEn} onChange={(e) => setHikingData({...hikingData, subEn: e.target.value})} className="w-full bg-[#0F100F] border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
        </div>
      </div>

      <div className="pt-2 flex justify-end">
        <button onClick={() => setShowToast(true)} className="bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-lg shadow-md">
          <Save size={13} /> Guardar Módulo Senderismo
        </button>
      </div>
    </div>
  )
}