import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Hub - General Technology Club | Student Technical Council IIT Patna Hybrid Programs',
  description: 'Tech Hub is the general technology club under Tatva wing of STC at IIT Patna. Explore diverse tech domains, workshops, and innovative projects.',
  keywords: [
    'Tech Hub',
    'technology club',
    'Student Technical Council IIT Patna Hybrid Programs',
    'Tatva',
    'tech workshops',
    'innovation',
    'technology events',
    'IIT Patna STC',
    'tech community',
  ],
  authors: [{ name: 'IIT Patna Student Technical Council' }],
  creator: 'IIT Patna STC',
  publisher: 'IIT Patna',
  
  openGraph: {
    title: 'Tech Hub - General Technology Club | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Tech Hub - Explore diverse technology domains and innovative projects at IIT Patna.',
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
    title: 'Tech Hub - General Technology Club | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Explore diverse tech domains at IIT Patna.',
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
    'page:type': 'club',
    'page:section': 'tatva-tech-hub',
  },
}

export default function TechHubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
