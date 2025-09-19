import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clubs & Societies",
  description: "Explore various clubs under STC IITP - Student Technical Council IIT Patna. Join Coding Club, Entrepreneurship Cell, Finance Club, and more. Enhance your skills and career prospects.",
  keywords: [
    "STC IITP clubs",
    "IIT Patna clubs",
    "Student Technical Council clubs",
    "coding club STC IITP",
    "entrepreneurship cell IITP",
    "finance club IIT Patna",
    "technical clubs IITP",
    "STC hybrid clubs",
    "student societies IITP",
    "programming club",
    "startup cell IIT Patna",
    "investment club IITP",
    "tech clubs IIT Patna",
    "student organizations STC",
    "business club IITP",
    "innovation communities IIT Patna"
  ],
  openGraph: {
    title: "Clubs & Societies",
    description: "Discover diverse clubs under Student Technical Council IIT Patna. Join coding, entrepreneurship, finance, and technical clubs to enhance your career.",
    images: ['/images/stc.jpg'],
    url: '/clubs',
  },
  twitter: {
    title: "Clubs & Societies | STC IITP",
    description: "Discover diverse clubs under Student Technical Council IIT Patna. Join coding, entrepreneurship, finance, and technical clubs to enhance your career.",
    card: 'summary_large_image',
    images: ['/images/stc.jpg'],
  },
  alternates: {
    canonical: '/clubs',
  },
}

export default function ClubsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}