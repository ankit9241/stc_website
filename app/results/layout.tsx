import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competition Results | Student Technical Council IIT Patna Hybrid Programs',
  description: 'View results and winners of technical competitions, hackathons, and coding contests organized by the Student Technical Council at IIT Patna Hybrid Programs. Check competition rankings and achievements.',
  keywords: [
    'IIT Patna results',
    'competition results',
    'Student Technical Council IIT Patna Hybrid Programs',
    'hackathon winners',
    'coding contest results',
    'tech competition results',
    'IIT Patna STC',
    'competition rankings',
    'winners list',
  ],
  authors: [{ name: 'IIT Patna Student Technical Council' }],
  creator: 'IIT Patna STC',
  publisher: 'IIT Patna',
  
  openGraph: {
    title: 'Competition Results | Student Technical Council IIT Patna Hybrid Programs',
    description: 'View results and winners of technical competitions, hackathons, and coding contests at IIT Patna. Check competition rankings and achievements.',
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
    title: 'Competition Results | Student Technical Council IIT Patna Hybrid Programs',
    description: 'View results and winners of technical competitions and hackathons at IIT Patna.',
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
    'page:type': 'results',
    'page:section': 'competitions',
  },
}

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
