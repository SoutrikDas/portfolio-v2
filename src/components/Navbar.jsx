// import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
// import { FaSquareXTwitter } from "react-icons/fa6"
// import { FaInstagram } from "react-icons/fa"

export const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="text-white">SD</div>
      </div>
      <div className="m-8 flex items-cetner justify-center gap-4 text-2xl">
        {/* <FaLinkedin /> */}
        <a href="https://github.com/SoutrikDas" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        {/* <FaInstagram />
        <FaSquareXTwitter /> */}
      </div>
    </nav>
  )
}
