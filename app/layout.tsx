import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { FooterWrapper } from "@/components/footer-wrapper"
import VideoTransition from "@/components/video-transition"
import { SessionWrapper } from "@/lib/SessionWrapper"
import AdminNav from "@/components/adminNav"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL('https://stciitphybrid.in'),
  title: {
    default: "STC IITP | Student Technical Council IIT Patna Hybrid Programs",
    template: "%s | STC IITP - Student Technical Council IIT Patna"
  },
  description: "STC IITP - Official Student Technical Council IIT Patna Hybrid Programs. STC Hybrid offers technical excellence through DISHA, ARTHNITI, and TATVA wings. Join Student Technical Council Hybrid for innovation and leadership.",
  keywords: [
    "STC IITP",
    "STC IIT Patna",
    "STC Hybrid",
    "Student Technical Council",
    "Student Technical Council IIT Patna",
    "Student Technical Council Hybrid",
    "Student Technical Council IITP",
    "STC",
    "IIT Patna",
    "IITP",
    "DISHA STC",
    "ARTHNITI STC", 
    "TATVA STC",
    "STC wings",
    "student government IITP",
    "technology council",
    "innovation hub",
    "technical events IIT Patna",
    "hackathons IITP",
    "workshops STC",
    "webinars hybrid",
    "webinars STC",
    "hybrid programs IIT Patna",
    "student programs IITP",
    "hybrid course IIT",
    "student leadership council",
    "IIT Patna clubs",
    "technical clubs IITP",
    "computer science events",
    "technology events hybrid",
    "STC events",
    "IIT Patna student council"
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
    siteName: 'STC IITP - Student Technical Council for Hybrid Programs IIT Patna',
    title: 'STC IITP | Student Technical Council for Hybrid Programs IIT Patna',
    description: 'STC IITP - Official Student Technical Council for Hybrid Programs IIT Patna. Technical excellence through DISHA, ARTHNITI, and TATVA wings.',
    images: [
      {
        url: '/images/stc-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'STC IITP - Student Technical Council Logo',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STC IITP | Student Technical Council for Hybrid Programs IIT Patna',
    description: 'STC IITP - Official Student Technical Council for Hybrid Programs IIT Patna. Technical excellence through DISHA, ARTHNITI, and TATVA wings.',
    images: ['/images/stc-logo.jpg'],
    creator: '@stc_iitpatna',
    site: '@stc_iitpatna',
  },
  category: 'education',
  classification: 'Student Organization',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/stc-logo.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/stc-logo.jpg',
        color: '#1e40af'
      }
    ]
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://stciitphybrid.in',
  },
  other: {
    'msapplication-TileColor': '#2563eb',
    'msapplication-TileImage': '/images/stc-logo.jpg',
    'theme-color': '#2563eb',
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
    name: 'STC IITP - Student Technical Council for Hybrid Programs IIT Patna',
    alternateName: ['STC IITP', 'STC Hybrid', 'Student Technical Council Hybrid', 'Student Technical Council IITP'],
    description: 'Official Student Technical Council IIT Patna Hybrid Programs offering technical excellence through DISHA, ARTHNITI, and TATVA wings.',
    url: 'https://stciitphybrid.in',
    logo: 'https://stciitphybrid.in/images/stc.jpg',
    image: 'https://stciitphybrid.in/images/stc.jpg',
    email: 'stciitphybrid@iitp.ac.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bihta',
      addressRegion: 'Bihar',
      addressCountry: 'India',
      postalCode: '801106',
      streetAddress: 'Indian Institute of Technology Patna'
    },
    parentOrganization: {
      '@type': 'EducationalOrganization',
      name: 'Indian Institute of Technology Patna',
      url: 'https://www.iitp.ac.in',
      sameAs: 'https://en.wikipedia.org/wiki/Indian_Institute_of_Technology_Patna'
    },
    department: [
      {
        '@type': 'Organization',
        name: 'DISHA',
        description: 'Career Growth & Training Cell - Empowering students with skills and professional development',
        url: 'https://stciitphybrid.in/wings/disha'
      },
      {
        '@type': 'Organization',
        name: 'ARTHNITI',
        description: 'Entrepreneurship & Innovation Cell - Supporting startup culture and innovation',
        url: 'https://stciitphybrid.in/wings/arthniti'
      },
      {
        '@type': 'Organization',
        name: 'TATVA',
        description: 'Technology & Research Cell - Promoting technical expertise and research',
        url: 'https://stciitphybrid.in/wings/tatva'
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/stc-iitp-hybrid-programs",
      "https://www.instagram.com/stc_iitp_cet",
    ],
    mainEntity: [
      {
        '@type': 'WebPage',
        name: 'About STC IITP',
        url: 'https://stciitphybrid.in/about',
        description: 'Learn about Student Technical Council for hybrid programs IIT Patna'
      },
      {
        '@type': 'WebPage', 
        name: 'Events',
        url: 'https://stciitphybrid.in/events',
        description: 'Technical events and competitions by STC IITP'
      },
      {
        '@type': 'WebPage',
        name: 'Our Team',
        url: 'https://stciitphybrid.in/team',
        description: 'Meet the STC IITP team members'
      },
      {
        '@type': 'WebPage',
        name: 'Wings',
        url: 'https://stciitphybrid.in/wings',
        description: 'STC IITP wings - DISHA, ARTHNITI, TATVA'
      },
      {
        '@type': 'WebPage',
        name: 'Contact',
        url: 'https://stciitphybrid.in/contact',
        description: 'Contact STC IITP for collaborations and queries'
      }
    ]
  }

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/stc-logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/stc-logo.jpg" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/images/stc-logo.jpg" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <SessionWrapper>
          <VideoTransition>
            <Navigation />
            <AdminNav />
            <main className="min-h-screen">{children}</main>
            <FooterWrapper />
          </VideoTransition>
        </SessionWrapper>
      </body>
    </html>
  )
}
