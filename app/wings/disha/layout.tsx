import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DISHA - Career Growth Wing",
  description: "DISHA - Official Career Growth & Training Wing of STC IITP. Join DISHA STC for career development, placement preparation, and professional training at Student Technical Council IIT Patna Hybrid.",
  keywords: [
    "DISHA STC",
    "DISHA STC IITP", 
    "DISHA wing",
    "career growth STC",
    "placement preparation STC",
    "training wing IITP",
    "career development IIT Patna",
    "professional training IITP",
    "job placement STC",
    "career guidance STC IITP",
    "Student Technical Council career",
    "STC IITP career wing",
    "placement cell IITP",
    "career counseling STC",
    "professional development IITP"
  ],
  openGraph: {
    title: "DISHA - Career Growth Wing",
    description: "Join DISHA, the career growth wing of STC IITP for placement preparation, professional training, and career development.",
    images: ['/images/disha-logo.png', '/images/stc.jpg'],
  },
  twitter: {
    title: "DISHA - Career Growth Wing | STC IITP", 
    description: "Join DISHA, the career growth wing of STC IITP for placement preparation, professional training, and career development.",
  },
}

export default function DishaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}