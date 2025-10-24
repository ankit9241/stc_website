import { Metadata } from 'next'

interface RegistrationForm {
  _id: string
  title: string
  content: string
  image?: string
  eventAt: string
  uploadedBy: string
  createdAt: string
  moreField?: string
}

async function getFormData(id: string): Promise<RegistrationForm | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/admin/registration?id=${id}`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      return null
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching form data for metadata:', error)
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const formData = await getFormData(id)

  if (!formData) {
    return {
      title: 'Registration Not Found | IIT Patna Student Technical Council',
      description: 'The registration form you are looking for could not be found.',
    }
  }

  const title = `${formData.title} - Registration | IIT Patna STC`
  const description = formData.content.slice(0, 160) || `Register for ${formData.title} organized by the Student Technical Council, IIT Patna.`

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const imageUrl = formData.image?.startsWith('http') 
    ? formData.image 
    : `${baseUrl}${formData.image || '/placeholder.jpg'}`

  return {
    title,
    description,
    keywords: [
      'IIT Patna',
      'Student Technical Council',
      'STC',
      'registration',
      'event registration',
      formData.title,
      'technical events',
      'college events',
      'IIT Patna events',
    ],
    authors: [{ name: 'IIT Patna Student Technical Council' }],
    creator: 'IIT Patna STC',
    publisher: 'IIT Patna',
    
    openGraph: {
      title,
      description,
      url: `${baseUrl}/registration/${id}`,
      siteName: 'IIT Patna Student Technical Council',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: formData.title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
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

    alternates: {
      canonical: `${baseUrl}/registration/${id}`,
    },

    other: {
      'event:name': formData.title,
      'event:date': formData.eventAt,
      'event:organizer': formData.uploadedBy,
    },
  }
}

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
