'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Leaf, Eye, EyeOff } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left — decorative */}
      <div className="hidden lg:flex bg-gradient-to-br from-[var(--sage-dark)] to-[#1c2b18] relative overflow-hidden">
        {/* Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5 animate-breathe" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/8" />

        <div className="relative z-10 flex flex-col justify-between p-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
              <Leaf size={16} className="text-white" strokeWidth={1.5} />
            </div>
            <div>
              <span className="block font-display text-xl leading-none text-white">Sanctuary</span>
              <span className="block text-[10px] tracking-[0.25em] uppercase font-body font-light text-white/50">Studio</span>
            </div>
          </Link>

          <div>
            <p className="font-accent text-[var(--gold)] text-2xl mb-4">Bienvenido de nuevo</p>
            <h2 className="font-display text-5xl text-white font-light leading-tight mb-6">
              Tu práctica<br /><em className="italic text-[var(--sage-light)]">te espera</em>
            </h2>
            <p className="font-body font-light text-white/50 max-w-xs leading-relaxed">
              Vuelve a tu mat. Reserva clases, sigue tu progreso y conéctate con tu comunidad.
            </p>
          </div>

          <p className="font-display text-sm italic text-white/30">
            "The present moment is the only moment available to us." — Thich Nhat Hanh
          </p>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex items-center justify-center p-8 bg-[var(--cream)]">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2 mb-10 lg:hidden">
            <Leaf size={20} className="text-[var(--sage)]" strokeWidth={1.5} />
            <span className="font-display text-2xl text-[var(--stone-dark)]">Sanctuary</span>
          </Link>

          <h1 className="font-display text-4xl text-[var(--stone-dark)] font-light mb-2">Iniciar sesión</h1>
          <p className="font-body font-light text-[var(--stone)] text-sm mb-8">
            ¿No tienes cuenta?{' '}
            <Link href="/auth/register" className="text-[var(--sage)] hover:underline">Regístrate aquí</Link>
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm font-light rounded-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs tracking-widest uppercase text-[var(--stone)] font-light mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-base"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs tracking-widest uppercase text-[var(--stone)] font-light">
                  Contraseña
                </label>
                <Link href="/auth/forgot-password" className="text-xs text-[var(--sage)] hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-base pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--stone)] hover:text-[var(--sage)] transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : 'Iniciar sesión'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[var(--sage-light)]/30">
            <p className="text-xs tracking-widest uppercase text-[var(--stone)] text-center font-light mb-4">
              O continúa con
            </p>
            <button
              type="button"
              onClick={async () => {
                const supabase = createClient()
                await supabase.auth.signInWithOAuth({
                  provider: 'google',
                  options: { redirectTo: `${window.location.origin}/auth/callback` },
                })
              }}
              className="w-full flex items-center justify-center gap-3 border border-[var(--sage-light)]/40 py-3 text-sm text-[var(--stone)] hover:border-[var(--sage)] hover:text-[var(--sage)] transition-colors font-light"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
                <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continuar con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
