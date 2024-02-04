import { ScrollArea } from "@/components/ui/scroll-area"
import Introduction from "./Introduction"
import ServicesPage from "./services"
import introductionMockup from "/src/assets/introductionMockup.png"
import servicesMockup from "/src/assets/servicesMockup.png"

export default function HomePage() {
  return (
    <ScrollArea className="h-screen">
      <Introduction />
      <span className="spiky-background hidden h-2 w-[95%] bg-localBlue sm:h-4 lg:block" />
      <div className="flex items-center justify-center py-16 lg:hidden">
        <img
          src={introductionMockup}
          alt="Um celular na página inicial de um aplicativo."
          className="right-0 max-w-60 sm:max-w-sm"
        />
      </div>
      {/* <div className="spiky-background h-2 w-[95%] bg-localBlue sm:h-4" /> */}
      <ServicesPage />
      <div className="flex items-center justify-center lg:hidden">
        <img
          src={servicesMockup}
          alt="Um notebook na página principal do website 'Productivity App'."
          className="right-0 max-w-80 py-14 sm:max-w-sm"
        />
      </div>
    </ScrollArea>
  )
}
