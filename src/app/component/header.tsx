import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/images/ma-logo.jpg"
export default function Navbar () {

    return (
        <div>
            <header className="text-indigo-300 body-font">
          <div className="container mx-auto pl-5 flex flex-flex wrap flex-col md:flex-row item-center bg-black">
            <a className="flex title-font font-medium items-center text-indigo-300 mb-4 md:mb-0">

              <Image src={Logo} alt="ma" width={100} height={100}></Image>
              <span className="ml-3 text-2xl">Frontend Developer</span>
            </a>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-enter">
              <Link href="/" className="mr-10 hover:text-indigo-500">Home</Link>
              <Link href="/about" className="mr-10 hover:text-indigo-500">About</Link>
              <Link href="/skills" className="mr-10 hover:text-indigo-500">Skills</Link>
              <Link href="/contact" className="mr-20 hover:text-indigo-500">Contact</Link>
              </nav>
        </div>
            </header>
        </div>
    )}

  

