'use client'

import { useState, useEffect } from 'react'
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { 
  LayoutDashboard, Home, Compass, Calendar, CreditCard, Save, Plus, Trash2, 
  CheckCircle2, Sparkles, Upload, ImageIcon, Eye, Globe, Sliders, 
  Layers, LogOut, ShieldAlert, FileText, Activity 
} from 'lucide-react'

type AdminSections = 
  | 'global_header' | 'global_footer' | 'home' | 'exp_hub' 
  | 'sub_yoga' | 'sub_sound' | 'sub_hiking' | 'sub_pilates' 
  | 'sub_cacao' | 'events' | 'memberships'

export default function CompleteAdminDashboard() {
  const activeLocale = useLocale() as 'es' | 'en'
  const [activeSection, setActiveSection] = useState<AdminSections>('home')
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMsg, setNotificationMsg] = useState('')

  // ==========================================
  // CMS STATE MANAGEMENT (BILINGUAL DATA)
  // ==========================================
  const [headerData, setHeaderData] = useState({ logoText: 'Fullness', menu1Es: 'Experiencias', menu1En: 'Experiences', menu2Es: 'Calendario', menu2En: 'Calendar' })
  const [footerData, setFooterData] = useState({ copyEs: '© 2026 Fullness Studio. Todos los derechos reservados.', copyEn: '© 2026 Fullness Studio. All rights reserved.', address: 'Guanajuato, México' })
  
  const [homeData, setHomeData] = useState({
    heroTitleEs: 'Encuentra tu Plenitud', heroTitleEn: 'Find your Fullness',
    heroSubEs: 'Un espacio sagrado para yoga, pilates, sanación sonora y comunidad con alma.', heroSubEn: 'A sacred space for yoga, pilates, sound healing, and soul community.',
    heroImg: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80'
  })

  const [yogaData, setYogaData] = useState({
    titleEs: 'Yoga & Exploración Somática', titleEn: 'Yoga & Somatic Exploration',
    subEs: 'Nuestras sesiones van más allá del ejercicio convencional; son un espacio sagrado.', subEn: 'Our sessions go beyond conventional exercise; they are a sacred space.',
    heroImg: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80'
  })

  const handleSaveNotification = (sectionName: string) => {
    setNotificationMsg(`¡${sectionName} actualizado con éxito!`)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const triggerImageSimulatedUpload = (setter: Function, currentObj: any, keyName: string) => {
    const fakeUrls = [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80'
    ]
    const randomUrl = fakeUrls[Math.floor(Math.random() * fakeUrls.length)]
    setter({ ...currentObj, [keyName]: randomUrl })
    setNotificationMsg('¡Fotografía local cargada con éxito!')
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2500)
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0F100F] text-white/80 font-light flex flex-col selection:bg-[#E5C158]/30 overflow-hidden">
      
      {/* NOTIFICATION TOAST */}
      {showNotification && (
        <div className="fixed top-24 right-6 z-[10000] flex items-center gap-3 bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 size={16} />
          <span className="text-xs font-medium tracking-wide">{notificationMsg}</span>
        </div>
      )}

      {/* --- EXCLUSIVE ADMIN HEADER --- */}
      <header className="bg-[#121412] border-b border-white/5 px-8 py-4 flex items-center justify-between shrink-0 relative z-50">
        <div className="flex items-center gap-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5C158]/20 to-transparent border border-[#E5C158]/40 flex items-center justify-center text-[#E5C158] shadow-lg">
            <LayoutDashboard size={16} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-sm font-semibold tracking-wider text-white uppercase">Soberano CMS</h1>
              <span className="text-[9px] bg-amber-500/10 border border-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded uppercase font-bold tracking-widest">En Vivo</span>
            </div>
            <p className="text-[10px] text-white/40 tracking-wide mt-0.5">Consola de Modificación Absoluta de Contenidos</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white/60 hover:text-[#E5C158] hover:border-[#E5C158]/30 text-xs tracking-wider uppercase rounded-lg transition-all">
            <LogOut size={13} /> {activeLocale === 'en' ? 'Exit Portal' : 'Salir al Sitio'}
          </Link>
        </div>
      </header>

      {/* --- MAIN CORE PANEL --- */}
      <div className="flex flex-1 overflow-hidden relative w-full">
        
        {/* --- SIDEBAR NAVIGATION --- */}
        <aside className="w-72 bg-[#121412] border-r border-white/5 overflow-y-auto p-5 shrink-0 text-left">
          <div className="mb-6">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#E5C158] font-bold mb-3 flex items-center gap-1.5"><Globe size={11} /> Estructuras Globales</p>
            <div className="space-y-1">
              <button onClick={() => setActiveSection('global_header')} className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-xl transition-all ${activeSection === 'global_header' ? 'bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158] font-medium' : 'text-white/40 hover:bg-white/5'}`}>
                <Sliders size={13} /> Menú de Navegación (Header)
              </button>
              <button onClick={() => setActiveSection('global_footer')} className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-xl transition-all ${activeSection === 'global_footer' ? 'bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158] font-medium' : 'text-white/40 hover:bg-white/5'}`}>
                <Layers size={13} /> Pie de Página (Footer)
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#E5C158] font-bold mb-3 flex items-center gap-1.5"><Home size={11} /> Páginas Principales</p>
            <div className="space-y-1">
              <button onClick={() => setActiveSection('home')} className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-xl transition-all ${activeSection === 'home' ? 'bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158] font-medium' : 'text-white/40 hover:bg-white/5'}`}>
                <FileText size={13} /> Página de Inicio (Home)
              </button>
              <button onClick={() => setActiveSection('exp_hub')} className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-xl transition-all ${activeSection === 'exp_hub' ? 'bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158] font-medium' : 'text-white/40 hover:bg-white/5'}`}>
                <Compass size={13} /> Experiencias (Hub)
              </button>
              <button onClick={() => setActiveSection('events')} className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-xl transition-all ${activeSection === 'events' ? 'bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158] font-medium' : 'text-white/40 hover:bg-white/5'}`}>
                <Calendar size={13} /> Calendario & Eventos
              </button>
              <button onClick={() => setActiveSection('memberships')} className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-xl transition-all ${activeSection === 'memberships' ? 'bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158] font-medium' : 'text-white/40 hover:bg-white/5'}`}>
                <CreditCard size={13} /> Membresías & Costos
              </button>
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#E5C158] font-bold mb-3 flex items-center gap-1.5"><Activity size={11} /> Sub-Páginas Boutique</p>
            <div className="space-y-1">
              {[
                { id: 'sub_yoga', label: 'Yoga & Somática' },
                { id: 'sub_pilates', label: 'Pilates Alta Precisión' },
                { id: 'sub_sound', label: 'Sonoterapia Cuencos' },
                { id: 'sub_cacao', label: 'Ceremonia de Cacao' },
                { id: 'sub_hiking', label: 'Senderismo Consciente' },
              ].map((sub) => (
                <button 
                  key={sub.id} 
                  onClick={() => setActiveSection(sub.id as AdminSections)} 
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-xl transition-all ${activeSection === sub.id ? 'bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158] font-medium' : 'text-white/40 hover:bg-white/5'}`}
                >
                  <Sparkles size={12} className="text-[#E5C158]/60" /> {sub.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* --- WORKSPACE CONTENT --- */}
        <main className="flex-1 overflow-y-auto bg-[#161816]/20 p-8 sm:p-12 text-left relative">
          
          {activeSection === 'home' && (
            <div className="space-y-8 max-w-4xl">
              <div className="border-b border-white/5 pb-4">
                <h2 className="font-display text-2xl text-white font-light">Editor Integrado: Página de Inicio</h2>
                <p className="text-xs text-white/40 font-light mt-1">Control completo de textos e imágenes de fondo del Home.</p>
              </div>

              <div className="bg-black/30 border border-white/5 p-6 rounded-2xl space-y-4">
                <label className="block text-[11px] uppercase tracking-wider text-[#E5C158] font-medium flex items-center gap-2"><ImageIcon size={13} /> Imagen Destacada del Hero Principal</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="aspect-video bg-neutral-900 border border-white/10 rounded-xl overflow-hidden relative">
                    <img src={homeData.heroImg} alt="Hero Preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <input type="text" value={homeData.heroImg} onChange={(e) => setHomeData({ ...homeData, heroImg: e.target.value })} className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white/80 font-mono" />
                    <button onClick={() => triggerImageSimulatedUpload(setHomeData, homeData, 'heroImg')} className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-lg">
                      <Upload size={13} /> Subir Imagen Local
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#E5C158] font-medium mb-2">Título Hero (Español)</label>
                  <input type="text" value={homeData.heroTitleEs} onChange={(e) => setHomeData({ ...homeData, heroTitleEs: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 font-medium mb-2">Título Hero (Inglés)</label>
                  <input type="text" value={homeData.heroTitleEn} onChange={(e) => setHomeData({ ...homeData, heroTitleEn: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-[#E5C158] font-medium mb-2">Subtítulo Descriptivo (Español)</label>
                  <textarea rows={3} value={homeData.heroSubEs} onChange={(e) => setHomeData({ ...homeData, heroSubEs: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 font-medium mb-2">Subtítulo Descriptivo (Inglés)</label>
                  <textarea rows={3} value={homeData.heroSubEn} onChange={(e) => setHomeData({ ...homeData, heroSubEn: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white" />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end">
                <button onClick={() => handleSaveNotification('Página de Inicio')} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-lg shadow-lg">
                  <Save size={13} /> Guardar Cambios de Inicio
                </button>
              </div>
            </div>
          )}

          {activeSection !== 'home' && (
            <div className="space-y-8 max-w-4xl">
              <div className="border-b border-white/5 pb-4">
                <h2 className="font-display text-2xl text-white font-light uppercase tracking-wide">Editor: {activeSection.replace('sub_', ' ').replace('global_', ' ').toUpperCase()}</h2>
                <p className="text-xs text-white/40 font-light mt-1">Configuración total de copys textuales, parámetros de costo e imágenes estructurales.</p>
              </div>

              <div className="bg-black/30 border border-white/5 p-6 rounded-2xl space-y-4">
                <label className="block text-[11px] uppercase tracking-wider text-[#E5C158] font-medium flex items-center gap-2"><ImageIcon size={13} /> Archivo Multimedia de la Sección</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="aspect-video bg-neutral-900 border border-white/10 rounded-xl overflow-hidden relative flex items-center justify-center text-white/20 text-xs">
                    <span className="font-mono text-[10px] tracking-widest uppercase">Asset Activo Premium</span>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <input type="text" defaultValue="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" className="w-full bg-[#0F100F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white/50 font-mono" />
                    <button onClick={() => { setNotificationMsg('¡Fotografía local reemplazada!'); setShowNotification(true); setTimeout(() => setShowNotification(false), 2000) }} className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-lg">
                      <Upload size={13} /> Subir Archivo Personalizado
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#E5C158] font-medium mb-2">Contenido Textual Base (Español)</label>
                  <textarea rows={4} defaultValue="Texto original estructurado en Fullness Studio para la correcta asimilación y lectura de los alumnos locales." className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 font-medium mb-2">Contenido Textual Base (Inglés)</label>
                  <textarea rows={4} defaultValue="Original text structured for international students, perfectly fitted to our layout." className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white font-light" />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end">
                <button onClick={() => handleSaveNotification(activeSection)} className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black px-8 py-3 text-xs uppercase tracking-widest font-bold rounded-lg shadow-lg">
                  <Save size={13} /> Actualizar Sección
                </button>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  )
}