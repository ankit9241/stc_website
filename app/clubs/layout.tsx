import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clubs & Communities",
  description: "Discover various clubs and communities under Student Technical Council IIT Patna. Join coding clubs, business clubs, and innovation communities to enhance your skills.",
  keywords: [
    "STC clubs IIT Patna",
    "coding club",
    "business club", 
    "entrepreneurship club",
    "technical communities",
    "student clubs",
    "skill development clubs",
    "innovation communities"
  ],
  openGraph: {
    title: "Clubs & Communities - Student Technical Council IIT Patna",
    description: "Join various clubs and communities to enhance your technical and professional skills at IIT Patna.",
    images: ['/images/stc.jpg'],
  },
  twitter: {
    title: "Clubs & Communities - Student Technical Council IIT Patna", 
    description: "Join various clubs and communities to enhance your technical and professional skills at IIT Patna.",
  },
}

export default function ClubsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}