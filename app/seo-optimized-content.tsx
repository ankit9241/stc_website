import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "STC IITP - Student Technical Council IIT Patna Hybrid Programs",
  description: "STC IITP official website - Student Technical Council IIT Patna Hybrid Programs. Join STC Hybrid for technical excellence, innovation, and leadership development through DISHA, ARTHNITI, and TATVA wings.",
  keywords: [
    "STC IITP",
    "STC IIT Patna", 
    "STC Hybrid",
    "Student Technical Council",
    "Student Technical Council IIT Patna",
    "Student Technical Council Hybrid",
    "IITP student council",
    "IIT Patna technical council",
    "hybrid programs IIT Patna"
  ],
  openGraph: {
    title: "STC IITP - Student Technical Council IIT Patna Hybrid Programs",
    description: "Official Student Technical Council IIT Patna Hybrid Programs. Technical excellence through innovation.",
  },
}

export default function HomePage() {
  return (
    <div>
      <h1 className="sr-only">STC IITP - Student Technical Council IIT Patna Hybrid Programs</h1>
      <h2 className="sr-only">STC Hybrid - Technical Excellence and Innovation</h2>
      <h3 className="sr-only">Student Technical Council IITP Wings: DISHA, ARTHNITI, TATVA</h3>
      {/* The actual visible content will be rendered by the imported components */}
    </div>
  )
}