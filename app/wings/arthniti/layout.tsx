import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ARTHNITI - Entrepreneurship Wing",
  description: "ARTHNITI - Official Entrepreneurship & Innovation Wing of STC IITP. Join ARTHNITI STC for startup ideation, business development, and entrepreneurship at Student Technical Council IIT Patna Hybrid.",
  keywords: [
    "ARTHNITI STC",
    "ARTHNITI STC IITP",
    "ARTHNITI wing",
    "entrepreneurship STC",
    "startup STC IITP",
    "business development STC",
    "innovation wing IITP",
    "entrepreneurship IIT Patna",
    "startup incubation IITP",
    "business club STC",
    "Student Technical Council entrepreneurship",
    "STC IITP entrepreneurship wing",
    "startup ecosystem IIT Patna",
    "business innovation IITP",
    "entrepreneurship cell STC"
  ],
  openGraph: {
    title: "ARTHNITI - Entrepreneurship Wing",
    description: "Join ARTHNITI, the entrepreneurship wing of STC IITP for startup ideation, business development, and innovation.",
    images: ['/images/arthniti-logo.png', '/images/stc.jpg'],
  },
  twitter: {
    title: "ARTHNITI - Entrepreneurship Wing | STC IITP",
    description: "Join ARTHNITI, the entrepreneurship wing of STC IITP for startup ideation, business development, and innovation.",
  },
}

export default function ArthnitiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}