import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | Student Technical Council IIT Patna Hybrid Programs',
  description: 'Browse upcoming and past technical events, workshops, hackathons, and competitions organized by the Student Technical Council at IIT Patna Hybrid Programs. View detailed event information and highlights.',
  keywords: [
    'IIT Patna events',
    'STC events',
    'Student Technical Council IIT Patna Hybrid Programs',
    'upcoming events',
    'past events',
    'technical events',
    'workshops IIT Patna',
    'hackathons',
    'student activities',
    'tech events',
    'IIT Patna STC',
    'college events',
    'event highlights',
  ],
  authors: [{ name: 'IIT Patna Student Technical Council' }],
  creator: 'IIT Patna STC',
  publisher: 'IIT Patna',
  
  openGraph: {
    title: 'Events | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Browse upcoming and past technical events, workshops, hackathons, and competitions at IIT Patna. View detailed event information and highlights.',
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
    title: 'Events | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Browse upcoming and past technical events, workshops, and hackathons at IIT Patna.',
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
    'page:type': 'events',
    'page:section': 'events-list',
  },
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}