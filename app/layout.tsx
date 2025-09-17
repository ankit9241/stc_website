import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Student Technical Council - IIT Patna",
  description: "Empowering Students Through Innovation - Official website of Student Technical Council, IIT Patna",
  keywords: "IIT Patna, Student Technical Council, DISHA, ARTHNITI, TATVA, student government, technology, innovation",
  authors: [{ name: "Student Technical Council IIT Patna" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'Vatsal Srivastava'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
