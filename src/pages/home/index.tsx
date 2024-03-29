import { ScrollArea } from "@/components/ui/scroll-area"
import Introduction from "./Introduction"
import Services from "./Services"
import TransictionIntroductionMockup from "./TransictionIntroductionMockup"
import TransictionServicesMockup from "./TransictionServicesMockup"
import SpikyLine from "./SpikyLine"
import About from "./About"
import Projects from "./Projects"
import Footer from "./Footer"

export default function HomePage() {
  return (
    <ScrollArea className="h-screen">
      <Introduction />
      <TransictionIntroductionMockup />
      <SpikyLine />
      <Services />
      <TransictionServicesMockup />
      <About />
      <Projects />
      <Footer />
    </ScrollArea>
  )
}
