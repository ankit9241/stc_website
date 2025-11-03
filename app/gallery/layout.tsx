import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Student Technical Council IIT Patna Hybrid Programs',
  description: 'Explore photos and memories from events, workshops, hackathons, and activities organized by the Student Technical Council at IIT Patna Hybrid Programs. Browse our image gallery.',
  keywords: [
    'IIT Patna gallery',
    'STC photos',
    'Student Technical Council IIT Patna Hybrid Programs',
    'event photos',
    'workshop images',
    'hackathon gallery',
    'IIT Patna STC',
    'memories',
    'photo gallery',
  ],
  authors: [{ name: 'IIT Patna Student Technical Council' }],
  creator: 'IIT Patna STC',
  publisher: 'IIT Patna',
  
  openGraph: {
    title: 'Gallery | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Explore photos and memories from events, workshops, and hackathons at IIT Patna. Browse our image gallery.',
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
    title: 'Gallery | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Explore photos and memories from technical events at IIT Patna.',
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
    'page:type': 'gallery',
    'page:section': 'media',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
