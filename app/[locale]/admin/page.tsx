'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Users, Calendar, BookOpen, DollarSign, TrendingUp,
  Settings, LogOut, Menu, X, Bell, Search,
  ChevronRight, Plus, Eye, Edit, Trash2, Leaf
} from 'lucide-react'

// ─── MOCK DATA ─────────────────────────────────────────────────────────────
const stats = [
  { label: 'Total Members', value: '512', change: '+14 this month', icon: Users, color: 'text-[var(--sage)]', bg: 'bg-[var(--sage)]/10' },
  { label: 'Classes This Week', value: '28', change: '3 fully booked', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Total Bookings', value: '1,847', change: '+127 this month', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Monthly Revenue', value: '$18,450', change: '+8% vs last month', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
]

const recentBookings = [
  { user: 'Sarah Mitchell', class: 'Sunrise Vinyasa', date: 'Mon Jun 3, 7:00 AM', status: 'confirmed', paid: '$25' },
  { user: 'James Chen', class: 'Sound Bath', date: 'Thu Jun 6, 8:00 PM', status: 'confirmed', paid: '$35' },
  { user: 'Priya Kapoor', class: 'Pilates Core', date: 'Tue Jun 4, 6:00 PM', status: 'waitlist', paid: '—' },
  { user: 'Leo Martinez', class: 'Cacao Ceremony', date: 'Sat Jun 7, 7:00 PM', status: 'confirmed', paid: '$65' },
  { user: 'Aisha Brown', class: 'Yin Yoga', date: 'Wed Jun 5, 7:30 PM', status: 'cancelled', paid: 'Refunded' },
]

const recentMembers = [
  { name: 'Taylor Woods', email: 'taylor@email.com', plan: 'Devotee', joined: 'Jun 1' },
  { name: 'Mia Fontaine', email: 'mia@email.com', plan: 'Unlimited', joined: 'May 30' },
  { name: 'Raj Patel', email: 'raj@email.com', plan: 'Explorer', joined: 'May 28' },
  { name: 'Elena Russo', email: 'elena@email.com', plan: 'Founding', joined: 'May 27' },
]

const navItems = [
  { label: 'Dashboard', icon: TrendingUp, active: true },
  { label: 'Members', icon: Users, active: false },
  { label: 'Classes', icon: Calendar, active: false },
  { label: 'Bookings', icon: BookOpen, active: false },
  { label: 'Events', icon: Bell, active: false },
  { label: 'Revenue', icon: DollarSign, active: false },
  { label: 'Settings', icon: Settings, active: false },
]

const statusColors: Record<string, string> = {
  confirmed: 'bg-emerald-50 text-emerald-700',
  waitlist: 'bg-amber-50 text-amber-700',
  cancelled: 'bg-red-50 text-red-600',
}

// ─── COMPONENT ─────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Dashboard')

  return (
    <div className="min-h-screen flex bg-stone-50 font-body">

      {/* Sidebar */}
      <aside className={`fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-[var(--stone-dark)] text-white flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <Leaf size={14} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-display text-lg leading-none">Sanctuary</p>
              <p className="text-[9px] tracking-[0.25em] uppercase text-white/40 font-light">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.label
            return (
              <button
                key={item.label}
                onClick={() => { setActiveSection(item.label); setSidebarOpen(false) }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-light transition-colors duration-150 ${
                  isActive ? 'bg-[var(--sage)] text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} strokeWidth={1.5} />
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-[var(--sage)]/30 flex items-center justify-center shrink-0">
              <span className="font-display text-sm">A</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm text-white truncate">Admin User</p>
              <p className="text-xs text-white/40 truncate font-light">admin@studio.com</p>
            </div>
          </div>
          <Link href="/" className="flex items-center gap-3 px-4 py-2 text-white/40 hover:text-white text-sm font-light transition-colors">
            <LogOut size={15} strokeWidth={1.5} /> Sign out
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Topbar */}
        <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between gap-4 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-stone-500" onClick={() => setSidebarOpen(true)}>
              <Menu size={22} strokeWidth={1.5} />
            </button>
            <h1 className="font-display text-2xl text-[var(--stone-dark)]">{activeSection}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 text-sm border border-stone-200 bg-stone-50 focus:outline-none focus:border-[var(--sage)] w-48 font-light"
              />
            </div>
            <button className="relative p-2 text-stone-400 hover:text-stone-700">
              <Bell size={18} strokeWidth={1.5} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--terracotta)]" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="bg-white border border-stone-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-sm ${s.bg}`}>
                      <Icon size={18} className={s.color} strokeWidth={1.5} />
                    </div>
                    <ChevronRight size={16} className="text-stone-300" />
                  </div>
                  <p className="font-display text-3xl text-[var(--stone-dark)] font-light mb-1">{s.value}</p>
                  <p className="text-xs text-stone-500 font-light uppercase tracking-wide">{s.label}</p>
                  <p className="text-xs text-emerald-600 font-light mt-1">{s.change}</p>
                </div>
              )
            })}
          </div>

          {/* Two columns */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Recent bookings */}
            <div className="lg:col-span-2 bg-white border border-stone-200">
              <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
                <h2 className="font-display text-lg text-[var(--stone-dark)]">Recent Bookings</h2>
                <button className="text-xs tracking-widest uppercase text-[var(--sage)] hover:underline font-light">View all</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-stone-100">
                      {['Member', 'Class', 'Date', 'Status', 'Paid'].map((h) => (
                        <th key={h} className="text-left px-6 py-3 text-[10px] tracking-widest uppercase text-stone-400 font-light">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((b, i) => (
                      <tr key={i} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-light text-[var(--stone-dark)]">{b.user}</td>
                        <td className="px-6 py-4 text-sm font-light text-stone-500">{b.class}</td>
                        <td className="px-6 py-4 text-xs font-light text-stone-400">{b.date}</td>
                        <td className="px-6 py-4">
                          <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-light tracking-wide uppercase ${statusColors[b.status]}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-light text-stone-600">{b.paid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* New members + quick actions */}
            <div className="space-y-4">

              {/* Quick actions */}
              <div className="bg-white border border-stone-200 p-5">
                <h2 className="font-display text-lg text-[var(--stone-dark)] mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Add Class', icon: Plus },
                    { label: 'New Event', icon: Plus },
                    { label: 'View Members', icon: Eye },
                    { label: 'Edit Schedule', icon: Edit },
                  ].map((a) => {
                    const Icon = a.icon
                    return (
                      <button key={a.label} className="flex items-center gap-2 p-3 border border-stone-100 hover:border-[var(--sage)] hover:text-[var(--sage)] text-stone-500 transition-colors text-xs font-light">
                        <Icon size={13} strokeWidth={1.5} />
                        {a.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* New members */}
              <div className="bg-white border border-stone-200">
                <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
                  <h2 className="font-display text-lg text-[var(--stone-dark)]">New Members</h2>
                  <button className="text-xs tracking-widest uppercase text-[var(--sage)] hover:underline font-light">See all</button>
                </div>
                <div className="divide-y divide-stone-50">
                  {recentMembers.map((m) => (
                    <div key={m.email} className="flex items-center gap-3 px-5 py-3 hover:bg-stone-50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-[var(--sage)]/10 flex items-center justify-center shrink-0">
                        <span className="font-display text-sm text-[var(--sage)]">{m.name[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-light text-[var(--stone-dark)] truncate">{m.name}</p>
                        <p className="text-xs text-stone-400 font-light truncate">{m.plan} · {m.joined}</p>
                      </div>
                      <button className="text-stone-300 hover:text-[var(--sage)] transition-colors">
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue mini chart placeholder */}
              <div className="bg-[var(--sage-dark)] text-white p-5">
                <h2 className="font-display text-lg mb-1">Revenue Trend</h2>
                <p className="text-xs text-white/50 font-light mb-4">Last 6 months</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 65, 55, 80, 70, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-[var(--sage-light)]/30 rounded-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-white/30 font-light mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming classes */}
          <div className="mt-6 bg-white border border-stone-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
              <h2 className="font-display text-lg text-[var(--stone-dark)]">Today's Classes</h2>
              <Link href="/calendar" className="text-xs tracking-widest uppercase text-[var(--sage)] hover:underline font-light">Full calendar</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-100">
                    {['Time', 'Class', 'Instructor', 'Booked / Max', 'Status', 'Actions'].map((h) => (
                      <th key={h} className="text-left px-6 py-3 text-[10px] tracking-widest uppercase text-stone-400 font-light">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { time: '7:00 AM', name: 'Sunrise Vinyasa', instructor: 'Maya Chen', booked: 16, max: 18, status: 'live' },
                    { time: '9:30 AM', name: 'Gentle Hatha', instructor: 'Priya Nair', booked: 12, max: 20, status: 'upcoming' },
                    { time: '12:00 PM', name: 'Pilates Core', instructor: 'Elena Rossi', booked: 12, max: 12, status: 'full' },
                    { time: '6:00 PM', name: 'Vinyasa Flow', instructor: 'Maya Chen', booked: 8, max: 18, status: 'upcoming' },
                    { time: '8:00 PM', name: 'Sound Bath', instructor: 'Aria Stone', booked: 22, max: 25, status: 'upcoming' },
                  ].map((cls, i) => (
                    <tr key={i} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-light text-stone-500">{cls.time}</td>
                      <td className="px-6 py-4 text-sm font-light text-[var(--stone-dark)]">{cls.name}</td>
                      <td className="px-6 py-4 text-sm font-light text-stone-500">{cls.instructor}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-stone-100 rounded-full max-w-[60px]">
                            <div
                              className="h-full bg-[var(--sage)] rounded-full"
                              style={{ width: `${(cls.booked / cls.max) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-stone-500 font-light">{cls.booked}/{cls.max}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-light tracking-wide uppercase ${
                          cls.status === 'live' ? 'bg-emerald-50 text-emerald-700' :
                          cls.status === 'full' ? 'bg-red-50 text-red-600' :
                          'bg-stone-100 text-stone-500'
                        }`}>
                          {cls.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-1.5 text-stone-300 hover:text-[var(--sage)] transition-colors"><Eye size={14} strokeWidth={1.5} /></button>
                          <button className="p-1.5 text-stone-300 hover:text-blue-600 transition-colors"><Edit size={14} strokeWidth={1.5} /></button>
                          <button className="p-1.5 text-stone-300 hover:text-red-500 transition-colors"><Trash2 size={14} strokeWidth={1.5} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
