import productivityAppMockup from "/src/assets/productivityAppMockup.png"

export default function ProductivityApp() {
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
        <div>
          <h2
            className="mb-3 text-center font-poppinsRegular text-3xl
            font-bold leading-3 text-white sm:text-5xl lg:w-[23rem] lg:text-left
            xl:w-[35rem] xl:max-w-none 2xl:w-fit 2xl:text-6xl 2xl:leading-[3rem]"
          >
            App de produtividade
          </h2>
          <p className="text-center text-lg text-white lg:text-left">
            Website personalizado
          </p>
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
        <div
          className="h-52 w-full max-w-sm rounded-3xl bg-slate-800 xl:mr-28
          xl:h-60 xl:max-w-md 2xl:mr-52"
        ></div>
      </div>
    </section>
  )
}
