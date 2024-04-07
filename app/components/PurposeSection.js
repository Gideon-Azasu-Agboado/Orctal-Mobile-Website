import React from 'react'
import Image from "next/image";
import star from '../../public/star.png'

const PurposeSection = () => {
    return (
        <main>
            <div className='bg-cover bg-center sm:px-6 w-full bg-gradient-to-br from-blue-100 to-blue-300' id='purpose'>
                <div className='flex flex-col sm:flex-row justify-center items-center  pt-[100px] xl:pt-[160px] px-[20px]'>
                    <h1 className='text-center text-3xl sm:text-2xl xl:text-3xl text-blue-800'>
                        Anchoring Your Event Journey
                    </h1>
                    <Image
                        src={star}
                        alt='concert'
                        className='h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] xl:h-[70px] xl:w-[70px] mt-5 sm:mt-0 sm:ml-7'
                    />
                </div>

                <div className='flex flex-col xl:flex-row p-[20px] sm:p-0 max-w-[1440px] m-auto'>
                    <div className=' w-full xl:w-[30%] h-auto mt-[50px] xl:mt-0 flex items-center justify-center xl:justify-normal'>
                        <div>
                            <div className='flex flow-row'>
                                <div className='h-[40px] w-[190px] bg-blue-700 text-xl rounded-3xl flex justify-center items-center'>
                                    <p className='text-slate-200'>Introducing</p>
                                </div>

                                <div className='h-[40px] w-[70px] bg-blue-900 rounded-2xl ml-[30px]'>
                                </div>
                            </div>

                            <div className=' w-[290px] bg-blue-900  rounded-3xl p-[30px] pt-[50px] mt-[30px]'>
                                <p className='text-slate-300 leading-relaxed'>
                                    <span className='text-2xl text-blue-600 pr-[10px]'>
                                        Orctal
                                    </span>to revolutionize event planning and venue booking by creating seamless
                                    connections between event centers, planners, and clients
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full xl:w-[70%] h-auto mt-[70px] mb-[70px] xl:mt-[170px] xl:mb-[170px] flex items-center xl:justify-end'>
                        <div className='sm:block pt-[50px] sm:pt-[80px] pb-[50px] w-full xl:w-[80%] bg-blue-300 rounded-3xl shadow-[0_0px_130px_13px_rgba(214,207,232,0.11)]'>
                            <div className='bg-[#0c041e] p-[30px] w-full sm:w-[62%] rounded-3xl shadow-[0_0px_130px_13px_rgba(122,87,214,0.11)] mt-[50px] xl:ml-[-230px]'>
                                <div className='flex flex-row items-center '>
                                    <div className='h-[15px] w-[15px] bg-blue-800 rounded-full' />
                                    <h1 className='text-slate-200 text-[16px] pl-[30px]'>
                                        Mission
                                    </h1>
                                </div>

                                <div className='flex flex-row mt-[15px]'>
                                    <div className='w-[6px] bg-blue-800 rounded-full ml-[6px]' />
                                    <p className='text-slate-300 leading-snug py-[15px] text-sm pl-[35px]'>
                                        To be the go-to hub for event professionals and enthusiasts, fostering collaboration, creativity, and successful events.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-[#0c041e] p-[30px] w-full sm:w-[62%] rounded-3xl shadow-[10px_10px_25px_10px_rgba(0,0,1,0.51)] mt-[50px] sm:ml-[230px]'>
                                <div className='flex flex-row items-center '>
                                    <div className='h-[15px] w-[15px] bg-blue-800 rounded-full' />
                                    <h1 className='text-slate-200 text-[16px] pl-[30px]'>
                                        Mission
                                    </h1>
                                </div>

                                <div className='flex flex-row mt-[15px]'>
                                    <div className='w-[6px] bg-blue-800 rounded-full ml-[6px]' />
                                    <p className='text-slate-300 leading-snug text-sm py-[15px] pl-[35px]'>
                                        To democratize event planning expertise and access to top-notch venues.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-[#0c041e] p-[30px] w-full sm:w-[62%] rounded-3xl shadow-[0_0px_130px_13px_rgba(122,87,214,0.11)] mt-[50px] xl:ml-[-120px]'>
                                <div className='flex flex-row items-center '>
                                    <div className='h-[15px] w-[15px] bg-blue-800 rounded-full' />
                                    <h1 className='text-slate-200 text-[16px] pl-[30px]'>
                                        Mission
                                    </h1>
                                </div>

                                <div className='flex flex-row mt-[15px]'>
                                    <div className='w-[6px] bg-blue-800 rounded-full ml-[6px]' />
                                    <p className='text-slate-300 leading-snug text-sm py-[15px] pl-[35px]'>
                                        To build lasting relationships within the event ecosystem, among event centers, planners, and clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default PurposeSection