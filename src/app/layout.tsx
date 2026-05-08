import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const SITE_URL = 'https://fabricadecortinasgirardot.com'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Fábrica de Cortinas Girardot',
  description:
    'Instalación profesional de persianas enrollables, Sheer Elegance, panel japonés, romanas, verticales y sistemas motorizados en Girardot y la región. Garantía 7 años.',
  url: SITE_URL,
  telephone: '+573202381865',
  email: 'fabricadecortinasgirardot@gmail.com',
  image: `${SITE_URL}/hero_banner.png`,
  logo: `${SITE_URL}/hero_banner.png`,
  priceRange: '$$',
  currenciesAccepted: 'COP',
  paymentAccepted: 'Efectivo, Transferencia, Nequi, Daviplata',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Girardot',
    addressLocality: 'Girardot',
    addressRegion: 'Cundinamarca',
    postalCode: '252431',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 4.3031,
    longitude: -74.8021,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Girardot' },
    { '@type': 'City', name: 'Melgar' },
    { '@type': 'City', name: 'Ricaurte' },
    { '@type': 'City', name: 'Flandes' },
    { '@type': 'City', name: 'Bogotá' },
  ],
  hasMap: 'https://maps.google.com/?q=Fábrica+de+Cortinas+Girardot',
  sameAs: [
    'https://www.google.com/maps/search/Fabrica+de+Cortinas+Girardot',
  ],
  serviceType: [
    'Persianas Enrollables',
    'Sheer Elegance',
    'Panel Japonés',
    'Persiana Romana',
    'Persiana Vertical',
    'Sistema Hanas',
    'Motorización de Persianas',
    'Pérgolas Palillería',
  ],
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Fábrica de Cortinas Girardot | Persianas e Instalación Profesional',
  description:
    'Persianas enrollables, Sheer Elegance, verticales y sistemas motorizados. Instalación profesional en Girardot, Melgar, Ricaurte y Bogotá. Garantía 7 años.',
  keywords:
    'cortinas girardot, persianas girardot, enrollables, sheer elegance, panel japonés, motorización, domotica, melgar, ricaurte, flandes',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Fábrica de Cortinas Girardot',
    description: 'Instalación profesional de persianas y sistemas de control solar. Garantía 7 años.',
    url: SITE_URL,
    siteName: 'Fábrica de Cortinas Girardot',
    locale: 'es_CO',
    type: 'website',
    images: [{ url: '/hero_banner.png', width: 1200, height: 630, alt: 'Fábrica de Cortinas Girardot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fábrica de Cortinas Girardot',
    description: 'Persianas e instalación profesional en Girardot y la región.',
    images: ['/hero_banner.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
