import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "WHAP - Women Helping All People",
  description:
    "Women Helping All People (WHAP) - a not for profit organization that helps minorities and underprivileged residents of Marin County with housing, education, food, and labor skills.",
  keywords: "WHAP, non profit organization, Marin County, Bay Area, education, community support",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
