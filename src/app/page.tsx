
import Navbar from "./component/header";
import Image from "next/image";
import React from "react";
import HeroPic from "../../public/images/hero1.jpeg"

export default function Home () {

  return (
    <div>

      <section className="text-indigo-500 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-bold text-indigo-900">
              I Am Muhammad Amir
              <br className="hidden lg:inline-block" />
              Frontend Developer
            </h1>
        <div className="w-[100px] h-[2px] bg-indigo-600"></div>
            <p className="mb-8 leading-relaxed">
             Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
              tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
              chambray.
            </p>
      
         </div>
           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded mx-auto w-{15rem}"
            src={HeroPic} alt='hero pic' width={400} height={300}></Image>
          </div>
       </div>
      </section>
   </div>
  )}
