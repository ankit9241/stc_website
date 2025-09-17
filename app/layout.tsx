import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { FooterWrapper } from "@/components/footer-wrapper"
import VideoTransition from "@/components/video-transition"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL('https://stciitphybrid.in'),
  title: {
    default: "Student Technical Council - IIT Patna | Empowering Students Through Innovation",
    template: "%s | Student Technical Council - IIT Patna"
  },
  description: "Official website of Student Technical Council hybrid IIT Patna. Empowering students through innovation with our wings DISHA, ARTHNITI, and TATVA. Join us in technical excellence and leadership development.",
  keywords: [
    "Student Technical Council",
    "STC",
    "IIT Patna",
    "DISHA",
    "ARTHNITI",
    "TATVA",
    "student government",
    "technology",
    "innovation",
    "technical events",
    "hackathons",
    "workshops",
    "webinars",
    "Hybrid programs",
    "student programs",
    "Hybrid course",
    "student leadership",
    "IIT Patna clubs",
    "technical clubs",
    "engineering students",
    "computer science",
    "technology events"
  ],
  authors: [{ name: "Student Technical Council IIT Patna", url: "https://stciitphybrid.in" }],
  creator: "Student Technical Council IIT Patna",
  publisher: "Student Technical Council IIT Patna",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stciitphybrid.in',
    siteName: 'Student Technical Council - IIT Patna',
    title: 'Student Technical Council - IIT Patna | Empowering Students Through Innovation',
    description: 'Official website of Student Technical Council, IIT Patna. Empowering students through innovation with our wings DISHA, ARTHNITI, and TATVA.',
    images: [
      {
        url: '/images/stc.jpg',
        width: 1026,
        height: 1025,
        alt: 'Student Technical Council IIT Patna Logo',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Technical Council - IIT Patna | Empowering Students Through Innovation',
    description: 'Official website of Student Technical Council, IIT Patna. Empowering students through innovation with our wings DISHA, ARTHNITI, and TATVA.',
    images: ['/images/stc.jpg'],
    creator: '@stc_iitpatna',
    site: '@stc_iitpatna',
  },
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   yahoo: 'your-yahoo-verification-code',
  // },
  category: 'education',
  classification: 'Student Organization',
  icons: {
    icon: [
      { url: '/images/stc.jpg', type: 'image/jpeg' },
      { url: '/images/stc.jpg', type: 'image/jpeg' }
    ],
    apple: [
      { url: '/images/stc.jpg', type: 'image/jpeg' }
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/stc.jpg',
      },
    ],
  },
  // manifest: '/manifest.json',
  alternates: {
    canonical: 'https://stciitphybrid.in',
  },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Student Technical Council - IIT Patna',
    description: 'Official Student Technical Council hybrid of Indian Institute of Technology Patna, empowering students through innovation and technical excellence.',
    url: 'https://stciitphybrid.in',
    logo: 'https://stciitphybrid.in/images/stc.jpg',
    image: 'https://stciitphybrid.in/images/stc.jpg',
    mail: 'stc@iitp.ac.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bihta',
      addressRegion: 'Bihar',
      addressCountry: 'India',
      postalCode: '801106'
    },
    parentOrganization: {
      '@type': 'EducationalOrganization',
      name: 'Indian Institute of Technology Patna',
      url: 'https://www.iitp.ac.in'
    },
    department: [
      {
        '@type': 'Organization',
        name: 'DISHA',
        description: 'Career Growth & Training Cell - Empowering students with the skills, exposure, and support needed to excel in their professional journey'
      },
      {
        '@type': 'Organization',
        name: 'ARTHNITI',
        description: 'Entrepreneurship & Innovation Cell - Nurturing future innovators and startup enthusiasts through comprehensive entrepreneurship support'
      },
      {
        '@type': 'Organization',
        name: 'TATVA',
        description: 'Technology & Research Cell - Nurturing technical expertise and promoting research-oriented mindset through innovation and collaboration'
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/stc-iitp-hybrid-programs",
      "https://www.instagram.com/stc_iitp_cet"
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <VideoTransition>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <FooterWrapper />
        </VideoTransition>
      </body>
    </html>
  )
}
