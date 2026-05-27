import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="min-h-screen flex items-center justify-center bg-[var(--cream)] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[var(--sage-light)]/20 animate-breathe" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[var(--sage-light)]/15" />

        <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
          <p className="font-accent text-[var(--sage)] text-5xl mb-2">404</p>
          <h1 className="font-display text-5xl md:text-6xl text-[var(--stone-dark)] font-light mb-4 leading-tight">
            Esta página ha<br />
            <em className="italic text-[var(--sage)]">encontrado su quietud</em>
          </h1>
          <p className="font-body font-light text-[var(--stone)] text-lg mb-10 leading-relaxed">
            La página que buscas parece haberse desplazado a otro lugar.
            Está bien — cada desvío forma parte de la práctica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">Volver al inicio</Link>
            <Link href="/calendar" className="btn-outline">Ver clases</Link>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--sage-light)]/30">
            <p className="text-sm font-light text-[var(--stone)] mb-4">Quizá estabas buscando</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: 'Yoga', href: '/services' },
                { label: 'Pilates', href: '/pilates' },
                { label: 'Terapia sonora', href: '/sound-therapy' },
                { label: 'Eventos', href: '/events' },
                { label: 'Membresías', href: '/memberships' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-widest uppercase px-4 py-2 border border-[var(--sage-light)]/40 text-[var(--stone)] hover:border-[var(--sage)] hover:text-[var(--sage)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
