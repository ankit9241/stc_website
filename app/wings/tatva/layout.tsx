import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TATVA - Technology & Research Wing",
  description: "TATVA - Official Technology & Research Wing of STC IITP. Join TATVA STC for web development, robotics, AI/ML, and technical research at Student Technical Council IIT Patna Hybrid.",
  keywords: [
    "TATVA STC",
    "TATVA STC IITP",
    "TATVA wing", 
    "technology wing STC",
    "research wing IITP",
    "web development STC",
    "robotics STC IITP",
    "AI ML STC",
    "technical research IITP",
    "coding club STC",
    "Student Technical Council technology",
    "STC IITP tech wing",
    "programming club IITP",
    "technical projects STC",
    "innovation lab IITP",
    "WebWiser STC",
    "Mech-X robotics"
  ],
  openGraph: {
    title: "TATVA - Technology & Research Wing",
    description: "Join TATVA, the technology wing of STC IITP for web development, robotics, AI/ML, and cutting-edge technical research.",
    images: ['/images/tatva.svg', '/images/stc.jpg'],
  },
  twitter: {
    title: "TATVA - Technology & Research Wing | STC IITP",
    description: "Join TATVA, the technology wing of STC IITP for web development, robotics, AI/ML, and cutting-edge technical research.",
  },
}

export default function TatvaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}