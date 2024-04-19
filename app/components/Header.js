'use client'

import React, { useState } from 'react'
import Image from "next/image";
import OrctalLogo from '../../public/Orctal logo.png'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Header = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='ease-in duration-300 sm:py-[80px] py-[50px]'>
            <div className='lg:block hidden'>
                <div className=" max-w-[1440px] m-auto flex items-center">
                    <Link href='/' className=" items-center flex flex-row w-[150px] justify-between">
                        <div>
                            <Image
                                src={OrctalLogo}
                                width={80}
                                height={80}
                            />
                        </div>
                        <h1 className='text-slate-100 text-2xl'>
                            Orctal
                        </h1>
                    </Link>

                    <ul className='flex flex-row justify-between w-[30%] ml-[400px]'>
                        <li className='text-blue-300 hover:text-blue-500 hover:scale-125 duration-100 ease-in'>
                            <Link href='#home'>Home</Link>
                        </li>
                        <li className='text-blue-300 hover:text-blue-500 hover:scale-125 duration-100 ease-in'>
                            <Link href='#howitworks'>How it works</Link>
                        </li>
                        <li className='text-blue-300 hover:text-blue-500 hover:scale-125 duration-100 ease-in'>
                            <Link href='#download'>Downloads</Link>
                        </li>
                        <li className='text-blue-300 hover:text-blue-500 hover:scale-125 duration-100 ease-in'>
                            <Link href='#purpose'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>


            {/* for mobile */}

            <div className='lg:hidden'>
                <div className="flex flex-row px-[20px] justify-between items-center">
                    <Link href='/' className=" items-center flex flex-row w-[125px] justify-between">
                        <div>
                            <Image
                                src={OrctalLogo}
                                width={65}
                                height={65}
                            />
                        </div>
                        <h1 className='text-slate-100 text-[20px]'>
                            Orctal
                        </h1>
                    </Link>

                    {
                        show
                            ?
                            <AiOutlineClose size={24} color='#1d4ed8' onClick={() => setShow(!show)} />
                            :
                            <AiOutlineMenu size={26} color='#1d4ed8' onClick={() => setShow(!show)} />

                    }
                </div>


                <div className={
                    show
                        ?
                        `flex justify-center absolute left-0 right-0 opacity-1 duration-100 ease-in`
                        :
                        `flex justify-center absolute left-0 right-0 opacity-0 duration-100 ease-in`
                }>
                    <div className='bg-blue-950 w-full p-[30px] rounded-2xl mx-[10px] mt-[15px] flex justify-center'>
                        <ul className=''>
                            <li className='text-blue-300 hover:text-blue-500 hover:scale-125 duration-100 ease-in py-2'>
                            <Link href='#home' onMouseDown={() => setShow(false)}>Home</Link>
                            </li>
                            <li className='text-blue-300 hover:text-blue-500 hover:scale-125 duration-100 ease-in py-2'>
                            <Link href='#howitworks' onMouseDown={() => setShow(false)}>How it works</Link>
                            </li>
                            <li className='text-blue-300 hover:text-blue-500 hover:scale-125 duration-100 ease-in py-2'>
                            <Link href='#download' onMouseDown={() => setShow(false)}>Downloads</Link>
                            </li>
                            <li className='text-blue-300 hover:text-blue-500 hover:scale-125 duration-100 ease-in py-2'>
                            <Link href='#purpose' onMouseDown={() => setShow(false)}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header