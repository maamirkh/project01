import Image from "next/image";
import Logo from "../../../public/images/ma-logo.jpg"
export default function Footer () {

    return (
        <div>
            <footer className="text-indigo-300 body-font">
        <div className="container px-10 py-4 mx-auto flex items-center sm:flex-row flex-col bg-black">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-indigo-300">
              <Image src={Logo} alt="ma" width={50} height={50}></Image>
            <span className="ml-3 text-lg">Web Developer</span>
          </a>
            <p className="text-sm text-indigo-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                © 2024 copy rights —
            </p>
            
        </div>
            </footer>
        </div>
    )}