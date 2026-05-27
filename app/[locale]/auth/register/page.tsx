'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Leaf, Eye, EyeOff, Check } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const benefits = [
  'Reserva clases en línea al instante',
  'Accede a precios para miembros en todas las ofertas',
  'Sigue tu práctica y tus logros',
  'Únete a nuestros eventos y retiros comunitarios',
]

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirm: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password !== form.confirm) {
      setError('Las contraseñas no coinciden')
      return
    }
    if (form.password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres')
      return
    }

    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { full_name: form.fullName },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--cream)] px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-[var(--sage)]/10 flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-[var(--sage)]" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-4xl text-[var(--stone-dark)] font-light mb-4">
            Revisa tu correo
          </h2>
          <p className="font-body font-light text-[var(--stone)] mb-8">
            Enviamos un enlace de confirmación a <strong>{form.email}</strong>. Haz clic para activar tu cuenta y comenzar tu práctica.
          </p>
          <Link href="/" className="btn-outline">Volver al inicio</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left — form */}
      <div className="flex items-center justify-center p-8 bg-[var(--cream)] order-2 lg:order-1">
        <div className="w-full max-w-sm">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <Leaf size={20} className="text-[var(--sage)]" strokeWidth={1.5} />
            <span className="font-display text-2xl text-[var(--stone-dark)]">Sanctuary</span>
          </Link>

          <h1 className="font-display text-4xl text-[var(--stone-dark)] font-light mb-2">Comienza tu viaje</h1>
          <p className="font-body font-light text-[var(--stone)] text-sm mb-8">
            ¿Ya eres miembro?{' '}
            <Link href="/auth/login" className="text-[var(--sage)] hover:underline">Iniciar sesión</Link>
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm font-light rounded-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs tracking-widest uppercase text-[var(--stone)] font-light mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={update('fullName')}
                required
                className="input-base"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-[var(--stone)] font-light mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                value={form.email}
                onChange={update('email')}
                required
                className="input-base"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-[var(--stone)] font-light mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={update('password')}
                  required
                  className="input-base pr-10"
                  placeholder="Mínimo 8 caracteres"
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

            <div>
              <label className="block text-xs tracking-widest uppercase text-[var(--stone)] font-light mb-2">
                Confirmar contraseña
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.confirm}
                onChange={update('confirm')}
                required
                className="input-base"
                placeholder="Repite tu contraseña"
              />
            </div>

            <p className="text-xs text-[var(--stone)] font-light leading-relaxed pt-1">
              Al crear una cuenta, aceptas nuestros{' '}
              <Link href="/terms" className="text-[var(--sage)] hover:underline">Términos de servicio</Link>
              {' '}y{' '}
              <Link href="/privacy" className="text-[var(--sage)] hover:underline">Política de privacidad</Link>.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creando cuenta...
                </span>
              ) : 'Crear mi cuenta'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[var(--sage-light)]/30">
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
              Registrarse con Google
            </button>
          </div>
        </div>
      </div>

      {/* Right — decorative */}
      <div className="hidden lg:flex bg-gradient-to-br from-[var(--parchment)] to-[var(--sage-light)]/30 relative overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full border border-[var(--sage)]/10 animate-breathe" />
        </div>
        <div className="relative z-10 flex flex-col justify-between p-12">
          <div />
          <div>
            <p className="font-accent text-[var(--sage)] text-2xl mb-4">Únete a nuestra comunidad</p>
            <h2 className="font-display text-5xl text-[var(--stone-dark)] font-light leading-tight mb-10">
              Todo lo que necesitas<br /><em className="italic text-[var(--sage)]">para comenzar</em>
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--sage)]/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-[var(--sage)]" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-light text-[var(--stone)]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-display text-sm italic text-[var(--stone)] opacity-50">
            "No puedes hacer yoga. El yoga es tu estado natural." — Sharon Gannon
          </p>
        </div>
      </div>
    </div>
  )
}
