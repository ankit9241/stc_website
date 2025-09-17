import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { FooterWrapper } from "@/components/footer-wrapper"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Student Technical Council - IIT Patna",
  description: "Empowering Students Through Innovation - Official website of Student Technical Council, IIT Patna",
  keywords: "IIT Patna, Student Technical Council, DISHA, ARTHNITI, TATVA, student government, technology, innovation",
  authors: [{ name: "Student Technical Council IIT Patna" }],
  generator: 'Vatsal Srivastava'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  )
}
