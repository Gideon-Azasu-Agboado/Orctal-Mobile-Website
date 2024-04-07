import React from 'react'
import Image from "next/image";
import bgImage from '../../public/web1copy.jpg'
import downloadSvg from '../../public/downloadSvg.png'
import formSvg from '../../public/formSvg.png'
import connectSvg from '../../public/connectSvg.png'
import Link from 'next/link';

const HowItWorks = () => {
    return (
        <main>
            <div className='bg-cover bg-center w-full' style={{ backgroundImage: `url(${bgImage.src})` }} id='howitworks'>
                <div className='max-w-[1440px] m-auto md:px-6 py-[100px] xl:py-[180px] p-[20px] xl:p-0'>
                    <h1 className='text-center text-3xl sm:text-2xl xl:text-3xl text-blue-300'>
                        How It Works
                    </h1>

                    <div className='flex flex-col sm:flex-row mt-[50px] xl:mt-[150px] justify-between sm:justify-evenly xl:justify-between flex-wrap'>
                        <div className='group w-full sm:w-[50%] xl:w-[30%] mt-[50px] sm:mt-0 bg-gradient-to-br from-[#0b031c] to-[#1d0f3b] ease-in rounded-2xl p-10 hover:-translate-y-16 duration-150'>
                            <div className='w-full h-[250px] xl:h-[300px] bg-slate-950 group-hover:bg-gradient-to-b from-slate-950 to-slate-900 rounded-2xl flex justify-center items-center'>
                                <Image
                                    src={downloadSvg}
                                    alt='downloadSvg'
                                    className='h-[70%] w-[70%]'
                                />
                            </div>
                            <h1 className='text-blue-600 text-2xl sm:text-xl xl:text-2xl mt-[50px]'>
                                Download App
                            </h1>

                            <p className='text-blue-300 pt-[25px] pb-[50px]'>
                                <Link href='#' className='text-blue-500'>Scroll</Link> to the download section of this page to download the mobile app
                            </p>
                        </div>

                        <div className='group w-full sm:w-[50%] xl:w-[30%] mt-[50px] sm:mt-0 bg-gradient-to-br from-[#1d0f3b] to-[#0b031c] ease-in rounded-2xl p-10 hover:-translate-y-16 duration-150'>
                            <h1 className='text-blue-600 text-2xl sm:text-xl xl:text-2xl mt-[50px]'>
                                Register Account
                            </h1>

                            <p className='text-blue-300 pt-[25px] pb-[50px]'>
                                After downloading and installing app, launch it and register an account with us
                            </p>
                            <div className='w-full h-[250px] xl:h-[300px] bg-slate-950 group-hover:bg-gradient-to-b from-slate-950 to-slate-900 rounded-2xl flex justify-center items-center'>
                                <Image
                                    src={formSvg}
                                    alt='downloadSvg'
                                    className='h-[90%] w-[90%]'
                                />
                            </div>
                        </div>

                        <div className='group w-full sm:w-[50%] xl:w-[30%] sm:mt-0 bg-gradient-to-br from-[#0b031c] to-[#1d0f3b] rounded-2xl p-10 hover:-translate-y-16 duration-150 ease-in'>
                            <div className='w-full h-[250px] xl:h-[300px] bg-slate-950 rounded-2xl group-hover:bg-gradient-to-b from-slate-950 to-slate-900 flex justify-center items-center'>
                                <Image
                                    src={connectSvg}
                                    alt='downloadSvg'
                                    className='h-[90%] w-[90%]'
                                />
                            </div>
                            <h1 className='text-blue-600 text-2xl sm:text-xl xl:text-2xl mt-[50px]'>
                                Connect with others
                            </h1>

                            <p className='text-blue-300 pt-[25px] pb-[50px]'>
                                Now, you are ready to go. Enjoy our app. The app is designed for event centers, event planners and event booker
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HowItWorks