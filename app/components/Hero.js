import React from 'react'
import Image from "next/image";
import Link from "next/link"
import bgImage from '../../public/orctalwebbg.jpg'
import weddingOutdoor from '../../public/outdoor_wedding.png'
import party from '../../public/party.png'
import blueBox from '../../public/bluebox.png'
import Header from "./Header";

const Hero = () => {
  return (
    <main>
      <div className='bg-cover bg-center w-full pb-[420px] sm:pb-[330px] xl:pb-[450px]' style={{ backgroundImage: `url(${bgImage.src})` }} id='home'>
        <Header />

        <div className="hidden xl:flex justify-end top-[-200px] right-[-250px] absolute -z-10 sm:z-10">
          <Image
            src={blueBox}
            height={700}
            width={700}
            alt='big square'
          />
        </div>

        <div className='px-[30px] sm:px-0 '>
          <h1 className="text-blue-100 text-4xl xl:text-5xl font-medium tracking-wide text-center leading-normal xl:leading-normal mt-[100px]">
            Turn Occasions into Events,
            <span className="text-blue-400"> Turn <br /> Events </span>
            into Memories
          </h1>

          <div className="flex justify-center mt-[60px]">
            <div className='h-[50px] w-[200px] sm:h-[40px] sm:w-[150px] xl:h-[50px] xl:w-[200px] z-10 bg-blue-950 rounded flex justify-center items-center cursor-pointer hover:shadow-[0_0px_30px_rgba(0,0,255,0.25)]'>
              <p className="text-blue-400">Download</p>
            </div>

            <div className='h-[50px] w-[200px] sm:h-[40px] sm:w-[150px] xl:h-[50px] xl:w-[200px] z-10 bg-blue-400 rounded flex justify-center items-center ml-[30px] hover:shadow-[0_0px_30px_rgba(0,0,255,0.25)]'>
              <Link href='#howitworks' className="text-blue-950">How it works</Link>
            </div>
          </div>
        </div>

        <div className="top-[380px] left-[-370px] sm:top-[220px] sm:left-[-370px] absolute">
          <Image
            src={party}
            alt='concert'
            className='h-[500px] w-[500px] sm:h-[500px] sm:w-[500px] xl:h-[700px] xl:w-[700px]'
          />
        </div>

        <div className="flex justify-end mt-[30px] -right-[140px] sm:mt-[30px] xl:mt-[100px] sm:right-[-40px] absolute">
          <Image
            src={weddingOutdoor}
            alt='outdoor wedding'
            className='h-[300px] w-[300px] sm:h-[250px] sm:w-[250px] xl:h-[400px] xl:w-[400px]'
          />
        </div>
      </div>


    </main>
  )
}

export default Hero