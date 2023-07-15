import React from 'react'
import { useState } from 'react'
import { RxTriangleRight } from 'react-icons/rx'
import { RxTriangleDown } from 'react-icons/rx'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {FaWhatsappSquare} from 'react-icons/fa'

const Header = () => {
    const [klik, setKlik] = useState(false)
    return (
        <header className='bg-slate-900/[.9] fixed w-full top-0 z-10 text-white flex flex-col items-center gap-6 py-7 md:flex-row md:justify-between md:py-5 md:px-8 border-b border-white/[.3]'>
            <nav className='flex items-center gap-5 font-bold'>
                <div className="text-2xl">Anggi<span className='text-blue-700'>Code</span></div>
                <ul className='flex items-center gap-4 text-blue-700'>
                    <li>
                        <a href='#'>Projects</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">T.I.L</a>
                    </li>
                    <li>
                        <button className='font-normal lg:hidden flex items-center rounded-full bg-blue-700/[.3] px-3 py-1' onClick={() => {
                            setKlik(!klik)
                        }} type="button">
                            <span>Work</span>
                            <RxTriangleDown size={20} />
                        </button>
                        <div className={`absolute ${klik || 'hidden'} bg-blue-700/[.3] rounded-2xl p-4 top-16`}>
                            <ul className='font-normal'>
                                <li>
                                    Skills & Tools
                                </li>
                                <li>
                                    Experience
                                </li>
                                <li>
                                    Studio
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>

                        </div>
                    </li>
                    <li className='cursor-default text-purple-600 hidden lg:flex lg:items-center lg:gap-5'>
                        <div className='font-normal -ml-4 flex items-center rounded-full bg-blue-700/[.3] px-3 py-1'>
                            <span>Work</span>
                            <RxTriangleRight size={20} />
                        </div>
                        <ul className='flex gap-3 font-normal'>
                            <li>
                                Skills & Tools
                            </li>
                            <li>
                                Experience
                            </li>
                            <li>
                                Studio
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <ul className='flex gap-3'>
                <li>
                    <AiFillInstagram size={30}/>
                </li>
                <li>
                    <AiFillGithub size={30}/>
                </li>
                <li>
                    <AiFillFacebook size={30}/>
                </li>
                <li>
                    <FaWhatsappSquare size={30}/>
                </li>
            </ul>
        </header>
    )
}

export default Header