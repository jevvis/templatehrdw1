import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})


export const metadata: Metadata = {
  title: 'apt. Hafizah Nurfadillah, S.Farm | Portfolio Clinical Pharmacist',
  description: 'Licensed Pharmacist | Aspiring Clinical Pharmacist | Patient-Centered Care — Universitas Indonesia',
  keywords: ['Hafizah Nurfadillah', 'Apoteker', 'Farmasi Klinis', 'Clinical Pharmacist', 'Universitas Indonesia', 'RSUP Dr. Kariadi', 'Patient Safety', 'PTO', 'Dispensing'],
  openGraph: {
    title: 'apt. Hafizah Nurfadillah, S.Farm | Portfolio Clinical Pharmacist',
    description: 'Licensed Pharmacist | Aspiring Clinical Pharmacist | Patient-Centered Care',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
                try {
                  if (sessionStorage.getItem('intro-seen')) {
                    document.documentElement.classList.add('intro-done', 'hero-go');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
