import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AppIstry - App Development Club | Student Technical Council IIT Patna Hybrid Programs',
  description: 'AppIstry is the app development club under Tatva wing of STC at IIT Patna. Learn mobile app development, iOS, Android, React Native, and Flutter.',
  keywords: [
    'AppIstry',
    'app development',
    'Student Technical Council IIT Patna Hybrid Programs',
    'Tatva',
    'mobile development',
    'iOS development',
    'Android development',
    'React Native',
    'Flutter',
    'IIT Patna STC',
  ],
  authors: [{ name: 'IIT Patna Student Technical Council' }],
  creator: 'IIT Patna STC',
  publisher: 'IIT Patna',
  
  openGraph: {
    title: 'AppIstry - App Development Club | Student Technical Council IIT Patna Hybrid Programs',
    description: 'AppIstry - Learn mobile app development for iOS and Android at IIT Patna.',
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
    title: 'AppIstry - App Development Club | Student Technical Council IIT Patna Hybrid Programs',
    description: 'Learn mobile app development at IIT Patna.',
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
    'page:section': 'tatva-appistry',
  },
}

export default function AppIstryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
