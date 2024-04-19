import React from 'react'
import bgImage from '../../public/orctalwebbg4.jpg'
import OrctalphonemockupCpd from '../../public/OrctalphonemockupCpd.png'
import downloadsIcon from '../../public/icons8-download-48.png'
import Image from 'next/image'

const Downloads = () => {
    return (
        <div className='bg-cover bg-center w-full h-auto' style={{ backgroundImage: `url(${bgImage.src})` }} id='download'>
            <div className='max-w-[1440px] sm:px-6 m-auto flex flex-col xl:flex-row p-[20px] xl:p-0'>
                <div className='w-full flex items-center justify-center'>
                    <div className='relative'>
                        <Image
                            src={OrctalphonemockupCpd}
                            alt='Orctal phone mockup'
                            className='h-[400px] w-[500px] xl:h-[550px] xl:w-[800px] mt-[120px]'
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex justify-center xl:justify-end'>
                        <div className='w-[80%] sm:w-[300px] rounded-xl bg-gradient-to-br from-[#201a30] to-[#0b031c] mt-[70px] p-5'>
                          <Image
                          src={downloadsIcon}
                          alt='Download icon by icons8'
                          className='w=[20px] h-[40px]'
                          />
                          <p className='text-3xl sm:text-4xl xl:text-5xl text-blue-600 pt-7'>
                            50
                          </p>
                          <p className='text-xl text-blue-700 pt-1'>
                            Downloads
                          </p>
                        </div>
                    </div>

                    <div className='xl:pl-[150px] pb-[40px] xl:pb-[270px]'>
                        <h1 className='text-blue-600 text-2xl text-center sm:text-left sm:text-4xl xl:text-5xl pt-[90px] xl:pt-[190px]'>
                            Be A Part Of Us Today!!!
                        </h1>

                        <p className='text-blue-300 text-center sm:text-left pt-[30px] '>
                            Unlock a world of seamless event planning and booking
                            with Orctal. Download now and turn your events into
                            unforgettable experiences
                        </p>

                        <div className='h-[50px] w-[200px] m-auto sm:h-[40px] sm:w-[150px] xl:h-[50px] xl:w-[200px] mt-[30px] bg-blue-950 hover:bg-blue-900 rounded flex justify-center items-center cursor-pointer hover:shadow-[0_0px_30px_rgba(0,0,255,0.25)]'>
                            <p className="text-blue-400">Download App</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Downloads