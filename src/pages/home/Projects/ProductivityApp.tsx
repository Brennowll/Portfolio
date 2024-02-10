import { X, PlayCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useShowDialog } from "./hooks"
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog"
import productivityAppMockup from "/src/assets/productivityAppMockup.png"
import videoProductivityApp from "/src/assets/videoProductivityApp.mp4"

export default function ProductivityApp() {
  const { dialogOpen, toggleDialog } = useShowDialog()

  return (
    <section
      className="z-50 flex flex-col-reverse items-center bg-localBlue
      py-5 lg:flex-row-reverse lg:items-start xl:py-10 2xl:py-5"
    >
      <img
        src={productivityAppMockup}
        alt="Um notebook na tela inicial do ecommerce 'Rimini Boutique'"
        className="w-full max-w-md object-contain lg:max-w-xl xl:max-w-xl 2xl:max-w-[47rem]"
      />
      <div
        className="flex w-full flex-col items-center justify-center
        gap-5 bg-localBlue px-7 py-10 lg:pb-0 lg:pt-10 xl:gap-10 xl:pt-12 2xl:pt-32"
      >
        <div className="flex flex-col items-center lg:items-start">
          <h2
            className="mb-3 text-center font-poppinsRegular text-3xl
            font-bold text-white sm:text-5xl sm:leading-10 lg:w-[23rem] lg:text-left
            xl:w-[35rem] xl:max-w-none 2xl:w-fit 2xl:text-6xl 2xl:leading-[3rem]"
          >
            App de produtividade
          </h2>
          <div className="flex gap-2">
            <p className="text-center text-lg text-white lg:text-left">
              Website personalizado
            </p>{" "}
            <a
              href="https://productivityapp.brennowll.tech/"
              target="_blank"
            >
              <ExternalLink
                color="white"
                className="transition-all hover:h-7 hover:w-7"
              />
            </a>
          </div>
        </div>
        <p
          className="max-w-sm pl-2 text-center font-poppinsRegular text-sm text-white
          sm:text-base lg:text-left xl:max-w-xl xl:text-lg 2xl:max-w-2xl 2xl:text-xl"
        >
          Com a capacidade de armazenar tarefas, anotações e eventos
          em um único espaço, o aplicativo é uma ferramenta para
          impulsionar a eficiência pessoal e profissional. A
          simplicidade na entrada de dados, juntamente com a robustez
          na gestão de informações, oferece aos usuários uma solução
          poderosa para manter-se organizado e atingir metas.
        </p>
        <button
          className="relative flex w-full max-w-sm items-center justify-center overflow-hidden
          rounded-3xl sm:h-52 xl:mr-28 xl:h-60 xl:max-w-md
          2xl:mr-52"
          onClick={toggleDialog}
        >
          <span
            className="absolute left-0 h-full w-full rounded-3xl bg-black
            opacity-40"
          ></span>
          <PlayCircle className="absolute h-10 w-10" color="white" />
          <video
            src={videoProductivityApp}
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
              <source src={videoProductivityApp} type="video/mp4" />
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
