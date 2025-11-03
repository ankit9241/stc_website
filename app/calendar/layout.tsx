import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events Calendar | Student Technical Council IIT Patna Hybrid Programs',
  description: 'View all upcoming technical events, workshops, hackathons, and activities organized by the Student Technical Council at IIT Patna Hybrid Programs. Stay updated with our comprehensive events calendar.',
  keywords: [
    'IIT Patna events',
    'STC calendar',
    'Student Technical Council IIT Patna Hybrid Programs',
    'event calendar',
    'technical events',
    'workshops IIT Patna',
    'hackathons',
    'student activities',
    'tech events calendar',
    'IIT Patna STC',
    'upcoming events',
    'college events',
  ],
  authors: [{ name: 'IIT Patna Student Technical Council' }],
  creator: 'IIT Patna STC',
  publisher: 'IIT Patna',
  
  openGraph: {
    title: 'Events Calendar | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Stay updated with all upcoming technical events, workshops, and activities at IIT Patna. Browse our interactive events calendar.',
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
    'page:type': 'calendar',
    'page:section': 'events',
  },
}

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}