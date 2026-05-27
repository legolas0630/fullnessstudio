'use client'

import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { useRouter } from 'next/navigation'
import { Sparkles, Eye, EyeOff, Heart } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useLocale } from 'next-intl'

export default function LoginPage() {
  const router = useRouter()
  const activeLocale = useLocale() as 'es' | 'en'
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

    router.push('/admin') // Redirige directamente al panel de control optimizado
    router.refresh()
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0F100F] text-white/80 font-light selection:bg-[#E5C158]/30">
      
      {/* --- BLOQUE IZQUIERDO: DISEÑO MÍSTICO EDITORIAL --- */}
      <div className="hidden lg:flex bg-[#121412] relative overflow-hidden flex-col justify-between p-16 border-r border-white/5">
        {/* Halos de luz de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E5C158]/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Esfera geométrica Zen */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/5 flex items-center justify-center animate-[spin_120s_linear_infinite]">
          <div className="w-64 h-64 rounded-full border border-[#E5C158]/10 border-dashed" />
        </div>

        {/* Branding superior */}
        <Link href="/" className="flex items-center gap-3 relative z-10 text-left">
          <div className="w-8 h-8 rounded-full border border-[#E5C158]/30 bg-[#E5C158]/5 flex items-center justify-center text-[#E5C158]">
            <Heart size={14} fill="#E5C158" className="opacity-80" />
          </div>
          <div>
            <span className="block font-display text-lg tracking-wider text-white leading-none">Fullness</span>
            <span className="block text-[9px] tracking-[0.25em] uppercase text-[#E5C158]/60 mt-0.5">Studio</span>
          </div>
        </Link>

        {/* Mensaje Inspiracional */}
        <div className="relative z-10 text-left">
          <p className="font-accent text-[#E5C158] text-2xl mb-2">
            {activeLocale === 'en' ? 'Welcome back' : 'Bienvenido de nuevo'}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-light leading-tight mb-5">
            {activeLocale === 'en' ? <>Your practice <br /><em className="italic text-[#E5C158] font-serif not-italic">awaits you</em></> : <>Tu práctica <br /><em className="italic text-[#E5C158] font-serif not-italic">te espera</em></>}
          </h2>
          <p className="font-body text-white/40 text-sm max-w-sm leading-relaxed">
            {activeLocale === 'en' 
              ? 'Return to your mat. Reserve your immersive spaces, manage your community, and honor your inner alignment.'
              : 'Vuelve a tu mat. Reserva tus espacios inmersivos, gestiona tu comunidad y honra tu alineación interna.'}
          </p>
        </div>

        {/* Cita Zen */}
        <p className="font-display text-xs italic text-white/30 text-left relative z-10 tracking-wide">
          "The present moment is the only moment available to us." — Thich Nhat Hanh
        </p>
      </div>

      {/* --- BLOQUE DERECHO: FORMULARIO DE ACCESOS PREMIUM --- */}
      <div className="flex items-center justify-center p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E5C158]/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-sm relative z-10">
          
          {/* Logo visible solo en móviles */}
          <Link href="/" className="inline-flex items-center gap-2 mb-10 lg:hidden">
            <span className="font-display text-2xl text-white tracking-wide">Fullness <em className="text-[#E5C158] font-serif not-italic">Studio</em></span>
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl text-white font-light mb-2 text-left">
            {activeLocale === 'en' ? 'Sign In' : 'Iniciar sesión'}
          </h1>
          <p className="font-body text-white/40 text-xs sm:text-sm mb-8 text-left">
            {activeLocale === 'en' ? "Don't have an account? " : '¿No tienes cuenta? '}
            <Link href="/auth/register" className="text-[#E5C158] hover:underline font-medium ml-1">
              {activeLocale === 'en' ? 'Register here' : 'Regístrate aquí'}
            </Link>
          </p>

          {/* Caja de control de errores */}
          {error && (
            <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-light rounded-xl text-left flex items-start gap-2.5">
              <span className="shrink-0 mt-0.5">✦</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5 text-left">
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-white/40 font-medium mb-2">
                {activeLocale === 'en' ? 'Email Address' : 'Correo electrónico'}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#161816]/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158]/40 transition-colors font-light"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[10px] tracking-widest uppercase text-white/40 font-medium">
                  {activeLocale === 'en' ? 'Password' : 'Contraseña'}
                </label>
                <Link href="/auth/forgot-password" className="text-[11px] text-[#E5C158]/70 hover:text-[#E5C158] hover:underline transition-colors">
                  {activeLocale === 'en' ? 'Forgot password?' : '¿Olvidaste tu contraseña?'}
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#161816]/60 border border-white/10 rounded-xl pl-4 pr-10 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158]/40 transition-colors font-light font-mono tracking-widest"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#E5C158] transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black py-3.5 text-xs uppercase tracking-widest font-semibold rounded-sm shadow-lg hover:opacity-95 active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  {activeLocale === 'en' ? 'Verifying...' : 'Validando...'}
                </span>
              ) : (
                activeLocale === 'en' ? 'Sign In' : 'Iniciar sesión'
              )}
            </button>
          </form>

          {/* OAUTH GOOGLE INTEGRACIÓN PREMIUM */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-[10px] tracking-widest uppercase text-white/30 text-center font-medium mb-4">
              {activeLocale === 'en' ? 'Or continue with' : 'O continúa con'}
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
              className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/5 py-3 text-xs text-white/80 hover:bg-white/10 hover:border-[#E5C158]/30 transition-all rounded-sm font-medium tracking-wider uppercase"
            >
              <svg width="15" height="15" viewBox="0 0 18 18" className="shrink-0">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
                <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              {activeLocale === 'en' ? 'Continue with Google' : 'Continuar con Google'}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}