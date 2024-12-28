import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const links = [
  {
    href: 'https://discord.com', icon: <FaDiscord />
  },
  {
    href: 'https://twitter.com', icon: <FaTwitter />
  },
  {
    href: 'https://github.com/SatyamStellar', icon: <FaGithub />
  },
  {
    href: 'https://instagram.com', icon: <FaInstagram />
  },
]

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container flex mx-auto flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">&copy; Nova 2024. All right reserved</p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a href={link.href} target="_blank" key={index} rel="noopener noreferrer"
              className="text-black transition-colors duration-300 ease-in-out hover:text-white">{link.icon}</a>
          ))}
        </div>
        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer
