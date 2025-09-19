import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact STC IITP - Student Technical Council IIT Patna. Get in touch for inquiries, collaborations, partnerships, and support. Connect with our DISHA, ARTHNITI, and TATVA wings.",
  keywords: [
    "contact STC IITP",
    "STC IITP contact",
    "Student Technical Council contact",
    "IIT Patna contact",
    "STC hybrid contact",
    "reach out STC IITP",
    "connect with STC",
    "IITP student council contact",
    "technical council inquiries",
    "STC IITP email",
    "collaboration STC IITP",
    "partnership STC",
    "support STC IITP"
  ],
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with Student Technical Council IIT Patna for inquiries, collaborations, and partnerships.",
    images: ['/images/stc.jpg'],
    url: '/contact',
  },
  twitter: {
    title: "Contact Us | STC IITP",
    description: "Get in touch with Student Technical Council IIT Patna for inquiries, collaborations, and partnerships.",
    card: 'summary_large_image',
    images: ['/images/stc.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}