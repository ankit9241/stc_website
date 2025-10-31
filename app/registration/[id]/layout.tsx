import { Metadata } from 'next'

interface RegistrationForm {
  _id: string
  name: string
  slug: string
  description?: string
  image?: string
  active: boolean
  createdAt: string
}

async function getFormData(id: string): Promise<RegistrationForm | null> {
  try {
    const baseURL = process.env.NEXTAUTH_URL;
    const response = await fetch(`${baseURL}/api/registration/${id}`, {
      cache: 'no-store',
      next: { revalidate: 0 }
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

  const title = `${formData.name} - Registration | IIT Patna STC`
  const description = formData.description?.slice(0, 160) || `Register for ${formData.name} organized by the Student Technical Council, IIT Patna.`

  const imageUrl = formData.image || '/placeholder.jpg'

  return {
    title,
    description,
    keywords: [
      'IIT Patna',
      'Student Technical Council',
      'STC',
      'registration',
      'event registration',
      formData.name,
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
      siteName: 'IIT Patna Student Technical Council',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: formData.name,
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

    other: {
      'registration:name': formData.name,
      'registration:slug': formData.slug,
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
