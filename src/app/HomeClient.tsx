'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence, type Variants } from 'framer-motion'
import { ArrowRight, ChevronRight, Shield, Zap, Award, MapPin, Smartphone, Sun, Clock, Mic } from 'lucide-react'
import type { ImagesConfig } from '@/lib/getImagesConfig'

/* ─── HELPERS DE ANIMACIÓN ──────────────────────── */

const easeOut = [0.25, 0.46, 0.45, 0.94] as const

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: easeOut } },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease: easeOut } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease: easeOut } },
}
const staggerContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

function Reveal({ children, variant = fadeUp, delay = 0, style, className }: {
  children: React.ReactNode
  variant?: Variants
  delay?: number
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Counter({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true })
  const mv    = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 20 })
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`)

  useEffect(() => { if (inView) mv.set(to) }, [inView, mv, to])

  return <motion.span ref={ref}>{display}</motion.span>
}

/* ─── DATA ESTÁTICA ─────────────────────────────── */
const stats = [
  { prefix: '',  to: 7,   suffix: ' años',   label: 'Garantía en enrollables' },
  { prefix: '+', to: 500, suffix: '',         label: 'Instalaciones exitosas' },
  { prefix: '',  to: 14,  suffix: ' líneas',  label: 'Catálogo 2026' },
  { prefix: '',  to: 5,   suffix: '',         label: 'Ciudades de cobertura' },
]

const smart = [
  { Icon: Smartphone, label: 'App móvil',      desc: 'Controla desde cualquier lugar' },
  { Icon: Mic,        label: 'Control por voz', desc: 'Alexa, Google, Siri' },
  { Icon: Sun,        label: 'Sensor de luz',   desc: 'Apertura automática según el sol' },
  { Icon: Clock,      label: 'Temporizadores',  desc: 'Programación horaria personalizada' },
]

const certs = [
  { name: 'OEKO-TEX 100',   desc: 'Sin químicos tóxicos',       logo: '/certs/oeko-tex.svg',      bg: '#FFFFFF' },
  { name: 'GREENGUARD Gold', desc: 'Control de VOC certificado', logo: '/certs/greenguard.png',    bg: '#FFFFFF' },
  { name: 'SGS ISO 9001',   desc: 'Calidad certificada',        logo: '/certs/iso9001.svg',       bg: '#FFFFFF' },
  { name: 'REACH NPS',      desc: 'Sin sustancias peligrosas',  logo: '/certs/reach.svg',         bg: '#003399' },
  { name: 'NFPA 701',       desc: 'Resistente al fuego',        logo: '/certs/nfpa.svg',          bg: '#CC0000' },
  { name: 'Lead-Free',      desc: 'Sin plomo certificado',      logo: '/certs/leadfree.svg',      bg: '#1A7A4A' },
  { name: 'BSCI / amfori',  desc: 'Producción ética auditada',  logo: '/certs/bsci.svg',          bg: '#FFFFFF' },
  { name: 'SGS Grado 8',    desc: 'Máx. solidez del color',     logo: '/certs/sgs-grade8.svg',    bg: '#FFFFFF' },
  { name: 'Anti-insecto',   desc: 'Inhibe ácaros e insectos',   logo: '/certs/anti-insecto.svg',  bg: '#FFFFFF' },
]

const pilares = [
  { Icon: Shield, t: 'Garantía 7 años',         d: 'La mayor garantía del mercado en sistemas enrollables.' },
  { Icon: Award,  t: 'Certificaciones premium',  d: 'Materiales libres de tóxicos, ignífugos y anti-bacterias.' },
  { Icon: Zap,    t: 'Motorización inteligente', d: 'Compatible con todos los ecosistemas smart del hogar.' },
  { Icon: MapPin, t: 'Cobertura regional',       d: 'Girardot · Melgar · Ricaurte · Flandes · Bogotá.' },
]

/* ─── PÁGINA ─────────────────────────────────── */
export default function HomeClient({ cfg }: { cfg: ImagesConfig }) {
  const p = cfg.productos_portada

  const productos = [
    { title: 'Enrollables',    sub: 'Blackout · Screen · Panel Japonés · Premium', desc: 'Control total de luz y privacidad. Estándar y Premium con cabezal metálico. Telas certificadas OEKO-TEX y GREENGUARD Gold.', href: '/productos/enrollables',   tag: '7 años garantía', img: p['enrollables']    || '/galeria/blackout/IMG-20170802-WA0185.jpg' },
    { title: 'Sheer Elegance', sub: 'Triple acción · Franjas opacas + traslúcida', desc: 'Sistema doble función: franjas opacas y malla traslúcida. Cerrado, semi abierto o totalmente abierto.',                      href: '/productos/sheer-elegance', tag: 'Premium',          img: p['sheer-elegance'] || '/galeria/sheer/IMG-20170802-WA0001.jpg' },
    { title: 'Verticales',     sub: 'Lamas 9 cm · Riel aluminio · Hasta 6.0 m',   desc: 'Lengüetas traslapadas en riel de aluminio. Hasta 6.0 m de ancho y 3.20 m de alto. Irregular combinada disponible.',           href: '/productos/verticales',    tag: 'Hasta 6.0 m',     img: p['verticales']     || '/galeria/verticales/IMG20260117095207.jpg' },
    { title: 'Motorización',   sub: 'Wi-Fi · App · Alexa · Google · Siri',         desc: 'Motores silenciosos con Wi-Fi integrado. Compatible con todos los sistemas del catálogo. Sin hub adicional.',                 href: '/productos/motorizacion',  tag: 'Smart Home',      img: p['motorizacion']   || '/safra/enrollables/sunpro-y101.jpg', featured: true },
  ]

  const otrosProductos = [
    { title: 'Hanas',          sub: 'Curvas en S',              href: '/productos/hanas',       tag: 'Fantasía · Royal',   img: p['hanas']          || '/safra/hanas/hanas-royal.png' },
    { title: 'Vintage',        sub: 'Lamas plegables',          href: '/productos/vintage',     tag: 'Hasta 5.85 m',       img: p['vintage']        || '/safra/vintage/vintage-inspiracion.png' },
    { title: 'Romana',         sub: 'Top Down · Premium',       href: '/productos/romana',      tag: 'Módulos plegables',  img: p['romana']         || '/safra/romana/romana-vittoria.jpg' },
    { title: 'Panel & Dúo',   sub: 'Puertas corredizas',       href: '/productos/panel',       tag: 'Espacios amplios',   img: p['panel']          || '/galeria/panel/IMG-20170802-WA0033.jpg' },
    { title: 'Cortina',        sub: 'Colección 2026',           href: '/productos/cortina',     tag: 'Nuevo',              img: p['cortina']        || '/safra/hero-coleccion.jpg' },
    { title: 'Películas UV',   sub: 'Para vidrios',             href: '/productos/peliculas',   tag: 'Solar · Seguridad',  img: p['peliculas']      || null },
    { title: 'Papel Colgadura',sub: 'Safra Living',             href: '/productos/papel',       tag: 'Decoración',         img: p['papel']          || null },
    { title: 'Lienzo',         sub: 'Arte digital',             href: '/productos/lienzo',      tag: '4 formatos',         img: p['lienzo']         || '/safra/lienzo/lienzo-trigo.jpg' },
    { title: 'Pérgolas',       sub: 'Lona AcrySun · Exterior',  href: '/productos/pergolas',    tag: 'Exteriores',         img: p['pergolas']       || '/safra/pergolas/pergola-palomino.jpg' },
    { title: 'Estampados',     sub: '+400 diseños · 7 temas',   href: '/productos/estampados',  tag: 'Personalizado',      img: p['estampados']     || '/safra/estampados/estampado-flower.jpg' },
  ]

  const heroSrc = cfg.hero_banner || '/hero_banner.png'

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        {/* Imagen hero */}
        <Image src={heroSrc} alt="" fill priority quality={95} sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />

        {/* Overlay izquierda */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.0) 65%)', zIndex: 1 }} />

        {/* Orb animado */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '20%', left: '5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,145,42,0.25) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }}
        />

        {/* Degradado inferior */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: 'linear-gradient(to bottom, transparent, var(--bg))', zIndex: 1 }} />

        <div className="container-site" style={{ position: 'relative', zIndex: 2, paddingTop: '124px', paddingBottom: '56px' }}>

          <motion.div variants={staggerContainer} initial="hidden" animate="show">

            <motion.div variants={fadeUp}>
              <span className="badge animate-pulse-soft" style={{ marginBottom: '24px', display: 'inline-flex' }}>
                Sistemas de control solar premium
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="hero-h1"
              style={{ fontSize: 'clamp(40px, 6.5vw, 80px)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '20px', maxWidth: '820px', color: '#FFFFFF', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
            >
              Tu espacio,{' '}
              <span className="text-gold-gradient">perfectamente</span>
              <br />controlado
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{ fontSize: 'clamp(17px, 1.5vw, 19px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', maxWidth: '500px', marginBottom: '36px', textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}
            >
              Persianas y cortinas premium con motorización inteligente para Girardot, Melgar y toda la zona. Garantía de hasta 7 años.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-btns" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/cotizar" className="btn-primary">
                  Cotizar ahora <ArrowRight size={15} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/productos" className="btn-secondary">
                  Ver productos <ChevronRight size={15} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid-cols-4" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {stats.map(({ prefix, to, suffix, label }, i) => (
                <div key={label} className="stat-block" style={{ padding: '24px 0 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingRight: i < 3 ? '24px' : '0', paddingLeft: i > 0 ? '24px' : '0' }}>
                  <div className="text-gold-gradient" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1, marginBottom: '6px', display: 'block', fontWeight: 700 }}>
                    <Counter to={to} prefix={prefix} suffix={suffix} />
                  </div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: 0.5 }}
        >
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))' }} />
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'white' }} />
        </motion.div>

      </section>

      {/* ══════════ PILARES ══════════ */}
      <section style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', padding: '0' }}>
        <motion.div
          className="container-site grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {pilares.map(({ Icon, t, d }, i) => (
            <motion.div
              key={t}
              variants={fadeUp}
              whileHover={{ backgroundColor: 'rgba(184,145,42,0.04)', transition: { duration: 0.2 } }}
              className="pilar-block"
              style={{ padding: '32px 28px', borderRight: i < 3 ? '1px solid var(--border)' : 'none', display: 'flex', flexDirection: 'column', gap: '10px', cursor: 'default' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Icon size={18} color="var(--gold)" />
                </motion.div>
                <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)' }}>{t}</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════ PRODUCTOS ══════════ */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-site">

          <Reveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>Catálogo 2026</p>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 300, lineHeight: 1.1 }}>
                Sistemas de <span className="text-gold-gradient">control solar</span>
              </h2>
            </div>
            <Link href="/productos" className="btn-secondary" style={{ padding: '9px 18px', fontSize: '15px' }}>
              Ver catálogo completo <ArrowRight size={13} />
            </Link>
          </Reveal>

          <motion.div
            className="grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {productos.map((p) => (
              <motion.div key={p.href} variants={fadeUp}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{ borderRadius: '20px', overflow: 'hidden', height: '100%' }}
                >
                  <Link href={p.href} style={{ textDecoration: 'none' }}>
                    <div className="card-glass" style={{ overflow: 'hidden', borderColor: p.featured ? 'rgba(184,145,42,0.35)' : undefined, cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                        <motion.img
                          src={p.img}
                          alt={p.title}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                        {p.featured && (
                          <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(184,145,42,0.9)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', letterSpacing: '0.06em' }}>
                            SMART HOME
                          </div>
                        )}
                      </div>
                      <div style={{ padding: '22px 26px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                          <div>
                            <p style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.08em', marginBottom: '4px' }}>{p.sub}</p>
                            <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.1 }}>{p.title}</h3>
                          </div>
                          <span className="tag" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>{p.tag}</span>
                        </div>
                        <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65, flex: 1 }}>{p.desc}</p>
                        <motion.div
                          style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--gold)', fontSize: '15px', fontWeight: 600 }}
                          whileHover={{ x: 4 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          Ver detalles <ArrowRight size={13} />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Resto del catálogo */}
          <Reveal style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '12px' }}>
              También en el catálogo 2026
            </p>
            <div className="grid-cols-5">
              {otrosProductos.map((p) => (
                <Link key={p.href} href={p.href} style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.1)', borderColor: 'rgba(201,169,110,0.3)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="card-glass"
                    style={{ borderRadius: '12px', cursor: 'pointer', overflow: 'hidden', height: '100%' }}
                  >
                    {p.img ? (
                      <div style={{ height: '100px', overflow: 'hidden' }}>
                        <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                          className="img-zoom" />
                      </div>
                    ) : (
                      <div style={{ height: '60px', background: 'linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.03))' }} />
                    )}
                    <div style={{ padding: '12px 14px 14px' }}>
                      <p style={{ fontSize: '11px', color: 'var(--gold)', marginBottom: '2px', letterSpacing: '0.05em' }}>{p.sub}</p>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px', lineHeight: 1.2 }}>{p.title}</p>
                      <span className="tag" style={{ fontSize: '10px' }}>{p.tag}</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* ══════════ MOTORIZACIÓN ══════════ */}
      <section className="section grid-bg" style={{ borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '50%', left: '60%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(184,145,42,1) 0%, transparent 70%)', pointerEvents: 'none' }}
        />

        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-cols-2-lg">

            <Reveal variant={fadeLeft}>
              <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Tecnología smart</p>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '16px' }}>
                Motorización<br /><span className="text-gold-gradient">inteligente</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '28px' }}>
                Controla todas tus persianas desde el teléfono, con voz o con sensores automáticos según la luz del sol. Compatible con Alexa, Google Home y Apple HomeKit.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
                {['Alexa', 'Google Home', 'Apple HomeKit', 'SmartThings'].map((e) => (
                  <motion.span key={e} className="tag" style={{ fontSize: '14px' }} whileHover={{ scale: 1.06 }}>{e}</motion.span>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                <Link href="/productos/motorizacion" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
                  Ver motorización <ArrowRight size={14} />
                </Link>
              </motion.div>
            </Reveal>

            <motion.div
              className="grid-cols-4-gap"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {smart.map(({ Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="surface"
                  style={{ padding: '20px 18px', cursor: 'default' }}
                >
                  <motion.div
                    whileHover={{ backgroundColor: 'rgba(184,145,42,0.18)' }}
                    style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(184,145,42,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}
                  >
                    <Icon size={17} color="var(--gold)" />
                  </motion.div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px', lineHeight: 1.2 }}>{label}</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.5 }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════ CERTIFICACIONES ══════════ */}
      <section className="section-sm" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-site">
          <div className="grid-cols-2-lg">

            <Reveal variant={fadeLeft}>
              <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Calidad garantizada</p>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '14px' }}>
                Materiales con <span className="text-gold-gradient">certificaciones</span> internacionales
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.7 }}>
                Todos nuestros productos cumplen los más altos estándares internacionales de calidad, seguridad y respeto al medio ambiente.
              </p>
            </Reveal>

            <motion.div
              className="grid-cols-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {certs.map(({ name, desc, logo, bg }) => (
                <motion.div
                  key={name}
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut' } } }}
                  whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(0,0,0,0.1)' }}
                  className="surface"
                  style={{ padding: '16px 12px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'default' }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: bg === '#FFFFFF' ? '6px' : '0' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>{name}</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-3)', lineHeight: 1.3 }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════ ZONAS ══════════ */}
      <Reveal>
        <section style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', padding: '0' }}>
          <div className="container-site" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{ fontSize: '15px', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
              Cobertura: <span style={{ color: 'var(--text-2)', fontWeight: 500 }}>Girardot · Melgar · Ricaurte · Flandes · Bogotá</span>
            </p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e' }} />
              </motion.div>
              <span style={{ fontSize: '15px', color: 'var(--text-3)' }}>Visita de medición sin costo</span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ══════════ RESEÑAS GOOGLE ══════════ */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-site">
          <Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <svg width="22" height="22" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-2)' }}>Reseñas de Google</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '42px', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>4.9</span>
                <div>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '4px' }}>
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>
                    Basado en reseñas de Google
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/search?q=Fabrica+de+Cortinas+Girardot"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}
              >
                Ver todas las reseñas en Google →
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
              {[
                {
                  nombre: 'Carolina Mendoza',
                  fecha: 'hace 2 semanas',
                  texto: 'Excelente servicio, llegaron puntual a tomar medidas y la instalación quedó perfecta. Las persianas blackout quedaron impecables en el cuarto. 100% recomendados.',
                  producto: 'Persiana Enrollable Blackout',
                },
                {
                  nombre: 'Andrés Romero',
                  fecha: 'hace 1 mes',
                  texto: 'Muy profesionales desde el primer contacto. El Sheer Elegance que instalaron transformó la sala por completo. La calidad de los materiales es excelente y el precio muy justo.',
                  producto: 'Sheer Elegance',
                },
                {
                  nombre: 'Marcela Torres',
                  fecha: 'hace 3 semanas',
                  texto: 'Instalaron panel japonés en toda la oficina. El resultado fue increíble, moderno y muy funcional. La atención al cliente es de primera y cumplieron con el tiempo prometido.',
                  producto: 'Panel Japonés',
                },
              ].map((r) => (
                <div key={r.nombre} className="card-glass" style={{ padding: '24px 26px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{r.nombre[0]}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '1px' }}>{r.nombre}</p>
                      <p style={{ fontSize: '12px', color: 'var(--text-3)' }}>{r.fecha}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 48 48" style={{ marginLeft: 'auto', flexShrink: 0 }}>
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                  </div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '10px' }}>
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: '12px' }}>"{r.texto}"</p>
                  <span style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '20px', background: 'rgba(184,145,42,0.1)', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {r.producto}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-site">
          <Reveal>
            <motion.div
              whileHover={{ boxShadow: '0 24px 80px rgba(184,145,42,0.15)' }}
              transition={{ duration: 0.3 }}
              className="grid-cols-cta"
              style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.02) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '20px', padding: 'clamp(36px, 5vw, 64px)' }}
            >
              <div>
                <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Cotización gratuita</span>
                <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '10px' }}>
                  ¿Listo para transformar <span className="text-gold-gradient">tu espacio?</span>
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--text-3)', lineHeight: 1.65 }}>
                  Visitamos tu hogar, tomamos medidas y te entregamos la cotización sin ningún costo. Respondemos en menos de 2 horas.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '180px' }}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/cotizar" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                    Solicitar cotización <ArrowRight size={14} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ justifyContent: 'center', fontSize: '15px', width: '100%' }}>
                    Hablar por WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
