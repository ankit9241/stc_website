import { HeroSection } from "@/components/hero-section"
import { NoticesSection } from "@/components/notices-section"
import StatsSection from "@/components/stats-section"
import WingsSection from "@/components/WingsSection"
import CoreValues from "@/components/coreValues"
import FaQ from "@/components/FaQ"
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection/>
      <WingsSection/>
      <CoreValues/>
      <NoticesSection />
      <FaQ/>
    </div>
  )
}
