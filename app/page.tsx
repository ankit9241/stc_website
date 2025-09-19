import { HeroSection } from "@/components/hero-section"
import { NoticesSection } from "@/components/notices-section"
import StatsSection from "@/components/stats-section"
import WingsSection from "@/components/WingsSection"
import CoreValues from "@/components/coreValues"
import FaQ from "@/components/FaQ"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "STC IITP | Student Technical Council IIT Patna Hybrid Programs",
  description: "STC IITP - Official Student Technical Council IIT Patna Hybrid Programs. Join STC Hybrid for technical excellence through DISHA, ARTHNITI, and TATVA wings. Student Technical Council IITP empowering innovation.",
  keywords: [
    "STC IITP",
    "STC IIT Patna",
    "STC Hybrid", 
    "Student Technical Council",
    "Student Technical Council IIT Patna",
    "Student Technical Council Hybrid",
    "Student Technical Council IITP"
  ],
  openGraph: {
    title: "STC IITP | Student Technical Council IIT Patna Hybrid Programs",
    description: "Official Student Technical Council IIT Patna Hybrid Programs. Technical excellence and innovation through our specialized wings.",
    images: ['/images/stc.jpg'],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* SEO-optimized hidden headings for better search indexing */}
      <h1 className="sr-only">STC IITP - Student Technical Council IIT Patna Hybrid Programs</h1>
      <h2 className="sr-only">STC Hybrid - Technical Excellence and Innovation Hub</h2>
      <h3 className="sr-only">Student Technical Council IITP Wings: DISHA Career Growth, ARTHNITI Entrepreneurship, TATVA Research</h3>
      <h3 className="sr-only">Best Student Technical Council in IIT Patna for Career Development</h3>
      <h3 className="sr-only">STC IITP Events, Competitions, and Technical Workshops</h3>
      <div className="sr-only">
        <p>STC IITP is the premier student technical council at IIT Patna, offering comprehensive hybrid programs for career growth, entrepreneurship, and technical innovation through our three specialized wings.</p>
      </div>
      
      <HeroSection />
      <StatsSection/>
      <WingsSection/>
      <CoreValues/>
      <NoticesSection />
      <FaQ/>
    </div>
  )
}
