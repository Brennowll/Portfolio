import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import introductionMockup from "/src/assets/introductionMockup.png"

const useNav = () => {
  const useNavConstructor = (id: string) => {
    const ref = useRef<HTMLElement | null>(null)

    useEffect(() => {
      ref.current = document.querySelector(id)
    }, [id])

    const handleClick = () => {
      ref.current?.scrollIntoView({ behavior: "smooth" })
    }

    return handleClick
  }

  const navToServicePage = useNavConstructor("#servicesPage")
  const navToAboutPage = useNavConstructor("#aboutPage")
  const navToProjectPage = useNavConstructor("#projectPage")
  const navToContactPage = useNavConstructor("#contactPage")

  return {
    navToServicePage,
    navToAboutPage,
    navToProjectPage,
    navToContactPage,
  }
}

export default function Introduction() {
  const {
    navToServicePage,
    navToAboutPage,
    navToProjectPage,
    navToContactPage,
  } = useNav()

  return (
    <section
      className="flex flex-col gap-4 px-4 pb-5 sm:px-8 sm:pb-10 lg:mb-28
      lg:gap-14 lg:px-12 lg:py-10 xl:px-16 2xl:px-24 2xl:py-14"
    >
      <header
        className="flex h-24 flex-row items-center justify-between p-0 sm:h-1/6
        sm:py-10 lg:h-1/5 lg:p-0"
      >
        <div
          className="border-l-4 border-localBlue pl-2 font-montserratRegular text-2xl
          leading-6 sm:text-3xl sm:leading-7 lg:text-4xl lg:leading-8"
        >
          Brenno <br /> Bomtempo
        </div>
        <nav className="flex flex-row gap-1 lg:gap-7">
          <Button
            variant={"link"}
            className="text-md hidden font-montserratRegular lg:block lg:text-xl"
            onClick={navToServicePage}
          >
            SERVIÇOS
          </Button>
          <Button
            variant={"link"}
            className="text-md hidden font-montserratRegular lg:block lg:text-xl"
            onClick={navToAboutPage}
          >
            QUEM SOU
          </Button>
          <Button
            variant={"link"}
            className="text-md hidden font-montserratRegular sm:block lg:text-xl"
            onClick={navToProjectPage}
          >
            PROJETOS
          </Button>
          <Button
            className="sm:text-md rounded-none bg-localBlue
            font-montserratRegular text-sm lg:text-xl"
            onClick={navToContactPage}
          >
            FALE COMIGO
          </Button>
        </nav>
      </header>
      <main
        className="relative flex h-4/5 flex-col gap-10 sm:gap-14 sm:align-baseline lg:items-start
        lg:gap-24"
      >
        <div className="flex flex-col gap-2 sm:gap-5">
          <h2
            className="z-10 text-center font-archive text-5xl leading-tight
            sm:text-7xl lg:text-left 2xl:text-8xl"
          >
            WEBSITES MODERNOS
            <br />E ESCALÁVEIS
          </h2>
          <p className="z-10 text-center text-lg leading-6 sm:text-2xl sm:leading-7 lg:text-left 2xl:text-4xl">
            Melhore o alcance e evolua seu negócio
            <br />
            utilizando as melhores ferramentas
            <br />
            de desenvolvimento do mercado.
          </p>
        </div>
        <Button
          className="w-fit self-center rounded-none bg-localBlue px-10 py-4
          font-montserratRegular lg:self-start lg:px-16 lg:py-7 lg:text-xl"
          onClick={navToServicePage}
        >
          QUERO MEU SITE!
        </Button>
        <img
          src={introductionMockup}
          alt="Um celular na página inicial de um aplicativo."
          className="absolute right-0 top-4 z-0 hidden max-w-sm self-center lg:block
          2xl:right-16 2xl:max-w-md"
        />
      </main>
    </section>
  )
}
