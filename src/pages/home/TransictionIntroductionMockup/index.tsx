import introductionMockup from "/src/assets/introductionMockup.png"

export default function TransictionIntroductionMockup() {
  return (
    <div className="flex items-center justify-center py-16 lg:hidden">
      <img
        src={introductionMockup}
        alt="Um celular na página inicial de um aplicativo."
        className="right-0 max-w-60 sm:max-w-sm"
      />
    </div>
  )
}
