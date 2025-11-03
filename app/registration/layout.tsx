import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration Forms | Student Technical Council IIT Patna Hybrid Programs',
  description: 'Register for upcoming events, workshops, hackathons, and competitions at IIT Patna. View all active registration forms and sign up for exciting technical activities organized by STC.',
  keywords: [
    'IIT Patna registration',
    'event registration',
    'Student Technical Council IIT Patna Hybrid Programs',
    'workshop registration',
    'hackathon registration',
    'competition registration',
    'IIT Patna STC',
    'sign up',
    'event forms',
  ],
  authors: [{ name: 'IIT Patna Student Technical Council' }],
  creator: 'IIT Patna STC',
  publisher: 'IIT Patna',
  
  openGraph: {
    title: 'Registration Forms | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Register for upcoming events, workshops, hackathons, and competitions at IIT Patna. View all active registration forms.',
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
    title: 'Registration Forms | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Register for upcoming events, workshops, and hackathons at IIT Patna.',
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
    'page:type': 'registration',
    'page:section': 'forms',
  },
}

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
