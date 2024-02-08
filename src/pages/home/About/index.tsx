import aboutBackground from "/src/assets/aboutBackground.png"

export default function About() {
  return (
    <div id="aboutPage" className="relative mt-10 flex w-full lg:m-0">
      <img
        src={aboutBackground}
        alt=""
        className="absolute bottom-[50rem] z-0 w-full sm:bottom-[40rem]
        lg:bottom-0 xl:-bottom-44 2xl:-bottom-32"
      />
      <section
        className="z-10 flex w-full flex-col items-center justify-between
        bg-localBlue pb-5 sm:pb-10 sm:pt-10 lg:flex-row lg:items-start
        lg:bg-transparent lg:pb-40 lg:pl-12 lg:pt-20 xl:pb-10 xl:pl-16 xl:pt-32
        2xl:py-44 2xl:pl-24"
      >
        <div
          className="flex max-w-lg flex-col gap-7 px-4 sm:max-w-2xl sm:px-8 lg:px-0 
          2xl:max-w-3xl 2xl:gap-14"
        >
          <h2
            className="text-center font-montserratRegular text-4xl font-bold
            leading-tight text-white sm:text-6xl lg:text-left 2xl:text-7xl"
          >
            Brenno <br /> Bomtempo
          </h2>
          <p
            className="text-center font-poppinsRegular text-base
            text-white sm:text-lg lg:text-left xl:text-xl 2xl:text-2xl"
          >
            Olá, sou <b>“O”</b> desenvolvedor web que você precisa,
            alguém que vai impulsionar o seu sucesso digital
            entendendo suas necessidades e colocando-as em prática da
            melhor maneira possível.
          </p>
          <p
            className="text-center font-poppinsRegular text-base text-white
            sm:text-lg lg:text-left xl:text-xl 2xl:text-2xl"
          >
            Não crio apenas sites, mas sim oportunidades para que
            empreendedores e marcas se destaquem, alcancem novos
            clientes e fortaleçam seus negócios.
          </p>
        </div>
        <div
          className="flex w-full items-center justify-center bg-localBlue pb-14
          pt-32 lg:ml-20 lg:bg-transparent lg:p-0 xl:ml-40"
        >
          <div
            className="h-[21rem] w-60 rounded-3xl bg-zinc-950 xl:h-[28rem]
            xl:w-80"
          >
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
