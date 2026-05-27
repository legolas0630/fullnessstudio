'use client'

import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { usePathname } from 'next-navigation'
import { 
  LayoutDashboard, Home, Compass, Calendar, CreditCard, Sliders, 
  Layers, LogOut, FileText, Activity, Sparkles, Globe 
} from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const activeLocale = useLocale()
  const pathname = usePathname()

  // Helper function to detect active navigation buttons
  const isActive = (path: string) => pathname.endsWith(path)

  const navItems = [
    { label: 'Overview Hub', path: '/admin', icon: LayoutDashboard, category: 'System' },
    { label: 'Navegación (Header)', path: '/admin/header', icon: Sliders, category: 'Global structural' },
    { label: 'Pie de Página (Footer)', path: '/admin/footer', icon: Layers, category: 'Global structural' },
    { label: 'Inicio (Home)', path: '/admin/home', icon: Home, category: 'Pages' },
    { label: 'Experiencias (Hub)', path: '/admin/experiencias', icon: Compass, category: 'Pages' },
    { label: 'Calendario & Clases', path: '/admin/calendario', icon: Calendar, category: 'Pages' },
    { label: 'Membresías & Costos', path: '/admin/membresias', icon: CreditCard, category: 'Pages' },
  ]

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0F100F] text-white/80 font-light flex flex-col selection:bg-[#E5C158]/30 overflow-hidden">
      
      {/* --- RE-DESIGNED EXCLUSIVE ADMIN HEADER --- */}
      <header className="bg-[#121412] border-b border-white/5 px-8 py-4 flex items-center justify-between shrink-0 relative z-50">
        <div className="flex items-center gap-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5C158]/20 to-transparent border border-[#E5C158]/40 flex items-center justify-center text-[#E5C158] shadow-lg">
            <Activity size={16} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-sm font-semibold tracking-wider text-white uppercase">Soberano CMS</h1>
              <span className="text-[9px] bg-amber-500/10 border border-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded uppercase font-bold tracking-widest">Core Portal v2.0</span>
            </div>
            <p className="text-[10px] text-white/40 tracking-wide mt-0.5">Isolated Backend Control Center</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white/60 hover:text-[#E5C158] hover:border-[#E5C158]/30 text-xs tracking-wider uppercase rounded-lg transition-all">
            <LogOut size={13} /> {activeLocale === 'en' ? 'Exit Portal' : 'Salir al Sitio'}
          </Link>
        </div>
      </header>

      {/* --- MASTER CONTAINER WRAPPER --- */}
      <div className="flex flex-1 overflow-hidden relative w-full">
        
        {/* --- PERSISTENT LEFT SIDEBAR NAV --- */}
        <aside className="w-72 bg-[#121412] border-r border-white/5 overflow-y-auto p-5 shrink-0 text-left flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#E5C158] font-bold mb-3 flex items-center gap-1.5">
                <Globe size={11} /> Control Console
              </p>
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.path)
                  return (
                    <Link
                      key={item.path}
                      href={item.path as any}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs rounded-xl transition-all ${
                        active 
                          ? 'bg-[#E5C158]/10 border border-[#E5C158]/20 text-[#E5C158] font-medium' 
                          : 'text-white/40 hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <Icon size={13} />
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 text-[10px] text-white/20 font-mono tracking-wider">
            SYSTEM STATUS: ONLINE (2026)
          </div>
        </aside>

        {/* --- DYNAMIC CHILD ROUTE INJECTION CONTENT --- */}
        <main className="flex-1 overflow-y-auto bg-[#161816]/20 p-8 sm:p-12 text-left relative">
          {children}
        </main>
      </div>

    </div>
  )
}