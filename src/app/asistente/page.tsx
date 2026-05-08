import Link from 'next/link'
import { Bot, ArrowLeft } from 'lucide-react'

export default async function AsistentePage() {
  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[rgba(201,169,110,0.1)] flex items-center justify-center mx-auto mb-6 border border-[rgba(201,169,110,0.2)]">
          <Bot className="w-8 h-8 text-[#c9a96e]" />
        </div>
        <span className="badge-soon mb-4 inline-block">En desarrollo</span>
        <h1 className="text-3xl font-light text-[#f0f0f0] mb-4">
          Asistente <span className="gold-text font-semibold">IA</span>
        </h1>
        <p className="text-[#555] leading-relaxed mb-8">
          Próximamente tendrás acceso a nuestro asistente inteligente que responde
          todas tus dudas sobre cortinas, medidas, instalación y precios en tiempo real.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#c9a96e] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
      </div>
    </div>
  )
}
