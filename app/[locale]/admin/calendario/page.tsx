'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Calendar, Plus, Trash2, Save, CheckCircle2, DollarSign, Users, Tag } from 'lucide-react'

export default function AdminCalendarioPage() {
  const activeLocale = useLocale() as 'es' | 'en'
  const [showToast, setShowToast] = useState(false)
  
  // Estado dinámico para agregar/remover eventos reales de Fullness Studio
  const [events, setEvents] = useState([
    { id: '1', date: '07 Jun 2026', type: 'cacao', titleEs: 'Luna Nueva — Ceremonia de Cacao', titleEn: 'New Moon — Cacao Ceremony', spots: 6, priceMXN: 650 },
    { id: '2', date: '21 Jun 2026', type: 'hiking', titleEs: 'Solsticio de Verano — Senderismo', titleEn: 'Summer Solstice — Mindful Hiking', spots: 10, priceMXN: 650 },
  ])

  const handleAddEvent = () => {
    const newEvent = {
      id: Date.now().toString(),
      date: '15 Jul 2026',
      type: 'yoga',
      titleEs: 'Inmersión Especial de Yoga',
      titleEn: 'Special Yoga Immersion',
      spots: 12,
      priceMXN: 450
    }
    setEvents([newEvent, ...events])
  }

  const handleSave = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="space-y-8 max-w-5xl text-left">
      {showToast && (
        <div className="fixed top-24 right-6 z-[10000] flex items-center gap-3 bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 size={16} />
          <span className="text-xs font-medium tracking-wide">¡Calendario de Eventos actualizado en vivo!</span>
        </div>
      )}

      <div className="border-b border-white/5 pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h2 className="font-display text-2xl text-white font-light flex items-center gap-2"><Calendar size={20} className="text-[#E5C158]" /> Control de Calendario & Clases</h2>
          <p className="text-xs text-white/40 font-light mt-1">Agrega retiros, talleres y ceremonias. Define la disciplina raíz para el filtrado público.</p>
        </div>
        <button onClick={handleAddEvent} className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#E5C158]/30 text-[#E5C158] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#E5C158] hover:text-black transition-all">
          <Plus size={13} /> Agregar Nuevo Evento
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={event.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 bg-[#121412]/90 border border-white/5 rounded-2xl items-center shadow-xl">
            <div className="md:col-span-2">
              <label className="block text-[9px] uppercase tracking-wider text-white/30 mb-1 flex items-center gap-1"><Tag size={10} /> Disciplina</label>
              <select 
                value={event.type}
                onChange={(e) => { const updated = [...events]; updated[index].type = e.target.value; setEvents(updated) }}
                className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-light focus:outline-none"
              >
                <option value="yoga">Yoga Somático</option>
                <option value="pilates">Pilates Precisión</option>
                <option value="sound">Terapia Sonora</option>
                <option value="cacao">Ceremonia Cacao</option>
                <option value="hiking">Senderismo</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-[9px] uppercase tracking-wider text-white/30 mb-1">Fecha Evento</label>
              <input type="text" value={event.date} onChange={(e) => { const updated = [...events]; updated[index].date = e.target.value; setEvents(updated) }} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono" />
            </div>
            <div className="md:col-span-4">
              <label className="block text-[9px] uppercase tracking-wider text-[#E5C158] mb-1">Título del Evento (Español)</label>
              <input type="text" value={event.titleEs} onChange={(e) => { const updated = [...events]; updated[index].titleEs = e.target.value; setEvents(updated) }} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-3 py-2 text-xs text-white" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-[9px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Users size={10} /> Cupos</label>
              <input type="number" value={event.spots} onChange={(e) => { const updated = [...events]; updated[index].spots = parseInt(e.target.value) || 0; setEvents(updated) }} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-3 py-2 text-xs text-white" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[9px] uppercase tracking-wider text-[#E5C158] mb-1 flex items-center gap-1"><DollarSign size={10} /> Precio MXN</label>
              <input type="number" value={event.priceMXN} onChange={(e) => { const updated = [...events]; updated[index].priceMXN = parseInt(e.target.value) || 0; setEvents(updated) }} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono text-[#E5C158]" />
            </div>
            <div className="md:col-span-1 flex justify-end pt-2 md:pt-0">
              <button onClick={() => setEvents(events.filter(e => e.id !== event.id))} className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 flex justify-end">
        <button onClick={handleSave} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-lg shadow-lg hover:opacity-95 transition-all">
          <Save size={13} /> Guardar Cambios de Agenda
        </button>
      </div>
    </div>
  )
}