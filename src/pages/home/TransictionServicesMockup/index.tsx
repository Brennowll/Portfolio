import servicesMockup from "/src/assets/servicesMockup.png"

export default function TransictionServicesMockup() {
  return (
    <div className="flex items-center justify-center lg:hidden">
      <img
        src={servicesMockup}
        alt="Um notebook na página principal do website 'Productivity App'."
        className="right-0 z-10 max-w-80 py-14 sm:max-w-sm"
      />
    </div>
  )
}
