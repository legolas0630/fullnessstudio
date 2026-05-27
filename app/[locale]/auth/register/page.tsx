'use client'

import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Check, Heart, Sparkles } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useLocale } from 'next-intl'

const benefitsData = {
  es: [
    'Reserva tus clases y espacios en línea al instante.',
    'Accede a tarifas preferenciales para miembros del estudio.',
    'Sigue tu progreso de integración somática y corporal.',
    'Únete a ceremonias, retiros y encuentros comunitarios.',
  ],
  en: [
    'Book your classes and immersive spaces online instantly.',
    'Access exclusive preferred pricing for studio members.',
    'Track your personal somatic and bodily integration progress.',
    'Join ceremonies, retreats, and sacred community gatherings.',
  ]
}

export default function RegisterPage() {
  const router = useRouter()
  const activeLocale = useLocale() as 'es' | 'en'
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
      setError(activeLocale === 'en' ? 'Passwords do not match' : 'Las contraseñas no coinciden')
      return
    }
    if (form.password.length < 8) {
      setError(activeLocale === 'en' ? 'Password must be at least 8 characters long' : 'La contraseña debe tener al menos 8 caracteres')
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

  // --- VISTA 1: ÉXITO EN REGISTRO (CON CONFIRMACIÓN DE EMAIL MÍSTICA) ---
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F100F] px-6 text-white/80 font-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E5C158]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center max-w-md relative z-10">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Check size={24} className="text-emerald-400" strokeWidth={2} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-white font-light mb-4">
            {activeLocale === 'en' ? 'Verify your email' : 'Revisa tu correo'}
          </h2>
          <p className="font-body text-white/45 text-sm mb-8 leading-relaxed">
            {activeLocale === 'en' ? (
              <>We have sent a confirmation link to <strong className="text-white font-normal">{form.email}</strong>. Click it to activate your account and begin your journey.</>
            ) : (
              <>Enviamos un enlace de confirmación a <strong className="text-white font-normal">{form.email}</strong>. Haz clic para activar tu cuenta e iniciar tu práctica.</>
            )}
          </p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center border border-white/10 text-white/80 hover:bg-white/5 px-8 py-3.5 text-xs uppercase tracking-widest font-light rounded-sm transition-all"
          >
            {activeLocale === 'en' ? 'Back to Home' : 'Volver al inicio'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0F100F] text-white/80 font-light selection:bg-[#E5C158]/30">
      
      {/* --- BLOQUE IZQUIERDO: FORMULARIO DE REGISTRO PREMIUM --- */}
      <div className="flex items-center justify-center p-8 sm:p-12 relative overflow-hidden order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/5">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E5C158]/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-sm relative z-10">
          
          {/* Logo Corporativo */}
          <Link href="/" className="flex items-center gap-3 mb-10 text-left">
            <div className="w-8 h-8 rounded-full border border-[#E5C158]/30 bg-[#E5C158]/5 flex items-center justify-center text-[#E5C158]">
              <Heart size={14} fill="#E5C158" className="opacity-80" />
            </div>
            <div>
              <span className="block font-display text-lg tracking-wider text-white leading-none">Fullness</span>
              <span className="block text-[9px] tracking-[0.25em] uppercase text-[#E5C158]/60 mt-0.5">Studio</span>
            </div>
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl text-white font-light mb-2 text-left">
            {activeLocale === 'en' ? 'Start your journey' : 'Comienza tu viaje'}
          </h1>
          <p className="font-body text-white/40 text-xs sm:text-sm mb-8 text-left">
            {activeLocale === 'en' ? 'Already a member?' : '¿Ya eres miembro?'}
            <Link href="/auth/login" className="text-[#E5C158] hover:underline font-medium ml-1.5">
              {activeLocale === 'en' ? 'Sign In here' : 'Iniciar sesión'}
            </Link>
          </p>

          {/* Banner de errores */}
          {error && (
            <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-light rounded-xl text-left flex items-start gap-2.5">
              <span className="shrink-0 mt-0.5">✦</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4 text-left">
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-white/40 font-medium mb-1.5">
                {activeLocale === 'en' ? 'Full Name' : 'Nombre completo'}
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={update('fullName')}
                required
                className="w-full bg-[#161816]/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158]/40 transition-colors font-light"
                placeholder={activeLocale === 'en' ? 'Your name and last name' : 'Tu nombre completo'}
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-white/40 font-medium mb-1.5">
                {activeLocale === 'en' ? 'Email Address' : 'Correo electrónico'}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={update('email')}
                required
                className="w-full bg-[#161816]/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158]/40 transition-colors font-light"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-white/40 font-medium mb-1.5">
                {activeLocale === 'en' ? 'Password' : 'Contraseña'}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={update('password')}
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

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-white/40 font-medium mb-1.5">
                {activeLocale === 'en' ? 'Confirm Password' : 'Confirmar contraseña'}
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.confirm}
                onChange={update('confirm')}
                required
                className="w-full bg-[#161816]/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5C158]/40 transition-colors font-light font-mono tracking-widest"
                placeholder="••••••••"
              />
            </div>

            <p className="text-[11px] text-white/30 font-light leading-relaxed pt-1">
              {activeLocale === 'en' ? (
                <>By creating an account, you agree to our <Link href="/terms" className="text-[#E5C158] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[#E5C158] hover:underline">Privacy Policy</Link>.</>
              ) : (
                <>Al crear una cuenta, aceptas nuestros <Link href="/terms" className="text-[#E5C158] hover:underline">Términos de servicio</Link> y <Link href="/privacy" className="text-[#E5C158] hover:underline">Política de privacidad</Link>.</>
              )}
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#F3D782] text-black py-3.5 text-xs uppercase tracking-widest font-semibold rounded-sm shadow-lg hover:opacity-95 active:scale-98 transform transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  {activeLocale === 'en' ? 'Creating Account...' : 'Creando cuenta...'}
                </span>
              ) : (
                activeLocale === 'en' ? 'Create Account' : 'Crear mi cuenta'
              )}
            </button>
          </form>

          {/* OAUTH GOOGLE ACCESO */}
          <div className="mt-6 pt-6 border-t border-white/5">
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
              {activeLocale === 'en' ? 'Sign Up with Google' : 'Registrarse con Google'}
            </button>
          </div>

        </div>
      </div>

      {/* --- BLOQUE DERECHO: DISEÑO DE BENEFICIOS DE LA COMUNIDAD --- */}
      <div className="hidden lg:flex bg-[#121412] relative overflow-hidden order-1 lg:order-2 flex-col justify-between p-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E5C158]/5 blur-[130px] rounded-full pointer-events-none" />
        
        {/* Esferas decorativas sincrónicas */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border border-white/5 animate-[pulse_8s_ease-in-out_infinite]" />
        </div>

        <div />

        <div className="relative z-10 text-left max-w-md">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles size={13} className="text-[#E5C158]" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#E5C158] font-medium">Ecosistema Fullness</p>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-light leading-tight mb-8">
            {activeLocale === 'en' ? <>Everything you need <br /><em className="italic text-[#E5C158] font-serif not-italic">to begin</em></> : <>Todo lo que necesitas <br /><em className="italic text-[#E5C158] font-serif not-italic">para comenzar</em></>}
          </h2>
          
          <ul className="space-y-4">
            {benefitsData[activeLocale].map((benefit) => (
              <li key={benefit} className="flex items-start gap-3.5 text-left">
                <div className="w-5 h-5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-[#E5C158]" strokeWidth={2.5} />
                </div>
                <span className="text-xs sm:text-sm font-light text-white/50 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cita de Cierre Zen */}
        <p className="font-display text-xs italic text-white/30 text-left relative z-10 tracking-wide">
          {activeLocale === 'en'
            ? '"You cannot do yoga. Yoga is your natural state." — Sharon Gannon'
            : '"No puedes hacer yoga. El yoga es tu estado natural." — Sharon Gannon'}
        </p>
      </div>

    </div>
  )
}