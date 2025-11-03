import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | Student Technical Council IIT Patna Hybrid Programs',
  description: 'Meet the talented and dedicated team members of the Student Technical Council at IIT Patna Hybrid Programs. Get to know our student leaders, coordinators, and executives driving technical innovation.',
  keywords: [
    'IIT Patna team',
    'STC team',
    'Student Technical Council IIT Patna Hybrid Programs',
    'student council members',
    'technical council team',
    'student leaders',
    'tech coordinators',
    'council members',
    'student executives',
    'IIT Patna STC',
  ],
  authors: [{ name: 'IIT Patna Student Technical Council' }],
  creator: 'IIT Patna STC',
  publisher: 'IIT Patna',
  
  openGraph: {
    title: 'Our Team | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Meet the talented and dedicated team members of the Student Technical Council at IIT Patna. Get to know our student leaders and coordinators.',
    siteName: 'Student Technical Council IIT Patna Hybrid Programs',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Student Technical Council IIT Patna Hybrid Programs.',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Meet the talented team members driving technical innovation at IIT Patna.',
    images: ['/icon.png'],
    creator: '@IITPatna',
    site: '@IITPatna',
  },

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

  other: {
    'page:type': 'team',
    'page:section': 'about',
  },
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
