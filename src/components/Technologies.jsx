import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di'; // MongoDB icon from react-icons
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
// import geomatica from "../assets/geomatica.png"
// import { ReactComponent as geomaticaSVG } from "../assets/geomatica.svg"
export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl"> Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-blue-800 " />

        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-800 " />

        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-white-800 " />

        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMongodb className="text-7xl text-blue-800 " />

        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoFirebase className="text-7xl text-orange-800 " />

        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-800 " />

        </div>


      </div>
    </div>
  )
}
