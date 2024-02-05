import servicesMockup from "/src/assets/servicesMockup.png"

export default function Services() {
  return (
    <section
      id="servicesPage"
      className="relative z-10 flex flex-col items-center justify-between gap-6
      px-4 pb-6 sm:gap-10 sm:px-8 sm:pb-12 sm:pt-14 lg:flex-row lg:items-start
      lg:gap-14 lg:px-12 lg:pb-36 xl:px-16 2xl:px-24 2xl:pb-52 2xl:pt-20"
    >
      <h2
        className="font-montserratRegular text-3xl font-bold leading-tight
        sm:text-5xl 2xl:text-6xl"
      >
        SERVIÇOS
      </h2>
      <div
        className="flex max-w-xl flex-col gap-8 pt-5 sm:gap-12 xl:max-w-2xl
        xl:gap-16 2xl:max-w-3xl 2xl:gap-20 2xl:pt-16"
      >
        <article className="relative flex flex-col">
          <div
            className="z-10 flex h-full w-full flex-col items-center rounded-full
            bg-localBlue px-8 py-5"
          >
            <b
              className="text-center font-montserratRegular text-sm text-white
              sm:text-lg xl:text-xl 2xl:text-3xl"
            >
              Comércio eletrônico / Ecommerce:
            </b>
            <p
              className="text-center font-montserratRegular text-sm text-white
              sm:text-lg xl:text-xl 2xl:text-3xl"
            >
              Impulsiona conversão de clientes para compra sem sair de
              casa
            </p>
          </div>
          <span
            className="absolute left-3 top-3 z-0 h-full w-full rounded-full
            bg-slate-300"
          />
        </article>
        <article className="relative flex flex-col">
          <div
            className="z-10 flex h-full w-full flex-col items-center rounded-full
            bg-localBlue px-8 py-5"
          >
            <b
              className="text-center font-montserratRegular text-sm text-white
              sm:text-lg xl:text-xl 2xl:text-3xl"
            >
              Página de exposição / Landing page:
            </b>
            <p
              className="text-center font-montserratRegular text-sm text-white
              sm:text-lg xl:text-xl 2xl:text-3xl"
            >
              Apresenta a marca e sua descrição, convidando o cliente
              a entrar em contato
            </p>
          </div>
          <span
            className="absolute left-3 top-3 z-0 h-full w-full rounded-full
            bg-slate-300"
          />
        </article>
        <article className="relative flex flex-col">
          <div
            className="z-10 flex h-full w-full flex-col items-center rounded-full
            bg-localBlue px-8 py-5"
          >
            <b
              className="text-center font-montserratRegular text-sm text-white
              sm:text-lg xl:text-xl 2xl:text-3xl"
            >
              Websites variados:
            </b>
            <p
              className="text-center font-montserratRegular text-sm text-white
              sm:text-lg xl:text-xl 2xl:text-3xl"
            >
              Sistema de cadastro de clientes/reservas em restaurante,
              portfólio online, blog...
            </p>
          </div>
          <span
            className="absolute left-3 top-3 z-0 h-full w-full rounded-full
            bg-slate-300"
          />
        </article>
      </div>
      <img
        src={servicesMockup}
        alt="Um notebook na página principal do website 'Productivity App'."
        className="left-30 absolute top-40 hidden md:h-[25rem] lg:block
        xl:h-[30rem] 2xl:top-56 2xl:h-[40rem]"
      />
    </section>
  )
}
