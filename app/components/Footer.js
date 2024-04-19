import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-cover md:px-10 bg-center w-full h-auto py-[50px] xl:py-[100px] bg-[#0b031c]'>
            <div className='max-w-[1366px] m-auto flex flex-col sm:flex-row p-[20px] sm:p-0'>
                <div className='w-full sm:w-[60%] xl:w-[40%]'>
                    <h1 className='text-xl text-blue-600 pt-7'>
                        About
                    </h1>
                    <p className='text-blue-300 pt-[30px] pr-[50px] xl:pr-[150px]'>
                        To revolutionize event planning and venue booking by creating seamless connections between event centers, planners, and clients
                    </p>
                </div>

                <div className='sm:w-[60%] w-full'>
                    <h1 className='text-xl text-blue-600 pt-7'>
                        Links
                    </h1>
                    <ul className='flex flex-col xl:flex-row justify-between pt-[30px] w-[80%]'>
                        <li className='text-blue-400 hover:text-blue-500 duration-100 ease-in pt-[10px] sm:pt-0'>
                        <Link href='#home'>Home</Link>
                        </li>
                        <li className='text-blue-400 hover:text-blue-500 duration-100 ease-in pt-[10px] sm:pt-0'>
                        <Link href='#howitworks'>How it works</Link>
                        </li>
                        <li className='text-blue-400 hover:text-blue-500 duration-100 ease-in pt-[10px] sm:pt-0'>
                        <Link href='#download'>Downloads</Link>
                        </li>
                        <li className='text-blue-400 hover:text-blue-500 duration-100 ease-in pt-[10px] sm:pt-0'>
                        <Link href='#purpose'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer