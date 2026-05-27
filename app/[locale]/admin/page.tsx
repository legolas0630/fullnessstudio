'use client'

import { useState, useEffect } from 'react'
import { Link } from '@/i18n/routing'
import { 
  LayoutDashboard, Home, Compass, Calendar, CreditCard, Users, 
  Settings, Save, Plus, Trash2, CheckCircle2, Sparkles, AlertCircle, 
  Tag, MapPin, Phone, Mail, Instagram, Facebook, UserCheck, Search 
} from 'lucide-react'

type AdminTabs = 'home' | 'experiences' | 'calendar' | 'memberships' | 'users' | 'settings'

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<AdminTabs>('home')
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMsg, setNotificationMsg] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // 1. GLOBAL SETTINGS (Contacto, Dirección, Redes Sociales)
  const [contactInfo, setContactInfo] = useState({
    phone: '+52 473 123 4567',
    email: 'hola@fullnessstudio.com',
    address: 'Paseo de la Presa #85, Guanajuato, Gto, México',
    instagram: 'https://instagram.com/fullnessstudio',
    facebook: 'https://facebook.com/fullnessstudio'
  })

  // 2. HOME PAGE (Todos los copys y secciones exactas)
  const [homeData, setHomeData] = useState({
    heroTitleEs: 'Encuentra tu Plenitud',
    heroTitleEn: 'Find your Fullness',
    heroSubEs: 'Un espacio sagrado para yoga, pilates, sanación sonora y comunidad con alma.',
    heroSubEn: 'A sacred space for yoga, pilates, sound healing, and soul community.',
    introTitleEs: 'Bienvenido a casa',
    introTitleEn: 'Welcome home',
    introDescEs: 'Donde la sabiduría antigua se encuentra con la vida moderna.',
    introDescEn: 'Where ancient wisdom meets modern life.',
    ctaEs: 'Comienza tu camino',
    ctaEn: 'Start your journey'
  })

  // 3. EXPERIENCES HUB (Edición total de cada una)
  const [experiences, setExperiences] = useState([
    { 
      id: 'yoga', 
      nameEs: 'Yoga Somático & Hatha', 
      nameEn: 'Somatic Yoga & Hatha', 
      taglineEs: 'Unión, presencia y fluidez consciente', 
      taglineEn: 'Union, presence, and conscious flow',
      featuresEs: 'Hatha Tradicional, Vinyasa Flow, Yoga Somático & Nidra',
      featuresEn: 'Traditional Hatha, Vinyasa Flow, Somatic Yoga & Nidra',
      active: true 
    },
    { 
      id: 'pilates', 
      nameEs: 'Pilates de Alta Precisión', 
      nameEn: 'High-Precision Pilates', 
      taglineEs: 'Fuerza interna, control y alineación', 
      taglineEn: 'Inner strength, control, and alignment',
      featuresEs: 'Control de Core, Alineación Postural, Flexibilidad Funcional',
      featuresEn: 'Core Control, Postural Alignment, Functional Flexibility',
      active: true 
    },
    { 
      id: 'sonoterapia', 
      nameEs: 'Sonoterapia & Cuencos Tibetanos', 
      nameEn: 'Soundtherapy & Tibetan Bowls', 
      taglineEs: 'Alineación vibracional y descanso celular', 
      taglineEn: 'Vibrational alignment and cellular rest',
      featuresEs: 'Cuencos de Cuarzo, Gongs Planetarios, Armonización',
      featuresEn: 'Quartz Bowls, Planetary Gongs, Harmonization',
      active: true 
    },
  ])

  // 4. CALENDARIO DE EVENTOS / CLASES (Con Selector de Categoría Especializado)
  const [events, setEvents] = useState([
    { id: '1', date: '07 Jun 2026', type: 'cacao', titleEs: 'Luna Nueva — Nuevos comienzos', titleEn: 'New Moon — New beginnings', spots: 6, priceMXN: 650 },
    { id: '2', date: '21 Jun 2026', type: 'hiking', titleEs: 'Solsticio de Verano — Gratitud', titleEn: 'Summer Solstice — Gratitude', spots: 10, priceMXN: 650 },
    { id: '3', date: '15 Jul 2026', type: 'yoga', titleEs: 'Inmersión Hatha Profundo', titleEn: 'Deep Hatha Immersion', spots: 12, priceMXN: 400 },
  ])

  // 5. TARIFARIO DE MEMBRESÍAS (Nombre, Precios y Features modificables)
  const [memberships, setMemberships] = useState([
    { id: '1', name: 'Drop-In', priceMXN: 220, priceUSD: 12, featuresEs: 'Acceso a una sesión individual, Válido para cualquier estilo, Préstamo de mat incluido', featuresEn: 'Single session access, Valid for any style, Mat rental included' },
    { id: '2', name: 'Explorer', priceMXN: 780, priceUSD: 45, featuresEs: '4 sesiones al mes, Acceso a videoteca digital, 10% desc en talleres', featuresEn: '4 sessions per month, Digital video library access, 10% off workshops' },
    { id: '3', name: 'Devotee', priceMXN: 1450, priceUSD: 85, featuresEs: '12 sesiones al mes, Mat y utilería fija incluidos, 1 pase de invitado', featuresEn: '12 sessions per month, Fixed mat & props included, 1 guest pass' },
  ])

  // 6. MOCK SUPABASE USUARIOS REGISTRADOS
  const [users, setUsers] = useState([
    { id: 'usr_1', name: 'Carlos Cruces', email: 'carlos@mail.com', membership: 'Devotee', status: 'Activo', joined: '2026-05-12' },
    { id: 'usr_2', name: 'Ana Sofía López', email: 'sofia.lopez@mail.com', membership: 'Explorer', status: 'Activo', joined: '2026-04-20' },
    { id: 'usr_3', name: 'John Doe', email: 'john.doe@gmail.com', membership: 'Drop-In', status: 'Expirado', joined: '2026-01-15' },
  ])

  // Funciones CRUD del panel
  const handleAddEvent = () => {
    const newEvent = {
      id: Date.now().toString(),
      date: '12 Ago 2026',
      type: 'yoga',
      titleEs: 'Nuevo Taller Especial',
      titleEn: 'New Special Workshop',
      spots: 15,
      priceMXN: 450,
    }
    setEvents([newEvent, ...events])
  }

  const handleSaveData = (sectionName: string) => {
    setNotificationMsg(`¡Cambios en ${sectionName} guardados de forma segura!`)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-[#0F100F] min-h-screen text-white/80 font-light pt-28 pb-16 selection:bg-[#E5C158]/30">
      
      {/* ALERTA FLOTANTE PREMIUM */}
      {showNotification && (
        <div className="fixed top-28 right-6 z-50 flex items-center gap-3 bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span className="text-xs font-medium tracking-wide">{notificationMsg}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* --- NAVEGACIÓN LATERAL COMPLETA --- */}
        <aside className="lg:col-span-3 bg-[#161816]/40 border border-white/5 rounded-2xl p-6 backdrop-blur-md w-full">
          <div className="flex items-center gap-3 border-b border-white/5 pb-5 mb-5 text-left">
            <div className="w-8 h-8 rounded-lg bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <LayoutDashboard size={15} />
            </div>
            <div>
              <h2 className="font-display text-base text-white font-light tracking-wide">Santuario Admin</h2>
              <p className="text-[10px] text-white/40 tracking-wider uppercase font-medium">Consola de Control</p>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { id: 'home', label: 'Página de Inicio', icon: Home },
              { id: 'experiences', label: 'Editar Experiencias', icon: Compass },
              { id: 'calendar', label: 'Control de Eventos', icon: Calendar },
              { id: 'memberships', label: 'Editar Membresías', icon: CreditCard },
              { id: 'users', label: 'Alumnos Registrados', icon: Users },
              { id: 'settings', label: 'Contacto & Redes', icon: Settings },
            ].map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AdminTabs)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-xs tracking-wide rounded-xl transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#E5C158]/10 to-transparent border border-[#E5C158]/20 text-[#E5C158] font-medium' 
                      : 'hover:bg-white/5 text-white/50 border border-transparent'
                  }`}
                >
                  <TabIcon size={14} />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </aside>

        {/* --- FORMULARIOS DE ACCIÓN DIRECTA --- */}
        <main className="lg:col-span-9 bg-[#161816]/20 border border-white/5 rounded-2xl p-6 sm:p-10 backdrop-blur-md text-left w-full relative">
          
          {/* PANEL 1: INICIO COMPLETO */}
          {activeTab === 'home' && (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-display text-2xl text-white font-light flex items-center gap-2"><Sparkles size={16} className="text-[#E5C158]" /> Control de Inicio</h3>
                <p className="text-xs text-white/40 font-light">Actualiza cada sección visible de la página principal.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#E5C158] mb-2">Título Hero (ES)</label>
                  <input type="text" value={homeData.heroTitleEs} onChange={(e) => setHomeData({...homeData, heroTitleEs: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white font-light" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-2">Título Hero (EN)</label>
                  <input type="text" value={homeData.heroTitleEn} onChange={(e) => setHomeData({...homeData, heroTitleEn: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white font-light" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-[#E5C158] mb-2">Subtítulo Hero (ES)</label>
                  <textarea rows={2} value={homeData.heroSubEs} onChange={(e) => setHomeData({...homeData, heroSubEs: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-2">Subtítulo Hero (EN)</label>
                  <textarea rows={2} value={homeData.heroSubEn} onChange={(e) => setHomeData({...homeData, heroSubEn: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
                </div>
                <div className="border-t border-white/5 md:col-span-2 pt-4 mt-2">
                  <h4 className="text-xs font-semibold text-white tracking-wider mb-4 uppercase">Sección de Filosofía / Introducción</h4>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#E5C158] mb-2">Encabezado Filosofía (ES)</label>
                  <input type="text" value={homeData.introTitleEs} onChange={(e) => setHomeData({...homeData, introTitleEs: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white font-light" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-2">Encabezado Filosofía (EN)</label>
                  <input type="text" value={homeData.introTitleEn} onChange={(e) => setHomeData({...homeData, introTitleEn: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white font-light" />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end">
                <button onClick={() => handleSaveData('Inicio')} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-6 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-md shadow-md">
                  <Save size={13} /> Guardar Cambios Home
                </button>
              </div>
            </div>
          )}

          {/* PANEL 2: EDITAR EXPERIENCIAS INDIVIDUALES */}
          {activeTab === 'experiences' && (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-display text-2xl text-white font-light flex items-center gap-2"><Sparkles size={16} className="text-[#E5C158]" /> Editor de Experiencias</h3>
                <p className="text-xs text-white/40 font-light">Modifica los detalles, eslóganes y micro-características de cada disciplina.</p>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={exp.id} className="p-6 bg-black/20 border border-white/5 rounded-2xl space-y-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#E5C158]">{exp.id} Pillar</span>
                      <button 
                        onClick={() => {
                          const upd = [...experiences]; upd[idx].active = !upd[idx].active; setExperiences(upd)
                        }}
                        className={`text-[10px] px-2.5 py-1 rounded border ${exp.active ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' : 'text-white/30 border-white/10'}`}
                      >
                        {exp.active ? 'Visible en Web' : 'Oculto'}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] uppercase tracking-wider text-white/50 mb-1">Nombre (ES)</label>
                        <input type="text" value={exp.nameEs} onChange={(e) => { const upd = [...experiences]; upd[idx].nameEs = e.target.value; setExperiences(upd) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-light" />
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase tracking-wider text-white/50 mb-1">Nombre (EN)</label>
                        <input type="text" value={exp.nameEn} onChange={(e) => { const upd = [...experiences]; upd[idx].nameEn = e.target.value; setExperiences(upd) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-light" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-[9px] uppercase tracking-wider text-[#E5C158] mb-1">Especialidades (ES) <span className="text-[9px] text-white/30">(Separa con comas ,)</span></label>
                        <input type="text" value={exp.featuresEs} onChange={(e) => { const upd = [...experiences]; upd[idx].featuresEs = e.target.value; setExperiences(upd) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-light" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end">
                <button onClick={() => handleSaveData('Experiencias')} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-6 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-md shadow-md">
                  <Save size={13} /> Guardar Disciplinas
                </button>
              </div>
            </div>
          )}

          {/* PANEL 3: CONTROL DE EVENTOS Y CLASES */}
          {activeTab === 'calendar' && (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h3 className="font-display text-2xl text-white font-light flex items-center gap-2"><Sparkles size={16} className="text-[#E5C158]" /> Consola de Eventos</h3>
                  <p className="text-xs text-white/40 font-light mt-1">Crea o elimina actividades especificando su disciplina raíz.</p>
                </div>
                <button onClick={handleAddEvent} className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5C158]/30 text-[#E5C158] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#E5C158] hover:text-black transition-all">
                  <Plus size={13} /> Agregar Evento
                </button>
              </div>

              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={event.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 bg-black/30 border border-white/5 rounded-xl items-center">
                    <div className="md:col-span-2">
                      <label className="block text-[9px] uppercase tracking-wider text-white/30 mb-1">Categoría</label>
                      <select 
                        value={event.type}
                        onChange={(e) => { const updated = [...events]; updated[index].type = e.target.value; setEvents(updated) }}
                        className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-2 py-2 text-xs text-white/80 focus:outline-none"
                      >
                        <option value="yoga">Yoga</option>
                        <option value="hiking">Senderismo</option>
                        <option value="sonoterapia">Sonoterapia</option>
                        <option value="cacao">Ceremonia Cacao</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[9px] uppercase tracking-wider text-white/30 mb-1">Fecha</label>
                      <input type="text" value={event.date} onChange={(e) => { const updated = [...events]; updated[index].date = e.target.value; setEvents(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-mono" />
                    </div>
                    <div className="md:col-span-4">
                      <label className="block text-[9px] uppercase tracking-wider text-[#E5C158] mb-1">Nombre Evento (ES)</label>
                      <input type="text" value={event.titleEs} onChange={(e) => { const updated = [...events]; updated[index].titleEs = e.target.value; setEvents(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-light" />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-[9px] uppercase tracking-wider text-white/30 mb-1">Cupos</label>
                      <input type="number" value={event.spots} onChange={(e) => { const updated = [...events]; updated[index].spots = parseInt(e.target.value); setEvents(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-light" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[9px] uppercase tracking-wider text-[#E5C158] mb-1">Precio MXN</label>
                      <input type="number" value={event.priceMXN} onChange={(e) => { const updated = [...events]; updated[index].priceMXN = parseInt(e.target.value); setEvents(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-light" />
                    </div>
                    <div className="md:col-span-1 flex justify-end pt-2 md:pt-0">
                      <button onClick={() => setEvents(events.filter(e => e.id !== event.id))} className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all"><Trash2 size={13} /></button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end">
                <button onClick={() => handleSaveData('Calendario')} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-6 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-md shadow-md">
                  <Save size={13} /> Guardar Agenda
                </button>
              </div>
            </div>
          )}

          {/* PANEL 4: EDITAR MEMBRESÍAS COMPLETO */}
          {activeTab === 'memberships' && (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-display text-2xl text-white font-light flex items-center gap-2"><Sparkles size={16} className="text-[#E5C158]" /> Estructura de Membresías</h3>
                <p className="text-xs text-white/40 font-light">Modifica nombres comerciales, precios y características de la suite corporativa.</p>
              </div>

              <div className="space-y-6">
                {memberships.map((plan, index) => (
                  <div key={plan.id} className="p-6 bg-black/30 border border-white/5 rounded-xl space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[9px] uppercase tracking-wider text-[#E5C158] mb-1">Nombre Membresía</label>
                        <input type="text" value={plan.name} onChange={(e) => { const updated = [...memberships]; updated[index].name = e.target.value; setMemberships(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-semibold" />
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase tracking-wider text-white/40 mb-1">Costo MXN</label>
                        <input type="number" value={plan.priceMXN} onChange={(e) => { const updated = [...memberships]; updated[index].priceMXN = parseInt(e.target.value); setMemberships(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-mono" />
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase tracking-wider text-white/40 mb-1">Costo USD</label>
                        <input type="number" value={plan.priceUSD} onChange={(e) => { const updated = [...memberships]; updated[index].priceUSD = parseInt(e.target.value); setMemberships(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg px-3 py-2 text-xs text-white font-mono" />
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-[9px] uppercase tracking-wider text-[#E5C158] mb-1">Beneficios Incluidos (ES) <span className="text-[9px] text-white/30">(Separa con comas ,)</span></label>
                        <textarea rows={2} value={plan.featuresEs} onChange={(e) => { const updated = [...memberships]; updated[index].featuresEs = e.target.value; setMemberships(updated) }} className="w-full bg-[#0F100F] border border-white/5 rounded-lg p-3 text-xs text-white font-light leading-relaxed" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end">
                <button onClick={() => handleSaveData('Membresías')} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-6 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-md shadow-md">
                  <Save size={13} /> Guardar Planes
                </button>
              </div>
            </div>
          )}

          {/* PANEL 5: ALUMNOS REGISTRADOS (CONEXIÓN READY SUPABASE) */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h3 className="font-display text-2xl text-white font-light flex items-center gap-2"><Users size={16} className="text-[#E5C158]" /> Alumnos de la Comunidad</h3>
                  <p className="text-xs text-white/40 font-light mt-1">Monitorea los registros y estatus activos vinculados a Supabase DB.</p>
                </div>
                <div className="relative max-w-xs w-full">
                  <Search size={14} className="absolute left-3 top-3 text-white/30" />
                  <input 
                    type="text" 
                    placeholder="Buscar por nombre o correo..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-[#E5C158]/40 font-light"
                  />
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-white/5">
                <table className="w-full text-left border-collapse bg-black/10">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/5 text-[10px] tracking-wider uppercase text-[#E5C158] font-semibold">
                      <th className="p-4">Alumno</th>
                      <th className="p-4">Correo</th>
                      <th className="p-4">Membresía</th>
                      <th className="p-4">Registro</th>
                      <th className="p-4 text-right">Estatus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-light text-white/70">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-normal text-white">{user.name}</td>
                        <td className="p-4 font-mono text-white/50">{user.email}</td>
                        <td className="p-4"><span className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[11px] font-medium">{user.membership}</span></td>
                        <td className="p-4 text-white/40 font-mono">{user.joined}</td>
                        <td className="p-4 text-right">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${
                            user.status === 'Activo' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          }`}>
                            <UserCheck size={10} /> {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PANEL 6: GLOBAL CONTACT SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-display text-2xl text-white font-light flex items-center gap-2"><Settings size={16} className="text-[#E5C158]" /> Información del Santuario</h3>
                <p className="text-xs text-white/40 font-light">Modifica los canales de contacto públicos, teléfono y perfiles de redes sociales.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5"><Phone size={12} className="text-[#E5C158]" /> Teléfono de Recepción</label>
                  <input type="text" value={contactInfo.phone} onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white font-mono" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5"><Mail size={12} className="text-[#E5C158]" /> Correo Electrónico Corporativo</label>
                  <input type="email" value={contactInfo.email} onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white font-mono" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5"><MapPin size={12} className="text-[#E5C158]" /> Dirección Física del Estudio</label>
                  <input type="text" value={contactInfo.address} onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white font-light" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5"><Instagram size={12} className="text-[#E5C158]" /> Enlace de Instagram</label>
                  <input type="text" value={contactInfo.instagram} onChange={(e) => setContactInfo({...contactInfo, instagram: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white font-light" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5"><Facebook size={12} className="text-[#E5C158]" /> Enlace de Facebook</label>
                  <input type="text" value={contactInfo.facebook} onChange={(e) => setContactInfo({...contactInfo, facebook: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white font-light" />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end">
                <button onClick={() => handleSaveData('Ajustes Globales')} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-6 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-md shadow-md">
                  <Save size={13} /> Guardar Ajustes
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}