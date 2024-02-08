import { Mail, MessageCircle, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer
      id="contactPage"
      className="flex flex-col items-center justify-center gap-2 bg-slate-900
      py-16 lg:items-start lg:px-32"
    >
      <div className="flex items-end gap-4">
        <Mail fill="white" />
        <a
          href="mailto:bomtempobrenno@gmail.com"
          target="_blank"
          className="font-montserratRegular text-sm text-white hover:underline
          xl:text-base"
        >
          bomtempobrenno@gmail.com
        </a>
      </div>
      <div className="flex items-end gap-4">
        <MessageCircle fill="white" />
        <a
          href="https://wa.me/5561994148818"
          target="_blank"
          className="font-montserratRegular text-sm text-white hover:underline
          xl:text-base"
        >
          (61) 99414-8818
        </a>
      </div>
      <div className="flex items-end gap-4">
        <Linkedin fill="white" />
        <a
          href="https://linkedin.com/in/brenno-bomtempo/"
          target="_blank"
          className="font-montserratRegular text-sm text-white hover:underline
          xl:text-base"
        >
          linkedin.com/in/brenno-bomtempo/
        </a>
      </div>
      <div className="flex items-end gap-4">
        <Github fill="white" />
        <a
          href="https://github.com/Brennowll"
          target="_blank"
          className="font-montserratRegular text-sm text-white hover:underline
          xl:text-base"
        >
          github.com/Brennowll
        </a>
      </div>
    </footer>
  )
}
