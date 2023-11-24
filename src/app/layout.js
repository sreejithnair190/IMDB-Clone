import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB clone',
  description: 'IMDB clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {/* Navbar */}
          {/* Search Box */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
