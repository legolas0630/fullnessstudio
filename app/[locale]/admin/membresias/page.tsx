'use client'

import { useState } from 'react'
import { CreditCard, Save, CheckCircle2, DollarSign, ListPlus } from 'lucide-react'

export default function AdminMembresiasPage() {
  const [showToast, setShowToast] = useState(false)
  const [plans, setPlans] = useState([
    { id: '1', name: 'Drop-In', priceMXN: 220, priceUSD: 12, featuresEs: 'Acceso a una sesión individual, Válido para cualquier estilo, Préstamo de mat incluido', featuresEn: 'Single session access, Valid for any style, Mat rental included' },
    { id: '2', name: 'Explorer', priceMXN: 780, priceUSD: 45, featuresEs: '4 sesiones al mes, Acceso a videoteca digital, 10% desc en talleres', featuresEn: '4 sessions per month, Digital video library access, 10% off workshops' },
    { id: '3', name: 'Devotee', priceMXN: 1450, priceUSD: 85, featuresEs: '12 sesiones al mes, Mat y utilería fija incluidos, 1 pase de invitado', featuresEn: '12 sessions per month, Fixed mat & props included, 1 guest pass' },
  ])

  const handleSave = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="space-y-8 max-w-5xl text-left">
      {showToast && (
        <div className="fixed top-24 right-6 z-[10000] flex items-center gap-3 bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md">
          <CheckCircle2 size={16} />
          <span className="text-xs font-medium tracking-wide">¡Tarifas comerciales guardadas con éxito!</span>
        </div>
      )}

      <div className="border-b border-white/5 pb-4">
        <h2 className="font-display text-2xl text-white font-light flex items-center gap-2"><CreditCard size={20} className="text-[#E5C158]" /> Tarifario de Membresías</h2>
        <p className="text-xs text-white/40 font-light mt-1">Ajusta los precios de las suscripciones estables de Fullness Studio.</p>
      </div>

      <div className="space-y-6">
        {plans.map((plan, index) => (
          <div key={plan.id} className="p-6 bg-[#121412]/90 border border-white/5 rounded-2xl space-y-4 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#E5C158] font-bold mb-1">Nombre del Plan</label>
                <input type="text" value={plan.name} onChange={(e) => { const updated = [...plans]; updated[index].name = e.target.value; setPlans(updated) }} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-semibold" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Monto (MXN)</label>
                <input type="number" value={plan.priceMXN} onChange={(e) => { const updated = [...plans]; updated[index].priceMXN = parseInt(e.target.value) || 0; setPlans(updated) }} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-mono" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Monto (USD)</label>
                <input type="number" value={plan.priceUSD} onChange={(e) => { const updated = [...plans]; updated[index].priceUSD = parseInt(e.target.value) || 0; setPlans(updated) }} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white font-mono" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[9px] uppercase tracking-wider text-white/50 mb-1 flex items-center gap-1"><ListPlus size={10} /> Beneficios Incluidos (Español)</label>
                <textarea rows={2} value={plan.featuresEs} onChange={(e) => { const updated = [...plans]; updated[index].featuresEs = e.target.value; setPlans(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-xl p-3 text-xs text-white font-light" />
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-wider text-white/50 mb-1 flex items-center gap-1"><ListPlus size={10} /> Beneficios Incluidos (Inglés)</label>
                <textarea rows={2} value={plan.featuresEn} onChange={(e) => { const updated = [...plans]; updated[index].featuresEn = e.target.value; setPlans(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-xl p-3 text-xs text-white font-light" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 flex justify-end">
        <button onClick={handleSave} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-6 py-2.5 text-xs uppercase tracking-widest font-bold rounded-lg shadow-md">
          <Save size={13} /> Guardar Suite de Planes
        </button>
      </div>
    </div>
  )
}