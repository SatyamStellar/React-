import Section from "./Section"
import { socials } from "../constants"

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex items-center sm:justify-items-center justify-between gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">© {new Date().getFullYear()}. All Righ Reserve</p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href={item.url}
              target="_blank"
              key={item.id}
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} alt="" />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer
