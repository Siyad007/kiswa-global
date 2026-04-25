import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kiswa Foodstuff | Retail, Wholesale & Distribution — Saudi Arabia',
  description:
    'Kiswa Global Company — Your trusted partner in foodstuff retail, wholesale, and distribution across Saudi Arabia and globally. Premium food supply with certified quality.',
  keywords:
    'Kiswa, Kiswa Global, foodstuff, wholesale, distribution, rice, spices, oils, Saudi Arabia, KSA, food supply, import export',
  authors: [{ name: 'Kiswa Global Company' }],
  openGraph: {
    title: 'Kiswa Foodstuff | Retail, Wholesale & Distribution',
    description: 'Global Quality. Trusted Supply. | شركة كيسوا جلوبال للمواد الغذائية',
    url: 'https://kiswaglobal.com',
    siteName: 'Kiswa Global Company',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Kiswa Global Company',
              description: 'Foodstuff Retail, Wholesale & Distribution',
              telephone: '+966553806731',
              email: 'kiswaglobalksa@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Samtah 1',
                addressLocality: 'Dayhama',
                postalCode: '86416',
                addressCountry: 'SA',
              },
              url: 'https://kiswaglobal.com',
              priceRange: '$$',
              openingHours: 'Mo-Sa 08:00-18:00',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
