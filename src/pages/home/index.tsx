import { ScrollArea } from "@/components/ui/scroll-area"
import Introduction from "./Introduction"
import ServicesPage from "./services"

export default function HomePage() {
  return (
    <ScrollArea className="h-screen">
      <Introduction />
      <div className="spiky-background h-2 w-[95%] bg-localBlue sm:h-4" />
      <ServicesPage />
    </ScrollArea>
  )
}
