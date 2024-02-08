import { X, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useShowDialog } from "./hooks"
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog"
import ecommerceMockup from "/src/assets/ecommerceMockup.png"
import videoEcommerce from "/src/assets/videoEcommerce.mp4"

export default function Ecommerce() {
  const { dialogOpen, toggleDialog } = useShowDialog()

  return (
    <section
      id="projectPage"
      className="z-50 flex flex-col-reverse items-center bg-localBeige
    pb-5 lg:flex-row lg:items-start xl:mt-44 2xl:mt-32"
    >
      <img
        src={ecommerceMockup}
        alt="Um notebook na tela inicial do ecommerce 'Rimini Boutique'"
        className="w-full max-w-md object-contain lg:max-w-xl xl:max-w-3xl 2xl:max-w-[60rem]"
      />
      <div
        className="flex w-full flex-col items-center justify-center
        gap-5 bg-localBeige px-7 py-10 lg:pb-0 lg:pt-10 xl:gap-10 xl:px-0 xl:pt-20 2xl:pt-32"
      >
        <div>
          <h2
            className="mb-2 text-center font-poppinsRegular text-3xl font-bold
            leading-3 sm:mb-0 sm:text-5xl lg:text-left xl:w-[28rem] 
            xl:max-w-none 2xl:w-fit 2xl:text-6xl 2xl:leading-[3rem]"
          >
            Rimini Boutique
          </h2>
          <p className="text-center text-lg lg:text-left">
            Comércio eletrônico
          </p>
        </div>
        <p
          className="max-w-sm pl-2 text-center font-poppinsRegular text-sm
            sm:text-base lg:text-left xl:max-w-md xl:p-0 xl:text-lg 2xl:text-xl"
        >
          Desenvolvi e lidero um projeto de e-commerce de roupas
          femininas, onde a elegância e a funcionalidade se encontram.
          Desde a implementação de um catálogo de produtos dinâmico
          até a integração segura de sistemas de pagamento, meu
          trabalho garante uma plataforma confiável para nossos
          clientes.
        </p>
        <button
          className="relative flex w-full max-w-sm items-center justify-center
          overflow-hidden rounded-3xl sm:h-52 lg:h-44 xl:h-60 xl:w-full
          xl:max-w-md xl:p-0"
          onClick={toggleDialog}
        >
          <span
            className="absolute left-0 h-full w-full rounded-3xl bg-black
            opacity-40"
          ></span>
          <PlayCircle className="absolute h-10 w-10" color="white" />
          <video
            src={videoEcommerce}
            className="self-start rounded-3xl"
          ></video>
        </button>
        <Dialog open={dialogOpen}>
          <DialogContent className="max-w-5xl border-0 bg-localBlue">
            <video
              controls
              autoPlay
              muted
              loop
              className="rounded-lg"
            >
              <source src={videoEcommerce} type="video/mp4" />
            </video>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                onClick={toggleDialog}
              >
                <X />
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
