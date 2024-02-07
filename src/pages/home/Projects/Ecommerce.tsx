import ecommerceMockup from "/src/assets/ecommerceMockup.png"

export default function Ecommerce() {
  return (
    <section
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
        <div
          className="h-52 w-full max-w-sm rounded-3xl bg-slate-800 px-10 lg:h-44
          xl:h-60 xl:w-full xl:max-w-md xl:p-0"
        ></div>
      </div>
    </section>
  )
}
